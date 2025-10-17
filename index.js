/*
 * A compact top-down survival sandbox inspired by Minecraft.
 *
 * The original project contained thousands of loosely organised global
 * variables and imperative logic that was extremely difficult to follow or
 * extend.  This re-write focuses on readability and approachability while
 * still providing a playful experience:
 *   - Procedurally generated world made of block types.
 *   - A player that can move, gather resources, craft tools and place blocks.
 *   - Basic day/night cycle with lighting changes.
 *   - Simple hunger system that pushes the player to forage.
 *
 * The code targets the p5.js runtime (also compatible with the ProcessingJS
 * environment used by Khan Academy projects).  The engine entry points are the
 * standard `setup`, `draw`, `keyPressed` and `mousePressed` callbacks.
 */

const WORLD_WIDTH = 24;
const WORLD_HEIGHT = 18;
const TILE_SIZE = 24;

const DAY_LENGTH = 45 * 60; // frames (assuming 60 FPS)
const HUNGER_TICK = 9 * 60;

const INVENTORY_SLOTS = 6;

const KEY_BINDINGS = {
  UP: [87, 38], // W, ArrowUp
  DOWN: [83, 40],
  LEFT: [65, 37],
  RIGHT: [68, 39],
  ACTION: [69], // E toggles crafting menu
};

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const BlockId = Object.freeze({
  AIR: 0,
  GRASS: 1,
  DIRT: 2,
  STONE: 3,
  TREE: 4,
  WOOD: 5,
  ORE: 6,
  WATER: 7,
});

const BLOCKS = {
  [BlockId.AIR]: {
    id: BlockId.AIR,
    name: "Air",
    color: [0, 0, 0, 0],
    solid: false,
    drops: () => null,
  },
  [BlockId.GRASS]: {
    id: BlockId.GRASS,
    name: "Grass",
    color: [104, 170, 67],
    solid: false,
    drops: () => ({ id: BlockId.DIRT, name: "Dirt" }),
  },
  [BlockId.DIRT]: {
    id: BlockId.DIRT,
    name: "Dirt",
    color: [128, 98, 60],
    solid: false,
    drops: () => ({ id: BlockId.DIRT, name: "Dirt" }),
  },
  [BlockId.STONE]: {
    id: BlockId.STONE,
    name: "Stone",
    color: [110, 110, 110],
    solid: true,
    drops: () => ({ id: BlockId.STONE, name: "Stone" }),
  },
  [BlockId.TREE]: {
    id: BlockId.TREE,
    name: "Tree",
    color: [60, 120, 45],
    solid: true,
    drops: () => ({ id: BlockId.WOOD, name: "Wood" }),
  },
  [BlockId.WOOD]: {
    id: BlockId.WOOD,
    name: "Wood",
    color: [166, 126, 86],
    solid: true,
    drops: () => ({ id: BlockId.WOOD, name: "Wood" }),
  },
  [BlockId.ORE]: {
    id: BlockId.ORE,
    name: "Ore",
    color: [180, 170, 200],
    solid: true,
    drops: () => ({ id: BlockId.ORE, name: "Ore" }),
  },
  [BlockId.WATER]: {
    id: BlockId.WATER,
    name: "Water",
    color: [80, 140, 220, 200],
    solid: false,
    drops: () => null,
  },
};

const RESOURCES = {
  wood: { name: "Wood", color: [166, 126, 86] },
  stone: { name: "Stone", color: [110, 110, 110] },
  ore: { name: "Ore", color: [180, 170, 200] },
  food: { name: "Berries", color: [190, 56, 56] },
};

const RECIPES = [
  {
    name: "Craft Planks",
    input: { wood: 1 },
    output: { wood: 2 },
    description: "Turn logs into planks (counts as building material).",
  },
  {
    name: "Stone Pickaxe",
    input: { wood: 1, stone: 2 },
    output: { ore: 1 },
    description: "Unlock ore gathering.",
  },
];

