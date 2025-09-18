
Overview
This repository contains a single file, main.js, which holds a ProcessingJS recreation of Minecraft designed to run on Khan Academy’s computer programming platform. There is no build pipeline or package manager involved; the program is intended to be copied directly into a new PJS sketch on Khan Academy. The code makes heavy use of arrays, sprite drawing and event handlers to implement blocks, items, mobs and user controls.
If you plan to extend or fix this project, please take a moment to read the guidelines below. They capture a mix of project‑specific conventions and platform rules so that your changes remain compatible with Khan Academy’s sandbox.
Running the program
Create a new ProcessingJS program on Khan Academy.
Copy the contents of main.js into the editor. Do not split the file into multiple tabs; the PJS environment expects a single script.
Run the sketch. You should see a title screen followed by a Minecraft‑like world. Use the mouse and keyboard controls documented in‑code to play.
Because this project targets Khan Academy specifically, there are no local build or install steps. To test locally, you can embed the script in an <iframe> that hosts the Khan Academy PJS context, but most contributors simply test changes directly on the site.
Code style and structure
Global variables. The original author uses many top‑level variables for game state (blocks, items, trees, lavaCol, etc.). When adding new state, prefer descriptive variable names in camelCase and group related values into arrays or objects to mirror the existing patterns.
Functions. Helper functions such as button, drawFlame and drawInventory are declared as var myFunction = function(...) { ... };. Continue using this form to avoid hoisting surprises, and keep functions short and focused.
Arrays for blocks and items. New blocks and items should be added to the existing arrays (solidBlocks, opaqueBlocks, allBlocks) rather than inventing parallel structures. Make sure to update blocks and items counters accordingly.
Indentation and formatting. Use four‑space indentation and avoid trailing whitespace. Semicolons are optional in ProcessingJS but present throughout the existing code; be consistent within a given function.
Comments. Comments at the top of main.js document high‑level behaviour. When adding features, include concise comments explaining the purpose of new variables or functions. Comments should help human readers; avoid over‑documenting obvious code.
Khan Academy restrictions
Khan Academy maintains a Disallowed Functionality list to protect learner privacy and platform performance. Programmes that violate these rules can be hidden or removed. In summary:
External access. Accessing window, document or any this.externals property is disallowed. The PJS sandbox disables many browser APIs, and attempting to sidestep these limits is against the rules. Khan Academy explicitly notes that this.externals is blocked for security and performance reasons.
Local storage. Webpages on Khan Academy should not attempt to get or set localStorage; doing so can cause programmes to exceed their quota and may result in removal.
Sound. Use only the playSound/getSound functions and the sounds provided in the sound picker. Sounds must be triggered by user actions (e.g. inside mousePressed or keyPressed) and should never play automatically on load.
Links. Do not open external links or navigate the page from code. If you need to share a URL, print it to the console with println rather than invoking window.open.
Bookmarklets and scripts. Do not ask users to save bookmarklets or run arbitrary scripts. If your feature needs capabilities beyond the PJS sandbox, consider porting it to the HTML/Webpage environment instead.
When in doubt, assume that any use of window.something, DOM APIs or hacky code that manipulates the host page is not allowed. Stick to the functions documented in the Khan Academy PJS reference and test thoroughly before publishing.
Adding new features
Feel free to add mobs, blocks or gameplay mechanics, but try to keep the performance and memory footprint reasonable. A few suggestions:
New blocks/items. Expand the allBlocks array by adding your block IDs in the appropriate row. Update solidBlocks and opaqueBlocks if the new block should be solid or opaque. Increase the blocks or items counters accordingly.
World generation. Trees, lava columns and obsidian pillars are generated via two‑dimensional arrays at the top of the file. To add more environmental variation, adjust these arrays or write a helper that randomises their placement.
User interface. Buttons and menus are drawn with helper functions like button and drawCloseButton. When adding new screens, reuse these helpers for consistent UI and make sure to reset mousePressed appropriately.
Sound effects. If you add sound, select a clip from the built‑in sound picker and call playSound only in response to user input, such as a mining or crafting action. Avoid looping sounds or playing them on load.
While adding content, keep in mind that the code is a single script. Overly complex additions may impact frame rate on slower devices. Test your changes on an actual Khan Academy sketch to ensure smooth gameplay.
Testing and publishing
There are no automated tests for this repository. To validate changes:
Copy your modified main.js into a Khan Academy PJS programme.
Run the programme and interact with the game for several minutes. Ensure that blocks can be mined, placed and inventory interactions work as expected.
Verify that no errors are printed to the console and that there are no calls to disallowed APIs such as localStorage or window.
Confirm that any sounds you added are triggered only by user input and do not loop endlessly
If you are submitting a pull request to this repository, include a summary of the changes and note any new controls or interactions. Keep commit messages clear and actionable (e.g. “Add stone pickaxe tool, updated allBlocks array”).
Forward‑looking notes
Khan Academy may update its programme guidelines over time. Stay informed about changes—especially those related to local storage, sound and external access—to avoid accidental violations. Should the PJS sandbox gain new capabilities (such as official support for local data storage), it may be worth refactoring parts of main.js to use them. Until then, keep the script self‑contained and free of side effects.
Thanks for making Minecraft on Khan Academy more fun! Your contributions help others learn through play. And remember: if something feels like a hack, it probably isn’t allowed.

