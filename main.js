import * as THREE from 'https://unpkg.com/three@0.163.0/build/three.module.js';
import { PointerLockControls } from 'https://unpkg.com/three@0.163.0/examples/jsm/controls/PointerLockControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87c2ed);
scene.fog = new THREE.Fog(0x87c2ed, 60, 220);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
camera.position.set(0, 18, 32);

const controls = new PointerLockControls(camera, document.body);
const overlay = document.getElementById('instructions');
const blockIndicator = document.getElementById('block-indicator');
const crosshair = document.getElementById('crosshair');

overlay.addEventListener('click', () => controls.lock());
controls.addEventListener('lock', () => {
  overlay.classList.add('hidden');
  document.body.classList.add('playing');
  crosshair.style.opacity = '';
});
controls.addEventListener('unlock', () => {
  overlay.classList.remove('hidden');
  document.body.classList.remove('playing');
});

document.addEventListener('contextmenu', (event) => event.preventDefault());

const ambient = new THREE.HemisphereLight(0xddeeff, 0x445566, 0.85);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffffff, 0.85);
sun.position.set(40, 80, 20);
sun.castShadow = true;
sun.shadow.mapSize.width = 1024;
sun.shadow.mapSize.height = 1024;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 180;
sun.shadow.camera.left = -80;
sun.shadow.camera.right = 80;
sun.shadow.camera.top = 80;
sun.shadow.camera.bottom = -80;
scene.add(sun);

const BLOCK_TYPES = [
  {
    id: 'grass',
    label: 'Grass',
    colors: { top: 0x71c65c, side: 0x64ad50, bottom: 0x6b8a3c },
  },
  {
    id: 'dirt',
    label: 'Dirt',
    colors: { top: 0x8f5a3c, side: 0x8f5a3c, bottom: 0x8f5a3c },
  },
  {
    id: 'stone',
    label: 'Stone',
    colors: { top: 0x9099a2, side: 0x8d939b, bottom: 0x808891 },
  },
  {
    id: 'wood',
    label: 'Wood',
    colors: { top: 0xc8a96a, side: 0xab8450, bottom: 0x4f3219 },
  },
  {
    id: 'leaves',
    label: 'Leaves',
    colors: { top: 0x3e8f3a, side: 0x3e8f3a, bottom: 0x336d30 },
    transparent: true,
  },
];

const blockMaterialCache = new Map();
const blockGeometry = new THREE.BoxGeometry(1, 1, 1);

function createBlockMaterials(blockType) {
  const { colors, transparent } = blockType;
  const materials = [];
  const transparency = transparent ? { transparent: true, opacity: 0.9 } : {};

  const faces = [
    colors.side,
    colors.side,
    colors.top,
    colors.bottom,
    colors.side,
    colors.side,
  ];

  for (const color of faces) {
    materials.push(
      new THREE.MeshStandardMaterial({
        color,
        roughness: 0.9,
        metalness: 0.0,
        ...transparency,
      })
    );
  }

  return materials;
}

function materialFor(id) {
  if (!blockMaterialCache.has(id)) {
    const type = BLOCK_TYPES.find((entry) => entry.id === id);
    blockMaterialCache.set(id, createBlockMaterials(type));
  }
  return blockMaterialCache.get(id);
}

const blocks = new Map();
const selectableMeshes = new Set();

const vectorKey = (vec) => `${vec.x}|${vec.y}|${vec.z}`;

function placeBlock(vec, typeId) {
  const key = vectorKey(vec);
  if (blocks.has(key)) return null;

  const mesh = new THREE.Mesh(blockGeometry, materialFor(typeId));
  mesh.position.copy(vec);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData.gridPosition = vec.clone();
  mesh.userData.type = typeId;

  scene.add(mesh);
  blocks.set(key, mesh);
  selectableMeshes.add(mesh);
  return mesh;
}

function removeBlock(vec) {
  const key = vectorKey(vec);
  const mesh = blocks.get(key);
  if (!mesh) return;
  scene.remove(mesh);
  selectableMeshes.delete(mesh);
  blocks.delete(key);
}

function pseudoRandom(x, z) {
  const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
  return s - Math.floor(s);
}

const topHeights = new Map();

function setTopHeight(x, z, y) {
  topHeights.set(`${x},${z}`, y);
}

function getTopHeight(x, z) {
  return topHeights.get(`${x},${z}`) ?? 0;
}