class Inventory {
  constructor() {
    this.slots = Array.from({ length: INVENTORY_SLOTS }, () => ({
      item: null,
      amount: 0,
    }));
    this.selectedIndex = 0;
    this.resources = {
      wood: 0,
      stone: 0,
      ore: 0,
      food: 1,
    };
  }

  addResource(type, amount = 1) {
    if (!this.resources[type]) {
      this.resources[type] = 0;
    }
    this.resources[type] += amount;
  }

  consumeResource(type, amount) {
    if ((this.resources[type] ?? 0) < amount) {
      return false;
    }
    this.resources[type] -= amount;
    return true;
  }

  toggleSelection(direction) {
    const max = this.slots.length;
    this.selectedIndex = (this.selectedIndex + direction + max) % max;
  }

  setBlock(block) {
    const slot = this.slots[this.selectedIndex];
    slot.item = block;
    slot.amount = 1;
  }

  getSelectedBlock() {
    return this.slots[this.selectedIndex].item;
  }
}

class World {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = Array.from({ length: height }, () =>
      Array.from({ length: width }, () => BlockId.AIR)
    );
    this.generate();
  }

  generate() {
    for (let y = 0; y < this.height; y += 1) {
      for (let x = 0; x < this.width; x += 1) {
        const noise = Math.random();
        let tile = BlockId.DIRT;
        if (y === this.height - 1) {
          tile = BlockId.WATER;
        } else if (y > this.height - rand(4, 6)) {
          tile = BlockId.DIRT;
        } else if (noise > 0.92) {
          tile = BlockId.TREE;
        } else if (noise > 0.85) {
          tile = BlockId.GRASS;
        } else if (noise > 0.8) {
          tile = BlockId.STONE;
        } else if (noise > 0.77) {
          tile = BlockId.ORE;
        } else {
          tile = BlockId.GRASS;
        }
        this.tiles[y][x] = tile;
      }
    }
  }

  inBounds(x, y) {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  get(x, y) {
    if (!this.inBounds(x, y)) {
      return BlockId.AIR;
    }
    return this.tiles[y][x];
  }

  set(x, y, blockId) {
    if (this.inBounds(x, y)) {
      this.tiles[y][x] = blockId;
    }
  }
}

class Player {
  constructor(world) {
    this.world = world;
    this.x = Math.floor(world.width / 2);
    this.y = Math.floor(world.height / 2);
    this.hunger = 100;
    this.health = 100;
    this.inventory = new Inventory();
    this.canMineOre = false;
    this.lastHungerTick = 0;
  }

  move(dx, dy) {
    const nx = this.x + dx;
    const ny = this.y + dy;
    if (!this.world.inBounds(nx, ny)) {
      return;
    }
    const block = BLOCKS[this.world.get(nx, ny)];
    if (!block.solid) {
      this.x = nx;
      this.y = ny;
    }
  }

  mine(x, y) {
    const blockId = this.world.get(x, y);
    if (blockId === BlockId.AIR) {
      return;
    }
    if (blockId === BlockId.ORE && !this.canMineOre) {
      return;
    }
    const drop = BLOCKS[blockId].drops();
    this.world.set(x, y, BlockId.AIR);
    if (!drop) {
      return;
    }
    if (drop.id === BlockId.WOOD) {
      this.inventory.addResource("wood");
    } else if (drop.id === BlockId.STONE) {
      this.inventory.addResource("stone");
    } else if (drop.id === BlockId.ORE) {
      this.inventory.addResource("ore");
    } else {
      this.inventory.setBlock(drop.id);
    }
    if (Math.random() > 0.7) {
      this.inventory.addResource("food");
    }
  }

  place(x, y) {
    if (!this.world.inBounds(x, y) || this.world.get(x, y) !== BlockId.AIR) {
      return;
    }
    const block = this.inventory.getSelectedBlock();
    if (!block) {
      return;
    }
    this.world.set(x, y, block);
  }

  eat() {
    if (this.inventory.consumeResource("food", 1)) {
      this.hunger = Math.min(100, this.hunger + 20);
      this.health = Math.min(100, this.health + 10);
    }
  }