Overview
This repository contains a single file, main.js, which holds a ProcessingJS recreation of Minecraft designed to run on Khan Academy’s computer programming platform. There is no build pipeline or package manager involved; the program is intended to be copied directly into a new PJS sketch on Khan Academy. The code makes heavy use of arrays, sprite drawing and event handlers to implement blocks, items, mobs and user controls.
If you plan to extend or fix this project, please take a moment to read the guidelines below. They capture a mix of project‑specific conventions and platform rules so that your changes remain compatible with Khan Academy’s sandbox.
Running the program
Create a new ProcessingJS program on Khan Academy.
Copy the contents of main.js into the editor. Do not split the file into multiple tabs; the PJS environment expects a single script.
Run the sketch. You should see a title screen followed by a Minecraft‑like world. Use the mouse and keyboard controls documented in‑code to play.
Because this project targets Khan Academy specifically, there are no local build or install steps. To test locally, you can embed the script in an <iframe> that hosts the Khan Academy PJS context, but most contributors simply test changes directly on the site.
Code style and structure
Global variables. The original author uses many top‑level variables for game state (blocks, items, trees, lavaCol, etc.). When adding new state, prefer descriptive variable names in camelCase and group related values into arrays or objects to mirror the existing patterns.
Functions. Helper functions such as button, drawFlame and drawInventory are declared as var myFunction = function(...) { ... };. Continue using this form to avoid hoisting surprises, and keep functions short and focused.
Arrays for blocks and items. New blocks and items should be added to the existing arrays (solidBlocks, opaqueBlocks, allBlocks) rather than inventing parallel structures. Make sure to update blocks and items counters accordingly.
Indentation and formatting. Use four‑space indentation and avoid trailing whitespace. Semicolons are optional in ProcessingJS but present throughout the existing code; be consistent within a given function.
Comments. Comments at the top of main.js document high‑level behaviour. When adding features, include concise comments explaining the purpose of new variables or functions. Comments should help human readers; avoid over‑documenting obvious code.
Khan Academy restrictions
Khan Academy maintains a Disallowed Functionality list to protect learner privacy and platform performance. Programmes that violate these rules can be hidden or removed. In summary:
External access. Accessing window, document or any this.externals property is disallowed. The PJS sandbox disables many browser APIs, and attempting to sidestep these limits is against the rules. Khan Academy explicitly notes that this.externals is blocked for security and performance reasons.
Local storage. Webpages on Khan Academy should not attempt to get or set localStorage; doing so can cause programmes to exceed their quota and may result in removal.
Sound. Use only the playSound/getSound functions and the sounds provided in the sound picker. Sounds must be triggered by user actions (e.g. inside mousePressed or keyPressed) and should never play automatically on load.
Links. Do not open external links or navigate the page from code. If you need to share a URL, print it to the console with println rather than invoking window.open.
Bookmarklets and scripts. Do not ask users to save bookmarklets or run arbitrary scripts. If your feature needs capabilities beyond the PJS sandbox, consider porting it to the HTML/Webpage environment instead.
When in doubt, assume that any use of window.something, DOM APIs or hacky code that manipulates the host page is not allowed. Stick to the functions documented in the Khan Academy PJS reference and test thoroughly before publishing.
Adding new features
Feel free to add mobs, blocks or gameplay mechanics, but try to keep the performance and memory footprint reasonable. A few suggestions:
New blocks/items. Expand the allBlocks array by adding your block IDs in the appropriate row. Update solidBlocks and opaqueBlocks if the new block should be solid or opaque. Increase the blocks or items counters accordingly.
World generation. Trees, lava columns and obsidian pillars are generated via two‑dimensional arrays at the top of the file. To add more environmental variation, adjust these arrays or write a helper that randomises their placement.
User interface. Buttons and menus are drawn with helper functions like button and drawCloseButton. When adding new screens, reuse these helpers for consistent UI and make sure to reset mousePressed appropriately.
Sound effects. If you add sound, select a clip from the built‑in sound picker and call playSound only in response to user input, such as a mining or crafting action. Avoid looping sounds or playing them on load.
While adding content, keep in mind that the code is a single script. Overly complex additions may impact frame rate on slower devices. Test your changes on an actual Khan Academy sketch to ensure smooth gameplay.
Testing and publishing
There are no automated tests for this repository. To validate changes:
Copy your modified main.js into a Khan Academy PJS programme.
Run the programme and interact with the game for several minutes. Ensure that blocks can be mined, placed and inventory interactions work as expected.
Verify that no errors are printed to the console and that there are no calls to disallowed APIs such as localStorage or window.
Confirm that any sounds you added are triggered only by user input and do not loop endlessly
If you are submitting a pull request to this repository, include a summary of the changes and note any new controls or interactions. Keep commit messages clear and actionable (e.g. “Add stone pickaxe tool, updated allBlocks array”).
Forward‑looking notes
Khan Academy may update its programme guidelines over time. Stay informed about changes—especially those related to local storage, sound and external access—to avoid accidental violations. Should the PJS sandbox gain new capabilities (such as official support for local data storage), it may be worth refactoring parts of main.js to use them. Until then, keep the script self‑contained and free of side effects.
Thanks for making Minecraft on Khan Academy more fun! Your contributions help others learn through play. And remember: if something feels like a hack, it probably isn’t allowed.
