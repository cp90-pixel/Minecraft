# Voxel Craft

A lightweight browser Minecraft-style sandbox built with Three.js. Fly around, mine blocks, and place new ones directly in your browser.

## Getting started

1. Serve the repository with any static file server. For example, with Node.js installed:

   ```bash
   npx serve .
   ```

2. Open `http://localhost:3000` (or the URL provided by your server) in a modern desktop browser that supports WebGL.

3. Click anywhere on the screen to capture your cursor and begin exploring.

## Controls

- **W / A / S / D** – Fly forward, left, backward, and right.
- **Space / Shift** – Move up and down (creative-style flight).
- **Left click** – Mine the block you are looking at.
- **Right click** – Place the selected block on the highlighted face.
- **1–5** – Change the selected block type.
- **Esc** – Release the mouse cursor.

## Features

- Procedurally generated island terrain with stone, dirt, and grass layers.
- Scatter-generated trees with wooden trunks and leafy canopies.
- Block placement/removal via precise ray casting and a central crosshair.
- Smooth pointer-lock flying controls with adjustable block palette.

Enjoy experimenting with your own voxel creations!