  update(frameCount) {
    if (frameCount - this.lastHungerTick >= HUNGER_TICK) {
      this.lastHungerTick = frameCount;
      this.hunger = Math.max(0, this.hunger - 5);
      if (this.hunger === 0) {
        this.health = Math.max(0, this.health - 10);
      }
    }
  }
}

class Game {
  constructor() {
    this.world = new World(WORLD_WIDTH, WORLD_HEIGHT);
    this.player = new Player(this.world);
    this.frameCount = 0;
    this.craftingOpen = false;
  }

  update() {
    this.frameCount += 1;
    this.player.update(this.frameCount);
  }

  handleMovement(keyCode) {
    const contains = (codes) => codes.includes(keyCode);
    if (contains(KEY_BINDINGS.UP)) {
      this.player.move(0, -1);
    } else if (contains(KEY_BINDINGS.DOWN)) {
      this.player.move(0, 1);
    } else if (contains(KEY_BINDINGS.LEFT)) {
      this.player.move(-1, 0);
    } else if (contains(KEY_BINDINGS.RIGHT)) {
      this.player.move(1, 0);
    }
  }

  toggleCrafting() {
    this.craftingOpen = !this.craftingOpen;
  }

  tryCraft(recipe) {
    const canCraft = Object.entries(recipe.input).every(([key, cost]) =>
      (this.player.inventory.resources[key] ?? 0) >= cost
    );
    if (!canCraft) {
      return;
    }
    Object.entries(recipe.input).forEach(([key, cost]) =>
      this.player.inventory.consumeResource(key, cost)
    );
    Object.entries(recipe.output).forEach(([key, amount]) =>
      this.player.inventory.addResource(key, amount)
    );
    if (recipe.name === "Stone Pickaxe") {
      this.player.canMineOre = true;
    }
  }

  highlightTile(x, y) {
    noFill();
    stroke(255, 255, 255, 150);
    rect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    stroke(0);
  }