function generateTerrain() {
  const radius = 24;
  for (let x = -radius; x <= radius; x++) {
    for (let z = -radius; z <= radius; z++) {
      const distance = Math.sqrt(x * x + z * z);
      if (distance > radius + 3) continue;

      const heightOffset =
        Math.sin(x * 0.22) * 1.5 +
        Math.cos(z * 0.17) * 1.2 +
        Math.sin((x + z) * 0.12) * 0.7;

      const baseHeight = Math.max(Math.round(heightOffset), -2);
      const topY = baseHeight + 2;

      for (let y = -4; y <= topY; y++) {
        let type = 'stone';
        if (y >= topY - 2) {
          type = y === topY ? 'grass' : 'dirt';
        } else if (y > -2) {
          type = 'dirt';
        }
        placeBlock(new THREE.Vector3(x, y, z), type);
      }
      setTopHeight(x, z, topY);
    }
  }

  for (let x = -radius + 2; x <= radius - 2; x++) {
    for (let z = -radius + 2; z <= radius - 2; z++) {
      const randomValue = pseudoRandom(x, z);
      if (randomValue > 0.965) {
        const baseY = getTopHeight(x, z);
        createTree(x, baseY + 1, z, randomValue);
      }
    }
  }
}

function createTree(x, baseY, z, seed) {
  const height = 4 + Math.floor(seed * 3);
  for (let i = 0; i < height; i++) {
    placeBlock(new THREE.Vector3(x, baseY + i, z), 'wood');
  }

  const canopyHeight = 2 + Math.floor(seed * 2);
  const radius = 2;
  for (let dy = -1; dy <= canopyHeight; dy++) {
    const currentRadius = dy === canopyHeight ? 1 : radius;
    for (let dx = -currentRadius; dx <= currentRadius; dx++) {
      for (let dz = -currentRadius; dz <= currentRadius; dz++) {
        if (Math.abs(dx) + Math.abs(dz) > radius + 1) continue;
        const distance = Math.sqrt(dx * dx + dz * dz);
        if (distance > currentRadius + 0.2) continue;

        if (dx === 0 && dz === 0 && dy < canopyHeight - 1) continue;

        const pos = new THREE.Vector3(x + dx, baseY + height + dy, z + dz);
        if (!blocks.has(vectorKey(pos))) {
          placeBlock(pos, 'leaves');
        }
      }
    }
  }
}

generateTerrain();

let selectedBlockIndex = 0;

function updateBlockIndicator() {
  blockIndicator.textContent = `Selected: ${BLOCK_TYPES[selectedBlockIndex].label}`;
}

updateBlockIndicator();

window.addEventListener('keydown', (event) => {
  if (event.code.startsWith('Digit')) {
    const index = Number(event.code.replace('Digit', '')) - 1;
    if (index >= 0 && index < BLOCK_TYPES.length) {
      selectedBlockIndex = index;
      updateBlockIndicator();
    }
    return;
  }

  if (!controls.isLocked) return;

  switch (event.code) {
    case 'KeyW':
      movement.forward = true;
      break;
    case 'KeyS':
      movement.backward = true;
      break;
    case 'KeyA':
      movement.left = true;
      break;
    case 'KeyD':
      movement.right = true;
      break;
    case 'Space':
      movement.up = true;
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      movement.down = true;
      break;
    default:
      break;
  }
});

window.addEventListener('keyup', (event) => {
  switch (event.code) {
    case 'KeyW':
      movement.forward = false;
      break;
    case 'KeyS':
      movement.backward = false;
      break;
    case 'KeyA':
      movement.left = false;
      break;
    case 'KeyD':
      movement.right = false;
      break;
    case 'Space':
      movement.up = false;
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      movement.down = false;
      break;
    default:
      break;
  }
});

const movement = {
  forward: false,
  backward: false,
  left: false,
  right: false,
  up: false,
  down: false,
};

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function interact(event) {
  if (!controls.isLocked) return;

  raycaster.setFromCamera(pointer, camera);
  const candidates = Array.from(selectableMeshes);
  const intersections = raycaster.intersectObjects(candidates, false);
  if (intersections.length === 0) return;

  const target = intersections[0];
  const blockPosition = target.object.userData.gridPosition;

  if (event.button === 0) {
    removeBlock(blockPosition);
  } else if (event.button === 2) {
    const normal = target.face?.normal ?? new THREE.Vector3(0, 1, 0);
    const offset = new THREE.Vector3(Math.round(normal.x), Math.round(normal.y), Math.round(normal.z));
    const newPosition = blockPosition.clone().add(offset);
    placeBlock(newPosition, BLOCK_TYPES[selectedBlockIndex].id);
  }
}

document.addEventListener('mousedown', interact);

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  if (controls.isLocked) {
    const speed = 15;
    if (movement.forward) controls.moveForward(speed * delta);
    if (movement.backward) controls.moveForward(-speed * delta);
    if (movement.left) controls.moveRight(-speed * delta);
    if (movement.right) controls.moveRight(speed * delta);

    const vertical = (movement.up ? 1 : 0) - (movement.down ? 1 : 0);
    if (vertical !== 0) {
      controls.getObject().position.y += vertical * speed * delta;
    }
  }

  renderer.render(scene, camera);
}

animate();

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);