  drawWorld() {
    const cycle = (Math.sin((this.frameCount / DAY_LENGTH) * Math.PI * 2) + 1) / 2;
    const ambient = lerpColor(color(30, 30, 40), color(255, 255, 255), cycle);
    background(ambient);

    noStroke();
    for (let y = 0; y < this.world.height; y += 1) {
      for (let x = 0; x < this.world.width; x += 1) {
        const block = BLOCKS[this.world.get(x, y)];
        const blockColor = block.color.length === 4
          ? color(...block.color)
          : color(...block.color, 255);
        fill(blockColor);
        rect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
    }
  }

  drawPlayer() {
    fill(66, 135, 245);
    rect(
      this.player.x * TILE_SIZE,
      this.player.y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }

  drawHud() {
    fill(0, 0, 0, 150);
    rect(0, WORLD_HEIGHT * TILE_SIZE, width, 80);
    fill(255);
    textSize(14);
    textAlign(LEFT, TOP);
    text(`Health: ${this.player.health}`, 10, WORLD_HEIGHT * TILE_SIZE + 8);
    text(`Hunger: ${this.player.hunger}`, 10, WORLD_HEIGHT * TILE_SIZE + 28);

    text("Resources:", 160, WORLD_HEIGHT * TILE_SIZE + 8);
    let offset = 0;
    Object.entries(this.player.inventory.resources).forEach(([key, amount]) => {
      const resource = RESOURCES[key];
      fill(...resource.color);
      rect(160 + offset, WORLD_HEIGHT * TILE_SIZE + 30, 14, 14);
      fill(255);
      text(`${resource.name}: ${amount}`, 180 + offset, WORLD_HEIGHT * TILE_SIZE + 28);
      offset += 120;
    });

    textAlign(CENTER, CENTER);
    text("Scroll wheel to cycle blocks. E to craft. Click to mine/Place.", width / 2, height - 16);
    textAlign(LEFT, TOP);
  }

  drawInventory() {
    const baseX = 12;
    const baseY = WORLD_HEIGHT * TILE_SIZE - 32;
    textSize(12);
    for (let i = 0; i < this.player.inventory.slots.length; i += 1) {
      const slot = this.player.inventory.slots[i];
      const x = baseX + i * 60;
      const y = baseY;
      stroke(255);
      fill(0, 0, 0, i === this.player.inventory.selectedIndex ? 150 : 80);
      rect(x, y, 52, 52, 6);
      if (slot.item != null) {
        const block = BLOCKS[slot.item];
        fill(...block.color);
        rect(x + 8, y + 8, 36, 36, 4);
      }
    }
    stroke(0);
  }

  drawCrafting() {
    if (!this.craftingOpen) {
      return;
    }
    const panelWidth = 260;
    const panelHeight = 160;
    const px = width / 2 - panelWidth / 2;
    const py = height / 2 - panelHeight / 2;
    fill(0, 0, 0, 200);
    rect(px, py, panelWidth, panelHeight, 8);
    fill(255);
    textAlign(CENTER, TOP);
    textSize(16);
    text("Crafting", width / 2, py + 10);
    textAlign(LEFT, TOP);
    textSize(12);

    RECIPES.forEach((recipe, index) => {
      const ry = py + 40 + index * 60;
      fill(255);
      text(recipe.name, px + 12, ry);
      text(recipe.description, px + 12, ry + 16);
      const canCraft = Object.entries(recipe.input).every(([key, cost]) =>
        (this.player.inventory.resources[key] ?? 0) >= cost
      );
      fill(canCraft ? [90, 200, 120] : [140, 140, 140]);
      rect(px + panelWidth - 92, ry, 80, 28, 6);
      fill(0);
      textAlign(CENTER, CENTER);
      text("Craft", px + panelWidth - 52, ry + 14);
      textAlign(LEFT, TOP);
      recipe.buttonBounds = { x: px + panelWidth - 92, y: ry, w: 80, h: 28 };
    });
  }

  draw() {
    this.drawWorld();
    this.highlightTile(this.player.x, this.player.y);
    this.drawPlayer();
    this.drawHud();
    this.drawInventory();
    this.drawCrafting();
  }

  screenToTile(px, py) {
    return [Math.floor(px / TILE_SIZE), Math.floor(py / TILE_SIZE)];
  }

  handleMouse(x, y, button) {
    if (this.craftingOpen) {
      RECIPES.forEach((recipe) => {
        const bounds = recipe.buttonBounds;
        if (!bounds) {
          return;
        }
        if (
          x >= bounds.x &&
          x <= bounds.x + bounds.w &&
          y >= bounds.y &&
          y <= bounds.y + bounds.h
        ) {
          this.tryCraft(recipe);
        }
      });
      return;
    }

    const [tx, ty] = this.screenToTile(x, y);
    if (!this.world.inBounds(tx, ty)) {
      return;
    }
    if (button === LEFT) {
      this.player.mine(tx, ty);
    } else if (button === RIGHT) {
      this.player.place(tx, ty);
    }
  }
}

let game;

function setup() {
  createCanvas(WORLD_WIDTH * TILE_SIZE, WORLD_HEIGHT * TILE_SIZE + 90);
  noStroke();
  frameRate(60);
  textFont("monospace");
  game = new Game();
}

function draw() {
  game.update();
  game.draw();
}

function keyPressed() {
  if (KEY_BINDINGS.ACTION.includes(keyCode)) {
    game.toggleCrafting();
    return;
  }

  if (key === " ") {
    game.player.eat();
    return;
  }

  game.handleMovement(keyCode);
}

function mousePressed() {
  game.handleMouse(mouseX, mouseY, mouseButton);
}

function mouseWheel(event) {
  const direction = event.delta > 0 ? 1 : -1;
  game.player.inventory.toggleSelection(direction);
}

// Expose classes for testing or extensions when running in Node.
if (typeof module !== "undefined") {
  module.exports = {
    Game,
    Player,
    World,
    Inventory,
    BLOCKS,
    BlockId,
  };
}
