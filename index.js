var username = "Steve";



var blocks = 61;

var items = 355;
var isSleeping = false;

var sleepTimer = 0;
var dragonSpawned = false;
var sound = 0;
var hunger = 20;
var trees = [
    [0,1,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,1,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,1],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,1]];
var lavaCol = [
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1]];
var obsidianPillars = [
    [0,0,0,0,0,0,2,0,0,0],
    [0,0,0,0,0,0,0,2,0,0],
    [2,0,0,0,0,0,0,0,0,0],
    [0,0,0,2,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,0]];
var satration = 5;

var hungerTimer = 100;

var starveTimer = 10;


var isTrading = false;

var mobSelected = null;
var tradingSlots = [0,0,0,0,0,0];

var gamemode = 0;

var madPigmen = false;

var pigmanTimer = 0;

var minJump = 0;

var optionsScreen = false;

var regenTix = 0;

var regenTix2 = 0;

var options = {

    clouds: true,

    fireAnimation: true,

    peaceful: false,

    

    _3D: true

};

var DO_NOT_TOUCH = false;

var functions = [];

var mPressed;

var hotbarTagTimer = 0;
var spawnpoint = [-80,-340];
var lastItemSelected = null;

var button = function(x, y, l, w, f, t, txt){

    if(mouseX>x&&mouseX<x+l&&mouseY>y&&mouseY<y+w&&t){

        if(mPressed){

            functions[f]=true;

            fill(117, 117, 117);

            mPressed=false;

        }else{

            functions[f]=false;

            fill(216, 216, 240);

        }

    }else{

        functions[f]=false;

        fill(t?200:117);

    }

    rect(x, y, l, w);

    textAlign(CENTER, CENTER);

    fill(0);

    text(txt, x+l/2, y+w/2);

    textAlign(LEFT, TOP);

};





items++;blocks++;



var solidBlocks = [false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,true,false,false,false,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,false,false,false,true,false,true,true,false,false,true,true,true,true,true,true,false,false,true,true,true,false,true];

var opaqueBlocks = [true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false,true,true,true,true,false,false,true,false,true,false,false,false,true,true,true,false,true,false,false,true,true,false,false,false,false,false,false,true,true,false,false,false,false,false];

solidBlocks[undefined]=true;
opaqueBlocks[undefined]=true;
var death;

var deathmessageShown=false;

var damageTimer = 0;

var allBlocks = [

    [1,2,3,4],

    [5,6,7,8],

    [9,11,13,15],

    [16,17,19,20],

    [21,22,23,24],

    [25,26,27,28],

    [30,31,32,33],

    [34,35,37,38],

    [39,40,41,42],

    [43,44,45,47],

    [48,49,50,51],

    [52,53,54,55],
    [57,58,59,61],

    [300,301,302,303],

    [304,305,306,307],

    [308,309,310,311],

    [312,313,314,315],

    [316,317,318,319],

    [320,321,322,323],

    [324,325,326,327],

    [328,329,330,331],

    [332,333,334,335],

    [336,337,338,339],

    [340,341,342,343],

    [344,345,346,347],

    [348,349,350,351],
    [352,353,354,355]];

var invScroll = 0;

var maxStacks = [];

for(var i = 0; i < items; i++){

    switch(i){

        case 11:

            maxStacks[i]=1;

            break;

        case 13:

            maxStacks[i]=1;

            break;

        case 17:

            maxStacks[i]=1;

            break;

        case 307:

            maxStacks[i]=1;

            break;

        case 308:

            maxStacks[i]=1;

            break;

        case 309:

            maxStacks[i]=1;

            break;

        case 310:

            maxStacks[i]=1;

            break;

        case 311:

            maxStacks[i]=1;

            break;

        case 312:

            maxStacks[i]=1;

            break;

        case 313:

            maxStacks[i]=1;

            break;

        case 314:

            maxStacks[i]=1;

            break;

        case 315:

            maxStacks[i]=1;

            break;

        case 316:

            maxStacks[i]=1;

            break;

        case 320:

            maxStacks[i]=1;

            break;

        case 321:

            maxStacks[i]=1;

            break;

        case 322:

            maxStacks[i]=1;

            break;

        case 323:

            maxStacks[i]=1;

            break;

        case 324:

            maxStacks[i]=1;

            break;

        case 325:

            maxStacks[i]=1;

            break;

        case 326:

            maxStacks[i]=1;

            break;

        case 327:

            maxStacks[i]=1;

            break;

        case 328:

            maxStacks[i]=1;

            break;

        case 329:

            maxStacks[i]=1;

            break;

        case 330:

            maxStacks[i]=1;

            break;

        case 331:

            maxStacks[i]=1;

            break;

        case 332:

            maxStacks[i]=1;

            break;

        case 333:

            maxStacks[i]=1;

            break;

        case 334:

            maxStacks[i]=1;

            break;

        case 335:

            maxStacks[i]=1;

            break;

        case 337:

            maxStacks[i]=16;

            break;

        case 338:

            maxStacks[i]=1;

            break;

        case 341:

            maxStacks[i]=1;

            break;

        case 342:

            maxStacks[i]=1;

            break;

        case 343:

            maxStacks[i]=1;

            break;

        case 344:

            maxStacks[i]=1;

            break;

        case 345:

            maxStacks[i]=1;

            break;
        case 351:
            maxStacks[i]=16;
            break;

        default:

            maxStacks[i]=64;

    }

}

var tileNames = [

    "",

    "Stone",

    "Grass",

    "Dirt",

    "Cobblestone",

    "Wooden Planks",

    "Bricks",

    "Wood",

    "Obsidian",

    "Leaves",

    "Bedrock",

    "Water bucket",

    "Hacked water",

    "Lava bucket",

    "Hacked lava",

    "TNT",

    "Sapling",

    "Flint and Steel",

    "Hacked Portal",

    "Netherrack",

    "Sand",

    "Gravel",

    "Coal ore",

    "Iron ore",

    "Gold ore",

    "Lapis lazuli ore",

    "Diamond ore",

    "Crafting table",

    "Wooden Door",

    "Hacked Door",

    "Ladder",

    "Cactus",

    "Ice",

    "Furnace",

    "Chest",

    "Moss stone",

    "Monster spawner",

    "Block of Iron",

    "Block of Gold",

    "Block of Diamond",

    "Torch",

    "Sugar cane",

    "Redstone",

    "Redstone Ore",

    "Redstone Torch",

    "Command block",

    "Hacked Farmland",

    "Tall Grass",

    "Seeds",

    "Emerald Ore",

    "Block of Emerald",

    "Block of Redstone",

    "Block of Coal",

    "Block of Lapis Lazuli",
    "Wool",
    "Bed",
    "Hacked Bed",
    "Nether Brick block",
    "End portal frame",
    "End stone",
    "Hacked End portal",
    "Stone Bricks"
];

var itemNames = [

    "Stick",

    "Coal",

    "Iron ingot",

    "Gold ingot",

    "Lapis lazuli",

    "Diamond",

    "Flint",

    "Wooden pickaxe",

    "Stone pickaxe",

    "Iron pickaxe",

    "Golden pickaxe",

    "Diamond pickaxe",

    "Wooden sword",

    "Stone sword",

    "Iron sword",

    "Golden sword",

    "Diamond sword",

    "Raw porkchop",

    "Gunpowder",

    "Cooked porkchop",

    "Iron helmet",

    "Iron chestplate",

    "Iron leggings",

    "Iron boots",

    "Golden helmet",

    "Golden chestplate",

    "Golden leggings",

    "Golden boots",

    "Diamond helmet",

    "Diamond chestplate",

    "Diamond leggings",

    "Diamond boots",

    "Leather cap",

    "Leather tunic",

    "Leather trousers",

    "Leather boots",

    "Leather",

    "Bucket",

    "Milk bucket",

    "Paper",

    "Firework",

    "Wooden hoe",

    "Stone hoe",

    "Iron hoe",

    "Golden hoe",

    "Diamond hoe",

    "Wheat",

    "Bread",

    "Rotten Flesh",

    "Emerald",
    "Shears",
    "Nether brick",
    "Ender pearl",
    "Blaze rod",
    "Blaze powder",
    "Eye of ender"

];

if(username==="SkythekidRS"){

    tileNames[24]="Budder ore";

    tileNames[38]="Block of Budder";

    itemNames[3]="Budder ingot";

    itemNames[10]="Budder pickaxe";

    itemNames[15]="Budder sword";

    itemNames[24]="Budder helmet";

    itemNames[25]="Budder chestplate";

    itemNames[26]="Budder leggings";

    itemNames[27]="Budder boots";

    itemNames[44]="Budder hoe";

}

var direction = RIGHT;

var armPos = 0;

var armTimer = 0;

var legPos = 0;

var itemTag = null;

var setTag = function(x){

    if(!x){

        itemTag = null;

    }else{

        if(x>=300){

            itemTag = itemNames[x-300];

        }else{

            itemTag = tileNames[x];

        }

    }

};

var cloudX = 0;

var itemDurabilities = [];
var onPoem = false;
var poemScroll = 0;
var endPoem = [
"1I see the player you mean.",
"2"+username+"?",
"1Yes. Take care. It has reached a higher level now. It can read our thoughts.",
"2That doesn't matter. It thinks we are part of the game.",
"1I like this player. It played well. It did not give up.",
"2It is reading our thoughts as though they are words on a scratchpad.",
"1That is how it chooses to imagine many things, when it is deep in the dream of a game.",
"2Words make a wonderful interface. Very flexible. And less terrifying than staring at the reality behind the scratchpad.",
"1They used to hear voices. Before we removed sound. Back in the days when those who did not play called the players witches, and warlocks. And players dreamed they flew through the air, on sticks powered by demons.",
"2What did this player dream?",
"1This player dreamed of sunlight and trees. Of fire and water. It dreamed it created. And it dreamed it destroyed. It dreamed it hunted, and was hunted. It dreamed of shelter.",
"2Hah, the original interface. A million years old, and it still works. But what true structure did this player created, in the reality behind the scratchpad?",
"1It worked, with a million others, to sculpt a true world in a fold of the iV3L93iI, and created a 3Ih1L7Ef for Fe4z98F, in the F38hJ4i.",
"2It cannot read that thought.",
"1No. It has not yet achieved the highest level. That, it must achieve in the long dream of life, not the short dream of a program.",
"2Does it know that we love it? That the universe is kind?",
"1Sometimes, through the noise of its thoughts, it hears the universe, yes.",
"2But there are times it is sad, in the long dream. It creates worlds that have no summer, and it shivers under a black sun, and it takes its sad creation for reality.",
"1To cure it of sorrow would destroy it. The sorrow is part of its own private task. We cannot interfere.",
"2Sometimes when they are deep in dreams, I want to tell them, they are building true worlds in reality. Sometimes I want to tell them of their importance to the universe. Sometimes, when they have not made a true connection in a while, I want to help them to speak the word they fear.",
"1It reads our thoughts",
"2Sometimes I do not care. Sometimes I wish to tell them, this world you take for truth is merely 7In4pP0 and 1Yy7rP, I wish to tell them that they are H8oTqvM in the Zr8E3fVs. They see so little of reality, in their long dream.",
"1And yet they play the game.",
"2But it would be so easy to tell them...",
"1Too strong for this dream. To tell them how to live is to prevent them living.",
"2I will not tell the player how to live.",
"1The player is growing restless. After all, this is an excruciatingly long poem.",
"2I will tell the player a story.",
"1But not the truth.",
"2No. A story that contains the truth safely, in a cage of words. Not the naked truth that can burn over any distance.",
"1Give it a body, again.",
"2Yes. Player...",
"1Use its name.",
"2"+username+". Player of games",
"1Good.",
"2Take a breath, now. Take another. Feel air in your lungs. Let your limbs return. Yes, move your fingers. Have a body again, under gravity, in air. Respawn in the long dream. There you are. Your body touching the universe again at every point, as though you were separate things. As though we were separate things.",
"1Who are we? Once we were called the spirit of the mountain. Father sun, mother moon. Ancestral spirits, animal spirits. Jinn. Ghosts. The green man. Then gods, demons. Angels. Poltergeists. Aliens, extraterrestrials. Leptons, quarks. The words change. We do not change.",
"2We are the universe. We are everything you think isn't you. You are looking at us now, through your skin and your eyes. And why does the universe touch your skin, and throw light on you? To see you, player. To know you. And to be known. I shall tell you a story.",
"2Once upon a time, there was a player.",
"1That player was you, "+username+".",
"2Sometimes it thought itself human, on the thin crust of a spinning globe of molten rock. The ball of molten rock circled a ball of blazing gas that was three hundred and thirty thousand times more massive than it. They were so far apart that light took eight minutes to cross the gap. The light was information from a star, and it could burn your skin from a hundred and fifty million kilometres away.",
"2Sometimes the player dreamed it was a miner, on the surface of a world that was flat, and infinite. The sun was a square of white. The days were short; there was much to do; and death was a temporary inconvenience.",
"1Sometimes the player dreamed it was lost in a story.",
"2Sometimes the player dreamed it was other things, in other places. Sometimes these dreams were disturbing. Sometimes very beautiful indeed. Sometimes the player woke from one dream into another, then woke from that into a third.",
"1Sometimes the player dreamed it watched words in a scratchpad.",
"2Let's go back.",
"2The atoms of the player were scattered in the grass, in the rivers, in the air, in the ground. A woman gathered the atoms; she drank and ate and inhaled; and the woman assembled the player, in her body.",
"2And the player awoke, from the warm, dark world of its mother's body, into the long dream.",
"2And the player was a new story, never told before, written in letters of DNA. And the player was a new program, never run before, generated by a sourcecode a billion years old. And the player was a new human, never alive before, made from nothing but milk and love.",
"1You are the player. The story. The program. The human. Made from nothing but milk and love.",
"2Let's go further back.",
"2The seven billion billion billion atoms of the player's body were created, long before this game, in the heart of a star. So the player, too, is information from a star. And the player moves through a story, which is a forest of information planted by a man called Salman, on a flat, infinite world created by a man called Bennimus, that exists inside a small, private world created by the player, who inhabits a universe created by...",
'1Shush. Sometimes the player created a small, private world that was soft and warm and simple. Sometimes hard, and cold, and complicated. Sometimes it built a model of the universe in its head; flecks of energy, moving through vast empty spaces. Sometimes it called those flecks "electrons" and "protons".',
'2Sometimes it called them "planets" and "stars".',
"2Sometimes it believed it was in a universe that was made of energy that was made of offs and ons; zeros and ones; lines of code. Sometimes it believed it was playing a game. Sometimes it believed it was reading words on a scratchpad.",
"1You are the player, reading words...",
"2Shush... Sometimes the player read lines of code on a screen. Decoded them into words; decoded words into meaning; decoded meaning into feelings, emotions, theories, ideas, and the player started to breathe faster and deeper and realised it was alive, it was alive, those thousand deaths had not been real, the player was alive",
"1You. You. You are alive.",
"2and sometimes the player believed the universe had spoken to it through the sunlight that came through the shuffling leaves of the summer trees",
"1and sometimes the player believed the universe had spoken to it through the light that fell from the crisp night sky of winter, where a fleck of light in the corner of the player's eye might be a star a million times as massive as the sun, boiling its planets to plasma in order to be visible for a moment to the player, walking home at the far side of the universe, suddenly smelling food, almost at the familiar door, about to dream again",
"2and sometimes the player believed the universe had spoken to it through the zeros and ones, through the electricity of the world, through the endless scrolling words on a scratchpad at the end of a dream",
"1and the universe said I love you",
"2and the universe said you have played the game well",
"1and the universe said everything you need is within you",
"2and the universe said you are stronger than you know",
"1and the universe said you are the daylight",
"2and the universe said you are the night",
"1and the universe said the darkness you fight is within you",
"2and the universe said the light you seek is within you",
"1and the universe said you are not alone",
"2and the universe said you are not separate from every other thing",
"1and the universe said you are the universe tasting itself, talking to itself, reading its own code",
"2and the universe said I love you because you are love",
"1And the game was over and the player woke up from the dream. And the player began a new dream. And the player dreamed again, dreamed better. And the player was the universe. And the player was love.",
"1You are the player.",
"2Wake up."
];
for(var i = 0; i <= items; i++){

    switch(i){

        case 17:

            itemDurabilities[i] = 65;

            break;

        case 307:

            itemDurabilities[i] = 60;

            break;

        case 308:

            itemDurabilities[i] = 132;

            break;

        case 309:

            itemDurabilities[i] = 251;

            break;

        case 310:

            itemDurabilities[i] = 33;

            break;

        case 311:

            itemDurabilities[i] = 1562;

            break;

        case 312:

            itemDurabilities[i] = 60;

            break;

        case 313:

            itemDurabilities[i] = 132;

            break;

        case 314:

            itemDurabilities[i] = 251;

            break;

        case 315:

            itemDurabilities[i] = 33;

            break;

        case 316:

            itemDurabilities[i] = 1562;

            break;

        case 320:

            itemDurabilities[i] = 166;

            break;

        case 321:

            itemDurabilities[i] = 241;

            break;

        case 322:

            itemDurabilities[i] = 226;

            break;

        case 323:

            itemDurabilities[i] = 196;

            break;

        case 324:

            itemDurabilities[i] = 78;

            break;

        case 325:

            itemDurabilities[i] = 113;

            break;

        case 326:

            itemDurabilities[i] = 106;

            break;

        case 327:

            itemDurabilities[i] = 92;

            break;

        case 328:

            itemDurabilities[i] = 364;

            break;

        case 329:

            itemDurabilities[i] = 529;

            break;

        case 330:

            itemDurabilities[i] = 496;

            break;

        case 331:

            itemDurabilities[i] = 430;

            break;

        case 332:

            itemDurabilities[i] = 56;

            break;

        case 333:

            itemDurabilities[i] = 81;

            break;

        case 334:

            itemDurabilities[i] = 76;

            break;

        case 335:

            itemDurabilities[i] = 66;

            break;

        case 341:

            itemDurabilities[i] = 60;

            break;

        case 342:

            itemDurabilities[i] = 132;

            break;

        case 343:

            itemDurabilities[i] = 251;

            break;

        case 344:

            itemDurabilities[i] = 33;

            break;

        case 345:

            itemDurabilities[i] = 1562;

            break;
        case 350:
            itemDurabilities[i] = 238;
            break;

        default:

            itemDurabilities[i] = null;

    }

}

var onTitleScreen = false;

var curBiome = 0;

var biomes = [0];

for(var i = 0; i < 20; i++){

    biomes[i] = curBiome;

}

var splashes = [

"This message will never appear on the splash screen, isn't that weird?",

"As seen on TV!",

"Awesome!",

"100% pure!",

"May contain nuts!",

"Better than Prey!",

"More polygons!",

"Sexy!",

"Limited edition!",

"Flashing letters!",

"Made by Bennimus!",

"It's here!",

"Best in class!",

"It's kinda finished!",

"Kind of dragon free!",

"Excitement!",

"More than 500 sold!",

"One of a kind!",

"2 hits on YouTube!",

"Indev!",

"Spiders everywhere!",

"Check it out!",

"Holy cow, man!",

"It's a game!",

"Made in Sweden!",

"Uses LWJGL!",

"Reticulating splines!",

"Minecraft!",

"Yaaay!",

"Singleplayer!",

"Keyboard compatible!",

"Undocumented!",

"Ingots!",

"Exploding creepers!",

"That's no moon!",

"l33t!",

"Create!",

"Survive!",

"Dungeon!",

"Exclusive!",

"The bee's knees!",

"Down with O.P.P.!",

"Closed source!",

"Classy!",

"Wow!",

"Not on steam!",

"Oh man!",

"Awesome community!",

"Pixels!",

"Teetsuuuuoooo!",

"Kaaneeeedaaaa!",

"Now with difficulty!",

"Enhanced!",

"90% bug free!",

"Pretty!",

"12 herbs and spices!",

"Fat free!",

"Absolutely no memes!",

"Free dental!",

"Ask your doctor!",

"Minors welcome!",

"Cloud computing!",

"Legal in Finland!",

"Hard to label!",

"Technically good!",

"Bringing home the bacon!",

"Indie!",

"GOTY!",

"Ceci n'est pas une title screen!",

"Euclidian!",

"Now in 3D!",

"Inspirational!",

"Herregud!",

"Complex cellular automata!",

"Yes, sir!",

"Played by cowboys!",

"OpenGL 0.Nothing!",

"Thousands of colors!",

"Try it!",

"Age of Wonders is better!",

"Try the mushroom stew!",

"Sensational!",

"Hot tamale, hot hot tamale!",

"Play him off, keyboard cat!",

"Guaranteed!",

"Macroscopic!",

"Bring it on!",

"Random splash!",

"Call your mother!",

"Monster infighting!",

"Loved by millions!",

"Ultimate edition!",

"Freaky!",

"You've got a brand new key!",

"Water proof!",

"Uninflammable!",

"Whoa, dude!",

"All inclusive!",

"Tell your friends!",

"NP is not in P!",

"Notch <3 ez!",

"Music by C418!",

"Livestreamed!",

"Haunted!",

"Polynomial!",

"Terrestrial!",

"All is full of love!",

"Full of stars!",

"Scientific!",

"Cooler than Spock!",

"Collaborate and listen!",

"Never dig down!",

"Take frequent breaks!",

"Not linear!",

"Han shot first!",

"Nice to meet you!",

"Buckets of lava!",

"Ride the pig!",

"Larger than Earth!",

"sqrt(-1) love you!",

"Phobos anomaly!",

"Punching wood!",

"Falling off cliffs!",

"0% sugar!",

"150% hyperbole!",

"Synecdoche!",

"Let's danec!",

"Seecret Friday update!",

"Reference implementation!",

"Lewd with two dudes with food!",

"Kiss the sky!",

"20 GOTO 10!",

"Verlet intregration!",

"Peter Griffin!",

"Do not distribute!",

"Cogito ergo sum!",

"4815162342 lines of code!",

"A skeleton popped out!",

"The Work of Bennimus!",

"The sum of its parts!",

"BTAF used to be good!",

"I miss ADOM!",

"umop-apisdn!",

"OICU812!",

"Bring me Ray Cokes!",

"Finger-licking!",

"Thematic!",

"Pneumatic!",

"Sublime!",

"Octagonal!",

"Une baguette!",

"Gargamel plays it!",

"Rita is the new top dog!",

"SWM forever!",

"Representing Edsbyn!",

"Matt Damon!",

"Supercalifragilisticexpialidocious!",

"Consummate V's!",

"Cow Tools!",

"Double buffered!",

"Fan fiction!",

"Flaxkikare!",

"Jason! Jason! Jason!",

"Hotter than the sun!",

"Soon to be Internet enabled!",

"Autonomous!",

"Engage!",

"Fantasy!",

"DRR! DRR! DRR!",

"Kick it root down!",

"Regional resources!",

"Woo, facepunch!",

"Woo, somethingawful!",

"Woo, /v/!",

"Woo, tigsource!",

"Woo, minecraftforum!",

"Woo, worldofminecraft!",

"Woo, reddit!",

"Woo, 2pp!",

"Woo, Khan Academy!",

"Google anlyticsed!",

"Now supports åäö!",

"Give us Gordon!",

"Tip your waiter!",

"Very fun!",

"12345 is a bad password!",

"Vote for net neutrality!",

"Lives in a pineapple under the sea!",

"MAP11 has two names!",

"Omnipotent!",

"Gasp!",

"...!",

"Bees, bees, bees, bees!",

"Jag känner en bot!",

"Haha, LOL!",

"Hampsterdance!",

"Switches and ores!",

"Menger sponge!",

"idspispopd!",

"Eple (original edit)!",

"So fresh, so clean!",

"Slow acting portals!",

"Try the Nether!",

"Don't look directly at the bugs!",

"Oh, ok, Pigmen!",

"Finally with ladders!",

"Scary!",

"Play Minecraft, Watch Topgear, Get Pig!",

"Twittered about!",

"Jump up, jump up, and get down!",

"Joel is neat!",

"A riddle, wrapped in a mystery!",

"Huge tracts of land!",

"Welcome to your Doom!",

"Stay a while, stay forever!",

"Stay a while and listen!",

"Treatment for your rash!",

"'Autological' is!",

"Information wants to be free!",

"'Almost never' is an interesting concept!",

"Lots of truthiness!",

"The creeper is a spy!",

"Turing complete!",

"It's groundbreaking!",

"Let our battle's begin!",

"The sky is the limit!",

"Jeb has amazing hair!",

"Casual gaming!",

"Undefeated!",

"Kinda like Lemmings!",

"Follow the train, CJ!",

"Leveraging synergy!",

"DungeonQuest is unfair!",

"110813!",

"90210!",

"Check out the far lands!",

"Tyrion would love it!",

"Also try VVVVVV!",

"Also try Super Meat Boy!",

"Also try Terraria!",

"Also try Mount And Blade!",

"Also try Project Zomboid!",

"Also try World of Goo!",

"Also try Limbo!",

"Also try Pixeljunk Shooter!",

"Also try Braid!",

"That's super!",

"Bread is pain!",

"Read more books!",

"Khaaaaaaaaan!",

"Less addictive than TV Tropes!",

"More addictive than lemonade!",

"Bigger than a bread box!",

"Millions of peaches!",

"Fnord!",

"This is my true form!",

"Totally forgot about Dre!",

"Don't bother with the clones!",

"Pumpkinhead!",

"Hobo humping slobo babe!",

"Made by Jeb!",

"Has an ending!",

"Finally complete!",

"Feature packed!",

"Boots with the fur!",

"Stop, hammertime!",

"Testificates!",

"Conventional!",

"Homeomorphic to a 3-sphere!",

"Doesn't avoid double negatives!",

"Place ALL the blocks!",

"Does barrel rolls!",

"Meeting expectations!",

"PC gaming since 1873!",

"Ghoughpteighbteau tchoghs!",

"Déjà vu!",

"Got your nose!",

"Haley loves Elan!",

"Afraid of the big, black bat!",

"Doesn't use the U-word!",

"Child's play!",

"See you next Friday or so!",

"From the streets of Södermalm!",

"150 bpm for 400000 minutes!",

"Technologic!",

"Funk soul brother!",

"Pumpa kungen!",

"日本ハロー！",

"한국 안녕하세요!",

"Helo Cymru!",

"Cześć Polsko!",

"你好中国！",

"Привет Россия!",

"Γεια σου Ελλάδα!",

"My life for Aiur!",

"Lennart lennart = new Lennart();",

"I see your vocabulary has improved!",

"Who put it there?",

"You can't explain that!",

"if not ok then return end",

"Colormatic!",

"FUNKY LOL",

"SOPA means LOSER in Swedish!",

"Big Pointy Teeth!",

"Bekarton guards the gate!",

"Mmmph, mmph!",

"Don't feed avocados to parrots!",

"Swords for everyone!",

"Plz reply to my tweet!",

".party()!",

"Take her pillow!",

"Put that cookie down!",

"Pretty scary!",

"I have a suggestion.",

"Now with extra hugs!",

"Now javascript!",

"Woah.",

"HURNERJSGER?",

"What's up, Doc?",

"Now contains 32 random daily cats!"];

var onCommandBlock = false;

var curSplash = round(random(1,splashes.length));

var furnaceRecipes = [];

var burnValues = [];

for(var i = 0; i < items; i++){

    switch(i){

        case 4:

            furnaceRecipes[i]=1;

            break;

        case 5:

            burnValues[i]=1.5;

            break;

        case 7:

            furnaceRecipes[i]=301;

            break;

        case 13:

            burnValues[i]=100;

            break;

            

        case 15:

            furnaceRecipes[i]=39;

            break;

        case 16:

            burnValues[i]=0.5;

            break;
        case 19:
            furnaceRecipes[i]=351;
            break;

        case 23:

            furnaceRecipes[i]=302;

            break;

        case 24:

            furnaceRecipes[i]=303;

            break;

        case 27:

            burnValues[i]=1;

            break;

            

        case 52:

            burnValues[i]=72;

            break;

        case 300:

            burnValues[i]=0.5;

            break;

        case 301:

            burnValues[i]=8;

            break;

        case 307:

            burnValues[i]=1;

            break;

        case 312:

            burnValues[i]=1;

            break;

        case 317:

            furnaceRecipes[i]=319;

            break;

        default:

            burnValues[i]=null;

            furnaceRecipes[i]=null;

    }

}

var onInputBox = false;

var input = "";

var inputTimer = 25;

var messages = [];

var msgTimers = [];

var broadcast = function(msg){

    append(messages, msg);

    append(msgTimers, 150);

};

var bennimusStudios = true;

if(DO_NOT_TOUCH){

    broadcast("You don't know what you did...");

}

var craftingGrid = [0,0,0,0,0,0,0,0,0];

var recipes = [];

var recipeAmounts = [];

for(var i = 0; i < items; i++){

    recipes[i] = [];

    recipes[i][0] = [];

    switch(i){

        case 5:

            for(var j = 0; j < 9; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(k===j){

                        recipes[i][j][k] = 7;

                    }else{

                        recipes[i][j][k] = 0;

                    }

                }

            }

            recipeAmounts[5] = 4;

            break;

        case 15:

            recipes[i][0] =[318,20,318,20,318,20,318,20,318];

            break;

        case 17:

            for(var j = 0; j < 4; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(recipes[i][j][k]===0||recipes[i][j][k]===undefined){

                        if(k===j){

                            recipes[i][j][k] = 302;

                            recipes[i][j][k+4] = 306;

                        }else{

                            recipes[i][j][k] = 0;

                        }

                    }

                }

            }

            recipeAmounts[17]=1;

            break;

        case 27:

            for(var j = 0; j < 4; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(recipes[i][j][k]===0||recipes[i][j][k]===undefined){

                        if(k===j){

                            recipes[i][j][k] = 5;

                            recipes[i][j][k+1] = 5;

                            recipes[i][j][k+3] = 5;

                            recipes[i][j][k+4] = 5;

                        }else{

                            recipes[i][j][k]=0;

                        }

                    }

                }

            }

            recipeAmounts[27] = 1;

            break;

        case 28:

            for(var j = 0; j < 2; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(recipes[i][j][k]===0||recipes[i][j][k]===undefined){

                        if(k===j){

                            recipes[i][j][k] = 5;

                            recipes[i][j][k+1] = 5;

                            recipes[i][j][k+3] = 5;

                            recipes[i][j][k+4] = 5;

                            recipes[i][j][k+6] = 5;

                            recipes[i][j][k+7] = 5;

                        }else{

                            recipes[i][j][k] = 0;

                        }

                    }

                }

            }recipeAmounts[28]=3;

            break;

        case 30:

            recipes[i][0] = [300, 0, 300, 300, 300, 300, 300, 0, 300];

            recipeAmounts[30]=3;

            break;

        case 33:

            recipes[i][0] = [4,4,4,4,0,4,4,4,4];

            break;

        case 34:

            recipes[i][0] = [5,5,5,5,0,5,5,5,5];

            break;

        case 37:

            recipes[i][0] = [302,302,302,302,302,302,302,302,302];

            break;

        case 38:

            recipes[i][0] = [303,303,303,303,303,303,303,303,303];

            break;

        case 39:

            recipes[i][0] = [305,305,305,305,305,305,305,305,305];

            break;

        case 40:

            for(var j = 0; j < 6; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(recipes[i][j][k]===0||recipes[i][j][k]===undefined){

                        if(k===j){

                            recipes[i][j][k] = 301;

                            recipes[i][j][k+3] = 300;

                        }else{

                            recipes[i][j][k] = 0;

                        }

                    }

                }

            }

            recipeAmounts[40] = 4;

            break;

        case 42:

            for(var j = 0; j < 9; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(k===j){

                        recipes[i][j][k] = 51;

                    }else{

                        recipes[i][j][k] = 0;

                    }

                }

            }

            recipeAmounts[i]=9;

            break;

        case 44:

            for(var j = 0; j < 6; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(recipes[i][j][k]===0||recipes[i][j][k]===undefined){

                        if(k===j){

                            recipes[i][j][k] = 42;

                            recipes[i][j][k+3] = 300;

                        }else{

                            recipes[i][j][k] = 0;

                        }

                    }

                }

            }

            break;

        case 50:

            recipes[i][0] = [349,349,349,349,349,349,349,349,349];

            break;

        case 51:

            recipes[i][0] = [42,42,42,42,42,42,42,42,42];

            break;

        case 52:

            recipes[i][0] = [301,301,301,301,301,301,301,301,301];

            break;

        case 53:

            recipes[i][0] = [304,304,304,304,304,304,304,304,304];

            break;
        case 55:
            recipes[i][0] = [54,54,54,5,5,5,0,0,0];
            recipes[i][1] = [0,0,0,54,54,54,5,5,5];
            break;
        case 57:
        for(var j = 0; j < 4; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(recipes[i][j][k]===0||recipes[i][j][k]===undefined){

                        if(k===j){

                            recipes[i][j][k] = 351;

                            recipes[i][j][k+1] = 351;

                            recipes[i][j][k+3] = 351;

                            recipes[i][j][k+4] = 351;

                        }else{

                            recipes[i][j][k]=0;

                        }

                    }

                }

            }


            break;
            case 61:
        for(var j = 0; j < 4; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(recipes[i][j][k]===0||recipes[i][j][k]===undefined){

                        if(k===j){

                            recipes[i][j][k] = 1;

                            recipes[i][j][k+1] = 1;

                            recipes[i][j][k+3] = 1;

                            recipes[i][j][k+4] = 1;

                        }else{

                            recipes[i][j][k]=0;

                        }

                    }

                }

            }

            break;
        case 300:

            for(var j = 0; j < 6; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(recipes[i][j][k]===0||recipes[i][j][k]===undefined){

                        if(k===j){

                            recipes[i][j][k] = 5;

                            recipes[i][j][k+3] = 5;

                        }else{

                            recipes[i][j][k] = 0;

                        }

                    }

                }

            }

            recipeAmounts[300] = 4;

            break;

        case 301:

            for(var j = 0; j < 9; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(k===j){

                        recipes[i][j][k] = 52;

                    }else{

                        recipes[i][j][k] = 0;

                    }

                }

            }

            recipeAmounts[i]=9;

            break;

        case 302:

            for(var j = 0; j < 9; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(k===j){

                        recipes[i][j][k] = 37;

                    }else{

                        recipes[i][j][k] = 0;

                    }

                }

            }recipeAmounts[i]=9;

            break;

        case 303:

            for(var j = 0; j < 9; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(k===j){

                        recipes[i][j][k] = 38;

                    }else{

                        recipes[i][j][k] = 0;

                    }

                }

            }recipeAmounts[i]=9;

            break;

        case 304:

            for(var j = 0; j < 9; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(k===j){

                        recipes[i][j][k] = 53;

                    }else{

                        recipes[i][j][k] = 0;

                    }

                }

            }

            recipeAmounts[i]=9;

            break;

        case 305:

            for(var j = 0; j < 9; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(k===j){

                        recipes[i][j][k] = 39;

                    }else{

                        recipes[i][j][k] = 0;

                    }

                }

            }

            recipeAmounts[i]=9;

            break;

        case 307:

            recipes[i][0] = [5, 5, 5, 0, 300, 0, 0, 300, 0];

            recipeAmounts[307] = 1;

            break;

        case 308:

            recipes[i][0] = [4, 4, 4, 0, 300, 0, 0, 300, 0];

            recipeAmounts[308] = 1;

            break;

        case 309:

            recipes[i][0] = [302,302,302,0,300,0,0,300,0];

            recipeAmounts[309] = 1;

            break;

        case 310:

            recipes[i][0] = [303,303,303,0,300,0,0,300,0];

            recipeAmounts[310] = 1;

            break;

        case 311:

            recipes[i][0] = [305,305,305,0,300,0,0,300,0];

            recipeAmounts[311] = 1;

            break;

        case 312:

            recipes[i][0] = [5,0,0,5,0,0,300,0,0];

            recipes[i][1] = [0,5,0,0,5,0,0,300,0];

            recipes[i][2] = [0,0,5,0,0,5,0,0,300];

            recipeAmounts[312] = 1;

            break;

        case 313:

            recipes[i][0] = [4,0,0,4,0,0,300,0,0];

            recipes[i][1] = [0,4,0,0,4,0,0,300,0];

            recipes[i][2] = [0,0,4,0,0,4,0,0,300];

            recipeAmounts[313] = 1;

            break;

        case 314:

            recipes[i][0] = [302,0,0,302,0,0,300,0,0];

            recipes[i][1] = [0,302,0,0,302,0,0,300,0];

            recipes[i][2] = [0,0,302,0,0,302,0,0,300];

            recipeAmounts[314] = 1;

            break;

        case 315:

            recipes[i][0] = [303,0,0,303,0,0,300,0,0];

            recipes[i][1] = [0,303,0,0,303,0,0,300,0];

            recipes[i][2] = [0,0,303,0,0,303,0,0,300];

            recipeAmounts[315] = 1;

            break;

        case 316:

            recipes[i][0] = [305,0,0,305,0,0,300,0,0];

            recipes[i][1] = [0,305,0,0,305,0,0,300,0];

            recipes[i][2] = [0,0,305,0,0,305,0,0,300];

            recipeAmounts[316] = 1;

            break;

        case 320:

            recipes[i][0] = [302,302,302,302,0,302,0,0,0];

            recipes[i][1] = [0,0,0,302,302,302,302,0,302];

            break;

        case 321:

            recipes[i][0] = [302,0,302,302,302,302,302,302,302];

            break;

        case 322:

            recipes[i][0] = [302,302,302,302,0,302,302,0,302];

            break;

        case 323:

            recipes[i][0] = [302,0,302,302,0,302,0,0,0];

            recipes[i][1] = [0,0,0,302,0,302,302,0,302];

            break;

        case 324:

            recipes[i][0] = [303,303,303,303,0,303,0,0,0];

            recipes[i][1] = [0,0,0,303,303,303,303,0,303];

            break;

        case 325:

            recipes[i][0] = [303,0,303,303,303,303,303,303,303];

            break;

        case 326:

            recipes[i][0] = [303,303,303,303,0,303,303,0,303];

            break;

        case 327:

            recipes[i][0] = [303,0,303,303,0,303,0,0,0];

            recipes[i][1] = [0,0,0,303,0,303,303,0,303];

            break;

        case 328:

            recipes[i][0] = [305,305,305,305,0,305,0,0,0];

            recipes[i][1] = [0,0,0,305,305,305,305,0,305];

            break;

        case 329:

            recipes[i][0] = [305,0,305,305,305,305,305,305,305];

            break;

        case 330:

            recipes[i][0] = [305,305,305,305,0,305,305,0,305];

            break;

        case 331:

            recipes[i][0] = [305,0,305,305,0,305,0,0,0];

            recipes[i][1] = [0,0,0,305,0,305,305,0,305];

            break;

        case 332:

            recipes[i][0] = [336,336,336,336,0,336,0,0,0];

            recipes[i][1] = [0,0,0,336,336,336,336,0,336];

            break;

        case 333:

            recipes[i][0] = [336,0,336,336,336,336,336,336,336];

            break;

        case 334:

            recipes[i][0] = [336,336,336,336,0,336,336,0,336];

            break;

        case 335:

            recipes[i][0] = [336,0,336,336,0,336,0,0,0];

            recipes[i][1] = [0,0,0,336,0,336,336,0,336];

            break;

        case 337:

            recipes[i][0]=[302,0,302,0,302,0,0,0,0];

            recipes[i][1]=[0,0,0,302,0,302,0,302,0];

            break;

        case 339:

            recipes[i][0]=[41,41,41,0,0,0,0,0,0];

            recipes[i][1]=[0,0,0,41,41,41,0,0,0];

            recipes[i][2]=[0,0,0,0,0,0,41,41,41];

            recipeAmounts[339]=3;

            break;

        case 340:

            for(var j = 0; j < 6; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(recipes[i][j][k]===0||recipes[i][j][k]===undefined){

                        if(k===j){

                            recipes[i][j][k] = 339;

                            recipes[i][j][k+3] = 318;

                        }else{

                            recipes[i][j][k] = 0;

                        }

                    }

                }

            }

            break;

        case 341:

            recipes[i][0]=[5,5,0,0,300,0,0,300,0];

            recipes[i][1]=[0,5,5,0,300,0,0,300,0];

            recipes[i][2]=[5,5,0,300,0,0,300,0,0];

            recipes[i][3]=[0,5,5,0,0,300,0,0,300];

            break;

        case 342:

            recipes[i][0]=[4,4,0,0,300,0,0,300,0];

            recipes[i][1]=[0,4,4,0,300,0,0,300,0];

            recipes[i][2]=[4,4,0,300,0,0,300,0,0];

            recipes[i][3]=[0,4,4,0,0,300,0,0,300];

            break;

        case 343:

            recipes[i][0]=[302,302,0,0,300,0,0,300,0];

            recipes[i][1]=[0,302,302,0,300,0,0,300,0];

            recipes[i][2]=[302,302,0,300,0,0,300,0,0];

            recipes[i][3]=[0,302,302,0,0,300,0,0,300];

            break;

        case 344:

            recipes[i][0]=[303,303,0,0,300,0,0,300,0];

            recipes[i][1]=[0,303,303,0,300,0,0,300,0];

            recipes[i][2]=[303,303,0,300,0,0,300,0,0];

            recipes[i][3]=[0,303,303,0,0,300,0,0,300];

            break;

        case 345:

            recipes[i][0]=[305,305,0,0,300,0,0,300,0];

            recipes[i][1]=[0,305,305,0,300,0,0,300,0];

            recipes[i][2]=[305,305,0,300,0,0,300,0,0];

            recipes[i][3]=[0,305,305,0,0,300,0,0,300];

            break;

        case 347:

            recipes[i][0]=[346,346,346,0,0,0,0,0,0];

            recipes[i][1]=[0,0,0,346,346,346,0,0,0];

            recipes[i][2]=[0,0,0,0,0,0,346,346,346];

            break;

        case 349:

            for(var j = 0; j < 9; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(k===j){

                        recipes[i][j][k] = 50;

                    }else{

                        recipes[i][j][k] = 0;

                    }

                }

            }

            recipeAmounts[i]=9;

            break;
        case 350:
            for(var j = 0; j < 4; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(recipes[i][j][k]===0||recipes[i][j][k]===undefined){

                        if(k===j){

                            recipes[i][j][k] = 302;

                            recipes[i][j][k+4] = 302;

                        }else{

                            recipes[i][j][k] = 0;

                        }

                    }

                }

            }
            for(var j = 4; j < 8; j++){

                recipes[i][j] = [];

                for(var k = 1; k < 9; k++){
                    if(k!==3&&k!==6){
                    if(recipes[i][j][k]===0||recipes[i][j][k]===undefined){

                        if(k===j){

                            recipes[i][j][k] = 302;

                            recipes[i][j][k+2] = 302;

                        }else{

                            recipes[i][j][k] = 0;

                        }

                    }
                    }
                }

            }
            recipeAmounts[350]=1;

            break;
        case 354:
            for(var j = 0; j < 9; j++){

                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(k===j){

                        recipes[i][j][k] = 353;

                    }else{

                        recipes[i][j][k] = 0;

                    }

                }

            }

            recipeAmounts[354] = 2;
            break;
        case 355:
            for(var j = 0; j < 81; j++){
                var jj = round(j/9-0.5);
                recipes[i][j] = [];

                for(var k = 0; k < 9; k++){

                    if(k===jj){

                        recipes[i][j][k] = 352;

                    }else{

                        recipes[i][j][k] = 0;

                    }

                }
                var jjj = j-jj*9;
                if(recipes[i][j][jjj]===0){
                    recipes[i][j][jjj]=354;
                }else{
                    if(jj===0){
                        recipes[i][j][jjj+1]=354;
                    }else{
                        recipes[i][j][jjj-1]=354;
                    }
                }

            }
            break;
    }
    if(recipeAmounts[i] === undefined){

        recipeAmounts[i] = 1;

    }

}

var holdingBlock = 0;

var holdingStacks = 0;

var holdingSpecs = 0;

var logoTix = 0;

var time = 0;

var night = 0;

var posX = -40;

var posY = -340;

var posA = 10;

var posB = 10;

var posB2;

var posA2;



var skin = getImage("cute/CharacterBoy");

var blocksFallen = 0;

var fallTix = 0;

var scrollX = posX;

var scrollY = posY;

var playerSpeed = 8;

var isSitting = true;

var fireTix = 0;

var onFire = false;

var inLava = false;

var inWater = false;

var isDrowning = false;

var armorSlots = [0, 0, 0, 0];

var armorSpecs = [0, 0, 0, 0];

var keyTimer = 50;

var isSprinting = false; 

var health = 20;

var heart = getImage("cute/Heart");

var heartsShowing = false;

var shake = 2;

var shaken = false;

var armor = 0;

var oldHealth = health;

var drownCount = 0;

var oxygen = 10;

var shield = getImage("cute/RampSouth");

var shieldsShowing = false;

var isDead = false;

var jumpHeight = 0;

var blockSelected = 0;

var craftedItem = 0;

var craftedStacks = 4;

var entity = {

    x: [],

    y: [],

    type: [],

    type2: [],

    length: 0

};

var hide = false;

var e2open = true;

var nether = false;
var end = false;
var debugMenu = false;

var inventory = false;

var mobs = {

    type: [],

    x: [],

    y: [],

    health: [],

    inWater: [],

    inLava: [],

    onFire: [],

    fireTix: [],

    legPos: [],

    headPos: [],

    length: 0,

    state: [],

    direction: [],

    specs: [],

    nether: [],
    end: [],
    
    distance: []

};

var version = "1.14";

var NEWS = "My account's no longer banned! Check out the link to my new project, Minecraft 2! (it was easier than fixing this one)";

var news = false;

var MainArticle = "Minecraft 2!";
var endWorld = [

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
for(var i = 0; i < endWorld.length; i++){
    for(var j = 0; j < 40; j++){
        if(i<14&&endWorld[i][j]!==5){
        endWorld[i][j]=0;
        }else{
        endWorld[i][j]=59;
        }
    }
}
for(var i = 7; i < 12; i++){
    endWorld[11][i]=8;
}
var stronghold = [
[61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61],
[61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,61],
[61,0,0,0,0,0,0,0,0,58,58,58,0,0,0,61],
[61,0,0,0,0,0,0,0,58,0,0,0,58,0,0,61],
[61,0,0,0,0,0,0,0,58,0,0,0,58,0,0,61],
[61,0,0,0,0,0,0,0,58,0,0,0,58,0,0,61],
[0,0,0,0,0,0,61,61,0,58,58,58,0,0,0,61],
[0,0,0,0,0,61,61,61,0,0,0,0,0,0,0,61],
[0,0,0,0,61,61,61,61,61,13,13,13,61,0,0,61],
[61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61]];
var netherFort = [
[0,0,0,57,0,0,36,0,0,57,0,0,0],
[0,0,57,57,57,57,57,57,57,57,57,0,0],
[0,57,57,57,0,57,57,57,0,57,57,57,0],
[57,57,57,0,0,0,57,0,0,0,57,57,57],
[19,19,19,13,13,13,57,13,13,13,19,19,19]];
var newWorld = [

[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,9,9,7,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,9,9,7,9,9,0,0,41,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,7,0,0,0,0,41,0,0,0,0,0,0,0,0,0,0],

[0,0,47,0,7,0,47,0,47,41,0,0,0,0,0,0,0,47,0,47],

[2,2,2,2,3,2,2,2,2,2,11,11,11,11,11,11,2,2,2,2],

[3,3,3,3,3,3,3,3,3,3,3,3,11,11,11,3,3,3,3,3],

[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],

[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],

[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]];

var specs = [

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

var power = [

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

var netherWorld = [

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    [],

    []];

var invContents = [

    [0, 0, 0, 0],

    [0, 0, 0, 0],

    [0, 0, 0, 0],

    [0, 0, 0, 0],

    [0, 0, 0, 0],

    [0, 0, 0, 0]];

var invStacks = [

    [0, 0, 0, 0],

    [0, 0, 0, 0],

    [0, 0, 0, 0],

    [0, 0, 0, 0],

    [0, 0, 0, 0],

    [0, 0, 0, 0]];

var invSpecs = [

    [0, 0, 0, 0],

    [0, 0, 0, 0],

    [0, 0, 0, 0],

    [0, 0, 0, 0],

    [0, 0, 0, 0],

    [0, 0, 0, 0]];

var hotbar = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var hotbarStacks = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var hotbarSpecs = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var overWorld = newWorld;

var blockTargeted = [0, 0];

var blockDurability = [];

var specDurabilities = [];

blockDurability[0]=0;

blockDurability[1]=65;

blockDurability[2]=10;

blockDurability[3]=10;

blockDurability[4]=70;

blockDurability[5]=35;

blockDurability[6]=50;

blockDurability[7]=30;

blockDurability[8]=2000;

blockDurability[9]=5;

blockDurability[15]=0;

blockDurability[16]=0;

blockDurability[17]=0;

blockDurability[19]=15;

blockDurability[20]=10;

blockDurability[21]=10;

blockDurability[22]=80;

blockDurability[23]=85;

blockDurability[24]=80;

blockDurability[25]=90;

blockDurability[26]=100;

blockDurability[27]=40;

blockDurability[28]=30;

blockDurability[29]=30;

blockDurability[30]=15;

blockDurability[31]=5;

blockDurability[32]=30;

blockDurability[33]=90;

blockDurability[34]=40;

blockDurability[35]=70;

blockDurability[36]=100;

blockDurability[37]=90;

blockDurability[38]=95;

blockDurability[39]=115;

blockDurability[40]=0;

blockDurability[41]=0;

blockDurability[42]=0;

blockDurability[43]=120;

blockDurability[44]=0;

blockDurability[46]=10;

blockDurability[47]=0;

blockDurability[48]=0;
blockDurability[49]=90;
blockDurability[50]=90;
blockDurability[51]=85;
blockDurability[52]=80;
blockDurability[53]=85;
blockDurability[54]=20;
blockDurability[57]=60;
blockDurability[59]=55;
blockDurability[61]=70;

var blockStrength = null;

var selDurability = null;

var isCrafting = false;

var isSmelting = false;

var onChest = false;

noCursor();

var c = 0;

var place = 0;

var jump = 0;

var fall = 10;

var a = 0;

var b = 0;

var g;

var h;

var pickedUp = false;



var 

world = newWorld;

var flameX = [];

var flameY = [];

var flameSpeed = [];

for(var i = 0; i < 40; i++){

    flameX[i] = random(3,17);

    flameY[i] = random(5,15);

    flameSpeed[i] = random(1,2);

}

var s;

var drawFlame = function(x, y, size){

    noStroke();

    for(var i = 0; i < 80; i++){

        s = dist(flameX[i], flameY[i], 10, 15);

        fill(255, 255-s*10, 0);

        ellipse(x+flameX[i]*size, y+flameY[i]*size, 1.5*size, 2.5*size);

        

    }

};

var getItem = function(itemID, amount){

for(var g = 0; g < amount; g++){

    for(var h = 0; h < 9; h++){

        if((hotbarStacks[h]===0||hotbar[h]===itemID)&&!pickedUp&&hotbarStacks[h]<maxStacks[itemID]){

            hotbar[h]=itemID;

            if(hotbar[h]!==0){

                hotbarSpecs[h] = itemDurabilities[itemID];

                hotbarStacks[h]++;

            }

            pickedUp=true;

        }

    }

    for(var i = 0; i < 4; i++){

        for(var j = 0; j < 6; j++){

            if((invStacks[j][i]===0||invContents[j][i]===itemID)&&!pickedUp&&invStacks[j][i]<maxStacks[itemID]){

                invContents[j][i]=itemID;

                invSpecs[j][i]=itemDurabilities[itemID];

                if(invContents[j][i]!==0){

                    invStacks[j][i]++;

                }

                pickedUp = true;

            }

        }

    }

    pickedUp=false;

}

};



var spawnMobs = function(x, y, type,d){

    var canSpawn = true;

    for(var i = 0; i < world.length; i++){

        for(var j = 0; j < world[0].length; j++){

            if(world[i][j]===40&&dist(j*40,i*40,x,y)<250){

                canSpawn = false;

            }

        }

    }

    if(dist(x,y,posA*40,posB*40)<150){

        canSpawn=false;

    }

    if(canSpawn){

    append(mobs.type, type);

    append(mobs.x, x);

    append(mobs.y, y);

    switch(type){

        case 0:

            append(mobs.health, 10);

            break;

        case 3:

            append(mobs.health, 10);

            break;

        case 4:

            append(mobs.health, 30);

            break;
        case 6:
            append(mobs.health, 10);
            break;
        case 7:
            append(mobs.health, 40);
            break;
        case 8:
            append(mobs.health, 200);
            break;
        default:

            append(mobs.health, 20);

    }

    append(mobs.inWater, false);

    append(mobs.inLava, false);

    append(mobs.onFire, false);

    append(mobs.fireTix, false);

    append(mobs.state, 0);

    append(mobs.legPos, 0);

    append(mobs.nether, nether);
    append(mobs.end, end);
    if(d){
        append(mobs.distance, d);
    }else{
        append(mobs.distance, 0);
    }
    append(mobs.specs, []);
    if(mobs.type[mobs.length]===7){
        mobs.specs[mobs.length]=[0,0];
    }
    if(mobs.type[mobs.length]===6){
        mobs.specs[mobs.length]=1;
    }
    if(mobs.type[mobs.length]===5){
        var c = round(random(0,20));
        switch(c){
            case 0:
                mobs.specs[mobs.length]=[21,349,306,10,1,round(random(4,5))];
                break;
            case 1:
                mobs.specs[mobs.length]=[0,346,349,0,round(random(18,21)),1];
                break;
            case 2:
                mobs.specs[mobs.length]=[0,349,332,0,round(random(2,3)),1];
                break;
            case 3:
                mobs.specs[mobs.length]=[0,349,333,0,4,1];
                break;
            case 4:
                mobs.specs[mobs.length]=[0,349,334,0,round(random(2,3)),1];
                break;
            case 5:
                mobs.specs[mobs.length]=[0,349,335,0,round(random(2,3)),1];
                break;
            case 6:
                mobs.specs[mobs.length]=[0,349,316,0,round(random(12,13)),1];
                break;
            case 7:
                mobs.specs[mobs.length]=[0,349,311,0,round(random(10,11)),1];
                break;
            case 8:
                mobs.specs[mobs.length]=[0,349,320,0,round(random(4,5)),1];
                break;
            case 9:
                mobs.specs[mobs.length]=[0,349,321,0,round(random(10,13)),1];
                break;
            case 10:
                mobs.specs[mobs.length]=[0,349,322,0,round(random(8,9)),1];
                break;
            case 11:
                mobs.specs[mobs.length]=[0,349,323,0,round(random(4,5)),1];
                break;
            case 12:
                mobs.specs[mobs.length]=[0,349,319,0,1,round(random(6,7))];
                break;
            case 13:
                mobs.specs[mobs.length]=[0,302,349,0,round(random(8,9)),1];
                break;
            case 14:
                mobs.specs[mobs.length]=[0,305,349,0,round(random(4,5))];
                break;
            case 15:
                mobs.specs[mobs.length]=[0,317,349,0,round(random(14,17)),1];
                break;
            case 16:
                mobs.specs[mobs.length]=[0,301,349,0,round(random(16,23)),1];
                break;
            case 17:
                mobs.specs[mobs.length]=[0,349,17,0,3,1];
                break;
            case 18:
                mobs.specs[mobs.length]=[0,349,309,0,round(random(7,8)),1];
                break;
            case 19:
                mobs.specs[mobs.length]=[0,349,314,0,round(random(7,10)),1];
                break;
            default:
                mobs.specs[mobs.length]=[0,303,349,0,round(random(8,9)),1];
        }

    }

    mobs.length++;

    }

};

var getBlock = function(y, x){

    try {

        return world[y][x];

    }catch (e){

        return 0;

    }

};

var getSpecs = function(y, x){

    try {

        return specs[y][x];

    }catch (e){

        return 0;

    }

};

var getPower = function(y, x){

    try {

        return power[y][x];

    }catch (e){

        return 0;

    }

};

var setBlock = function(y, x, newBlock){

    try {

        world[y][x] = newBlock;

    }catch (e){}

};

var setSpecs = function(y, x, newSpecs){

    try {

        specs[y][x] = newSpecs;

    }catch (e){}

};

var setPower = function(y, x, newPower){

    try {

        power[y][x] = newPower;

    }catch (e){}

};



var genWorld = function(){
    if(!end){
    if(!nether){

        if(round(random(0, 30))){}else{

            curBiome = round(random(0, 3));

        }

        append(biomes, curBiome);

    }
    for(var d = 0; d < world.length; d++){

        if(nether){

            if(d < 14){

                if(d>3){

                    append(world[d], 0);

                }else if(d>1){

                    append(world[d], 19);

                }else{

                    append(world[d], 10);

                }

            }else if(d >= 14){

                if(d>38){

                    append(world[d], 10);

                }else{

                    append(world[d], 19);

                }

            }
            if(!round(random(0,3000))){
                var l = world[0].length-13;
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 13; j++){
                        world[i+10][j+l]=netherFort[i][j];
                    }
                }
            }
            if(!round(random(0, 6))&&d===13){

                setBlock(d,world[d].length,17);

            }

            if(!round(random(0, 50))&&d===9){

                for(var i = 0; i < 5; i++){

                    for(var j = 0; j < 4; j++){

                        setBlock(d+i,world[0].length-j,8);

                    }

                }

                for(var i = 1; i < 4; i++){

                    for(var j = 1; j < 3; j++){

                        setBlock(d+i,world[0].length-j,18);

                    }

                }

            }

            if(d === 3 && !round(random(0, 12))){

                setBlock(d,world[d].length-round(random(2,4)),13);

                if(!world[14][world[14].length]){

                    for(var i = world[14].length; i < world[d].length; i++){

                        setBlock(14,i,9);

                    }

                }

                world[14][world[0].length-5]=13;

                world[14][world[0].length-4]=13;

                world[14][world[0].length-3]=13;

                world[14][world[0].length-2]=13;

                world[14][world[0].length-1]=13;

                world[14+1][world[0].length-3]=13;

                world[14+1][world[0].length-2]=13;

            }

        }else{

        if(!round(random(0, 6000))){

            for(var i = 0; i < 5; i++){

                world[14][world[0].length-i-1]=5;

                for(var j = 0; j < 4; j++){

                    world[9+i][world[0].length-j-1]=0;

                }

            }

            for(var i = 0; i < 3; i++){

                world[9+i][world[0].length-1]=7;

                world[9+i][world[0].length-5]=7;

                world[10][world[0].length-i-2]=5;

            }

            world[13][world[0].length-1]=28;

            world[13][world[0].length-5]=28;

            world[12][world[0].length-1]=29;

            world[12][world[0].length-5]=29;

            for(var i = 0; i < 2; i++){

                for(var j = 0; j < 2; j++){

                    specs[12+i][world[0].length-(j*4)-1]=1;

                }

            }

            spawnMobs((world[0].length-2)*40,500,5);

        }

        if(!round(random(0,3000))&&curBiome!==3){

            for(var i = 0; i < 5; i++){

                for(var j = 0; j < 7; j++){

                    world[9+i][world[0].length-j-1]=0;

                }

            }

            var length = world[0].length-1;

            world[13][length]=7;

            world[13][length-6]=7;

            for(var i = 1; i <= 5; i++){

                if(i!==3){

                    world[13][length-i]=46;

                    world[12][length-i]=48;

                    specs[12][length-i]=round(random(0,7));

                }else{

                    world[13][length-i]=11;

                }

            }spawnMobs((world[0].length-2)*40,460,5);

        }

        if(round(random(0, 1500))){}else{

            if(!round(random(0,5))){

                var l = world[0].length-16;
                for(var i = 0; i < 10; i++){
                    for(var j = 0; j < 16; j++){
                        world[i+20][j+l]=stronghold[i][j];
                        if(world[i+20][j+l]===58&&!round(random(0,5))){
                            specs[i+20][j+l]=1;
                        }
                    }
                }

            }else if(d>18&&d<30){

                    var l = world[0].length;

                    var dungeonCenter = round(random(2, 4));

                    var dungeonLength = dungeonCenter*2+1;

                    var dungeonHeight = round(random(4, 6));

                    for(var i = l-dungeonLength; i < l; i++){

                for(var j = d; j < d+dungeonHeight; j++){

            world[j][i]=0;

            if(i===l-dungeonLength||i===l-1){

                world[j][i]=4;

            }

            if(i===l-dungeonLength-1||i===l-2){

                if(round(random(0, 0))){}else{

                    var durr = i;

                    var hurr = d+dungeonHeight-1;

                    world[d+dungeonHeight-1][i]=34;

                    specs[d+dungeonHeight-1][i]=[

                        [[0,0,0,0],

                        [0,0,0,0],

                        [0,0,0,0],

                        [0,0,0,0],

                        [0,0,0,0],

                        [0,0,0,0]],

                        [[0,0,0,0],

                        [0,0,0,0],

                        [0,0,0,0],

                        [0,0,0,0],

                        [0,0,0,0],

                        [0,0,0,0]],

                        [[0,0,0,0],

                        [0,0,0,0],

                        [0,0,0,0],

                        [0,0,0,0],

                        [0,0,0,0],

                        [0,0,0,0]]];

                    for(var g = 0; g < 6; g++){

                        for(var h = 0; h < 4; h++){

                            if(!round(random(0,5))){

                    var item;

                    var itemStacks;

                    var itemSeed = random(0, 100);

                    if(itemSeed<=100){

item=0;itemStacks=0;

if(itemSeed<25){

    if(itemSeed<12){

        item=302;itemStacks=round(random(1, 4));

    }else{

        item=42;itemStacks=round(random(2, 8));

    }

}else if(itemSeed<50){

    if(itemSeed<39){

        item=303;itemStacks=round(random(1, 4));

    }else{

        item=347;itemStacks=round(random(1, 4));

    }

}else if(itemSeed<75){

    if(itemSeed<63){

        item=309;itemStacks=1;

    }else{

        item=314;itemStacks=1;

    }

}else{

    itemStacks=1;

    if(itemSeed<80){

        item=320;

    }else if(itemSeed<85){

        item=321;

    }else if(itemSeed<90){

        item=322;

    }else if(itemSeed<95){

        item=323;

    }else{

        item=305;itemStacks=round(random(1,5));

    }

}

                    }

                    specs[hurr][durr][0][g][h]=item;

                    specs[hurr][durr][1][g][h]=itemStacks;

                    if(itemDurabilities[item]){

                    specs[hurr][durr][2][g][h]=itemDurabilities[item];

                    }

                            }

                        }

                    }

                }

            }

                }

                    if(round(random(0,1))){

                        world[d+dungeonHeight][i]=4;

                    }else{

                        world[d+dungeonHeight][i]=35;

                    }

                    }world[d+dungeonHeight-1][l-dungeonCenter-1]=36;

                }

            }

        if(d < 14){

            if(d===0){

                append(world[d], 10);

            }else{

                append(world[d], 0);

            }

            

        }else if(d === 14&&curBiome!==1){

            append(world[d], 2);

        }else if(d > 14 && d < 18&&curBiome!==1){

            append(world[d], 3);

        }else if(d > 17 && d < 38){

            append(world[d], 1);

        }else if(d > 37){

            append(world[d], 10);

        }

        if(d > 13 && d < 18 && curBiome===1){

            append(world[d], 20);

        }

        if(!round(random(0,1))&&d === 13&&biomes[biomes.length-1]===0){

            append(world[d], 47);

        }

        if(round(random(0,10))){}else if(curBiome===2){

            if(d === 14){

                world[d][world[0].length-5]=11;

                world[d][world[0].length-4]=11;

                world[d][world[0].length-3]=11;

                world[d][world[0].length-2]=11;

                world[d][world[0].length-1]=11;

                world[d+1][world[0].length-3]=11;

                world[d+1][world[0].length-2]=11;

                if(!round(random(0,5))){

                    for(var i = 0; i < round(random(2,4)); i++){

                        world[d-1-i][world[0].length-6]=41;

                    }

                }

            }

        }

        if(round(random(0, 5))){}else{

            if(d === 13&&curBiome === 1){

                world[d][world[0].length]=31;

                world[d-1][world[0].length]=31;

                world[d-2][world[0].length]=31;

            }

        }

        if(round(random(0,4))){}else if(curBiome!==1&&world[14][world[0].length]!==11){

            if(d === 13&&world[d+1][world[0].length]!==11){

                world[d][world[0].length]=7;

                world[d-1][world[0].length]=7;

                world[d-2][world[0].length]=7;

                world[d-3][world[0].length]=7;

                world[d-2][world[0].length-2]=9;

                world[d-2][world[0].length-1]=9;

                world[d-2][world[0].length+1]=9;

                world[d-2][world[0].length+2]=9;

                world[d-3][world[0].length-2]=9;

                world[d-3][world[0].length-1]=9;

                world[d-3][world[0].length+1]=9;

                world[d-3][world[0].length+2]=9;

                world[d-4][world[0].length-2]=9;

                world[d-4][world[0].length-1]=9;

                world[d-4][world[0].length]=9;

                world[d-4][world[0].length+1]=9;

                world[d-4][world[0].length+2]=9;

                world[d-5][world[0].length-1]=9;

                world[d-5][world[0].length]=9;

                world[d-5][world[0].length+1]=9;

            }

        }

        if(d<37&&d>30 && !round(random(0,50))){

            for(var i = 0; i < 6; i++){

                world[d][world[d].length-i-1]=13;

            }

            for(var i = round(random(1,2)); i < random(3,5); i++){

                world[d+1][world[d].length-i-1]=13;

            }

        }

        if(round(random(0, 5))){}else{

            
            if(!round(random(0, 15))&&d>30&&d<38){
                world[d][world[0].length]=49;
            }
            

            if(round(random(0, 3))){}else{

                if(d > 18 && d < 38){

                    c = round(random(0, 5));

                    switch(c){

                        case 1:

                            world[d][world[0].length]=22;

                            break;

                        case 2:

                            world[d][world[0].length]=22;

                            world[d][world[0].length-1]=22;

                            break;

                        case 3:

                            world[d][world[0].length]=22;

                            world[d][world[0].length-1]=22;

                            world[d+1][world[0].length]=22;

                            world[d+1][world[0].length-1]=1;

                            break;

                        case 4:

                            world[d][world[0].length]=22;

                            world[d][world[0].length-1]=22;

                            world[d+1][world[0].length]=22;

                            world[d+1][world[0].length-1]=22;

                    }

                }

            }

            if(round(random(0, 8))){}else{

                if(d > 18 && d < 38){

                    c = round(random(0, 9));

                    switch(c){

                        case 1:

                            world[d][world[0].length]=23;

                            break;

                        case 2:

                            world[d][world[0].length]=23;

                            world[d][world[0].length-1]=23;

                            break;

                        case 3:

                            world[d][world[0].length]=23;

                            world[d][world[0].length-1]=23;

                            world[d+1][world[0].length]=23;

                            world[d+1][world[0].length-1]=1;

                            break;

                        case 4:

                            world[d][world[0].length]=23;

                            world[d][world[0].length-1]=23;

                            world[d+1][world[0].length]=23;

                            world[d+1][world[0].length-1]=23;

                    }

                }

            }

            if(round(random(0, 8))){}else{

                if(d > 28 && d < 38){

                    c = round(random(0, 1));

                    switch(c){

                        case 1:

                            world[d][world[0].length]=24;

                            break;

                        case 2:

                            world[d][world[0].length]=24;

                            world[d][world[0].length-1]=24;

                            break;

                        case 3:

                            world[d][world[0].length]=24;

                            world[d][world[0].length-1]=24;

                            world[d+1][world[0].length]=24;

                            world[d+1][world[0].length-1]=1;

                            break;

                        case 4:

                            world[d][world[0].length]=24;

                            world[d][world[0].length-1]=24;

                            world[d+1][world[0].length]=24;

                            world[d+1][world[0].length-1]=24;

                    }

                }

            }

            if(round(random(0, 8))){}else{

                if(d > 18 && d < 38){

                    c = round(random(0, 5));

                    switch(c){

                        case 1:

                            world[d][world[0].length]=23;

                            break;

                        case 2:

                            world[d][world[0].length]=23;

                            world[d][world[0].length-1]=23;

                            break;

                        case 3:

                            world[d][world[0].length]=23;

                            world[d][world[0].length-1]=23;

                            world[d+1][world[0].length]=23;

                            world[d+1][world[0].length-1]=1;

                            break;

                        case 4:

                            world[d][world[0].length]=23;

                            world[d][world[0].length-1]=23;

                            world[d+1][world[0].length]=23;

                            world[d+1][world[0].length-1]=23;

                    }

                }

            }

            if(round(random(0, 12))){}else{

                if(d > 33 && d < 38){

                    c = round(random(0, 5));

                    switch(c){

                        case 1:

                            world[d][world[0].length]=25;

                            break;

                        case 2:

                            world[d][world[0].length]=25;

                            world[d][world[0].length-1]=25;

                            break;

                        case 3:

                            world[d][world[0].length]=25;

                            world[d][world[0].length-1]=25;

                            world[d+1][world[0].length]=25;

                            world[d+1][world[0].length-1]=1;

                            break;

                        case 4:

                            world[d][world[0].length]=25;

                            world[d][world[0].length-1]=25;

                            world[d+1][world[0].length]=25;

                            world[d+1][world[0].length-1]=25;

                    }

                }

            }

            if(round(random(0, 2))){}else{

                if(d > 33 && d < 38){

                    c = round(random(0, 5));

                    switch(c){

                        case 1:

                            world[d][world[0].length]=43;

                            break;

                        case 2:

                            world[d][world[0].length]=43;

                            world[d][world[0].length-1]=43;

                            break;

                        case 3:

                            world[d][world[0].length]=43;

                            world[d][world[0].length-1]=43;

                            world[d+1][world[0].length]=43;

                            world[d+1][world[0].length-1]=1;

                            break;

                        case 4:

                            world[d][world[0].length]=43;

                            world[d][world[0].length-1]=43;

                            world[d+1][world[0].length]=43;

                            world[d+1][world[0].length-1]=43;

                    }

                }

            }

            

            if(round(random(0, 20))){}else{

                if(d > 33 && d < 38){

                    c = round(random(0, 5));

                    switch(c){

                        case 1:

                            world[d][world[0].length]=26;

                            break;

                        case 2:

                            world[d][world[0].length]=26;

                            world[d][world[0].length-1]=26;

                            break;

                        case 3:

                            world[d][world[0].length]=26;

                            world[d][world[0].length-1]=26;

                            world[d+1][world[0].length]=26;

                            world[d+1][world[0].length-1]=1;

                            break;

                        case 4:

                            world[d][world[0].length]=26;

                            world[d][world[0].length-1]=26;

                            world[d+1][world[0].length]=26;

                            world[d+1][world[0].length-1]=26;

                    }

                }

            }

            if(d>20&&d<36){

                if(round(random(0, 13))){}else{

                    world[d-2][world[0].length-1]=3;

                    world[d-2][world[0].length]=3;

                    world[d-2][world[0].length+1]=3;

                    world[d-1][world[0].length-2]=3;

                    world[d-1][world[0].length-1]=3;

                    world[d-1][world[0].length]=3;

                    world[d-1][world[0].length+1]=3;

                    world[d-1][world[0].length+2]=3;

                    world[d][world[0].length-2]=3;

                    world[d][world[0].length-1]=3;

                    world[d][world[0].length]=3;

                    world[d][world[0].length+1]=3;

                    world[d][world[0].length+2]=3;

                    world[d+1][world[0].length-2]=3;

                    world[d+1][world[0].length-1]=3;

                    world[d+1][world[0].length]=3;

                    world[d+1][world[0].length+1]=3;

                    world[d+1][world[0].length+2]=3;

                    world[d+2][world[0].length-1]=3;

                    world[d+2][world[0].length]=3;

                    world[d+2][world[0].length+1]=3;

                }

            }

            if(d>20&&d<36){

                if(round(random(0, 13))){}else{

                    world[d-2][world[0].length-1]=21;

                    world[d-2][world[0].length]=21;

                    world[d-2][world[0].length+1]=21;

                    world[d-1][world[0].length-2]=21;

                    world[d-1][world[0].length-1]=21;

                    world[d-1][world[0].length]=21;

                    world[d-1][world[0].length+1]=21;

                    world[d-1][world[0].length+2]=21;

                    world[d][world[0].length-2]=21;

                    world[d][world[0].length-1]=21;

                    world[d][world[0].length]=21;

                    world[d][world[0].length+1]=21;

                    world[d][world[0].length+2]=21;

                    world[d+1][world[0].length-2]=21;

                    world[d+1][world[0].length-1]=21;

                    world[d+1][world[0].length]=21;

                    world[d+1][world[0].length+1]=21;

                    world[d+1][world[0].length+2]=21;

                    world[d+2][world[0].length-1]=21;

                    world[d+2][world[0].length]=21;

                    world[d+2][world[0].length+1]=21;

                }

            }

        }}

}}

};

var spawnEntity = function(x, y, t, t2){

    append(entity.x, x);

    append(entity.y, y);

    append(entity.type, t);

    append(entity.type2, t2);

    entity.length++;

};

var drawBlocks = function(x, g, h){

    noStroke();

    strokeWeight(2);

    switch(x){

    case 1:

        fill(122, 122, 122);

        rect(g, h, 20, 20);

        break;

    case 2:

        fill(130, 56, 0);

        rect(g, h, 20, 20);

        

        fill(0, 200, 0);

        rect(g, h, 20, 5);

        break;

    case 3:

        fill(130, 56, 0);

        rect(g, h, 20, 20);

        break;

    case 4:

        fill(122, 122, 122);

        strokeWeight(2);

        stroke(71, 71, 71);

        rect(g, h, 10, 10);

        rect(g+10, h+10, 10, 10);

        rect(g, h+10, 10, 10);

        rect(g+10, h, 10, 10);

        noStroke();

        break;

    case 5:

        fill(201, 153, 80);

        rect(g, h, 20, 20);

        stroke(120, 83, 44);

        strokeWeight(2);

        line(g, h, g+20, h);

        line(g, h+5, g+20, h+5);

        line(g, h+10, g+20, h+10);

        line(g, h+15, g+20, h+15);

        noStroke();

        break;

    case 6:

        fill(181, 97, 58);

        rect(g, h, 20, 20);

        stroke(237, 209, 176);

        line(g, h, g+20, h);

        line(g+5, h, g+5, h+3);

        line(g+15, h, g+15, h+3);

        line(g, h+5, g+20, h+5);

        line(g+10, h+5, g+10, h+8);

        line(g, h+10, g+20, h+10);

        line(g+5, h+10, g+5, h+13);

        line(g+15, h+10, g+15, h+13);

        line(g, h+15, g+20, h+15);

        line(g+10, h+15, g+10, h+18);

        noStroke();

        break;

    case 7:

        fill(107, 50, 0);

        rect(g, h, 20, 20);

        stroke(59, 32, 0);

        strokeWeight(2);

        line(g, h, g, h+18);

        line(g+20, h, g+20, h+18);

        noStroke();

        break;

    case 8:

        fill(40, 3, 82);

        rect(g, h, 20, 20);

        break;

    case 9:

        fill(8, 168, 0);

        rect(g, h, 5, 5);

        rect(g+10, h, 5, 5);

        rect(g+5, h+5, 5, 5);

        rect(g+15, h+5, 5, 5);

        rect(g, h+10, 5, 5);

        rect(g+10, h+10, 5, 5);

        rect(g+5, h+15, 5, 5);

        rect(g+15, h+15, 5, 5);

        break;

    case 11:

        fill(120, 120, 120);

        ellipse(g+10, h+19, 15, 8);

        rect(g+2, h+4, 16, 15);

        ellipse(g+10, h+3, 15, 8);

        fill(0, 104, 250);

        ellipse(g+10, h+3, 12, 6);

        break;

    case 13:

        fill(120, 120, 120);

        ellipse(g+10, h+19, 15, 8);

        rect(g+2, h+4, 16, 15);

        ellipse(g+10, h+3, 15, 8);

        fill(255, 149, 0);

        ellipse(g+10, h+3, 12, 6);

        break;

    case 15:

        fill(255, 0, 0);

        rect(g, h, 20, 20);

        fill(255, 255, 255);

        rect(g, h+5, 20, 10);

        break;

    case 16:

        fill(107, 50, 0);

        rect(g+9, h+12, 2, 8);

        fill(8, 168, 0);

        rect(g+5, h+7, 10, 5);

        rect(g+7, h+5, 5, 10);

        break;

    case 17:

        fill(89, 89, 89);

        triangle(g+8, h+20, g+20, h+8, g+20, h+20);

        fill(120);

        ellipse(g+6, h+5, 8, 8);

        fill(this.get(g, h));

        ellipse(g+8, h+6, 7, 7);

        break;

    case 19:

        fill(99, 21, 2);

        rect(g, h, 20, 20);

        break;

    case 20:

        fill(255, 230, 166);

        rect(g, h, 20, 20);

        break;

    case 21:

        fill(136, 127, 140);

        rect(g, h, 20, 20);

        break;

    case 22:

        fill(122, 122, 122);

        rect(g, h, 20, 20);

        fill(0, 0, 0);

        ellipse(g+5, h+5, 4, 4);

        ellipse(g+14, h+6, 5, 5);

        ellipse(g+10, h+9, 3, 3);

        ellipse(g+5, h+12, 6, 4);

        ellipse(g+14, h+15, 9, 7);

        break;

    case 23:

        fill(122, 122, 122);

        rect(g, h, 20, 20);

        fill(191, 155, 82);

        ellipse(g+5, h+5, 4, 4);

        ellipse(g+14, h+6, 5, 5);

        ellipse(g+10, h+9, 3, 3);

        ellipse(g+5, h+12, 6, 4);

        ellipse(g+14, h+15, 9, 7);

        break;

    case 24:

        fill(122, 122, 122);

        rect(g, h, 20, 20);

        fill(255, 234, 0);

        ellipse(g+5, h+5, 4, 4);

        ellipse(g+14, h+6, 5, 5);

        ellipse(g+10, h+9, 3, 3);

        ellipse(g+5, h+12, 6, 4);

        ellipse(g+14, h+15, 9, 7);

        break;

    case 25:

        fill(122, 122, 122);

        rect(g, h, 20, 20);

        fill(0, 21, 255);

        ellipse(g+5, h+5, 4, 4);

        ellipse(g+14, h+6, 5, 5);

        ellipse(g+10, h+9, 3, 3);

        ellipse(g+5, h+12, 6, 4);

        ellipse(g+14, h+15, 9, 7);

        break;

    case 26:

        fill(122, 122, 122);

        rect(g, h, 20, 20);

        fill(0, 238, 255);

        ellipse(g+5, h+5, 4, 4);

        ellipse(g+14, h+6, 5, 5);

        ellipse(g+10, h+9, 3, 3);

        ellipse(g+5, h+12, 6, 4);

        ellipse(g+14, h+15, 9, 7);

        break;

    case 27:

        fill(201, 153, 80);

        rect(g, h, 20, 20);

        stroke(120, 83, 44);

        strokeWeight(2);

        line(g, h, g+20, h);

        line(g, h+5, g+20, h+5);

        line(g, h+10, g+20, h+10);

        line(g, h+15, g+20, h+15);

        line(g, h, g, h+20);

        line(g+20, h, g+20, h+20);

        fill(255, 230, 199);

        triangle(g+1, h, g+10, h+8, g+19, h);

        stroke(122, 122, 122);

        line(g+5, h+10, g+5, h+17);

        line(g+15, h+8, g+15, h+15);

        noStroke();

        break;

    case 28:

        fill(201, 153, 80);

        stroke(120, 83, 44);

        rect(g+3, h, 13, 20);

        line(g+3, h+10, g+15, h+10);

        fill(66, 66, 66);

        stroke(66, 66, 66);

        strokeWeight(3);

        line(g+15, h+12, g+13, h+12);

        strokeWeight(2);

        break;

    case 30:

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g, h, g, h+20);

        line(g+20, h, g+20, h+20);

        line(g, h+5, g+20, h+5);

        line(g, h+11, g+20, h+11);

        line(g, h+17, g+20, h+17);

        strokeWeight(2);

        break;

    case 31:

        stroke(0, 0, 0);

        line(g+1, h+2, g+18, h+2);

        line(g+1, h+6, g+18, h+6);

        line(g+1, h+10, g+18, h+10);

        line(g+1, h+14, g+18, h+14);

        line(g+1, h+18, g+18, h+18);

        fill(0, 130, 0);noStroke();

        rect(g+2, h, 16, 20);

        break;

        

    case 32:

        strokeWeight(1);

        fill(199, 230, 255);

        rect(g, h, 20, 20);

        stroke(255);

        line(g+5, h+15,g+10,h+10);

        line(g+3, h+8, g+8, h+3);

        stroke(92, 171, 255);

        line(g+13, h+18, g+18, h+13);

        line(g+10, h+8, g+15, h+3);

        break;

    case 33:

        strokeWeight(2);

        stroke(71, 71, 71);

        fill(168, 168, 168);

        rect(g, h, 20, 10);

        fill(0);

        ellipse(g+10, h+10, 13, 11);

        fill(122, 122, 122);

        rect(g, h+10, 20, 10);

        fill(0);

        var d = [], e = [];

        for(var i = 0; i < 4; i++){

            d[i] = sin(i*60+90)*6.5+g+10;

            e[i] = cos(i*60+90)*6.5+h+20;

        }

        bezier(d[0],e[0],d[1],e[1],d[2],e[2],d[3],e[3]);

        noStroke();

        break;

    case 34:

        fill(184, 133, 57);

        stroke(120, 83, 44);

        rect(g+1, h, 18, 19);

        line(g+1, h+5, g+18, h+5);

        line(g+1, h+10, g+18, h+10);

        line(g+1, h+15, g+18, h+15);

        strokeWeight(1);

        fill(225);

        stroke(200);

        rect(g+8, h+3, 3, 6);

        break;

    case 35:

        fill(122, 122, 122);

        strokeWeight(2);

        stroke(45, 87, 11);

        rect(g, h, 10, 10);

        rect(g+10, h, 10, 10);

        rect(g, h+10, 10, 10);

        rect(g+10, h+10, 10, 10);

        noStroke();

        fill(166, 194, 134);

        triangle(g+2, h, g+6, h, g+4, h+5);

        triangle(g+13, h, g+17, h, g+15, h+10);

        triangle(g+8, h+11, g+13, h+11, g+11, h+18);

        triangle(g+2, h+13, g+7, h+13, g+4, h+19);

        break;

    case 36:

        stroke(4, 68, 77);

        noFill();

        rect(g, h, 20, 20);

        line(g+5, h, g+5, h+18);

        line(g+15, h, g+15, h+18);

        line(g, h+5, g+18, h+5);

        line(g, h+15, g+18, h+15);

        break;

    case 37:

        fill(230);

        stroke(140);

        rect(g, h, 20, 20);

        break;

    case 38:

        fill(255, 234, 0);

        stroke(209, 157, 0);

        rect(g, h, 20, 20);

        break;

    case 39:

        stroke(0, 148, 148);

        fill(0, 255, 255);

        rect(g, h, 20, 20);

        break;

    case 40:

        strokeWeight(4);

        stroke(120, 83, 44);

        line(g+10, h+8, g+10, h+17);

        stroke(255, 251, 181);

        point(g+10, h+6);

        break;

    case 41:

        fill(139, 235, 115);

        quad(g+1, h+13, g+6, h+17, g+20, h+3, g+12, h-3);

        fill(167, 255, 145);

        quad(g+3, h+15, g+6, h+20, g+20, h+5, g+14, h+0);

        break;

    case 42:

        fill(219, 0, 0);

        stroke(100, 0, 0);

        triangle(g+10, h+5, g+18, h+15, g+2, h+15);

        break;

    case 43:

        fill(122, 122, 122);

        rect(g, h, 20, 20);

        fill(230, 0, 0);

        ellipse(g+5, h+5, 4, 4);

        ellipse(g+14, h+6, 5, 5);

        ellipse(g+10, h+9, 3, 3);

        ellipse(g+5, h+12, 6, 4);

        ellipse(g+14, h+15, 9, 7);

        break;

    case 44:

        strokeWeight(4);

        stroke(120, 83, 44);

        line(g+10, h+8, g+10, h+17);

        fill(255, 0, 0);

        noStroke();

        ellipse(g+10, h+6, 7, 7);

        stroke(255, 181, 181);

        point(g+10, h+6);

        break;

    case 45:

        fill(255, 152, 92);

        rect(g,h,20,20);

        stroke(181, 91, 38);

        fill(255, 205, 176);

        quad(g+5, h+1, g+1, h+5, g+15, h+19, g+19, h+15);

        quad(g+15, h+1, g+19, h+5, g+5, h+19, g+1, h+15);

        fill(245);

        stroke(225);

        rect(g+5, h+5, 10, 10);

        stroke(255, 0, 0);

        point(g+10, h+10);

        point(g+7, h+7);

        point(g+13, h+7);

        stroke(0, 200, 0);

        point(g+10, h+7);

        point(g+13, h+13);

        stroke(255, 200, 0);

        point(g+10, h+13);

        point(g+13, h+10);

        point(g+7, h+10);

        point(g+7, h+13);

        break;

    case 47:

        fill(0, 200, 0);

        rect(g,h+10,3,10);

        rect(g+5,h+5,3,15);

        rect(g+10,h+6,3,14);

        rect(g+15,h+11,3,9);

        break;

    case 48:

        fill(200, 225, 0);

        ellipse(g+15,h+15,5,5);

        ellipse(g+5,h+10,3,3);

        ellipse(g+10,h+5,2,2);

        ellipse(g+15,h+7,4,4);

        break;

    case 49:

        fill(122, 122, 122);

        rect(g, h, 20, 20);

        fill(0, 225, 0);

        ellipse(g+5, h+5, 4, 4);

        ellipse(g+14, h+6, 5, 5);

        ellipse(g+10, h+9, 3, 3);

        ellipse(g+5, h+12, 6, 4);

        ellipse(g+14, h+15, 9, 7);

        break;

    case 50:

        stroke(0, 150, 0);

        fill(0, 255, 0);

        rect(g, h, 20, 20);

        quad(g+10,h,g+20,h+10,g+10,h+20,g,h+10);

        rect(g+5,h+5,10,10);

        break;

    case 51:

        stroke(150, 0, 0);

        fill(255, 0, 0);

        rect(g, h, 20, 20);

        break;

    case 52:

        stroke(0);

        fill(50);

        rect(g, h, 20, 20);

        break;

    case 53:

        stroke(0, 0, 150);

        fill(0, 0, 255);

        rect(g, h, 20, 20);

        break;
    case 54:
        fill(245);
        rect(g, h, 20, 20);
        break;
    case 55:

        fill(255);

        stroke(225);

        arc(g+15,h+10,10,4,190,350);

        stroke(200, 0, 0);

        fill(255, 0, 0);

        rect(g,h+10,20,7);

        break;
    case 57:

        fill(100, 0, 50);

        rect(g, h, 20, 20);

        stroke(75,0,25);

        line(g, h, g+20, h);

        line(g+5, h, g+5, h+3);

        line(g+15, h, g+15, h+3);

        line(g, h+5, g+20, h+5);

        line(g+10, h+5, g+10, h+8);

        line(g, h+10, g+20, h+10);

        line(g+5, h+10, g+5, h+13);

        line(g+15, h+10, g+15, h+13);

        line(g, h+15, g+20, h+15);

        line(g+10, h+15, g+10, h+18);

        noStroke();

        break;
    case 58:
        stroke(0, 97, 92);
        fill(255, 255, 204);
        rect(g,h,20,20);
        fill(0);
        rect(g+7,h+5,6,10);
        break;
    case 59:
        fill(255, 255, 204);
        rect(g,h,20,20);
        break;
    case 60:
        fill(45, 0, 45);
        rect(g,h,20,20);
        break;
    case 61:
        stroke(80);
        fill(122, 122, 122);
        rect(g, h, 20, 20);
        line(g,h+10,g+18,h+10);
        line(g+10,h+10,g+10,h+18);
        break;
    case 300:

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g+1, h+19, g+19, h+1);

        break;

    case 301:

        stroke(0, 0, 0);

        fill(59, 54, 59);

        ellipse(g+10, h+10, 15, 17);

        break;

    case 302:

        stroke(163, 163, 163);

        fill(209, 209, 209);

        rect(g, h+10, 20, 10);

        quad(g, h+9, g+5, h+6, g+15, h+6, g+19, h+9);

        break;

    case 303:

        stroke(189, 151, 0);

        fill(255, 200, 0);

        rect(g, h+10, 20, 10);

        quad(g, h+9, g+5, h+6, g+15, h+6, g+19, h+9);

        break;

    case 304:

        stroke(0, 0, 117);

        fill(0, 21, 255);

        ellipse(g+10, h+10, 15, 17);

        break;

    case 305:

        stroke(0, 148, 148);

        fill(0, 255, 255);

        quad(g+10, h, g+20, h+10, g+10, h+20, g, h+10);

        rect(g+5, h+5, 10, 10);

        break;

    case 306:

        fill(89, 89, 89);

        triangle(g+1, h+20, g+20, h+1, g+20, h+20);

        break;

    case 307:

        fill(207, 147, 44);

        stroke(120, 83, 44);

        ellipse(g+10, h+10, 20, 20);

        noStroke();

        fill(this.get(g, h));

        ellipse(g+7, h+13, 22, 22);

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g+1, h+19, g+15, h+5);

        strokeWeight(2);

        break;

    case 308:

        fill(150);

        stroke(120);

        ellipse(g+10, h+10, 20, 20);

        noStroke();

        fill(this.get(g, h));

        ellipse(g+7, h+13, 22, 22);

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g+1, h+19, g+15, h+5);

        strokeWeight(2);

        break;

    case 309:

        fill(230);

        stroke(140);

        ellipse(g+10, h+10, 20, 20);

        noStroke();

        fill(this.get(g, h));

        ellipse(g+7, h+13, 22, 22);

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g+1, h+19, g+15, h+5);

        strokeWeight(2);

        break;

    case 310:

        fill(255, 234, 0);

        stroke(209, 157, 0);

        ellipse(g+10, h+10, 20, 20);

        noStroke();

        fill(this.get(g, h));

        ellipse(g+7, h+13, 22, 22);

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g+1, h+19, g+15, h+5);

        strokeWeight(2);

        break;

    case 311:

        stroke(0, 148, 148);

        fill(0, 255, 255);

        ellipse(g+10, h+10, 20, 20);

        noStroke();

        fill(this.get(g, h));

        ellipse(g+7, h+13, 22, 22);

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g+1, h+19, g+15, h+5);

        strokeWeight(2);

        break;

    case 312:

        fill(207, 147, 44);

        stroke(120, 83, 44);

        quad(g+3, h+13, g+7, h+17, g+20, h+5, g+15, h);

        triangle(g+20, h+4, g+20, h, g+16, h);

        noStroke();

        quad(g+5, h+15, g+5, h+15, g+19, h+4, g+16, h+1);

        triangle(g+16, h+1, g+19, h+4, g+19, h+1);

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g, h+20, g+5, h+15);

        line(g+1, h+11, g+9, h+19);

        strokeWeight(2);

        break;

    case 313:

        fill(150);

        stroke(120);

        quad(g+3, h+13, g+7, h+17, g+20, h+5, g+15, h);

        triangle(g+20, h+4, g+20, h, g+16, h);

        noStroke();

        quad(g+5, h+15, g+5, h+15, g+19, h+4, g+16, h+1);

        triangle(g+16, h+1, g+19, h+4, g+19, h+1);

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g, h+20, g+5, h+15);

        line(g+1, h+11, g+9, h+19);

        strokeWeight(2);

        break;

    case 314:

        fill(230);

        stroke(140);

        quad(g+3, h+13, g+7, h+17, g+20, h+5, g+15, h);

        triangle(g+20, h+4, g+20, h, g+16, h);

        noStroke();

        quad(g+5, h+15, g+5, h+15, g+19, h+4, g+16, h+1);

        triangle(g+16, h+1, g+19, h+4, g+19, h+1);

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g, h+20, g+5, h+15);

        line(g+1, h+11, g+9, h+19);

        strokeWeight(2);

        break;

    case 315:

        fill(255, 234, 0);

        stroke(209, 157, 0);

        quad(g+3, h+13, g+7, h+17, g+20, h+5, g+15, h);

        triangle(g+20, h+4, g+20, h, g+16, h);

        noStroke();

        quad(g+5, h+15, g+5, h+15, g+19, h+4, g+16, h+1);

        triangle(g+16, h+1, g+19, h+4, g+19, h+1);

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g, h+20, g+5, h+15);

        line(g+1, h+11, g+9, h+19);

        strokeWeight(2);

        break;

    case 316:

        stroke(0, 148, 148);

        fill(0, 255, 255);

        quad(g+3, h+13, g+7, h+17, g+20, h+5, g+15, h);

        triangle(g+20, h+4, g+20, h, g+16, h);

        noStroke();

        quad(g+5, h+15, g+5, h+15, g+19, h+4, g+16, h+1);

        triangle(g+16, h+1, g+19, h+4, g+19, h+1);

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g, h+20, g+5, h+15);

        line(g+1, h+11, g+9, h+19);

        strokeWeight(2);

        break;

    case 317:

        noFill();

        stroke(191, 103, 103);

        strokeWeight(14);

        bezier(g+3, h+15, g+8, h+13, g+13, h+8, g+15, h+3);

        stroke(255, 171, 171);

        strokeWeight(10);

        bezier(g+3, h+15, g+8, h+13, g+13, h+8, g+15, h+3);

        break;

    case 318:

        stroke(100);

        fill(150);

        triangle(g+10, h+5, g+20, h+15, g, h+15);

        break;

    case 319:

        noFill();

        stroke(148, 113, 61);

        strokeWeight(14);

        bezier(g+3, h+15, g+8, h+13, g+13, h+8, g+15, h+3);

        stroke(207, 175, 95);

        strokeWeight(10);

        bezier(g+3, h+15, g+8, h+13, g+13, h+8, g+15, h+3);

        break;

    case 320:

        fill(230);

        stroke(140);

        rect(g, h, 20, 20, 10);

        noStroke();

        fill(this.get(g, h));

        rect(g+5, h+8, 11, 15, 5);

        break;

    case 321:

        fill(230);

        stroke(140);

        rect(g, h, 20, 5, 10);

        rect(g, h, 20, 20, 10);

        break;

    case 322:

        fill(230);

        stroke(140);

        rect(g, h, 8, 20, 10);

        rect(g+12, h, 8, 20, 10);

        rect(g, h, 20, 10, 10);

        break;

    case 323:

        fill(230);

        stroke(140);

        rect(g, h+10, 8, 10, 10);

        rect(g+12, h+10, 8, 10, 10);

        break;

    case 324:

        fill(255, 234, 0);

        stroke(209, 157, 0);

        rect(g, h, 20, 20, 10);

        noStroke();

        fill(this.get(g, h));

        rect(g+5, h+8, 11, 15, 5);

        break;

    case 325:

        fill(255, 234, 0);

        stroke(209, 157, 0);

        rect(g, h, 20, 5, 10);

        rect(g, h, 20, 20, 10);

        break;

    case 326:

        fill(255, 234, 0);

        stroke(209, 157, 0);

        rect(g, h, 8, 20, 10);

        rect(g+12, h, 8, 20, 10);

        rect(g, h, 20, 10, 10);

        break;

    case 327:

        fill(255, 234, 0);

        stroke(209, 157, 0);

        rect(g, h+10, 8, 10, 10);

        rect(g+12, h+10, 8, 10, 10);

        break;

    case 328:

        stroke(0, 148, 148);

        fill(0, 255, 255);

        rect(g, h, 20, 20, 10);

        noStroke();

        fill(this.get(g, h));

        rect(g+5, h+8, 11, 15, 5);

        break;

    case 329:

        stroke(0, 148, 148);

        fill(0, 255, 255);

        rect(g, h, 20, 5, 10);

        rect(g, h, 20, 20, 10);

        break;

    case 330:

        stroke(0, 148, 148);

        fill(0, 255, 255);

        rect(g, h, 8, 20, 10);

        rect(g+12, h, 8, 20, 10);

        rect(g, h, 20, 10, 10);

        break;

    case 331:

        stroke(0, 148, 148);

        fill(0, 255, 255);

        rect(g, h+10, 8, 10, 10);

        rect(g+12, h+10, 8, 10, 10);

        break;

    case 332:

        fill(189, 120, 0);

        stroke(125, 75, 0);

        rect(g, h, 20, 20, 10);

        noStroke();

        fill(this.get(g, h));

        rect(g+5, h+8, 11, 15, 5);

        break;

    case 333:

        fill(189, 120, 0);

        stroke(125, 75, 0);

        rect(g, h, 20, 5, 10);

        rect(g, h, 20, 20, 10);

        break;

    case 334:

        fill(189, 120, 0);

            stroke(125, 75, 0);

        rect(g, h, 8, 20, 10);

        rect(g+12, h, 8, 20, 10);

        rect(g, h, 20, 10, 10);

        break;

    case 335:

        fill(189, 120, 0);

            stroke(125, 75, 0);

        rect(g, h+10, 8, 10, 10);

        rect(g+12, h+10, 8, 10, 10);

        break;

    case 336:

        fill(125, 75, 0);

        ellipse(g+10, h+10, 15, 20);

        triangle(g, h+1, g+10, h+3, g+5, h+15);

        triangle(g+20, h+1, g+10, h+3, g+15, h+15);

        triangle(g, h+19, g+10, h+17, g+5, h+5);

        triangle(g+20, h+19, g+10, h+17, g+15, h+5);

        fill(189, 120, 0);

        ellipse(g+10, h+10, 11, 16);

        triangle(g+3, h+3.5, g+10, h+3, g+5, h+15);

        triangle(g+17, h+3.5, g+10, h+3, g+15, h+15);

        triangle(g+3, h+16.5, g+10, h+17, g+5, h+5);

        triangle(g+17, h+16.5, g+10, h+17, g+15, h+5);

        break;

    case 337:

        fill(120, 120, 120);

        ellipse(g+10, h+19, 15, 8);

        rect(g+2, h+4, 16, 15);

        ellipse(g+10, h+3, 15, 8);

        fill(89);

        ellipse(g+10, h+3, 12, 6);

        break;

    case 338:

        fill(120, 120, 120);

        ellipse(g+10, h+19, 15, 8);

        rect(g+2, h+4, 16, 15);

        ellipse(g+10, h+3, 15, 8);

        fill(255);

        ellipse(g+10, h+3, 12, 6);

        break;

    case 339:

        fill(255, 255, 255);

        stroke(225);

        quad(g, h+10, g+5, h, g+20, h+10, g+15, h+20);

        break;

    case 340:

        fill(100);

        triangle(g+5, h+5, g+10, h, g+15, h+5);

        fill(255);

        rect(g+7, h+5, 6, 13);

        fill(255, 0, 0);

        triangle(g+7, h+5, g+13, h+5, g+7, h+10);

        triangle(g+13, h+10, g+13, h+15, g+7, h+15);

        quad(g+7, h+15, g+13, h+15, g+10, h+18, g+7, h+18);

        break;

    case 341:

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g+1, h+19, g+19, h+1);

        strokeWeight(2);

        fill(130, 96, 59);

        quad(g+13,h,g+9,h+3,g+16,h+4,g+19,h+1);

        break;

    case 342:

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g+1, h+19, g+19, h+1);

        stroke(100);

        strokeWeight(2);

        fill(112);

        quad(g+13,h,g+9,h+3,g+16,h+4,g+19,h+1);

        break;

    case 343:

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g+1, h+19, g+19, h+1);

        stroke(150);

        strokeWeight(2);

        fill(225);

        quad(g+13,h,g+9,h+3,g+16,h+4,g+19,h+1);

        break;

    case 344:

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g+1, h+19, g+19, h+1);

        stroke(194, 146, 0);

        strokeWeight(2);

        fill(255, 221, 0);

        quad(g+13,h,g+9,h+3,g+16,h+4,g+19,h+1);

        break;

    case 345:

        stroke(120, 83, 44);

        strokeWeight(3);

        line(g+1, h+19, g+19, h+1);

        stroke(0, 126, 143);

        strokeWeight(2);

        fill(0, 238, 255);

        quad(g+13,h,g+9,h+3,g+16,h+4,g+19,h+1);

        break;

    case 346:

        fill(191, 137, 0);

        quad(g,h+7,g+7,h,g+13,h+20,g+20,h+13);

        stroke(230, 173, 0);

        line(g,h+7,g+20,h+13);

        line(g+7,h,g+13,h+20);

        line(g+3,h+3,g+17,h+17);

        break;

    case 347:

        translate(g+10,h+10);

        stroke(179, 119, 0);

        fill(230, 150, 0);

        rotate(-30);

        ellipse(0,0,20,15);

        line(-5,-5,-3,-3);

        line(4,-3,1,-7);

        resetMatrix();

        break;

    case 348:

        stroke(84, 87, 0);

        fill(118, 122, 0);

        beginShape();

        vertex(g+5,h+5);

        vertex(g+10,h+2);

        vertex(g+12,h+8);

        vertex(g+18,h+15);

        vertex(g+15,h+15);

        vertex(g+12,h+18);

        vertex(g+8,h+12);

        vertex(g+3,h+8);

        vertex(g+5,h+5);

        endShape();

        break;

    case 349:

        stroke(0, 150, 0);

        fill(0, 255, 0);

        beginShape();

        vertex(g+10,h);

        vertex(g+15,h+5);

        vertex(g+15,h+15);

        vertex(g+10,h+20);

        vertex(g+5,h+15);

        vertex(g+5,h+5);

        vertex(g+10,h);

        endShape();

        rect(g+5,h+5,10,10);

        break;
    case 350:
        strokeWeight(3);
        stroke(240);
        line(g,h+20,g+10,h+4);
        line(g,h+20,g+16,h+10);
        stroke(112, 52, 0);
        line(g,h+20,g+9,h+2);
        line(g,h+20,g+18,h+11);
        break;
    case 351:
        fill(100, 0, 50);
        stroke(75,0,0);
        quad(g,h+5,g+5,h+10,g+20,h+5,g+15,h);
        quad(g,h+5,g+5,h+10,g+5,h+15,g,h+10);
        quad(g+20,h+5,g+5,h+10,g+5,h+15,g+20,h+10);
        break;
    case 352:
        fill(0, 50, 50);
        stroke(0, 100, 100);
        ellipse(g+10,h+10,20,20);
        break;
    case 353:
        stroke(255, 200, 0);
        strokeWeight(4);
        line(g,h+20,g+20,h);
        break;
    case 354:
        stroke(255, 200, 0);
        fill(255, 215, 0);
        ellipse(g+10,h+15,20,10);
        ellipse(g+5,h+3,3,3);
        ellipse(g+18,h+5,3,3);
        ellipse(g+10,h+8,3,3);
        break;
    case 355:
        fill(0, 150, 100);
        stroke(0, 100, 100);
        ellipse(g+10,h+10,20,20);
        noStroke();
        fill(100, 200, 0);
        ellipse(g+10,h+10,12,18);
        fill(0);
        ellipse(g+10,h+10,4,12);
        break;
            }

            strokeWeight(2);

            noStroke();

};

var herp;



var drawInventory = function(invX, invY, space){

    for (var gg = 0; gg < 4; gg++){

        for(var hh = 0; hh < 6; hh++){

            g = gg*space+invX;

            h = hh*space+invY;

            noStroke();

            drawBlocks(invContents[hh][gg], g, h);

            fill(255, 255, 255);

            textSize(15);

            if(invStacks[hh][gg]!==0&&invStacks[hh][gg]!==1){

                text(invStacks[hh][gg], g+20, h+23);

            }

            if(invContents[hh][gg]===17&&invSpecs[hh][gg]!==65){

                fill(255-invSpecs[hh][gg]*4, invSpecs[hh][gg]*4, 0);

                rect(g, h+22, invSpecs[hh][gg]/3.25, 3);

                if(invSpecs[hh][gg]<=0){

                    invContents[hh][gg]=0;

                }

            }

            textSize(12);

        }

    }

};

var cantExplode = false;

var explode = function(x, y){

var d;

var e;

        for(e = x-2; e <= x-(-2); e++){

            for(d = y-2; d  <= y-(-2); d++){

                if((d===y-2&&e===x-2)||(d===y-2&&e===x+2)||(d===y+2&&e===x-2)||(d===y+2&&e===x+2)){

                    cantExplode = true;

                }

                if(world[d][e]!==58&&world[d][e]!==8&&world[d][e]!==10&&!cantExplode){

                    if(world[d][e]===15&&d!==0&&e!==0){

                        if(specs[d][e]<=0){

                            specs[d][e]=10;

                        }

                    }else{

                        world[d][e]=0;

                    }

                }

                cantExplode=false;

            }

        }

    

    fill(196, 196, 196);

    d-=2;

    e-=2;

    world[y][x]=0;

    specs[y][x]=0;

    if(dist(posB, posA, e, d)<=3){

        health-=10;

    }

    if(health<=0){

        death="tnt";

    }

    for(var i = 0; i < mobs.length; i++){

        if(dist(mobs.x[i]/40,mobs.y[i]/40,e,d)<=3){

            mobs.health[i]-=10;

        }

    }

    ellipse(x*40+20+scrollX, y*40+20+scrollY, 250, 250);

};

var drawBlock = function(x,y){

    try{

    switch(world[y][x]){

            

            case 0:

                break;

            

            case 1:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(140);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(122, 122, 122);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                break;

            

            case 2:

                var grassShade;

                switch(biomes[x]){

                    case 0:

                        grassShade = color(74, 184, 0);

                        break;

                    case 1:

                        grassShade = color(181, 194, 0);

                        break;

                    case 2:

                        grassShade = color(0, 80, 0);

                        break;

                    case 3:

                        grassShade = color(235,235,235);

                        break;

                    default:

                        grassShade = color(255, 0, 0);

                }

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(grassShade);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                        fill(255, 255, 255,30);

                        if(biomes[x]===3){

                            fill(255, 255, 255);

                        }

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                        fill(255, 255, 255,30);

                        if(biomes[x]===3){

                            fill(255, 255, 255);

                        }

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                        fill(255, 255, 255,30);

                        if(biomes[x]===3){

                            fill(255, 255, 255);

                        }

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(97, 47, 11);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                        fill(grassShade);

                        quad(x*40+scrollX,y*40+scrollY+10,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+8);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                        fill(grassShade);

                        quad(x*40+scrollX,y*40+scrollY+10,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+8);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                        fill(grassShade);

                        quad(x*40+scrollX,y*40+scrollY+10,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+8);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    fill(82, 39, 9);

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        fill(grassShade);

                        quad(x*40+scrollX+40,y*40+scrollY+10,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+8);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                        fill(grassShade);

                        quad(x*40+scrollX+40,y*40+scrollY+10,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+8);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        fill(grassShade);

                        quad(x*40+scrollX+40,y*40+scrollY+10,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+8);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(61, 28, 7);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }}

                fill(130, 56, 0);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                fill(grassShade);

                rect(x*40+scrollX, y*40+scrollY, 40, 10);

                c = random(1, 200);

                if(solidBlocks[world[y - 1][x]] && c > 199){

                    world[y][x] = 3;

                }

                break;

            

            case 3:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(133, 65, 17);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(97, 47, 11);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    fill(82, 39, 9);

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(61, 28, 7);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(130, 56, 0);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                c = random(1, 200);

                if(!solidBlocks[world[y-1][x]] && c > 199){

                    world[y][x] = 2;

                }

                break;

            

            case 4:

                

                

                fill(122, 122, 122);

                strokeWeight(2);

                stroke(71, 71, 71);

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(140);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                        line(x*40+scrollX+20,y*40+scrollY,xx+17,yy);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx,yyy,xxx+36,yyy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                        line(x*40+scrollX+20,y*40+scrollY,xx+17,yy);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx,yyy,xxx+36,yyy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                        line(x*40+scrollX+20,y*40+scrollY,xx+16,yy);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx,yyy,xxx+36,yyy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                        line(x*40+scrollX,y*40+scrollY+20,

                        xx,yy+16);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx,yyy,xxx,yyy+36);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                        line(x*40+scrollX,y*40+scrollY+20,

                        xx,yy+16);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx,yyy,xxx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                        line(x*40+scrollX,y*40+scrollY+20,

                        xx,yy+16);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx,yyy,xxx,yyy+36);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx+36,yyy,xxx+36,yyy+36);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx+36,yyy,xxx+36,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx+36,yyy,xxx+36,yyy+36);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(122, 122, 122);

                rect(x*40+scrollX, y*40+scrollY, 20, 20);

                rect(x*40+20+scrollX, y*40+scrollY, 20, 20);

                rect(x*40+scrollX, y*40+20+scrollY, 20, 20);

                rect(x*40+20+scrollX, y*40+20+scrollY, 20, 20);

                noStroke();

                break;

            

            case 5:

                

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(232, 176, 93);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                        stroke(120, 83, 44);

                        line(x*40+scrollX,yy,xx+30,yy);

                        var xxx=x*40+scrollX,yyy=y*40+scrollY;

                        xxx+=(200-xx)/4; yyy+=(200-yy)/8;

                        line(x*40+scrollX,yyy,xxx+32,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/6; yyy+=(200-yy)/12;

                        line(x*40+scrollX,yyy,xxx+34,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/10; yyy+=(200-yy)/20;

                        line(x*40+scrollX,yyy,xxx+36,yyy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                        stroke(120, 83, 44);

                        line(xx,yy,x*40+scrollX+40,yy);

                        var xxx=x*40+scrollX,yyy=y*40+scrollY;

                        xxx+=(200-xx)/4; yyy+=(200-yy)/8;

                        line(xxx,yyy,x*40+scrollX+40,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/6; yyy+=(200-yy)/12;

                        line(xxx,yyy,x*40+scrollX+40,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/10; yyy+=(200-yy)/20;

                        line(xxx,yyy,x*40+scrollX+40,yyy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                        stroke(120, 83, 44);

                        line(xx,yy+1,xx+30,yy+1);

                        var xxx=x*40+scrollX,yyy=y*40+scrollY;

                        xxx+=(200-xx)/4; yyy+=(200-yy)/8;

                        line(xxx,yyy,xxx+32,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/6; yyy+=(200-yy)/12;

                        line(xxx,yyy,xxx+34,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/10; yyy+=(200-yy)/20;

                        line(xxx,yyy,xxx+36,yyy);

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    if(xx>200){

                    fill(176, 129, 67);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                        stroke(120, 83, 44);

                        line(xx,yy,x*40+scrollX,y*40+scrollY);

                        line(x*40+scrollX,y*40+scrollY+10,xx,yy+8);

                        line(x*40+scrollX,y*40+scrollY+20,xx,yy+16);

                        line(x*40+scrollX,y*40+scrollY+30,xx,yy+24);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                        stroke(120, 83, 44);

                        line(xx,yy,x*40+scrollX,y*40+scrollY);

                        line(x*40+scrollX,y*40+scrollY+10,xx,yy+8);

                        line(x*40+scrollX,y*40+scrollY+20,xx,yy+16);

                        line(x*40+scrollX,y*40+scrollY+30,xx,yy+24);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                        stroke(120, 83, 44);

                        line(xx,yy,x*40+scrollX,y*40+scrollY);

                        line(x*40+scrollX,y*40+scrollY+10,xx,yy+8);

                        line(x*40+scrollX,y*40+scrollY+20,xx,yy+16);

                        line(x*40+scrollX,y*40+scrollY+30,xx,yy+24);

                    }

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(153, 107, 47);

                    

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        stroke(120, 83, 44);

                        line(xx+30,yy,x*40+scrollX+40,y*40+scrollY);

                        line(x*40+scrollX+40,y*40+scrollY+10,xx+30,yy+8);

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        line(x*40+scrollX+40,y*40+scrollY+30,xx+30,yy+24);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                        stroke(120, 83, 44);

                        line(xx+30,yy,x*40+scrollX+40,y*40+scrollY);

                        line(x*40+scrollX+40,y*40+scrollY+10,xx+30,yy+8);

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        line(x*40+scrollX+40,y*40+scrollY+30,xx+30,yy+24);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        stroke(120, 83, 44);

                        line(xx+30,yy,x*40+scrollX+40,y*40+scrollY);

                        line(x*40+scrollX+40,y*40+scrollY+10,xx+30,yy+8);

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        line(x*40+scrollX+40,y*40+scrollY+30,xx+30,yy+24);

                    }

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(112, 75, 30);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                noStroke();

                fill(201, 153, 80);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                stroke(120, 83, 44);

                strokeWeight(2);

                line(x*40+scrollX, y*40+scrollY, x*40+40+scrollX, y*40+scrollY);

                line(x*40+scrollX, y*40+10+scrollY, x*40+40+scrollX, y*40+10+scrollY);

                line(x*40+scrollX, y*40+20+scrollY, x*40+40+scrollX, y*40+20+scrollY);

                line(x*40+scrollX, y*40+30+scrollY, x*40+40+scrollX, y*40+30+scrollY);

                noStroke();

                break;

            

            case 6:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(199, 108, 66);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                        stroke(237, 209, 176);

                        line(x*40+scrollX,yy,xx+30,yy);

                        var xxx=x*40+scrollX,yyy=y*40+scrollY;

                        xxx+=(200-xx)/4; yyy+=(200-yy)/8;

                        line(x*40+scrollX,yyy,xxx+32,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/6; yyy+=(200-yy)/12;

                        line(x*40+scrollX,yyy,xxx+34,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/10; yyy+=(200-yy)/20;

                        line(x*40+scrollX,yyy,xxx+36,yyy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                        stroke(237, 209, 176);

                        line(xx,yy,x*40+scrollX+40,yy);

                        var xxx=x*40+scrollX,yyy=y*40+scrollY;

                        xxx+=(200-xx)/4; yyy+=(200-yy)/8;

                        line(xxx,yyy,x*40+scrollX+40,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/6; yyy+=(200-yy)/12;

                        line(xxx,yyy,x*40+scrollX+40,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/10; yyy+=(200-yy)/20;

                        line(xxx,yyy,x*40+scrollX+40,yyy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                        stroke(237, 209, 176);

                        line(xx,yy+1,xx+30,yy+1);

                        var xxx=x*40+scrollX,yyy=y*40+scrollY;

                        xxx+=(200-xx)/4; yyy+=(200-yy)/8;

                        line(xxx,yyy,xxx+32,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/6; yyy+=(200-yy)/12;

                        line(xxx,yyy,xxx+34,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/10; yyy+=(200-yy)/20;

                        line(xxx,yyy,xxx+36,yyy);

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    if(xx>200){

                    fill(161, 83, 47);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                        stroke(237, 209, 176);

                        line(xx,yy,x*40+scrollX,y*40+scrollY);

                        line(x*40+scrollX,y*40+scrollY+10,xx,yy+8);

                        line(x*40+scrollX,y*40+scrollY+20,xx,yy+16);

                        line(x*40+scrollX,y*40+scrollY+30,xx,yy+24);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                        stroke(237, 209, 176);

                        line(xx,yy,x*40+scrollX,y*40+scrollY);

                        line(x*40+scrollX,y*40+scrollY+10,xx,yy+8);

                        line(x*40+scrollX,y*40+scrollY+20,xx,yy+16);

                        line(x*40+scrollX,y*40+scrollY+30,xx,yy+24);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                        stroke(237, 209, 176);

                        line(xx,yy,x*40+scrollX,y*40+scrollY);

                        line(x*40+scrollX,y*40+scrollY+10,xx,yy+8);

                        line(x*40+scrollX,y*40+scrollY+20,xx,yy+16);

                        line(x*40+scrollX,y*40+scrollY+30,xx,yy+24);

                    }

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(128, 66, 37);

                    

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        stroke(189, 158, 123);

                        line(xx+30,yy,x*40+scrollX+40,y*40+scrollY);

                        line(x*40+scrollX+40,y*40+scrollY+10,xx+30,yy+8);

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        line(x*40+scrollX+40,y*40+scrollY+30,xx+30,yy+24);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                        stroke(189, 158, 123);

                        line(xx+30,yy,x*40+scrollX+40,y*40+scrollY);

                        line(x*40+scrollX+40,y*40+scrollY+10,xx+30,yy+8);

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        line(x*40+scrollX+40,y*40+scrollY+30,xx+30,yy+24);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        stroke(189, 158, 123);

                        line(xx+30,yy,x*40+scrollX+40,y*40+scrollY);

                        line(x*40+scrollX+40,y*40+scrollY+10,xx+30,yy+8);

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        line(x*40+scrollX+40,y*40+scrollY+30,xx+30,yy+24);

                    }

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(102, 65, 48);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(181, 97, 58);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                stroke(237, 209, 176);

                line(x*40+scrollX, y*40+scrollY, x*40+40+scrollX, y*40+scrollY);

                line(x*40+10+scrollX, y*40+scrollY, x*40+10+scrollX, y*40+10+scrollY);

                line(x*40+scrollX, y*40+10+scrollY, x*40+scrollX+40, y*40+scrollY+10);

                line(x*40+30+scrollX, y*40+scrollY, x*40+30+scrollX, y*40+10+scrollY);

                line(x*40+40+scrollX, y*40+20+scrollY, x*40+40+scrollX, y*40+20+scrollY);

                line(x*40+20+scrollX, y*40+10+scrollY, x*40+20+scrollX, y*40+20+scrollY);

                line(x*40+scrollX, y*40+20+scrollY, x*40+40+scrollX, y*40+20+scrollY);

                line(x*40+10+scrollX, y*40+20+scrollY, x*40+10+scrollX, y*40+30+scrollY);

                line(x*40+30+scrollX, y*40+20+scrollY, x*40+30+scrollX, y*40+30+scrollY);

                line(x*40+scrollX, y*40+30+scrollY, x*40+40+scrollX, y*40+30+scrollY);

                line(x*40+20+scrollX, y*40+30+scrollY, x*40+20+scrollX, y*40+40+scrollY);

                noStroke();

                break;

            

            case 7:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    stroke(59, 32, 0);

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(166, 124, 79);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(89, 42, 0);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(74, 35, 0);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(128, 95, 60);

                    stroke(59, 32, 0);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                noStroke();

                fill(107, 50, 0);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                stroke(59, 32, 0);

                strokeWeight(2);

                line(x*40+scrollX, y*40+scrollY, x*40+scrollX, y*40+40+scrollY);

                line(x*40+scrollX+40, y*40+scrollY, x*40+scrollX+40, y*40+40+scrollY);

                

                break;

            

            case 8:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(54, 6, 110);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(31, 1, 66);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(29, 1, 61);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(23, 1, 48);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(40, 3, 82);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                break;

            

            case 9:

                var grassShade;

                switch(biomes[x]){

                    case 0:

                        grassShade = color(74, 184, 0);

                        break;

                    case 1:

                        grassShade = color(181, 194, 0);

                        break;

                    case 2:

                        grassShade = color(0, 80, 0);

                        break;

                    case 3:

                        grassShade = color(235,235,235);

                        break;

                    default:

                        grassShade = color(255, 0, 0);

                }

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(grassShade);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                    fill(255, 255, 255,30);

                    if(biomes[x]===3){

                        fill(255, 255, 255);

                    }

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(grassShade);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                    fill(0,0,0,20);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(grassShade);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    fill(0, 0, 0,30);

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

    

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(grassShade);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                    fill(0,0,0,100);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(grassShade);

                rect(x*40+scrollX, y*40+scrollY, 10, 10);

                rect(x*40+20+scrollX, y*40+scrollY, 10, 10);

                rect(x*40+10+scrollX, y*40+scrollY+10, 10, 10);

                rect(x*40+30+scrollX, y*40+scrollY+10, 10, 10);

                rect(x*40+scrollX, y*40+20+scrollY, 10, 10);

                rect(x*40+20+scrollX, y*40+20+scrollY, 10, 10);

                rect(x*40+10+scrollX, y*40+30+scrollY, 10, 10);

                rect(x*40+30+scrollX, y*40+30+scrollY, 10, 10);

                break;

            

            case 10:

                if(options._3D){

                if(y>1){

                if(opaqueBlocks[world[y-1][x]]){

                    

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(60);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(40);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(30);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(y<39){

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                }

                fill(50);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                break;

            

            case 11:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(92, 146, 255);

                    if(night){

                        fill(32, 73, 153);

                    }

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                        if(!opaqueBlocks[world[y-1][x+1]]){

                        fill(0, 0, 0,50);

                        for(var i = 0; i < 20; i++){
                            var n = noise(i/3,time/100)*20-9;
                            var aa = ((x*40+scrollX+40-xx-30)/20)*i;
                            var bb = ((y*40+scrollY-yy)/20)*i;
                            fill(0,0,0,30);
                            rect(xx+30+n,yy+bb,aa-n,2);
                        }

                        }

                        

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<160){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                        if(!opaqueBlocks[world[y-1][x-1]]){

                        fill(0, 0, 0,50);

                        for(var i = 0; i < 20; i++){
                            var n = noise(i/3,time/100)*20-9;
                            var aa = ((x*40+scrollX-xx-30)/20)*i;
                            var bb = ((y*40+scrollY-yy)/20)*i;
                            fill(0,0,0,30);
                            rect(xx+n,yy+bb,aa-n,2);
                        }

                        }

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                        if(!opaqueBlocks[world[y-1][x+1]]){

                        fill(0, 0, 0,50);

                        for(var i = 0; i < 20; i++){
                            var n = noise(i/3,time/100)*20-9;
                            var aa = ((x*40+scrollX+40-xx-30)/20)*i;
                            var bb = ((y*40+scrollY-yy)/20)*i;
                            fill(0,0,0,30);
                            rect(xx+30+n,yy+bb,aa-n,2);
                        }
                        

                        }

                        if(!opaqueBlocks[world[y-1][x-1]]){

                        fill(0, 0, 0,50);

                        for(var i = 0; i < 20; i++){
                            var n = noise(i/3,time/100)*20-9;
                            var aa = ((x*40+scrollX-xx-30)/20)*i;
                            var bb = ((y*40+scrollY-yy)/20)*i;
                            fill(0,0,0,30);
                            rect(xx+n,yy+bb,aa-n,2);
                        }

                        }

                    }

                    

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(46, 89, 176);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(41, 80, 158);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(y<39){

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(31, 65, 133);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                }

                fill(0, 104, 250);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                if(world[y+1][x]===13){

                    world[y+1][x]=8;

                }

                if(biomes[x]===3&&world[y-1][x]===0){

                    if(!round(random(0,100))){

                        world[y][x]=32;

                    }

                }

                if(world[y+1][x]===0){

                    world[y+1][x]=12;

                }else if(world[y+1][x]<11||world[y+1][x]>15){

                    if(world[y][x+1]===0){

                        world[y][x+1]=12;

                    }

                }

                break;

            

            case 12:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(92, 146, 255);

                    if(night){

                        fill(32, 73, 153);

                    }

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(46, 89, 176);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(41, 80, 158);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                }

                fill(0, 104, 250);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                if(world[y+1][x]===0){

                    world[y+1][x]=12;

                }else if(world[y+1][x]<11){

                    if(world[y][x+1]===0){

                        world[y][x+1]=12;

                    }if(world[y][x-1]===0){

                        world[y][x-1]=12;

                    }

                }

                if(world[y+1][x]===13){

                    world[y+1][x]=8;

                }else if(world[y+1][x]<11||world[y+1][x]>15){

                    if(world[y][x+1]===0){

                        world[y][x+1]=12;

                    }

                }

                if(world[y-1][x]!==12||world[y-1][x]!==11){

                    world[y][x]=0;

                }

                break;

            

            case 13:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(255, 196, 94);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(227, 136, 66);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(214, 124, 45);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(y<39){

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(133, 79, 32);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }}

                fill(255, 149, 0);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                if(world[y+1][x]===12){

                    world[y+1][x]=4;

                }else if(world[y+1][x]===11){

                    world[y+1][x]=1;

                }

                if(world[y+1][x]===0){

                    world[y+1][x]=14;

                }

                break;

            

            case 14:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(255, 196, 94);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(227, 136, 66);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(214, 124, 45);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }}

                

                fill(255, 149, 0);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                if(world[y+1][x]===0){

                    world[y+1][x]=14;

                }else if(world[y+1][x]<11||world[y+1][x]>15){

                    if(world[y][x+1]===0){

                        world[y][x+1]=14;

                    }if(world[y][x-1]===0){

                        world[y][x-1]=14;

                    }

                }else if(world[y+1][x]===12){

                    world[y+1][x]=4;

                }else if(world[y+1][x]===11){

                    world[y+1][x]=1;

                }

                if(world[y-1][x]!==14||world[y-1][x]!==13){

                    world[y][x]=0;

                }

                break;

            case 15:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(255,80,80);

                    if(specs[y][x]&1){

                        fill(255, 255, 255);

                    }

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(220,0,0);

                    if(specs[y][x]&1){

                        fill(255, 255, 255);

                    }

                    if(xx>200){

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                        fill(225);

                        if(specs[y][x]&1){

                            fill(255, 255, 255);

                        }

                        quad(x*40+scrollX,y*40+scrollY+10,

                        x*40+scrollX,y*40+scrollY+30,

                        xx,yy+27,

                        xx,yy+8);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                        fill(225);

                        if(specs[y][x]&1){

                            fill(255, 255, 255);

                        }

                        quad(x*40+scrollX,y*40+scrollY+10,

                        x*40+scrollX,y*40+scrollY+30,

                        xx,yy+27,

                        xx,yy+8);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                        fill(225);

                        if(specs[y][x]&1){

                            fill(255, 255, 255);

                        }

                        quad(x*40+scrollX,y*40+scrollY+10,

                        x*40+scrollX,y*40+scrollY+30,

                        xx,yy+27,

                        xx,yy+8);

                    }

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(200,0,0);

                    if(specs[y][x]&1){

                            fill(255, 255, 255);

                        }

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        fill(200);

                        if(specs[y][x]&1){

                            fill(255, 255, 255);

                        }

                        quad(x*40+scrollX+40,y*40+scrollY+10,

                        x*40+scrollX+40,y*40+scrollY+30,

                        xx+31,yy+27,

                        xx+31,yy+8);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                        fill(200);

                        if(specs[y][x]&1){

                            fill(255, 255, 255);

                        }

                        quad(x*40+scrollX+40,y*40+scrollY+10,

                        x*40+scrollX+40,y*40+scrollY+30,

                        xx+31,yy+27,

                        xx+31,yy+8);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        fill(200);

                        if(specs[y][x]&1){

                            fill(255, 255, 255);

                        }

                        quad(x*40+scrollX+40,y*40+scrollY+10,

                        x*40+scrollX+40,y*40+scrollY+30,

                        xx+31,yy+27,

                        xx+31,yy+8);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(150,0,0);

                    if(specs[y][x]&1){

                            fill(255, 255, 255);

                        }

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

}

                fill(255, 0, 0);

                if(specs[y][x]&1){

                    fill(255, 255, 255);

                }

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                fill(255, 255, 255);

                rect(x*40+scrollX, y*40+10+scrollY, 40, 20);

                if(specs[y][x]>0){

                    specs[y][x]--;

                    if(specs[y][x]===1){

                        explode(x, y);

                    }

                }else if(power[y][x]>0){

                    specs[y][x]=100;

                }

                break;

            case 16:

                fill(107, 50, 0);

                rect(x*40+9+scrollX, y*40+20+scrollY, 4, 20);

                fill(8, 168, 0);

                rect(x*40+5+scrollX, y*40+17+scrollY, 20, 10);

                rect(x*40+7+scrollX, y*40+13+scrollY, 10, 20);

                c = random(1, 500);

                if(c>499&&world[y-1][x]===0&&world[y-2][x]===0&&world[y-3][x]===0&&world[y-2][x-1]===0&&world[y-2][x-2]===0&&world[y-2][x+2]===0&&world[y-2][x+1]===0&&world[y-3][x-2]===0&&world[y-3][x-1]===0&&world[y-3][x+1]===0&&world[y-3][x+2]===0&&world[y-4][x-2]===0&&world[y-4][x-1]===0&&world[y-4][x]===0&&world[y-4][x+1]===0&&world[y-4][x+2]===0&&world[y-5][x-1]===0&&world[y-5][x]===0&&world[y-5][x+1]===0){

                    

                    world[y][x]=7;

                    world[y-1][x]=7;

                    world[y-2][x]=7;

                    world[y-3][x]=7;

                    

                    world[y-2][x-1]=9;

                    world[y-2][x-2]=9;

                    world[y-2][x+1]=9;

                    world[y-2][x+2]=9;

                    world[y-3][x-1]=9;

                    world[y-3][x-2]=9;

                    world[y-3][x+1]=9;

                    world[y-3][x+2]=9;

                    world[y-4][x-1]=9;

                    world[y-4][x-2]=9;

                    world[y-4][x]=9;

                    world[y-4][x+1]=9;

                    world[y-4][x+2]=9;

                    world[y-5][x-1]=9;

                    world[y-5][x]=9;

                    world[y-5][x+1]=9;

                }

                if(world[y+1][x]===0||world[y+1][x]===11||world[y+1][x]===12||world[y+1][x]===13||world[y+1][x]===14||world[y+1][x]===16||world[y+1][x]===17){

                    world[y][x]=0;

                }

                break;

            case 17:

                if(!options.fireAnimation){

                fill(173, 49, 0);

                triangle(x*40+scrollX, y*40+40+scrollY, x*40+10+scrollX, y*40+10+scrollY, 

x*40+20+scrollX, y*40+40+scrollY);

                triangle(x*40+20+scrollX, y*40+40+scrollY, x*40+30+scrollX, y*40+10+scrollY, 

x*40+40+scrollX, y*40+40+scrollY);

                fill(227, 170, 0);

                triangle(x*40+2+scrollX, y*40+40+scrollY, x*40+10+scrollX, y*40+18+scrollY, 

x*40+16+scrollX, y*40+40+scrollY);

                triangle(x*40+24+scrollX, y*40+40+scrollY, x*40+30+scrollX, y*40+18+scrollY, 

x*40+36+scrollX, y*40+40+scrollY);}else{

                if(options._3D){

                var xx = x*40+scrollX;

                var yy = y*40+scrollY+40;

                xx+=(200-xx)/4;

                yy+=(200-yy)/7;

                

                    drawFlame(xx, yy-30, 2);

                xx = x*40+scrollX;

                yy = y*40+scrollY+40;

                xx+=(200-xx)/7;

                yy+=(200-yy)/9;

                    drawFlame(xx, yy-30, 2.3);

                }

                drawFlame(x*40+scrollX-5, y*40+scrollY, 2.6);

                }

                if(world[y+1][x]===0||world[y+1][x]===11||world[y+1][x]===12||world[y+1][x]===13||world[y+1][x]===14||world[y+1][x]===16||world[y+1][x]===17){

                    world[y][x]=0;

                }

                if(world[y+1][x]===8&&world[y+1][x+1]===8&&world[y][x-1]===8&&world[y][x+2]===8&&world[y-1][x-1]===8&&world[y-1][x+2]===8&&world[y-2][x-1]===8&&world[y-2][x+2]===8&&world[y-3][x]===8&&world[y-3][x+1]===8){

                    world[y][x]=18;

                    world[y][x+1]=18;

                    world[y-1][x]=18;

                    world[y-1][x+1]=18;

                    world[y-2][x]=18;

                    world[y-2][x+1]=18;

                }

                if(world[y+1][x]===8&&world[y+1][x-1]===8&&world[y][x+1]===8&&world[y][x-2]===8&&world[y-1][x+1]===8&&world[y-1][x-2]===8&&world[y-2][x+1]===8&&world[y-2][x-2]===8&&world[y-3][x]===8&&world[y-3][x-1]===8){

                    world[y][x]=18;

                    world[y][x-1]=18;

                    world[y-1][x]=18;

                    world[y-1][x-1]=18;

                    world[y-2][x]=18;

                    world[y-2][x-1]=18;

                }

                c = random(0, 400);

                if(c > 399&&world[y+1][x]!==19){

                    if(world[y+1][x]===7||world[y+1][x]===9||world[y+1][x]===5){

                        if(c<399.9){

                            world[y+1][x]=17;

                        }else{

                            world[y+1][x]=0;

                        }

                    }

                    world[y][x]=0;

                }

                break;

            case 18:

                var xx = x*40+scrollX;

                var yy = y*40+scrollY;

                xx+=(200-xx)/4;

                yy+=(200-yy)/7;

                if(options._3D){

                if(nether){

                    if(night){

                        fill(0);

                    }else{

                        fill(181, 225, 255);

                    }

                }else{

                    fill(100, 0, 0);

                }

                

                rect(xx,yy,36,36);

                

                noStroke();

                xx = x*40+scrollX; yy = y*40+scrollY;

                xx+=(200-xx)/9;

                    yy+=(200-yy)/14;

                fill(157, 0, 255,150);

                rect(xx, yy, 37, 39);

                }else{

                    fill(157, 0, 255);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                }

                if(world[y][x+1]===0||world[y][x-1]===0||world[y-1][x]===0||world[y+1][x]===0){

                    world[y][x]=0;

                }

                for(var i = 0; i < mobs.length; i++){

                    if(dist(mobs.x[i], mobs.y[i], x*40+20, y*40+20)<150 && !round(random(0, 2000))){

                        mobs.nether[i] = nether?false:true;

                    }

                }

                break;

            case 19:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(117, 23, 2);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(77, 14, 0);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(71, 13, 0);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(56, 10, 0);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(99, 21, 2);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                break;

            case 20:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(255, 237, 191);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(209, 188, 134);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(201, 176, 114);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(173, 151, 97);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(255, 230, 166);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                if(world[y+1][x]===0||world[y+1][x]===11||world[y+1][x]===12||world[y+1][x]===13||world[y+1][x]===14||world[y+1][x]===16||world[y+1][x]===17){

                    world[y][x]=0;

                    world[y+1][x]=20;

                }

                break;

            case 21:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(158, 148, 163);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(116, 108, 120);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(104, 97, 107);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(89, 84, 92);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(136, 127, 140);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                if(world[y+1][x]===0||world[y+1][x]===11||world[y+1][x]===12||world[y+1][x]===13||world[y+1][x]===14||world[y+1][x]===16||world[y+1][x]===17){

                    world[y][x]=0;

                    world[y+1][x]=21;

                }

                break;

            case 22:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(140);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(122, 122, 122);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                fill(0, 0, 0);

                ellipse(x*40+10+scrollX, y*40+10+scrollY, 8, 8);

                ellipse(x*40+28+scrollX, y*40+12+scrollY, 10, 10);

                ellipse(x*40+20+scrollX, y*40+18+scrollY, 6, 6);

                ellipse(x*40+10+scrollX, y*40+24+scrollY, 12, 8);

                ellipse(x*40+28+scrollX, y*40+30+scrollY, 18, 14);

                break;

            case 23:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(140);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(122, 122, 122);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                fill(191, 155, 82);

                ellipse(x*40+10+scrollX, y*40+10+scrollY, 8, 8);

                ellipse(x*40+28+scrollX, y*40+12+scrollY, 10, 10);

                ellipse(x*40+20+scrollX, y*40+18+scrollY, 6, 6);

                ellipse(x*40+10+scrollX, y*40+24+scrollY, 12, 8);

                ellipse(x*40+28+scrollX, y*40+30+scrollY, 18, 14);

                break;

            case 24:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(140);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(122, 122, 122);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                fill(255, 234, 0);

                ellipse(x*40+10+scrollX, y*40+10+scrollY, 8, 8);

                ellipse(x*40+28+scrollX, y*40+12+scrollY, 10, 10);

                ellipse(x*40+20+scrollX, y*40+18+scrollY, 6, 6);

                ellipse(x*40+10+scrollX, y*40+24+scrollY, 12, 8);

                ellipse(x*40+28+scrollX, y*40+30+scrollY, 18, 14);

                break;

            case 25:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(140);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(122, 122, 122);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                fill(0, 21, 255);

                ellipse(x*40+10+scrollX, y*40+10+scrollY, 8, 8);

                ellipse(x*40+28+scrollX, y*40+12+scrollY, 10, 10);

                ellipse(x*40+20+scrollX, y*40+18+scrollY, 6, 6);

                ellipse(x*40+10+scrollX, y*40+24+scrollY, 12, 8);

                ellipse(x*40+28+scrollX, y*40+30+scrollY, 18, 14);

                break;

            case 26:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(140);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(122, 122, 122);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                fill(0, 238, 255);

                ellipse(x*40+10+scrollX, y*40+10+scrollY, 8, 8);

                ellipse(x*40+28+scrollX, y*40+12+scrollY, 10, 10);

                ellipse(x*40+20+scrollX, y*40+18+scrollY, 6, 6);

                ellipse(x*40+10+scrollX, y*40+24+scrollY, 12, 8);

                ellipse(x*40+28+scrollX, y*40+30+scrollY, 18, 14);

                break;

            case 27:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(222, 145, 77);

                    stroke(120, 83, 44);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    if(xx>200){

                    fill(176, 129, 67);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                        stroke(120, 83, 44);

                        line(xx,yy,x*40+scrollX,y*40+scrollY);

                        line(x*40+scrollX,y*40+scrollY+10,xx,yy+8);

                        line(x*40+scrollX,y*40+scrollY+20,xx,yy+16);

                        line(x*40+scrollX,y*40+scrollY+30,xx,yy+24);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                        stroke(120, 83, 44);

                        line(xx,yy,x*40+scrollX,y*40+scrollY);

                        line(x*40+scrollX,y*40+scrollY+10,xx,yy+8);

                        line(x*40+scrollX,y*40+scrollY+20,xx,yy+16);

                        line(x*40+scrollX,y*40+scrollY+30,xx,yy+24);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                        stroke(120, 83, 44);

                        line(xx,yy,x*40+scrollX,y*40+scrollY);

                        line(x*40+scrollX,y*40+scrollY+10,xx,yy+8);

                        line(x*40+scrollX,y*40+scrollY+20,xx,yy+16);

                        line(x*40+scrollX,y*40+scrollY+30,xx,yy+24);

                    }

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(153, 107, 47);

                    

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        stroke(120, 83, 44);

                        line(xx+30,yy,x*40+scrollX+40,y*40+scrollY);

                        line(x*40+scrollX+40,y*40+scrollY+10,xx+30,yy+8);

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        line(x*40+scrollX+40,y*40+scrollY+30,xx+30,yy+24);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                        stroke(120, 83, 44);

                        line(xx+30,yy,x*40+scrollX+40,y*40+scrollY);

                        line(x*40+scrollX+40,y*40+scrollY+10,xx+30,yy+8);

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        line(x*40+scrollX+40,y*40+scrollY+30,xx+30,yy+24);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        stroke(120, 83, 44);

                        line(xx+30,yy,x*40+scrollX+40,y*40+scrollY);

                        line(x*40+scrollX+40,y*40+scrollY+10,xx+30,yy+8);

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        line(x*40+scrollX+40,y*40+scrollY+30,xx+30,yy+24);

                    }

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(112, 75, 30);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(201, 153, 80);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                stroke(120, 83, 44);

                strokeWeight(2);

                line(x*40+scrollX, y*40+scrollY, x*40+40+scrollX, y*40+scrollY);

                line(x*40+scrollX, y*40+10+scrollY, x*40+40+scrollX, y*40+10+scrollY);

                line(x*40+scrollX, y*40+20+scrollY, x*40+40+scrollX, y*40+20+scrollY);

                line(x*40+scrollX, y*40+30+scrollY, x*40+40+scrollX, y*40+30+scrollY);

                line(x*40+scrollX, y*40+scrollY, x*40+scrollX, y*40+40+scrollY);

                line(x*40+40+scrollX, y*40+scrollY, x*40+40+scrollX, y*40+40+scrollY);

                fill(196, 126, 65);

                triangle(x*40+2+scrollX, y*40+scrollY, x*40+20+scrollX, y*40+16+scrollY, 

x*40+38+scrollX, y*40+scrollY);

                stroke(122, 122, 122);

                strokeWeight(4);

                line(x*40+10+scrollX, y*40+20+scrollY, x*40+10+scrollX, y*40+34+scrollY);

                line(x*40+30+scrollX, y*40+16+scrollY, x*40+30+scrollX, y*40+30+scrollY);

                noStroke();

                strokeWeight(2);

                break;

            case 28:

                fill(201, 153, 80);

                stroke(97, 58, 0);

                if(specs[y][x]===0){

        

                if(options._3D){

                    if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/17;

                    yy+=(200-yy)/15+4;

                    fill(163, 121, 57);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/12;

                    yy+=(200-yy)/15+4;

                    fill(138, 97, 40);

                    if(xx<170){

                    if(!opaqueBlocks[world[y+1][x]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+35,yy,

                        xx+35,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+35,yy,

                        xx+35,yy+35);

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/17;

                    yy+=(200-yy)/15;

                    fill(105, 72, 25);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+10,y*40+scrollY+40,

                        xx+36,yy,

                        x*40+scrollX,yy);

                    }if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+36,yy,

                        xx,yy);

                    }

                }

                }

                    fill(201, 153, 80);

                    rect(x*40+scrollX, y*40+scrollY, 40, 40);

                    rect(x*40+5+scrollX, y*40+5+scrollY, 30, 30);

                    fill(66, 66, 66);

                    stroke(66, 66, 66);

                    ellipse(x*40+35+scrollX, y*40+scrollY, 3, 3);

                    strokeWeight(4);

                    line(x*40+35+scrollX, y*40+scrollY, x*40+30+scrollX, y*40+scrollY);

                }else if(specs[y][x]===1){

                

                if(options._3D){

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(163, 121, 57);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                    var xx = x*40+scrollX-30;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(138, 97, 40);

                    if(xx<170){

                    if(!opaqueBlocks[world[y+1][x]]&&yy<160){

                        quad(x*40+scrollX+10,y*40+scrollY+40,

                        x*40+scrollX+10,y*40+scrollY,

                        xx+35,yy,

                        xx+35,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+10,y*40+scrollY+40,

                        x*40+scrollX+10,y*40+scrollY,

                        xx+35,yy,

                        xx+35,yy+35);

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(105, 72, 25);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+10,y*40+scrollY+40,

                        xx+8,yy,

                        x*40+scrollX,yy);

                    }if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+10,y*40+scrollY+40,

                        xx+8,yy,

                        xx,yy);

                    }

                }

                }

                    fill(201, 153, 80);

                    rect(x*40+scrollX, y*40+scrollY, 10, 40);

                }

                strokeWeight(2);

                break;

            case 29:

                fill(201, 153, 80);

                stroke(97, 58, 0);

                if(specs[y][x]===0){

                if(options._3D){

                    if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/15;

                    yy+=(200-yy)/17;

                    fill(204, 156, 84);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+36,yy,

                        x*40+scrollX,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+36,yy,

                        xx,yy);

                    }

                }

                    if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/17;

                    yy+=(200-yy)/15+4;

                    fill(163, 121, 57);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/12;

                    yy+=(200-yy)/15+4;

                    fill(138, 97, 40);

                    if(xx<170){

                    if(!opaqueBlocks[world[y+1][x]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+35,yy,

                        xx+35,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+35,yy,

                        xx+35,yy+35);

                    }

                }

                }

                    fill(201, 153, 80);

                    rect(x*40+scrollX, y*40+scrollY, 40, 40);

                    rect(x*40+5+scrollX, y*40+5+scrollY, 30, 30);

                }else if(specs[y][x]===1){

                if(options._3D){

                    if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(204, 156, 84);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+10,y*40+scrollY,

                        xx+8,yy,

                        x*40+scrollX,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+10,y*40+scrollY,

                        xx+8,yy,

                        xx,yy);

                    }

                }

                    if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(163, 121, 57);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                    var xx = x*40+scrollX-30;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(138, 97, 40);

                    if(xx<170){

                    if(!opaqueBlocks[world[y+1][x]]&&yy<160){

                        quad(x*40+scrollX+10,y*40+scrollY+40,

                        x*40+scrollX+10,y*40+scrollY,

                        xx+35,yy,

                        xx+35,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+10,y*40+scrollY+40,

                        x*40+scrollX+10,y*40+scrollY,

                        xx+35,yy,

                        xx+35,yy+35);

                    }

                }

                }

                    fill(201, 153, 80);

                    rect(x*40+scrollX, y*40+scrollY, 10, 40);

                }

                if(world[y+1][x]!==28){

                    world[y][x]=0;

                }

                break;

            case 30:

                fill(201, 153, 80);

                stroke(120, 83, 44);

                if(options._3D){

                var xx = x*40+scrollX, yy = y*40+scrollY;

                xx += (200-xx)/4; yy += (200-yy)/7;

                rect(xx, yy, 7, 35);

                rect(xx+23, yy, 7, 35);

                rect(xx, yy, 7, 35);

                rect(xx, yy+6, 30, 7);

                rect(xx, yy+20, 30, 7);

                }else{

                rect(x*40+scrollX, y*40+scrollY, 7, 40);

                rect(x*40+33+scrollX, y*40+scrollY, 7, 40);

                rect(x*40+scrollX, y*40+scrollY+10, 40, 7);

                rect(x*40+scrollX, y*40+scrollY+30, 40, 7);

                }

                

                break;

            case 31:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0, 158, 0);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX+2,y*40+scrollY,

                        x*40+scrollX+38,y*40+scrollY,

                        xx+28,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX+2,y*40+scrollY,

                        x*40+scrollX+38,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx+2,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX+2,y*40+scrollY,

                        x*40+scrollX+38,y*40+scrollY,

                        xx+28,yy,

                        xx+2,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0, 112, 0);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX+2,y*40+scrollY+40,

                        x*40+scrollX+2,y*40+scrollY,

                        xx+2,y*40+scrollY,

                        xx+2,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX+2,y*40+scrollY+40,

                        x*40+scrollX+2,y*40+scrollY,

                        xx+2,yy,

                        xx+2,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX+2,y*40+scrollY+40,

                        x*40+scrollX+2,y*40+scrollY,

                        xx+2,yy,

                        xx+2,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0, 89, 0);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+38,y*40+scrollY+40,

                        x*40+scrollX+38,y*40+scrollY,

                        xx+29,yy,

                        xx+29,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+38,y*40+scrollY+40,

                        x*40+scrollX+38,y*40+scrollY,

                        xx+29,yy,

                        xx+29,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+38,y*40+scrollY+40,

                        x*40+scrollX+38,y*40+scrollY,

                        xx+29,yy,

                        xx+29,yy+35);

                    }

                    }

                }

                }

                stroke(0);

                line(x*40+scrollX, y*40+scrollY+5, x*40+scrollX+40, y*40+scrollY+5);

                line(x*40+scrollX, y*40+scrollY+15, x*40+scrollX+40, y*40+scrollY+15);

                line(x*40+scrollX, y*40+scrollY+25, x*40+scrollX+40, y*40+scrollY+25);

                line(x*40+scrollX, y*40+scrollY+35, x*40+scrollX+40, y*40+scrollY+35);

                fill(0, 130, 0);

                noStroke();

                rect(x*40+scrollX+2, y*40+scrollY, 36, 40);

                if(world[y-(-1)][x]!==20&&world[y-(-1)][x]!==31){

                    world[y][x]=0;

                    spawnEntity(x*40+10, y*40+10, 0, 31);

                }

                break;

            case 32:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(217, 239, 255);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                        if(!opaqueBlocks[world[y-1][x+1]]){

                        fill(0, 0, 0,25);

                        triangle(xx+30,yy,x*40+scrollX+40,y*40+scrollY,xx+30,y*40+scrollY);

                    }

                        

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<160){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                        if(!opaqueBlocks[world[y-1][x-1]]){

                        fill(0, 0, 0,25);

                        triangle(xx,yy,x*40+scrollX,y*40+scrollY,xx,y*40+scrollY);

                        }

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                        if(!opaqueBlocks[world[y-1][x+1]]){

                        fill(0, 0, 0,25);

                        triangle(xx+30,yy,x*40+scrollX+40,y*40+scrollY,xx+30,y*40+scrollY);

                        

                        }

                        if(!opaqueBlocks[world[y-1][x-1]]){

                        fill(0, 0, 0,25);

                        triangle(xx,yy,x*40+scrollX,y*40+scrollY,xx,y*40+scrollY);

                        }

                    }

                    

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(171, 219, 255);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(156, 204, 240);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(y<39){

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(116, 171, 214);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                }

                fill(199, 230, 255);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                stroke(255);

                line(x*40+scrollX+10, y*40+scrollY+30,x*40+scrollX+20,y*40+scrollY+20);

                line(x*40+scrollX+5, y*40+scrollY+15, x*40+scrollX+15, y*40+scrollY+5);

                stroke(92, 171, 255);

                line(x*40+scrollX+25, y*40+scrollY+35, x*40+scrollX+35, y*40+scrollY+25);

                line(x*40+scrollX+20, y*40+scrollY+15, x*40+scrollX+30, y*40+scrollY+5);

                break;

        case 33:

            stroke(71);

                if(options._3D){

            if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(140);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                        fill(150);

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY+20,

                        xx,yy+19,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                        fill(150);

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY+20,

                        xx,yy+19,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                        fill(150);

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY+20,

                        xx,yy+19,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        fill(120);

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+31,yy+19,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                        fill(120);

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+31,yy+19,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        fill(120);

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+31,yy+19,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

            fill(0);

            strokeWeight(2);

            stroke(71, 71, 71);

            fill(120);

            rect(x*40+scrollX, y*40+scrollY, 40, 20);

            fill(0);

            ellipse(x*40+scrollX+20,y*40+scrollY+20,30,25);

            fill(168);

            rect(x*40+scrollX, y*40+20+scrollY, 40, 20);

            

            fill(0);

            if(specs[y][x][3]>1){

                if(specs[y][x][10]>0){

                    specs[y][x][3]-=0.5;

                }

            }else if(specs[y][x][3]>0){

                if(specs[y][x][4]===15){

                    explode(x,y);

                }

                specs[y][x][7]=furnaceRecipes[specs[y][x][4]];

                specs[y][x][8]++;

                specs[y][x][5]--;

                specs[y][x][3]-=1;

            }else{

                specs[y][x][3]=0;

                if(furnaceRecipes[specs[y][x][4]]&&specs[y][x][10]>0){

                    specs[y][x][3]=50;

                }

            }

            if(specs[y][x][1]<=0){

                specs[y][x][0]=0;

            }

            if(specs[y][x][5]<=0){

                specs[y][x][4]=0;

            }

            if(burnValues[specs[y][x][0]]!==null&&furnaceRecipes[specs[y][x][4]]!==null&&specs[y][x][10]===0){

                specs[y][x][11]=burnValues[specs[y][x][0]];

                specs[y][x][10]=burnValues[specs[y][x][0]]*5;

                specs[y][x][1]--;

            }

            if(specs[y][x][10]>0){

                fill(255, 0, 0);

                specs[y][x][10]-=0.05;

            }else{

                fill(0);

            }var d = [], e = [];

            for(var i = 0; i < 4; i++){

                d[i] = sin(i*60+90)*15+x*40+scrollX+20;

                e[i] = cos(i*60+90)*17+y*40+scrollY+40;

            }

            if(!furnaceRecipes[specs[y][x][4]]){

                specs[y][x][3]=50;

            }

            bezier(d[0],e[0],d[1],e[1],d[2],e[2],d[3],e[3]);

            noStroke();

            if(specs[y][x][10]<0){

                specs[y][x][10]=0;

            }

            if(specs[y][x][10]>0){

            for(var i = 3; i >= 0; i--){

                fill(255, 255-i*55, 0);

                for(var j = 0; j < 4; j++){

                d[j] = sin(j*60+90)*(i*4-1)+x*40+scrollX+20;

                e[j] = cos(j*60+90)*(i*4-1)+y*40+scrollY+40;

                }

            bezier(d[0],e[0],d[1],e[1],d[2],e[2],d[3],e[3]);

            }}

            break;

        case 34:

                fill(184, 133, 57);

        stroke(120, 83, 44);

                strokeWeight(2);

                if(world[y][x-1]!==34){

    if(world[y][x-(-1)]===34){

                if(options._3D){

        if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(209, 149, 65);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX+3,y*40+scrollY+5,

                        x*40+scrollX+77,y*40+scrollY+5,

                        xx+57,yy+5,

                        xx+2,yy+5);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX+3,y*40+scrollY+5,

                        x*40+scrollX+77,y*40+scrollY+5,

                        xx+57,yy+5,

                        xx+2,yy+5);

                    }else if(yy>200){

                        quad(x*40+scrollX+3,y*40+scrollY+5,

                        x*40+scrollX+77,y*40+scrollY+5,

                        xx+57,yy+5,

                        xx+2,yy+5);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]&&x*40+scrollX>200){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(166, 117, 48);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX+2,y*40+scrollY+40,

                        x*40+scrollX+2,y*40+scrollY+5,

                        xx+3,yy+5,

                        xx+3,yy+35);

                        line(x*40+scrollX+3, y*40+scrollY+13,

                        xx+3, yy+12);

                        line(x*40+scrollX+3, y*40+scrollY+23,

                        xx+3, yy+21);

                        line(x*40+scrollX+3, y*40+scrollY+33,

                        xx+3, yy+30);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX+2,y*40+scrollY+40,

                        x*40+scrollX+2,y*40+scrollY+5,

                        xx+3,yy+5,

                        xx+3,y*40+scrollY+40);

                        line(x*40+scrollX+3, y*40+scrollY+13,

                        xx+3, yy+12);

                        line(x*40+scrollX+3, y*40+scrollY+23,

                        xx+3, yy+21);

                        line(x*40+scrollX+3, y*40+scrollY+33,

                        xx+3, yy+30);

                    }else if(xx>200){

                        quad(x*40+scrollX+2,y*40+scrollY+40,

                        x*40+scrollX+2,y*40+scrollY+5,

                        xx+3,yy+5,

                        xx+3,yy+35);

                        line(x*40+scrollX+3, y*40+scrollY+13,

                        xx+3, yy+12);

                        line(x*40+scrollX+3, y*40+scrollY+23,

                        xx+3, yy+21);

                        line(x*40+scrollX+3, y*40+scrollY+33,

                        xx+3, yy+30);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(148, 95, 35);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+78,y*40+scrollY+40,

                        x*40+scrollX+78,y*40+scrollY+5,

                        xx+58,yy+5,

                        xx+58,yy+35);

                        line(x*40+scrollX+77, y*40+scrollY+13,

                        xx+58, yy+12);

                        line(x*40+scrollX+77, y*40+scrollY+23,

                        xx+58, yy+21);

                        line(x*40+scrollX+77, y*40+scrollY+33,

                        xx+58, yy+30);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+78,y*40+scrollY+40,

                        x*40+scrollX+78,y*40+scrollY+5,

                        xx+58,yy+5,

                        xx+58,y*40+scrollY+40);

                        line(x*40+scrollX+77, y*40+scrollY+13,

                        xx+58, yy+12);

                        line(x*40+scrollX+77, y*40+scrollY+23,

                        xx+58, yy+21);

                        line(x*40+scrollX+77, y*40+scrollY+33,

                        xx+58, yy+30);

                    }else if(xx<170){

                        quad(x*40+scrollX+78,y*40+scrollY+40,

                        x*40+scrollX+78,y*40+scrollY+5,

                        xx+58,yy+5,

                        xx+58,yy+35);

                        line(x*40+scrollX+77, y*40+scrollY+13,

                        xx+58, yy+12);

                        line(x*40+scrollX+77, y*40+scrollY+23,

                        xx+58, yy+21);

                        line(x*40+scrollX+77, y*40+scrollY+33,

                        xx+58, yy+30);

                    }

                    }

                }}fill(184, 133, 57);

        rect(x*40+scrollX+3, y*40+scrollY+5, 74, 35);

        line(x*40+scrollX+5, y*40+10+scrollY+3, x*40+74+scrollX, y*40+10+scrollY+3);

        line(x*40+scrollX+5, y*40+20+scrollY+3, x*40+74+scrollX, y*40+20+scrollY+3);

        line(x*40+scrollX+5, y*40+30+scrollY+3, x*40+74+scrollX, y*40+30+scrollY+3);

            fill(225);

        stroke(200);

            rect(x*40+scrollX+37, y*40+scrollY+10, 6, 10);

    }else{

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(209, 149, 65);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX+3,y*40+scrollY+5,

                        x*40+scrollX+37,y*40+scrollY+5,

                        xx+28,yy+5,

                        xx+2,yy+5);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX+3,y*40+scrollY+5,

                        x*40+scrollX+37,y*40+scrollY+5,

                        xx+28,yy+5,

                        xx+2,yy+5);

                    }else if(yy>200){

                        quad(x*40+scrollX+3,y*40+scrollY+5,

                        x*40+scrollX+37,y*40+scrollY+5,

                        xx+28,yy+5,

                        xx+2,yy+5);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]&&x*40+scrollX>200){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(166, 117, 48);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX+2,y*40+scrollY+40,

                        x*40+scrollX+2,y*40+scrollY+5,

                        xx+3,yy+5,

                        xx+3,yy+35);

                        line(x*40+scrollX+3, y*40+scrollY+13,

                        xx+3, yy+12);

                        line(x*40+scrollX+3, y*40+scrollY+23,

                        xx+3, yy+21);

                        line(x*40+scrollX+3, y*40+scrollY+33,

                        xx+3, yy+30);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX+2,y*40+scrollY+40,

                        x*40+scrollX+2,y*40+scrollY+5,

                        xx+3,yy+5,

                        xx+3,y*40+scrollY+40);

                        line(x*40+scrollX+3, y*40+scrollY+13,

                        xx+3, yy+12);

                        line(x*40+scrollX+3, y*40+scrollY+23,

                        xx+3, yy+21);

                        line(x*40+scrollX+3, y*40+scrollY+33,

                        xx+3, yy+30);

                    }else if(xx>200){

                        quad(x*40+scrollX+2,y*40+scrollY+40,

                        x*40+scrollX+2,y*40+scrollY+5,

                        xx+3,yy+5,

                        xx+3,yy+35);

                        line(x*40+scrollX+3, y*40+scrollY+13,

                        xx+3, yy+12);

                        line(x*40+scrollX+3, y*40+scrollY+23,

                        xx+3, yy+21);

                        line(x*40+scrollX+3, y*40+scrollY+33,

                        xx+3, yy+30);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(148, 95, 35);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+38,y*40+scrollY+40,

                        x*40+scrollX+38,y*40+scrollY+5,

                        xx+29,yy+5,

                        xx+29,yy+35);

                        line(x*40+scrollX+37, y*40+scrollY+13,

                        xx+29, yy+12);

                        line(x*40+scrollX+37, y*40+scrollY+23,

                        xx+29, yy+21);

                        line(x*40+scrollX+37, y*40+scrollY+33,

                        xx+29, yy+30);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+38,y*40+scrollY+40,

                        x*40+scrollX+38,y*40+scrollY+5,

                        xx+29,yy+5,

                        xx+29,y*40+scrollY+40);

                        line(x*40+scrollX+37, y*40+scrollY+13,

                        xx+29, yy+12);

                        line(x*40+scrollX+37, y*40+scrollY+23,

                        xx+29, yy+21);

                        line(x*40+scrollX+37, y*40+scrollY+33,

                        xx+29, yy+30);

                    }else if(xx<170){

                        quad(x*40+scrollX+38,y*40+scrollY+40,

                        x*40+scrollX+38,y*40+scrollY+5,

                        xx+29,yy+5,

                        xx+29,yy+35);

                        line(x*40+scrollX+37, y*40+scrollY+13,

                        xx+29, yy+12);

                        line(x*40+scrollX+37, y*40+scrollY+23,

                        xx+29, yy+21);

                        line(x*40+scrollX+37, y*40+scrollY+33,

                        xx+29, yy+30);

                    }

                    }

                } }  fill(184, 133, 57);

    

        rect(x*40+scrollX+3, y*40+scrollY+5, 34, 35);

        line(x*40+scrollX+5, y*40+10+scrollY+3, x*40+34+scrollX, y*40+10+scrollY+3);

        line(x*40+scrollX+5, y*40+20+scrollY+3, x*40+34+scrollX, y*40+20+scrollY+3);

        line(x*40+scrollX+5, y*40+30+scrollY+3, x*40+34+scrollX, y*40+30+scrollY+3);

            fill(225);

        stroke(200);

            rect(x*40+scrollX+17, y*40+scrollY+10, 6, 10);

    }}

                noStroke();

                break;

            case 35:

                if(options._3D){

                stroke(49, 105, 0);

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(140);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                        line(x*40+scrollX+20,y*40+scrollY,xx+17,yy);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx,yyy,xxx+36,yyy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                        line(x*40+scrollX+20,y*40+scrollY,xx+17,yy);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx,yyy,xxx+36,yyy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                        line(x*40+scrollX+20,y*40+scrollY,xx+16,yy);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx,yyy,xxx+36,yyy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                        line(x*40+scrollX,y*40+scrollY+20,

                        xx,yy+16);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx,yyy,xxx,yyy+36);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                        line(x*40+scrollX,y*40+scrollY+20,

                        xx,yy+16);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx,yyy,xxx,yyy+36);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                        line(x*40+scrollX,y*40+scrollY+20,

                        xx,yy+16);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx,yyy,xxx,yyy+36);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx+36,yyy,xxx+36,yyy+36);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx+36,yyy,xxx+36,yyy+36);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        var xxx = x*40+scrollX,yyy = y*40+scrollY;

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        xxx+=(200-xx)/6;

                        yyy+=(200-yy)/10;

                        line(xxx+36,yyy,xxx+36,yyy+36);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }}

                fill(122, 122, 122);

                strokeWeight(2);

                stroke(49, 105, 0);

                rect(x*40+scrollX, y*40+scrollY, 20, 20);

                rect(x*40+20+scrollX, y*40+scrollY, 20, 20);

                rect(x*40+scrollX, y*40+20+scrollY, 20, 20);

                rect(x*40+20+scrollX, y*40+20+scrollY, 20, 20);

                noStroke();

                fill(166, 194, 134);

triangle(x*40+scrollX+5, y*40+scrollY,

    x*40+scrollX+13, y*40+scrollY,

    x*40+scrollX+9, y*40+scrollY+15);

triangle(x*40+scrollX+25, y*40+scrollY+10,

    x*40+scrollX+33, y*40+scrollY+10,

    x*40+scrollX+29, y*40+scrollY+20);

triangle(x*40+scrollX+10, y*40+scrollY+25,

    x*40+scrollX+20, y*40+scrollY+25,

    x*40+scrollX+15, y*40+scrollY+40);

                break;

            case 36:

                if(options._3D){

if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    stroke(0, 76, 77);

                    noFill();

                    strokeWeight(5);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    stroke(0, 76, 77);

                    noFill();

                    strokeWeight(5);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    stroke(0, 76, 77);

                    noFill();

                    strokeWeight(5);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    stroke(0, 76, 77);

                    noFill();

                    strokeWeight(5);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }}

noStroke();

drawFlame(x*40+scrollX, y*40+scrollY+5, 2, 40);

fill(0, 64, 66);

rect(x*40+scrollX, y*40+scrollY, 5, 40);

rect(x*40+scrollX, y*40+scrollY, 40, 5);

rect(x*40+scrollX+35, y*40+scrollY, 5, 40);

rect(x*40+scrollX, y*40+scrollY+35, 40, 5);

stroke(0, 64, 66);

strokeWeight(3);

line(x*40+scrollX+10, y*40+scrollY+2, x*40+scrollX+10, y*40+scrollY+37);

line(x*40+scrollX+28, y*40+scrollY+2, x*40+scrollX+28, y*40+scrollY+37);

line(x*40+scrollX+2, y*40+scrollY+10, x*40+scrollX+35, y*40+scrollY+10);

line(x*40+scrollX+2, y*40+scrollY+28, x*40+scrollX+35, y*40+scrollY+28);

                if(round(random(0, 100))){}else if(dist(x, y, posB, posA)<10){

                    if(nether){
                        spawnMobs(x*40+random(-120, 120), y*40-40, 9);
                    }else{
                        spawnMobs(x*40+random(-120, 120), y*40-40, 2);
                    }

                }

                break;

            case 37:

                stroke(140);

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(240);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(210);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(200);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(180);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(230);

                stroke(140);

        rect(x*40+scrollX, y*40+scrollY, 40, 40);

                break;

            case 38:

                stroke(209, 157, 0);

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(255, 244, 122);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(227, 208, 0);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(214, 196, 0);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(196, 180, 0);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }}

                fill(255, 234, 0);

                stroke(209, 157, 0);

        rect(x*40+scrollX, y*40+scrollY, 40, 40);

                break;

            case 39:

                stroke(0, 148, 148);

                fill(0, 255, 255);

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(148, 255, 255);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0, 224, 224);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0, 212, 212);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0, 196, 196);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                stroke(0, 148, 148);

                fill(0, 255, 255);

        rect(x*40+scrollX, y*40+scrollY, 40, 40);

                break;

            case 40:

                fill(120, 83, 44);

                var xx = x*40+scrollX, yy = y*40+scrollY;

                if(solidBlocks[world[y+1][x]]){

                    rect(xx+16, yy+16, 8, 30);

                    fill(255, 251, 181);

                    rect(xx+16, yy+8, 8, 8);

                }else if(solidBlocks[world[y][x-1]]){

                    quad(xx, yy+40, xx, yy+25, xx+5, yy+16, xx+13, yy+16);

                    fill(255, 251, 181);

                    quad(xx+13, yy+16, xx+5, yy+16, xx+9, yy+8, xx+18, yy+8);

                }else if(solidBlocks[world[y][x+1]]){

                    quad(xx+40, yy+40, xx+40, yy+25, xx+35, yy+16, xx+27, yy+16);

                    fill(255, 251, 181);

                    quad(xx+27, yy+16, xx+35, yy+16, xx+31, yy+8, xx+22, yy+8);

                }else{

                    world[y][x]=0;

                    spawnEntity(x*40+random(0,20), y*40+10, 0, 40);

                }

                break;

            case 41:

                fill(115, 255, 136);

                rect(x*40+scrollX+3, y*40+scrollY, 5, 40);

                rect(x*40+scrollX+13, y*40+scrollY, 5, 40);

                rect(x*40+scrollX+23, y*40+scrollY, 5, 40);

                rect(x*40+scrollX+33, y*40+scrollY, 5, 40);

                if(!round(random(0,5000))&&world[y+2][x]!==41){

                    world[y-1][x]=41;

                }

                if(((world[y-(-1)][x]!==20&&world[y-(-1)][x]!==2&&world[y-(-1)][x]!==3)||(world[y-(-1)][x-1]!==11&&world[y-(-1)][x-1]!==12&&world[y-(-1)][x-(-1)]!==11&&world[y-(-1)][x-(-1)]!==12))&&world[y-(-1)][x]!==41){

                    world[y][x]=0;

                    spawnEntity(x*40+random(0,20), y*40+10, 0, 41);

                }

                break;

            case 42:

                if(!(power[y][x]<=15&&power[y][x]>=0)){

                    power[y][x]=0;

                }

                if(power[y+1][x]>=2||(power[y][x-1]>=2&&solidBlocks[world[y][x-1]])||(power[y][x+1]>=2&&solidBlocks[world[y][x+1]])){

                    power[y][x]=15;

                }

                if(solidBlocks[world[y][x+1]]&&power[y][x]>0){

                    power[y][x+1]=1;

                }

                if(solidBlocks[world[y][x-1]]&&power[y][x]>0){

                    power[y][x-1]=1;

                }

                

                fill(power[y][x]*10+105, 0, 0);

                if(power[y][x]===0){

                    fill(75, 0, 0);

                }

                if(options._3D){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/6;

                    yy+=(200-yy)/11;

                    var xxx = x*40+scrollX;

                    var yyy = y*40+scrollY+40;

                    xxx+=(200-xxx)/8;

                    yyy+=(200-yyy)/15;

                    if(yy>200){

                    if(!opaqueBlocks[world[y][x-1]]&&xx>200){

                        quad(x*40+scrollX,yyy,

                        xxx+40,yyy,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y][x+1]]&&xx<200){

                        quad(xxx,yyy,

                        x*40+scrollX+40,yyy,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(xxx,yyy,

                        xxx+35,yyy,

                        xx+33,yy,

                        xx,yy);

                    }

                    }

                }else{

                    rect(x*40+scrollX, y*40+scrollY+35, 40, 5);

                }

                if(world[y-1][x-1]===42&&!solidBlocks[world[y-1][x]]){

                if(options._3D){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/6;

                    yy+=(200-yy)/11;

                    if(xx<200){

                    var xxx = x*40+scrollX;

                    var yyy = y*40+scrollY+40;

                    xxx+=(200-xxx)/8;

                    yyy+=(200-yyy)/15;

                

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(xxx,yyy,

                        xxx,yyy-36,

                        xx,yy-35,

                        xx,yy);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<200){

                        quad(xxx,y*40+scrollY+40,

                        xxx,yyy-36,

                        xx,yy-35,

                        xx,y*40+scrollY+40);

                    }else if(xx<200){

                        quad(xxx,yyy,

                        xxx,yyy-36,

                        xx,yy-35,

                        xx,yy);

                    }

                    }

                }else{

                    rect(x*40+scrollX, y*40+scrollY-5, 5, 40);

                }

                    if(power[y][x]!==0&&power[y][x]!==undefined&&power[y-1][x-1]<power[y][x]){

                        power[y-1][x-1]=power[y][x]-1;

                    }

                }

                if(world[y-1][x+1]===42&&!solidBlocks[world[y-1][x]]){

                if(options._3D){

                    var xx = x*40+scrollX+40;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/6;

                    yy+=(200-yy)/11;

                    if(xx>200){

                    var xxx = x*40+scrollX+40;

                    var yyy = y*40+scrollY+40;

                    xxx+=(200-xxx)/8;

                    yyy+=(200-yyy)/15;

                

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(xxx,yyy,

                        xxx,yyy-36,

                        xx,yy-35,

                        xx,yy);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<200){

                        quad(xxx,y*40+scrollY+40,

                        xxx,yyy-36,

                        xx,yy-35,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(xxx,yyy,

                        xxx,yyy-36,

                        xx,yy-35,

                        xx,yy);

                    }

                    }

                }else{

                    rect(x*40+scrollX+35, y*40+scrollY-5, 5, 40);

                }

                    if(power[y][x]!==0&&power[y][x]!==undefined&&power[y][x]>power[y-1][x+1]){

                        power[y-1][x+1]=power[y][x]-1;

                    }

                }

                if(power[y][x]!==0&&power[y][x]!==undefined){

                    if(world[y][x+1]===42&&power[y][x+1]<power[y][x]){

                        power[y][x+1]=power[y][x]-1;

                    }

                    if(world[y][x-1]===42&&power[y][x-1]<power[y][x]){

                        power[y][x-1]=power[y][x]-1;

                    }

                    if(world[y+1][x+1]===42&&power[y+1][x+1]<power[y][x]){

                        power[y+1][x+1]=power[y][x]-1;

                    }

                    if(world[y+1][x-1]===42&&power[y+1][x-1]<power[y][x]){

                        power[y+1][x-1]=power[y][x]-1;

                    }

                    if(power[y+1][x]<=1){

                        power[y+1][x]=1;

                    }

                }

                if(power[y][x]<15){

                    if(power[y][x]<power[y][x-1]&&power[y][x]<power[y][x+1]&&power[y][x]<power[y-1][x-1]&&power[y][x]<power[y-1][x+1]&&power[y][x]<power[y+1][x-1]&&power[y][x]<power[y+1][x+1]){

                        power[y][x]=0;

                    }

                }else if((world[y][x-1]!==42&&power[y][x-1]<2)&&

                (world[y][x+1]!==42&&power[y][x+1]<2)&&power[y+1][x]<2&&power[y-1][x]<2){

                    power[y][x]=0;

                }

                if(power[y][x]<power[y][x+1]&&power[y][x]<power[y][x-1]&&

                power[y][x]<power[y-1][x+1]&&power[y][x]<power[y-1][x+1]&&

                power[y][x]<power[y+1][x+1]&&power[y][x]<power[y+1][x+1]){

                    power[y][x]=0;

                }

                if(!solidBlocks[world[y+1][x]]){

                    spawnEntity(x*40+random(0,20), y*40+10, 0, 42);

                    world[y][x]=0;

                }

                break;

            case 43:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(140);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(122, 122, 122);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                fill(200, 0, 0);

                if(y===posA2-(-1)&&(dist(posB2,0,x,0)===0||dist(posB,0,x,0)===0)){

                    specs[y][x]=1000;

                }

                if(specs[y][x]>0){

                    specs[y][x]--;

                    fill(255, 0, 0);

                }

                ellipse(x*40+10+scrollX, y*40+10+scrollY, 8, 8);

                ellipse(x*40+28+scrollX, y*40+12+scrollY, 10, 10);

                ellipse(x*40+20+scrollX, y*40+18+scrollY, 6, 6);

                ellipse(x*40+10+scrollX, y*40+24+scrollY, 12, 8);

                ellipse(x*40+28+scrollX, y*40+30+scrollY, 18, 14);

                break;

            case 44:

                if(power[y][x]>0){

                    if(world[y][x-1]===42){

                        power[y][x-1]=15;

                    }

                    if(world[y][x+1]===42){

                        power[y][x+1]=15;

                    }

                    if(world[y+1][x]===42){

                        power[y+1][x]=15;

                    }

                    if(solidBlocks[world[y-1][x]]){

                        power[y-1][x]=2;

                    }

                }

                power[y][x]=1;

                fill(120, 83, 44);

                var xx = x*40+scrollX, yy = y*40+scrollY;

                if(solidBlocks[world[y+1][x]]){

                    if(power[y+1][x]>0){

                        power[y][x]=0;

                    }

                    rect(xx+16, yy+16, 8, 30);

                    if(power[y][x]>0){

                        fill(255, 0, 0);

                        ellipse(xx+20, yy+12, 16, 16);

                        fill(255, 181, 181);

                    }else{

                        fill(100, 0, 0);

                    }

                    rect(xx+16, yy+8, 8, 8);

                }else if(solidBlocks[world[y][x-1]]){

                    if(power[y][x-1]>0){

                        power[y][x]=0;

                    }

                    quad(xx, yy+40, xx, yy+25, xx+5, yy+16, xx+13, yy+16);

                    if(power[y][x]>0){

                        fill(255, 0, 0);

                        ellipse(xx+12, yy+12, 16, 16);

                        fill(255, 181, 181);

                    }else{

                        fill(100, 0, 0);

                    }

                    quad(xx+13, yy+16, xx+5, yy+16, xx+9, yy+8, xx+18, yy+8);

                }else if(solidBlocks[world[y][x+1]]){

                    if(power[y][x+1]>0){

                        power[y][x]=0;

                    }

                    quad(xx+40, yy+40, xx+40, yy+25, xx+35, yy+16, xx+27, yy+16);

                    if(power[y][x]>0){

                    fill(255, 0, 0);

                    ellipse(xx+28, yy+12, 16, 16);

                    fill(255, 181, 181);

                    }else{

                        fill(100, 0, 0);

                    }

                    quad(xx+27, yy+16, xx+35, yy+16, xx+31, yy+8, xx+22, yy+8);

                }else{

                    world[y][x]=0;

                    spawnEntity(x*40+random(0,20), y*40+10, 0, 44);

                }

                break;

            case 45:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(255, 173, 125);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(230, 143, 92);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(222, 126, 77);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(194, 125, 85);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                strokeWeight(2);

                if(getSpecs(y,x)>0||getSpecs(y,x)<=0){

                    specs[y][x]=[0,""];

                }

                fill(255, 152, 92);

                rect(x*40+scrollX,y*40+scrollY,40,40);

                stroke(181, 91, 38);

                fill(255, 205, 176);

                quad(x*40+scrollX+10, y*40+scrollY+1, x*40+scrollX+1, y*40+scrollY+10, x*40+scrollX+30, y*40+scrollY+39, x*40+scrollX+39, y*40+scrollY+30);

                quad(x*40+scrollX+30, y*40+scrollY+1, x*40+scrollX+39, y*40+scrollY+10, x*40+scrollX+10, y*40+scrollY+39, x*40+scrollX+1, y*40+scrollY+30);

                fill(245);

                stroke(225);

                rect(x*40+scrollX+10, y*40+scrollY+10, 20, 20);

                stroke(255, 0, 0);

                strokeWeight(3);

                point(x*40+scrollX+20, y*40+scrollY+20);

                point(x*40+scrollX+14, y*40+scrollY+14);

                point(x*40+scrollX+26, y*40+scrollY+14);

                stroke(0, 200, 0);

                point(x*40+scrollX+20, y*40+scrollY+14);

                point(x*40+scrollX+26, y*40+scrollY+26);

                stroke(255, 200, 0);

                point(x*40+scrollX+20, y*40+scrollY+26);

                point(x*40+scrollX+26, y*40+scrollY+20);

                point(x*40+scrollX+14, y*40+scrollY+20);

                point(x*40+scrollX+14, y*40+scrollY+26);

                var derp = false;

                if(getPower(y,x)>=1&&getSpecs(y,x)[0]===1){

                    if(onInputBox){

                        derp=input;

                    }

                    onInputBox=true;

                    input=getSpecs(y,x)[1];

                    if(input.substr(0,1)!=="/"){

                        input="/"+input;

                    }

                    var commandLine = input.split(" ");

switch(commandLine[0]){

    case "/say":

        var message = "";

            for(var i = 1; i < commandLine.length; i++){

                message+=commandLine[i]+" ";

            }

            broadcast("[@] "+message);

        break;

    case "/gamemode":

        if(commandLine[1]<=1&&commandLine[1]>=0){

            gamemode=round(commandLine[1]);

            broadcast("Your game mode has been updated.");

        }else{

            broadcast(commandLine[1]+" is not a gamemode.");

        }

        break;

    case "/help":

        broadcast("==========[ HELP ]==========");

        broadcast("/give [data] [amount]");

        broadcast("gives you item by data and amount");

        broadcast("/clear");

        broadcast("clears your inventory");

        broadcast("/kill");

        broadcast("Ouch! that look like it hurt!");

        broadcast("/killall");

        broadcast("kills everything. Good for dat lag");

        broadcast("==========================");

        break;

    case "/me":

        var message = "";

        for(var i = 1; i < commandLine.length; i++){

            message+=commandLine[i]+" ";

        }

        broadcast("* "+username+" "+message);

        break;

    case "/clear":

        var itemsCleared = 0;

        for(var i = 0; i < 9; i++){

            itemsCleared+=hotbarStacks[i];

            hotbar[i]=0;hotbarStacks[i]=0;

        }

        for(var i = 0; i < 6; i++){

            for(var j = 0; j < 4; j++){

                itemsCleared+=invStacks[i][j];

                invContents[i][j]=0;invStacks[i][j]=0;

            }

        }

        for(var i = 0; i < 4; i++){

            if(armorSlots[i]){

                itemsCleared++;

                armorSlots[i]=0;armorSpecs[i]=0;

            }

        }

        if(itemsCleared){

            broadcast("Cleared the inventory of "+username+", removing "+itemsCleared+" items.");

        }else{

            broadcast("Could not clear the inventory of "+username+", no items to remove.");

        }

        break;

    case "/give":

        if(commandLine[1]!==undefined&&(commandLine[1]>0&&commandLine[1]<blocks)||(commandLine[1]>=300&&commandLine[1]<items)){

            if(commandLine[2]){

                getItem(commandLine[1]-0, commandLine[2]-0);

            }else{

                getItem(commandLine[1]-0, 1);

                commandLine[2]=1;

            }

            if(commandLine[1]<300){

                broadcast("given "+username+" "+commandLine[2]+" of "+commandLine[1]+" ("+tileNames[commandLine[1]]+").");

            }else{

                broadcast("given "+username+" "+commandLine[2]+" of "+commandLine[1]+" ("+itemNames[commandLine[1]-300]+").");

            }

        }else{

            broadcast(commandLine[1]+" is not a valid number.");

        }

        break;

    case "/kill":

        health=0;

        broadcast("Ouch! That look like it hurt!");

        break;

    case "/killall":

        var mobsKilled = 0;

        for(var i = 0; i < mobs.length; i++){

                if(mobs.health[i]>0){

                    mobsKilled++;

                }

                mobs.health[i]=0;

        }

        broadcast("An asteroid collides with the earth, obliterating "+mobsKilled+" entities.");

        break;

    case "/time":

        if(commandLine[1]!==undefined&&commandLine[2]!==undefined){

            switch(commandLine[1]){

                case "set":

                    time=commandLine[2];

                    broadcast("Time set to "+time);

                    break;

                case "add":

                    time+=commandLine[2]-0;

                    if(time>20000){

                        while(time>20000){

                            time-=20000;

                        }

                    }

                    broadcast("Time set to "+time);

                    break;

                default:

                    broadcast("Usage: /time <set/add> <value>");

            }

        }else{broadcast("Usage: /time <set/add> <value>");}

        break;

    default:

        broadcast("Unknown command. Type /help for help.");

}

                    if(derp===false){

                        onInputBox=false;

                        input="";

                    }else{

                        input=derp;

                    }

                    specs[y][x][0]=0;

                }

                if(getPower(y,x)===0){

                    specs[y][x][0]=1;

                }

                break;

            case 46:

                if(specs[y][x]===undefined){

                    specs[y][x]=0;

                }

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    if(specs[y][x]===0){

                        fill(112, 78, 56);

                    }else{

                        fill(92, 47, 21);

                    }

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(97, 47, 11);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    fill(82, 39, 9);

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(61, 28, 7);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                fill(130, 56, 0);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                var foundWater = false;

                if(!round(random(0,100))){

                for(var i = -2; i < 2; i++){

                    for(var j = -4; j < 5; j++){

                        if(world[i+y][j+x]===11||world[i+y][j+x]===12){

                            foundWater=true;

                        }

                    }

                }

                if(foundWater){

                    specs[y][x]=1;

                }else{

                    if(specs[y][x]===0){

                        world[y][x]=3;

                    }else{

                        specs[y][x]=0;

                    }

                }

                }

                break;

            case 47:

                fill(113, 214, 115);

                rect(x*40+scrollX,y*40+scrollY+20,5,20);

                rect(x*40+scrollX+10,y*40+scrollY+10,5,30);

                rect(x*40+scrollX+20,y*40+scrollY+13,5,27);

                rect(x*40+scrollX+30,y*40+scrollY+22,5,18);

                if(world[y-(-1)][x]!==2&&world[y-(-1)][x]!==3){

                    world[y][x]=0;

                }

                break;

            case 48:

                if(specs[y][x]===undefined){

                    specs[y][x]=0;

                }var height = specs[y][x]*3;

                fill(113+height*2, 214-height*2, 0);

                if(specs[y][x]===7){

                    fill(176, 141, 0);

                }

                rect(x*40+scrollX,y*40+scrollY+35-height,5,5+height);

                rect(x*40+scrollX+10,y*40+scrollY+25-height,5,15+height);

                rect(x*40+scrollX+20,y*40+scrollY+28-height,5,12+height);

                rect(x*40+scrollX+30,y*40+scrollY+37-height,5,3+height);

                if(world[y-(-1)][x]!==46){

                    world[y][x]=0;

                }

                if(!round(random(0,200))){

                    if(specs[y][x]<7){

                        specs[y][x]++;

                    }

                }

                break;

            case 49:

if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(140);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(122, 122, 122);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                fill(0, 225, 0);

                ellipse(x*40+10+scrollX, y*40+10+scrollY, 8, 8);

                ellipse(x*40+28+scrollX, y*40+12+scrollY, 10, 10);

                ellipse(x*40+20+scrollX, y*40+18+scrollY, 6, 6);

                ellipse(x*40+10+scrollX, y*40+24+scrollY, 12, 8);

                ellipse(x*40+28+scrollX, y*40+30+scrollY, 18, 14);

                break;

            case 50:

                stroke(0, 150, 0);

                fill(0, 255, 255);

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(148, 255, 148);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0, 224, 0);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0, 212, 0);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0, 196, 0);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(0, 255, 0);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                var xx = x*40+scrollX, yy = y*40+scrollY;

                quad(xx+20,yy,xx+40,yy+20,xx+20,yy+40,xx,yy+20);

                rect(xx+10,yy+10,20,20);

                break;

            case 51:

                stroke(150, 0, 0);

                fill(0, 255, 255);

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(255, 148, 148);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(225, 0, 0);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(212, 0, 0);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(196, 0, 0);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(255, 0, 0);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                if(getBlock(y-1,x)===42){

                    power[y-1][x]=15;

                }

                if(getBlock(y+1,x)===42){

                    power[y+1][x]=15;

                }

                if(getBlock(y,x-1)===42){

                    power[y][x-1]=15;

                }

                if(getBlock(y,x+1)===42){

                    power[y][x+1]=15;

                }

                break;

            case 52:

                stroke(0);

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(50);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(30);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(60);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                break;

            case 53:

                stroke(0, 0, 150);

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100, 100, 255);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0, 0, 255);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0, 0, 212);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(0, 0, 196);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(50, 50, 255);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                break;
            case 54:
                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(255);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(225);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(200);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(180);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(235);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                break;
            case 55:

                if(options._3D){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+20;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(255,0,0);

                    if(!opaqueBlocks[world[y][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+20,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+20,

                        x*40+scrollX+40,y*40+scrollY+20,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY+20,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+30,yy,

                        xx,yy);

                    }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+20;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(225,0,0);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY+20,

                        xx,y*40+scrollY+20,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY+20,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY+20,

                        xx,yy,

                        xx,yy+17);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+20;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(200,0,0);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+31,yy,

                        xx+31,yy+17);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(180,0,0);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(235,0,0);

                rect(x*40+scrollX, y*40+scrollY+20, 40, 20);

                break;

            case 56:

                if(options._3D){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+20;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    stroke(225);

                    fill(255);

                    if(!opaqueBlocks[world[y][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+20,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+20,

                        x*40+scrollX+40,y*40+scrollY+20,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY+20,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+30,yy,

                        xx,yy);

                    }

                noStroke();

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+20;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(225,0,0);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY+20,

                        xx,y*40+scrollY+20,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY+20,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY+20,

                        xx,yy,

                        xx,yy+17);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+20;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(200,0,0);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+20,

                        xx+31,yy,

                        xx+31,yy+17);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(180,0,0);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(235,0,0);

                rect(x*40+scrollX, y*40+scrollY+20, 40, 20);

                break;
            case 57:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(125, 0, 50);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                        stroke(75,0,0);

                        line(x*40+scrollX,yy,xx+30,yy);

                        var xxx=x*40+scrollX,yyy=y*40+scrollY;

                        xxx+=(200-xx)/4; yyy+=(200-yy)/8;

                        line(x*40+scrollX,yyy,xxx+32,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/6; yyy+=(200-yy)/12;

                        line(x*40+scrollX,yyy,xxx+34,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/10; yyy+=(200-yy)/20;

                        line(x*40+scrollX,yyy,xxx+36,yyy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                        stroke(75,0,0);

                        line(xx,yy,x*40+scrollX+40,yy);

                        var xxx=x*40+scrollX,yyy=y*40+scrollY;

                        xxx+=(200-xx)/4; yyy+=(200-yy)/8;

                        line(xxx,yyy,x*40+scrollX+40,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/6; yyy+=(200-yy)/12;

                        line(xxx,yyy,x*40+scrollX+40,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/10; yyy+=(200-yy)/20;

                        line(xxx,yyy,x*40+scrollX+40,yyy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                        stroke(75,0,0);

                        line(xx,yy+1,xx+30,yy+1);

                        var xxx=x*40+scrollX,yyy=y*40+scrollY;

                        xxx+=(200-xx)/4; yyy+=(200-yy)/8;

                        line(xxx,yyy,xxx+32,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/6; yyy+=(200-yy)/12;

                        line(xxx,yyy,xxx+34,yyy);

                        xxx=x*40+scrollX;yyy=y*40+scrollY;

                        xxx+=(200-xx)/10; yyy+=(200-yy)/20;

                        line(xxx,yyy,xxx+36,yyy);

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    if(xx>200){

                    fill(85, 0, 45);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                        stroke(75,0,0);

                        line(xx,yy,x*40+scrollX,y*40+scrollY);

                        line(x*40+scrollX,y*40+scrollY+10,xx,yy+8);

                        line(x*40+scrollX,y*40+scrollY+20,xx,yy+16);

                        line(x*40+scrollX,y*40+scrollY+30,xx,yy+24);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                        stroke(75,0,0);

                        line(xx,yy,x*40+scrollX,y*40+scrollY);

                        line(x*40+scrollX,y*40+scrollY+10,xx,yy+8);

                        line(x*40+scrollX,y*40+scrollY+20,xx,yy+16);

                        line(x*40+scrollX,y*40+scrollY+30,xx,yy+24);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                        stroke(75,0,0);

                        line(xx,yy,x*40+scrollX,y*40+scrollY);

                        line(x*40+scrollX,y*40+scrollY+10,xx,yy+8);

                        line(x*40+scrollX,y*40+scrollY+20,xx,yy+16);

                        line(x*40+scrollX,y*40+scrollY+30,xx,yy+24);

                    }

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(75, 0, 40);

                    

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        stroke(75,0,0);

                        line(xx+30,yy,x*40+scrollX+40,y*40+scrollY);

                        line(x*40+scrollX+40,y*40+scrollY+10,xx+30,yy+8);

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        line(x*40+scrollX+40,y*40+scrollY+30,xx+30,yy+24);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                        stroke(75,0,0);

                        line(xx+30,yy,x*40+scrollX+40,y*40+scrollY);

                        line(x*40+scrollX+40,y*40+scrollY+10,xx+30,yy+8);

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        line(x*40+scrollX+40,y*40+scrollY+30,xx+30,yy+24);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                        stroke(75,0,0);

                        line(xx+30,yy,x*40+scrollX+40,y*40+scrollY);

                        line(x*40+scrollX+40,y*40+scrollY+10,xx+30,yy+8);

                        line(x*40+scrollX+40,y*40+scrollY+20,xx+30,yy+16);

                        line(x*40+scrollX+40,y*40+scrollY+30,xx+30,yy+24);

                    }

                    }

                }

                noStroke();

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(60, 0, 20);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(100, 0, 50);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                stroke(75,0,0);

                line(x*40+scrollX, y*40+scrollY, x*40+40+scrollX, y*40+scrollY);

                line(x*40+10+scrollX, y*40+scrollY, x*40+10+scrollX, y*40+10+scrollY);

                line(x*40+scrollX, y*40+10+scrollY, x*40+scrollX+40, y*40+scrollY+10);

                line(x*40+30+scrollX, y*40+scrollY, x*40+30+scrollX, y*40+10+scrollY);

                line(x*40+40+scrollX, y*40+20+scrollY, x*40+40+scrollX, y*40+20+scrollY);

                line(x*40+20+scrollX, y*40+10+scrollY, x*40+20+scrollX, y*40+20+scrollY);

                line(x*40+scrollX, y*40+20+scrollY, x*40+40+scrollX, y*40+20+scrollY);

                line(x*40+10+scrollX, y*40+20+scrollY, x*40+10+scrollX, y*40+30+scrollY);

                line(x*40+30+scrollX, y*40+20+scrollY, x*40+30+scrollX, y*40+30+scrollY);

                line(x*40+scrollX, y*40+30+scrollY, x*40+40+scrollX, y*40+30+scrollY);

                line(x*40+20+scrollX, y*40+30+scrollY, x*40+20+scrollX, y*40+40+scrollY);

                noStroke();

                break;
            case 58:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(255, 237, 191);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(209, 188, 134);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(201, 176, 114);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(173, 151, 97);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(255, 230, 166);
                rect(x*40+scrollX, y*40+scrollY, 40, 40);
                fill(0, 105, 105);
                rect(x*40+scrollX,y*40+scrollY,5,40);
                rect(x*40+scrollX,y*40+scrollY,40,5);
                rect(x*40+scrollX+35,y*40+scrollY,5,40);
                rect(x*40+scrollX,y*40+scrollY+35,40,5);
                stroke(0, 105, 105);
                if(specs[y][x]===undefined){
                    specs[y][x]=0;
                }
                if(specs[y][x]){
                    fill(0, 255, 50);
                    rect(x*40+scrollX+13, y*40+scrollY+10, 14, 20);
                    fill(0);
                    rect(x*40+scrollX+18,y*40+scrollY+14,4,12);
                }else{
                    fill(0);
                    rect(x*40+scrollX+13, y*40+scrollY+10, 14, 20);
                }
                if(world[y-1][x]===0){
                    var check = 0;
                    for(var i = y-4; i <= y; i++){
                        if(i===y-4||i===y){
                            for(var j = x-1; j <= x+1; j++){
                    if(world[i][j]===58&&specs[i][j]===1){
                        check++;
                    }
                            }
                        }else{
                    if(world[i][x-2]===58&&specs[i][x-2]===1){
                        check++;
                    }
                    if(world[i][x+2]===58&&specs[i][x+2]===1){
                        check++;
                    }
                        }
                    }
                    if(check===12){
                        for(var i = 0; i < 3; i++){
                            for(var j = 0; j < 3; j++){
                                world[y-i-1][x-j+1]=60;
                            }
                        }
                    }
                }
                break;
            case 59:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(255);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(245, 245, 145);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(230, 230, 114);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(200, 200, 90);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(255, 255, 206);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);
                    
                break;
            case 60:
                fill(56, 0, 25);
                rect(x*40+scrollX, y*40+scrollY, 40, 40);
                for(var i = 0; i < 20; i++){
                    for(var j = 0; j < 20; j++){
                        if(!round(random(0,20))){
                            fill(round(random(150,255)));
                            ellipse(i*2+x*40+scrollX,j*2+y*40+scrollY,2,2);
                        }
                    }
                }
                break;
            case 61:

                if(options._3D){

                if(opaqueBlocks[world[y-1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(140);

                    if(!opaqueBlocks[world[y-1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y-1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy>200){

                        quad(x*40+scrollX,y*40+scrollY,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                if(opaqueBlocks[world[y][x-1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(100);

                    if(!opaqueBlocks[world[y-1][x-1]]&&yy>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,y*40+scrollY,

                        xx,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x-1]]&&yy<160){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,y*40+scrollY+40);

                    }else if(xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX,y*40+scrollY,

                        xx,yy,

                        xx,yy+35);

                    }

                }

                if(opaqueBlocks[world[y][x+1]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(90);

                    if(xx<170){

                    if(!opaqueBlocks[world[y-1][x+1]]&&yy>200){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&yy<160){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,y*40+scrollY+40);

                    }else if(xx<170){

                        quad(x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY,

                        xx+31,yy,

                        xx+31,yy+35);

                    }

                    }

                }

                if(opaqueBlocks[world[y+1][x]]){

                    var xx = x*40+scrollX;

                    var yy = y*40+scrollY+40;

                    xx+=(200-xx)/4;

                    yy+=(200-yy)/7;

                    fill(70);

                    if(!opaqueBlocks[world[y+1][x-1]]&&xx>200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        x*40+scrollX,yy);

                    }else if(!opaqueBlocks[world[y+1][x+1]]&&xx<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        x*40+scrollX+40,yy,

                        xx,yy);

                    }else if(yy<200){

                        quad(x*40+scrollX,y*40+scrollY+40,

                        x*40+scrollX+40,y*40+scrollY+40,

                        xx+30,yy,

                        xx,yy);

                    }

                }

                }

                fill(130);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);
                stroke(100);
                line(x*40+scrollX,y*40+scrollY+20,
                x*40+scrollX+40,y*40+scrollY+20);
                line(x*40+scrollX,y*40+scrollY+40,
                x*40+scrollX+40,y*40+scrollY+40);
                line(x*40+scrollX,y*40+scrollY,
                x*40+scrollX,y*40+scrollY+20);
                line(x*40+scrollX+20,y*40+scrollY+20,
                x*40+scrollX+20,y*40+scrollY+40);
                break;
            default:

                fill(234, 0, 255);

                rect(x*40+scrollX, y*40+scrollY, 40, 40);

                stroke(164, 0, 179);

                strokeWeight(4);

                line(x*40+scrollX+2, y*40+scrollY+2, x*40+scrollX+2, y*40+scrollY+37);

                line(x*40+scrollX+2, y*40+scrollY+2, x*40+scrollX+37, y*40+scrollY+2);

                strokeWeight(2);

}

strokeWeight(2);

noStroke();
if(y>0&&y<39){
if(opaqueBlocks[world[y][x]]&&options._3D){
    var xx = x*40+scrollX;
    xx+=(200-xx)/4;
    var yy = y*40+scrollY;
    yy+=(200-yy)/7;
    if(!opaqueBlocks[world[y][x-1]]&&y>=14&&opaqueBlocks[world[y-1][x]]){
        fill(0, 0, 0, 35);
        if(!opaqueBlocks[world[y-1][x-1]]){
            rect(xx,yy,30,34);
        }else{
            triangle(xx,yy+34,xx,yy,xx+30,yy+34);
        }
    }
    if(y>=14&&!opaqueBlocks[world[y-1][x]]){
        fill(0, 0, 0, 35);
        if(!opaqueBlocks[world[y][x-1]]||!opaqueBlocks[world[y-1][x-1]]){
            rect(xx,yy,30,34);
        }else{
            triangle(xx,yy,xx+30,yy,xx+30,yy+34);
        }
    }
    if(!opaqueBlocks[world[y-1][x-1]]&&opaqueBlocks[world[y][x-1]]&&opaqueBlocks[world[y-1][x]]&&y>=14){
        fill(0, 0, 0, 35);
        rect(xx,yy,30,34);
    }
}
if(!opaqueBlocks[world[y][x]]&&world[y][x]!==undefined&&options._3D){
    if(!opaqueBlocks[world[y-1][x-1]]&&opaqueBlocks[world[y-1][x]]){

        var xx = x*40+scrollX,yy = y*40+scrollY;

        xx += (200-xx)/4;yy += (200-yy)/7;

        fill(0, 0, 0, 75);

        if(yy>200){

            if(xx<200){

                triangle(x*40+scrollX,y*40+scrollY,

    xx,yy,xx+30,yy);

            }else if(xx<270){

                triangle(x*40+scrollX,y*40+scrollY,x*40+scrollX,yy,xx+30,yy);

            }

        }

    }

    if(!opaqueBlocks[world[y-1][x-1]]&&opaqueBlocks[world[y][x-1]]){

        var xx = x*40+scrollX,yy = y*40+scrollY;

        xx += (200-xx)/4;yy += (200-yy)/7;

        fill(0, 0, 0, 50);

        if(xx>200){

            if(yy<200){

                triangle(x*40+scrollX,y*40+scrollY,xx,yy,xx,yy+35);

            }else{

                triangle(x*40+scrollX,y*40+scrollY,xx,y*40+scrollY,xx,yy+35);

            }

        }

    }

}

}

fill(255, 0, 0);

if(world[y][x]!==0&&!round(random(0,0.75))){

    

}

if(solidBlocks[world[y][x]]){

    power[y][x]=0;

}

if(power[y][x]===undefined){

    power[y][x]=0;

}

}catch(error){}

};

var drawWorld = function(){

    

    

    var sX=round((scrollX/40)-(scrollX/20)+5);

    var sY=round((scrollY/40)-(scrollY/20)+4);

    if(sY<=6){

        sY=7;

    }
var dMiD = function(){
    for(var s = 0; s < mobs.length; s++){
        if(mobs.nether[s]===nether&&mobs.end[s]===end&&mobs.health[s]&&mobs.distance[s]!==0){
            switch(mobs.type[s]){
                case 7:
        var yy = 14*40+scrollY;
        yy+=(200-yy)/(1+((mobs.distance[s])/2+0.3))+5;
        var xx = mobs.x[s]/2.97+scrollX/3;
        xx+=(200-xx)/(1+((mobs.distance[s])/1.5+0.3));
                    if(!round(random(0,500))||(mobs.specs[s][1]===1&&!round(random(0,200)))){
                        mobs.distance[s]=0;
                        if(mobs.specs[s][1]===1){
                            if(mouseX<200){
                                mobs.x[s]=posB*40+80;
                            }else{
                                mobs.x[s]=posB*40-80;
                            }
                            mobs.y[s]=posA*40-40;
                        }
                    }
                    fill(25);
                    rect(xx,yy-55,10,25);
                    rect(xx-2,yy-45,2,30);
                    rect(xx+10,yy-45,2,30);
                    rect(xx+2,yy-30,2,30);
                    rect(xx+6,yy-30,2,30);
                    fill(255, 0, 255);
                    rect(xx,yy-49,3.5,1);
                    rect(xx+6.5,yy-49,3.5,1);
                    noStroke();
                    break;
                case 8:
        var yy = mobs.y[s]-(mobs.distance[s]*10)+scrollY;
        yy+=(200-yy)/(9-mobs.distance[s]);
        var xx = mobs.x[s]+scrollX;
        xx+=(200-xx)/((9-mobs.distance[s])/1.5);
        var wingPos = sin(time*5);
        var wingPos2 = [];
        if(mobs.specs[s]===undefined){
            mobs.specs[s]=0;
        }
        for(var i = 0; i < 13; i++){
            wingPos2[i]=sin((time*5)-(i*10));
        }
        
        if(mobs.state[s]<2){
        translate(xx+30,yy-5+wingPos*3);
        if(mobs.state[s]===1){
            translate(-60,0);
            scale(-1,1);
        }
        for(var i = 0; i < 12; i++){
            fill(50);
            rect(i*10,wingPos2[12-i]*(i),10,10);
            fill(75);
            rect(i*10+2,wingPos2[12-i]*(i)-4,6,4);
        }
        resetMatrix();
        translate(xx-80,yy-5+wingPos*3);
        if(mobs.state[s]===1){
            translate(160,0);
            scale(-1,1);
        }
        for(var i = 0; i < 5; i++){
            fill(50);
            rect(i*10,-wingPos2[i*2]*(4-i),10,10);
            fill(75);
            rect(i*10+2,-wingPos2[i*2]*(4-i)-4,6,4);
        }
        fill(50);
        rect(-20,(-wingPos*4)-5,20,20);
        fill(255, 0, 255);
        rect(-15,(-wingPos*4),3,5);
        fill(255, 100, 255);
        triangle(-20,(-wingPos*4)+5,-15,(-wingPos*4),-15,(-wingPos*4)+5);
        fill(50);
        rect(-40,(-wingPos*4)+5,20,5);
        rect(-35,(-wingPos*4)+2,4,3);
        translate(-20,(-wingPos*4)+10);
        rotate(-wingPos*10-10);
        rect(0,0,-20,5);
        rotate(wingPos*10+10);
        translate(20,(wingPos*4)-10);
        fill(75);
        rect(-10,(-wingPos*4)-9,6,4);
        resetMatrix();
        translate(xx-30,yy-10+wingPos*3);
        if(mobs.state[s]===1){
            translate(60,0);
            scale(-1,1);
        }
        fill(50);
        rect(0,0,60,20);
        translate(40,20);
        rotate(-50+wingPos);
        rect(0,0,20,35);
        translate(5,35);
        rotate(-35);
        rect(0,0,15,25);
        translate(13,28);
        rotate(135);
        rect(0,0,25,7);
        resetMatrix();
        translate(xx-20,yy+wingPos*3);
        if(mobs.state[s]===1){
            translate(40,0);
            scale(-1,1);
        }
        rotate(45);
        rect(0,0,30,8);
        rotate(-45);
        rect(15,13,6,20);
        resetMatrix();
        translate(xx-30,yy-10+wingPos*3);
        if(mobs.state[s]===1){
            translate(60,0);
            scale(-1,1);
        }
        fill(75);
        rect(3,-7,15,7);
        rect(22.5,-7,15,7);
        rect(42,-7,15,7);
        translate(0,2);
        fill(10);
        triangle(8,0,8,-wingPos*35+2,47,-wingPos*35+2);
        fill(125);
        rect(3,0,5,-wingPos*35);
        fill(150);
        rect(3,-wingPos*35,44,4);
        rect(3,-wingPos*35,5,-wingPos2[4]*35);
        fill(25);
        triangle(8,(-wingPos*35)-(wingPos2[4]*35),8,-wingPos*35+2,47,-wingPos*35+2);
        }else{
            translate(xx,yy);
            var distance = (7-mobs.distance[s])*4;
            fill(50);
            rect(-20-distance,-10-distance/2,40+distance*2,20+distance);
            rect(-20-distance,9+distance/2,15+distance/2,20+distance/2);
            rect(20+distance,9+distance/2,-15-distance/2,20+distance/2);
            fill(45);
            if(mobs.state[s]===2){
                translate(0,5);
                rect(-10-distance/2,-10-distance/2,20+distance,20+distance);
                fill(255,0,255);
                rect(-8-distance/5,-4-distance/5,3+distance/10,3+distance/10);
                rect(8+distance/5,-4-distance/5,-3-distance/10,3+distance/10);
                fill(255, 100, 255);
                triangle(-5-distance/10,-4-distance/5,-5-distance/10,-1-distance/10,-2,-1-distance/10);
                triangle(5+distance/10,-4-distance/5,5+distance/10,-1-distance/10,2,-1-distance/10);
                fill(40);
                rect(-8-distance/4,-1-distance/10,16+distance/2,5+distance/5);
                rect(-8-distance/4,4-distance/5-wingPos*5+5,16+distance/2,5+distance/2.5);
                translate(0,-5);
            }
            fill(75);
            rect(-2,-16-distance/1.5,4,6+distance/3);
            translate(-20-distance,-10-distance/2);
            rotate(-wingPos*35);
            fill(125);
            rect(0,0,-50-distance,5+distance/5);
            translate(-50-distance,0);
            rotate(-wingPos2[4]*35);
            rect(0,0,-50-distance,5+distance/5);
            resetMatrix();
            translate(20+distance+xx,-10-distance/2+yy);
            rotate(wingPos*35);
            rect(0,0,50+distance,5+distance/5);
            translate(50+distance,0);
            rotate(wingPos2[4]*35);
            rect(0,0,50+distance,5+distance/5);
        }
        resetMatrix();
        if(mobs.state[s]===-1){
            translate(xx,yy);
            rotate(mobs.specs[s]);
            for(var i = 0; i < 19; i++){
                fill(255, 255, 255,10);
                ellipse(0,0,i*mobs.specs[s]/10,i*mobs.specs[s]/10);
                if(i&1){
                    rotate(40);
                    fill(255, 0, 255,mobs.specs[s]/2-100);
                    triangle(0,0,-400,-2000,400,-2000);
                }
            }resetMatrix();
            mobs.specs[s]++;
            
            if(mobs.specs[s]>=400){
                mobs.health[s]=0;
                background(255);
                for(var i = 7; i < 12; i++){
                    for(var j = 17; j < 22; j++){
                        if(i>7&&i<11){
                            if(j===17||j===21){
                                world[i][j]=10;
                            }else{
                                world[i][j]=60;
                            }
                        }else{
                            if(j>17&&j<21){
                                world[i][j]=10;
                            }
                        }
                    }
                }
            }
            if(mPressed){
            }
        }
        if(dist(posB*40+scrollX,0,xx,0)<10&&!round(random(0,20))&&mobs.state[s]<2&&mobs.state[s]>=0){
            mobs.state[s]=2;
            mobs.y[s]=posA*40;
        }
        if(mobs.state[s]===2){
            if(mobs.distance[s]<=1&&mPressed&&mouseButton===LEFT&&dist(mouseX,mouseY,xx,yy)<50){
                mPressed=false;
                mobs.health[s]--;
                if(hotbar[blockSelected]===317){
                    mobs.health[s]=0;
                }
                if(hotbar[blockSelected]>311&&hotbar[blockSelected]<317){
            hotbarSpecs[blockSelected]--;
            mobs.health[s]-=(hotbar[blockSelected]-310)/3;
        }

        if(mobs.health[s]<=0){
            mobs.health[s]=1;
            mobs.state[s]=-1;  
            mobs.distance[s]=7;
        }
            }
            if(mobs.distance[s]<=0.1){
                if(gamemode===0&&xx<400&&xx>0&&yy<400&&yy>0){
                    health-=10;
                    if(health<=0){
                        death="enderdragon";
                    }
                }
                mobs.state[s]=3;
            }else{
                mobs.distance[s]-=0.025;
            }
        }
        if(mobs.state[s]===3){
            if(mobs.distance[s]>=7){
                mobs.state[s]=1;
            }else{
                mobs.distance[s]+=0.05;
            }
        }
        if(mobs.x[s]<=0){
            mobs.state[s]=1;
        }
        if(mobs.x[s]>=1600){
            mobs.state[s]=0;
        }
        if(mobs.state[s]===0){
            mobs.x[s]-=5;
            mobs.y[s]=sin(time*2)*20+416;
        }
        if(mobs.state[s]===1){
            mobs.x[s]+=5;
            mobs.y[s]=sin(time*2)*20+416;
        }
        noStroke();
        break;
            }
        }
    }
};
    noStroke();
    var xx = 14*40+scrollX;
    xx+=(200-xx)/4;
    var yy = 14*40+scrollY;
    yy+=(200-yy)/7;
    if(nether){
    fill(117, 23, 2);
    var yyy = 14*40+scrollY;
    yyy+=(209-yyy)/1.2;
    quad(0,yyy,0,yy,400,yy,400,yyy);
    fill(56, 10, 0);
    var yy = 4*40+scrollY;
    yy+=(200-yy)/7;
    var yyy = 4*40+scrollY;
    yyy+=(209-yyy)/1.2;
    quad(0,yyy,0,yy,400,yy,400,yyy);
    var ii = round(sX/8);
    for(var i = 0; i < 5; i++){
        for(var j = ii-10; j < ii+20; j++){
            var k = j;
            if(k>=10){
                while(k>=10){
                    k-=10;
                }
            }
            if(k<0){
                while(k<0){
                    k+=10;
                }
            }
            if(lavaCol[i][k]===1){
                var yy = 14*40+scrollY;
                yy+=(200-yy)/(1+(i/10+0.3));
                var xx = j*100+scrollX/3;
                xx+=(200-xx)/(1+(i/5+0.3));
                fill(235+i*5, 125+i*2, 0);
                rect(xx,yy-100-i*20,12.5+i*1.5,108+i*20);
                rect(xx-20-i*1.5,yy-i,52.5+i*3,8+i);
                rect(xx-40-i*2,yy-i/2+4,92.5+i*4,4+i/2);
            }
        }
    }dMiD();
    var yy = 4*40+scrollY;
    yy+=(200-yy)/7;
    fill(99, 21, 2);
    rect(0,0,400,yy);
    var yy = 14*40+scrollY;
    yy+=(200-yy)/7;
    rect(0,yy,400,400-yy);
    }else if(end){
    
    fill(255);
    var yyy = 14*40+scrollY;
    yyy+=(209-yyy)/1.2;
    quad(0,yyy,0,yy,400,yy,400,yyy);dMiD();
    for(var i = 0; i < 5; i++){
        for(var j = 0; j < 10; j++){
            if(obsidianPillars[i][j]>=1){
                noStroke();
                var yy = 14*40+scrollY;
                yy+=(200-yy)/(1+(i/10+0.3));
                var xx = j*100+scrollX/3;
                xx+=(200-xx)/(1+(i/5+0.3));
                fill(40+i*2, 0, 50+i*2);
                rect(xx,yy-70-i*20,12.5+i*1.5,78+i*20);
                if(obsidianPillars[i][j]===2){
                    fill(255, 0, 255);
                    ellipse(xx+(12.5+i*1.5)/2,yy-75-i*20,5,5);
                    noFill();
                    stroke(208, 230, 232);
                    translate(xx+(12.5+i*1.5)/2,yy-75-i*20-sin(time*5+i*50)*3);
                    rotate((time+i*10)*3);
                    rect(-5,-5,10,10);
                    resetMatrix();
                }
            }
        }
    }noStroke();dMiD();
    var yy = 14*40+scrollY;
    yy+=(200-yy)/7;
    fill(255, 255, 200);
    rect(0,yy,400,400-yy);
    }else{
        
    fill(75, 195, 0);
    var yyy = 14*40+scrollY;
    yyy+=(209-yyy)/1.2;
    quad(0,yyy,0,yy,400,yy,400,yyy);dMiD();
    var ii = round(sX/8);
    for(var i = 0; i < 5; i++){
        for(var j = ii-10; j < ii+20; j++){
            var k = j;
            if(k>=10){
                while(k>=10){
                    k-=10;
                }
            }
            if(k<0){
                while(k<0){
                    k+=10;
                }
            }
            if(trees[i][k]===1){
                var yy = 14*40+scrollY;
                yy+=(200-yy)/(1+(i/10+0.3));
                var xx = j*100+scrollX/3;
                xx+=(200-xx)/(1+(i/5+0.3));
                fill(0, 150+i*11, 0);
                rect(xx-25-i*3,yy-62.5-i*6,62.5+i*6,37.5+i);
                rect(xx-12.5-i*1.5,yy-75-i*7.5,40+i*3,12.5+i*2);
                fill(70+i*5, 30+i*2, 0);
                rect(xx,yy-50-i*5,12.5+i*1.5,58+i*5);
            }
        }
    }dMiD();
    yy = 14*40+scrollY;
    yy+=(200-yy)/7;
    fill(120, 50, 0);
    rect(0,yy,400,138);
    fill(70, 180, 0);
    rect(0,yy,400,8);
    var yy = 18*40+scrollY;
    yy+=(200-yy)/7;
    fill(115);
    rect(0,yy,400,400-yy);
    }
    for(var y = sY+6; y>sY; y--){

        for(var x = sX-8; x<sX; x++){

            drawBlock(x,y);

    }}

    for(var y = sY-6; y<=sY; y++){

        for(var x = sX-8; x<sX; x++){

            drawBlock(x,y);

    }}

    for(var y = sY+6; y>sY; y--){

        for(var x = sX+8; x>=sX; x--){

            drawBlock(x,y);

    }}

    for(var y = sY-6; y<=sY; y++){

        for(var x = sX+8; x>=sX; x--){

            drawBlock(x,y);

    }}

    for(var y = world.length-1; y>=0; y--){

    for(var x=round((scrollX/40)-(scrollX/20)-5); x<round((scrollX/40)-(scrollX/20)-(-5))+8; x++){

        noStroke();

        if(world[y][x]===0){

            specs[y][x]=0;

            power[y][x]=0;

        }

        

        

        }}};

var keys = [];

var sunPos = 100;

draw = function() {

try{

textAlign(LEFT, BOTTOM);

for(var i = 0; i < 40; i++){

        flameY[i]-=flameSpeed[i]/3;

        if(flameY[i]<random(0,5)){

            flameY[i]=15;

            flameX[i]=random(3,17);

        }

    }



if(bennimusStudios===false&&!onTitleScreen&&!onPoem){

place = (scrollX/20) - (scrollX/10);

if(!heartsShowing){

sunPos--;

time++;

if(time > 10000){

    night=true;

}else{

    night=false;

}

if(time===20000){

    time=0;

}

strokeWeight(2);

if(nether===false&&end===false){

    if(night){

        background(10, 0, 56);

        fill(255, 255, 255);

        stroke(209, 209, 209);

        strokeWeight(5);

        if(time<=15000){

            sunPos-=0.5;

            rect(300, sunPos/70+100, 50, 50);

        }else if(time>=15000){

            sunPos=1000;

            rect(300, (time-3000)/50-150, 50, 50);

        }

    }else{

        if((time>=0&&time<250)||(time>9500&&time<=10000)){

            background(255, 209, 94);

        }else{

            background(189, 206, 255);

        }

        fill(253, 255, 191);

        stroke(255, 255, 255);

        strokeWeight(5);

        if(time<=5000){

            sunPos-=0.5;

            rect(300, sunPos/70+100, 50, 50);

        }else if(time>=5000){

            sunPos=1000;

            rect(300, (time+3000)/50-150, 50, 50);

        }

    }

}else if(nether){

    background(173, 43, 0);

}else if(end){
    background(61, 0, 92);
}

}else{

    background(10, 0, 56);

    if(shieldsShowing===false){

        shieldsShowing=1000;

    }else{

        shieldsShowing--;

        if(shieldsShowing<0){

            heartsShowing=false;

            shieldsShowing=false;

            onFire=true;

        }

        strokeWeight(5);

        fill(255, 255, 255);

        stroke(184, 184, 184);

        rect(300, 400-(shieldsShowing/10)-200, 50, 50);

    }

}

strokeWeight(2);

noStroke();

if(pigmanTimer>0){

    madPigmen=true;

    pigmanTimer--;

}else{

    madPigmen=false;

}

if(!nether&&!end&&options.clouds){

if(cloudX>400){

    cloudX=0;

}

fill(255);

if(night){

    fill(38, 21, 84);

}else if(time<250){

    fill(250, 232, 205);

}

cloudX+=0.25;

rect(cloudX+150, 15, 125, 15);

rect(cloudX-250, 15, 125, 15);

rect(cloudX+200, 35, 180, 30);

rect(cloudX-200, 35, 180, 30);

rect(cloudX-300, 30, 170, 20);

rect(cloudX+100, 30, 170, 20);

}

drawWorld();

var x = blockTargeted[1], y = blockTargeted[0];

if(x===blockTargeted[1]&&y===blockTargeted[0]&&blockStrength!==null){

if(blockStrength<(selDurability/7)*6){

    stroke(0);strokeWeight(3);

    line(x*40+scrollX+20, y*40+scrollY+20, x*40+scrollX+11, y*40+scrollY+37);

if(blockStrength<(selDurability/7)*5){

    line(x*40+scrollX+20, y*40+scrollY+20, x*40+scrollX+35, y*40+scrollY+11);

if(blockStrength<(selDurability/7)*4){

    line(x*40+scrollX+28, y*40+scrollY+15, x*40+scrollX+33, y*40+scrollY+34);

}

if(blockStrength<(selDurability/7)*3){

    line(x*40+scrollX+6, y*40+scrollY+15, x*40+scrollX+20, y*40+scrollY+20);

}

if(blockStrength<(selDurability/7)*2){

    line(x*40+scrollX+14, y*40+scrollY+17, x*40+scrollX+20, y*40+scrollY+7);

}

if(blockStrength<(selDurability/7)){

    line(x*40+scrollX+25, y*40+scrollY+27, x*40+scrollX+14, y*40+scrollY+32);

}

}strokeWeight(2);

}}

var entX,entY,entA,entB;

for(var tt = 0; tt < entity.length; tt++){

    entX=entity.x[tt]+scrollX;

    entY=entity.y[tt]+scrollY;

    entA=(entity.y[tt]/40).toFixed(0,0);

    entB=(entity.x[tt]/40).toFixed(0,0);

    switch(entity.type[tt]){

        case 0:

            var distance = dist(entB, entA, posB, posA);

            drawBlocks(entity.type2[tt], entX, entY);

            if(!solidBlocks[world[entA][entB]]){

                entity.y[tt]+=5;

            }

            if(distance<2&&!isDead){

                entity.type[tt]=null;

                getItem(entity.type2[tt], 1);

            }

            break;

        case 1:

            drawBlocks(340, entX, entY);

            entity.type2[tt]++;

            entity.y[tt]-=entity.type2[tt];

            if(entity.type2[tt]>=20){

                for(var i = 0; i < 100; i++){

                    spawnEntity(entX, entY, 2, [random(0,360),random(1,5),500]);

                }

                fill(random(50,255), random(50,255), random(50,255), 50);

                ellipse(entX, entY, 100, 100);

                entity.type[tt]=null;

            }

            break;

        case 2:

            fill(random(50,255), random(50,255), random(50,255), entity.type2[tt][2]);

            ellipse(entX-scrollX, entY-scrollY, 5, 5);

            entity.x[tt]+=sin(entity.type2[tt][0])*entity.type2[tt][1];

            entity.y[tt]+=cos(entity.type2[tt][0])*entity.type2[tt][1];

            if(entity.type2[tt][2]>0){

                entity.type2[tt][2]-=10;

            }else{

                entity.type[tt]=null;

            }

            break;

    }

}

if(nether){

if(round(random(0,100))){}else if(!options.peaceful){

    spawnMobs(random(0, (world[0].length-1)*40), 12*40, 4);

}

}else if(end){
    if(!dragonSpawned){
        spawnMobs(380,380,8,7);
        dragonSpawned=true;
    }
    if(round(random(0,500))){}else if(!options.peaceful){

        spawnMobs(random(0, (world[0].length-1)*40), 12*40, 7);

    }
}else{

if(round(random(0,500))){}else{

    spawnMobs(random(0, (world[0].length-1)*40), 12*40, 0);

}if(round(random(0,100))){}else if(night&&!options.peaceful){

    spawnMobs(random(0, (world[0].length-1)*40), 12*40, 1);

}if(round(random(0,500))){}else{

    spawnMobs(random(0, (world[0].length-1)*40), 12*40, 3);

}if(round(random(0,100))){}else if(night&&!options.peaceful){

    spawnMobs(random(0, (world[0].length-1)*40), 440, 2);

}if(!round(random(0,500))){
    spawnMobs(random(0, (world[0].length-1)*40), 440, 6);
}
if(round(random(0,100))){}else if(night&&!options.peaceful){

    spawnMobs(random(0, (world[0].length-1)*40), 12*40, 7);

}

}

var mobX,mobY,mobA,mobB;

for(var s = 0; s < mobs.length; s++){

    mobX=mobs.x[s];

    mobY=mobs.y[s];

    mobA = (mobY/40).toFixed(0, 0);

    mobB = (mobX/40).toFixed(0, 0);

    if(mobs.type[s]===8&&mobs.health[s]>0&&mobs.end[s]===end&&mobs.nether[s]===nether){
        fill(50,0,50);
        rect(50,25,300,10,5);
        fill(255, 0, 255);
        rect(50,25,mobs.health[s]*1.5,10,5);
        text("Ender Dragon",165,20);
    }

    if(mobs.nether[s]===nether&&mobs.end[s]===end&&dist(mobB,mobA,posB,posA)<10&&mobs.distance[s]===0){

    if(mobs.health[s]>0){

    switch(mobs.type[s]){

        case 0:

            noStroke();

            fill(255, 181, 181);

            resetMatrix();

            if(mobs.direction[s]===RIGHT){

                translate(mobs.x[s]+scrollX+20, mobs.y[s]+scrollY+40);

                if(mobs.state[s]!==0){

                    rotate(sin(time*30)*15);

                }

                fill(179, 127, 127);

                rect(-5, 0, 10, 15);

                resetMatrix();

                translate(mobs.x[s]+scrollX-10, mobs.y[s]+scrollY+40);

                if(mobs.state[s]!==0){

                    rotate(-sin(time*30)*15);

                }

                rect(-5, 0, 10, 15);

                resetMatrix();

                fill(255, 181, 181);

                rect(mobs.x[s]+scrollX-15, mobs.y[s]+scrollY+25, 40, 20);

                translate(mobs.x[s]+scrollX-10, mobs.y[s]+scrollY+40);

                if(mobs.state[s]!==0){

                    rotate(sin(time*30)*15);

                }

                rect(-5, 0, 10, 15);

                resetMatrix();

                translate(mobs.x[s]+scrollX+20, mobs.y[s]+scrollY+40);

                if(mobs.state[s]!==0){

                    rotate(-sin(time*30)*15);

                }

                rect(-5, 0, 10, 15);

            }else{

                translate(mobs.x[s]+scrollX+20, mobs.y[s]+scrollY+40);

                if(mobs.state[s]!==0){

                    rotate(sin(time*30)*15);

                }

                fill(179, 127, 127);

                rect(-5, 0, 10, 15);

                resetMatrix();

                translate(mobs.x[s]+scrollX-10, mobs.y[s]+scrollY+40);

                if(mobs.state[s]!==0){

                    rotate(-sin(time*30)*15);

                }

                rect(-5, 0, 10, 15);

                resetMatrix();

                fill(255, 181, 181);

                rect(mobs.x[s]+scrollX-15, mobs.y[s]+scrollY+25, 40, 20);

                translate(mobs.x[s]+scrollX-10, mobs.y[s]+scrollY+40);

                if(mobs.state[s]!==0){

                    rotate(sin(time*30)*15);

                }

                rect(-5, 0, 10, 15);

                resetMatrix();

                translate(mobs.x[s]+scrollX+20, mobs.y[s]+scrollY+40);

                if(mobs.state[s]!==0){

                    rotate(-sin(time*30)*15);

                }

                rect(-5, 0, 10, 15);

            }

            resetMatrix();

            if(dist(mobB, mobA, posB, posA)<4){

                var x = posX - posX*2 + 195;

                var y = posY - posY*2 + 135;

                if(mobs.direction[s]===LEFT){

                    translate(mobX+scrollX-10, mobY+scrollY+30);

                }else{

                    translate(mobX+scrollX+25, mobY+scrollY+30);

                }

                rotate(atan2(mobY-y, mobX-x));

                rect(-10, -10, 20, 20);

                if(posB<mobB){

                    rect(-14, -2, 6, 8);

                    fill(255);

                    rect(-10, -6, 5, 3);

                    fill(0);

                    rect(-8, -6, 3, 3);

                    if(mobs.state[s]===0){

                        mobs.direction[s]=LEFT;

                    }

                }else{

                    rect(-14, -6, 6, 8);

                    fill(255);

                    rect(-10, 3, 5, 3);

                    fill(0);

                    rect(-8, 3, 3, 3);

                    if(mobs.state[s]===0){

                        mobs.direction[s]=RIGHT;

                    }

                }

            }else{

                if(mobs.direction===LEFT){

                    translate(mobX+scrollX+10, mobY+scrollY+30);

                }else{

                    translate(mobX+scrollX-10, mobY+scrollY+30);

                }

                if(direction===RIGHT){

                    scale(-1, 1);

                }

                mobs.headPos[s]=0;

                rect(-10, -10, 20, 20);

                rect(-14, -2, 6, 8);

                fill(255);

                rect(-10, -6, 5, 3);

                fill(0);

                rect(-8, -6, 3, 3);

            }

            resetMatrix();

            if(round(random(0,100))){}else{

                mobs.state[s]=round(random(0,2)+0.5);

            }if(round(random(0,25))){}else{

                mobs.state[s]=0;

            }

            if(mobs.state[s]!==0){

                mobs.legPos[s] = sin(time)*10;

            }

            if(!solidBlocks[world[mobA-(-1)][mobB]]&&world[mobA-(-1)][mobB]!==11&&world[mobA-(-1)][mobB]!==12){

                mobs.y[s]+=10;

            }

            break;

        case 1:

            if(!night&&!round(random(0,500))){

                mobs.health[s]=0;

            }

            if(options.peaceful){

                mobs.health[s]=0;

            }

            if(mobs.specs[s][0]===undefined){

                mobs.specs[s][0]=0;

            }

            if(dist(mobB, mobA, posB, posA)<2){

                if(mobs.specs[s][0]===0){

                    mobs.specs[s][0]=25;

                }

            }

            if(mobs.specs[s][0]===1){

                explode(mobB, mobA);

                if(health<=0){

                    death="creeper";

                }

                mobs.health[s]=0;

            }

            noStroke();

                translate(mobs.x[s]+scrollX+10, mobs.y[s]+scrollY+40);

                if(mobs.state[s]!==0){

                    rotate(sin(time*30)*15);

                }

                fill(0, 100, 0);

                if(mobs.specs[s][0]>1&&time&1){

                    fill(150);

                }

                rect(-5, 0, 10, 15);

                resetMatrix();

                translate(mobs.x[s]+scrollX-10, mobs.y[s]+scrollY+40);

                if(mobs.state[s]!==0){

                    rotate(-sin(time*30)*15);

                }

                rect(-5, 0, 10, 15);

                resetMatrix();

                fill(0, 225, 0);

                if(mobs.specs[s][0]>1&&time&1){

                    fill(255);

                }

                

                rect(mobs.x[s]+scrollX-7, mobs.y[s]+scrollY, 14, 40);

                translate(mobs.x[s]+scrollX-10, mobs.y[s]+scrollY+40);

                if(mobs.state[s]!==0){

                    rotate(sin(time*30)*15);

                }

                rect(-5, 0, 10, 15);

                resetMatrix();

                translate(mobs.x[s]+scrollX+10, mobs.y[s]+scrollY+40);

                if(mobs.state[s]!==0){

                    rotate(-sin(time*30)*15);

                }

                rect(-5, 0, 10, 15);

            resetMatrix();

            if(dist(mobB, mobA, posB, posA)<10){

                var x = posX - posX*2 + 195;

                var y = posY - posY*2 + 135;

                translate(mobX+scrollX, mobY+scrollY);

                rotate(atan2(mobY-y, mobX-x));

                rect(-10, -10, 20, 20);

                if(posB<mobB){

                    fill(0);

                    rect(-8, -6, 5, 5);

                    if(mobs.state[s]===0){

                        mobs.direction[s]=LEFT;

                    }

                }else{

                    fill(0);

                    rect(-10, 1, 5, 5);

                    if(mobs.state[s]===0){

                        mobs.direction[s]=RIGHT;

                    }

                }

            }else{

                translate(mobX+scrollX, mobY+scrollY);

                if(direction===RIGHT){

                    scale(-1, 1);

                }

                mobs.headPos[s]=0;

                rect(-10, -10, 20, 20);

                fill(0);

                rect(-8, -6, 3, 3);

            }

            resetMatrix();

            if(round(random(0,100))){}else{

                mobs.state[s]=round(random(0,2)+0.5);

            }if(round(random(0,50))){}else{

                mobs.state[s]=0;

            }

            if(!solidBlocks[world[mobA-(-1)][mobB]]&&world[mobA-(-1)][mobB]!==11&&world[mobA-(-1)][mobB]!==12){

                mobs.y[s]+=10;

            }

            if(dist(mobB, mobA, posB, posA)<10){

                if(mobB<posB){

                    mobs.state[s] = 1;

                }else{

                    mobs.state[s] = 2;

                }

            }

            if(mobs.specs[s][0]>=1){

                mobs.specs[s][0]--;

                mobs.state[s]=0;

            }

            break;

        case 2:

            if(!night){

                mobs.health[s]-=0.1;

                drawFlame(mobX+scrollX-20, mobY+scrollY-20, 3);

            }

            if(options.peaceful){

                mobs.health[s]=0;

            }

            noStroke();

            resetMatrix();

            var playerX = scrollX+mobX, playerY = scrollY+mobY-20;

if(mouseX>playerX){

    direction=LEFT;

}else{

    direction=RIGHT;

}

if(mobs.state[s]!==0){

    legPos = sin(time*30)*30;

}else{

    legPos = 0;

}

translate(playerX+10, playerY+50);

rotate(-legPos);

fill(15, 0, 110);

rect(-6, 0, 12, 30);

resetMatrix();

fill(0, 135, 9);

translate(playerX, playerY);

if(mobs.direction[s]===LEFT){

    scale(-1, 1);

    translate(-20, 0);

}

rect(0, 0, 20, 20);

fill(4, 82, 0);

triangle(0, 0+5, 0+15, 0+5, 0, 0+10);

rect(0, 0, 20, 5);

fill(33, 33, 33);

rect(0+15, 0+7, 5, 3);

fill(0, 201, 201);

rect(0+4, 0+20, 12, 30);

noStroke();

resetMatrix();

translate(playerX+10, playerY+50);

rotate(legPos);

fill(23, 0, 156);

rect(-6, 0, 12, 30);

resetMatrix();

translate(playerX+10, playerY+22);

fill(0, 189, 189);

rect(-5, 0, 10, 10);

fill(0, 120, 4);

if(mobs.direction[s]===LEFT){

    rect(-25, 0, 20, 10);

}else{

    rect(5, 0, 20, 10);

}

resetMatrix();

            if(!night){

                drawFlame(mobX+scrollX-20, mobY+scrollY+5, 3);

            }

            if(dist(mobB, mobA, posB, posA)<10){

                if(mobB<posB){

                    mobs.direction=RIGHT;

                }else{

                    mobs.direction=LEFT;

                }

            }

            if(dist(mobB, mobA, posB, posA)<10){

                if(posB<mobB){

                    mobs.state[s]=2;

                }else{

                    mobs.state[s]=1;

                }

                if(dist(mobB, mobA, posB, posA)<1){

                    health-=3;

                    if(health<=0&&!isDead){

                        death="zombie";

                    }

                }

                

            }

            if(round(random(0,100))){}else{

                mobs.state[s]=round(random(0,2)+0.5);

            }if(round(random(0,50))){}else{

                mobs.state[s]=0;

            }

            if(!solidBlocks[world[mobA-(-1)][mobB]]&&world[mobA-(-1)][mobB]!==11&&world[mobA-(-1)][mobB]!==12){

                mobs.y[s]+=10;

            }

            

            break;

        case 3:

            noStroke();

            fill(255, 181, 181);

            resetMatrix();

                translate(mobs.x[s]+scrollX+20, mobs.y[s]+scrollY+25);

                if(mobs.state[s]!==0){

                    rotate(sin(time*30)*15);

                }

                fill(48, 25, 0);

                rect(-5, 0, 10, 30);

                resetMatrix();

                translate(mobs.x[s]+scrollX-10, mobs.y[s]+scrollY+25);

                if(mobs.state[s]!==0){

                    rotate(-sin(time*30)*15);

                }

                rect(-5, 0, 10, 30);

                resetMatrix();

                fill(97, 50, 0);

                rect(mobs.x[s]+scrollX-15, mobs.y[s]+scrollY+10, 40, 25);

                fill(200);

                arc(mobs.x[s]+scrollX, mobs.y[s]+scrollY+10, 20, 15, 0, 180);

                arc(mobs.x[s]+scrollX+5, mobs.y[s]+scrollY+35, 15, 15, 180, 360);

                fill(97, 50, 0);

                translate(mobs.x[s]+scrollX-10, mobs.y[s]+scrollY+25);

                if(mobs.state[s]!==0){

                    rotate(sin(time*30)*15);

                }

                rect(-5, 0, 10, 30);

                resetMatrix();

                translate(mobs.x[s]+scrollX+20, mobs.y[s]+scrollY+25);

                if(mobs.state[s]!==0){

                    rotate(-sin(time*30)*15);

                }

                rect(-5, 0, 10, 30);

            resetMatrix();

            if(dist(mobB, mobA, posB, posA)<4){

                var x = posX - posX*2 + 195;

                var y = posY - posY*2 + 135;

                if(mobs.direction[s]===LEFT){

                    translate(mobX+scrollX-10, mobY+scrollY+15);

                }else{

                    translate(mobX+scrollX+25, mobY+scrollY+15);

                }

                rotate(atan2(mobY-y, mobX-x));

                rect(-10, -10, 20, 20);

                if(posB<mobB){

                    fill(50);

                    rect(-10,0,6,10);

                    fill(100);

                    rect(-6, -12, 3, 4);

                    fill(255);

                    rect(-10, -6, 5, 3);

                    fill(0);

                    rect(-8, -6, 3, 3);

                    if(mobs.state[s]===0){

                        mobs.direction[s]=LEFT;

                    }

                }else{

                    fill(50);

                    rect(-10,-10,6,10);

                    fill(100);

                    rect(-6, 8, 3, 4);

                    fill(255);

                    rect(-10, 3, 5, 3);

                    fill(0);

                    rect(-8, 3, 3, 3);

                    if(mobs.state[s]===0){

                        mobs.direction[s]=RIGHT;

                    }

                }

            }else{

                if(mobs.direction===LEFT){

                    translate(mobX+scrollX+10, mobY+scrollY+15);

                }else{

                    translate(mobX+scrollX-10, mobY+scrollY+15);

                }

                if(direction===RIGHT){

                    scale(-1, 1);

                }

                mobs.headPos[s]=0;

                rect(-10, -10, 20, 20);

                fill(50);

                rect(-10,0,6,10);

                fill(100);

                rect(-6, -12, 3, 4);

                fill(255);

                rect(-10, -6, 5, 3);

                fill(0);

                rect(-8, -6, 3, 3);

            }

            resetMatrix();

            if(round(random(0,100))){}else{

                mobs.state[s]=round(random(0,2)+0.5);

            }if(round(random(0,50))){}else{

                mobs.state[s]=0;

            }

            if(!solidBlocks[world[mobA-(-1)][mobB]]&&world[mobA-(-1)][mobB]!==11&&world[mobA-(-1)][mobB]!==12){

                mobs.y[s]+=10;

            }

            if(dist(mobB, mobA, b, a)===0&&mPressed&&mouseButton===RIGHT&&hotbar[blockSelected]===337){

                if(hotbarStacks[blockSelected]===1){

                    hotbar[blockSelected]=338;

                }else{

                    hotbarStacks[blockSelected]--;

                    getItem(338, 1);

                }

                mPressed=false;

            }

            break;

        case 4:

            if(options.peaceful){

                mobs.health[s]=0;

            }

            noStroke();

            resetMatrix();

            var playerX = scrollX+mobX, playerY = scrollY+mobY-20;

if(mouseX>playerX){

    direction=LEFT;

}else{

    direction=RIGHT;

}

if(mobs.state[s]!==0){

    legPos = sin(time*30)*30;

}else{

    legPos = 0;

}

translate(playerX+10, playerY+50);

rotate(-legPos);

fill(255, 107, 102);

rect(-6, 0, 12, 30);

resetMatrix();

fill(255, 127, 125);

translate(playerX, playerY);

if(mobs.direction[s]===LEFT){

    scale(-1, 1);

    translate(-20, 0);

}

rect(0, 0, 20, 20);

fill(33, 33, 33);

rect(15, 7, 5, 3);

fill(255, 127, 125);

rect(0+4, 0+20, 12, 30);

noStroke();

resetMatrix();

translate(playerX+10, playerY+50);

rotate(legPos);

fill(255, 127, 125);

rect(-6, 0, 12, 30);

resetMatrix();

translate(playerX+10, playerY+22);

fill(255, 127, 125);

rect(-5, 0, 10, 10);

fill(255, 127, 125);

if(mobs.direction[s]===LEFT){

    rect(-25, 0, 20, 10);

    translate(-35,-15);

    rotate(-45);

    drawBlocks(315, 0, 0);

}else{

    rect(5, 0, 20, 10);

    translate(10, -15);

    rotate(-45);

    drawBlocks(315, 0, 0);

}

resetMatrix();

            if(dist(mobB, mobA, posB, posA)<10){

                if(mobB<posB){

                    mobs.direction=RIGHT;

                }else{

                    mobs.direction=LEFT;

                }

            }

            if(dist(mobB, mobA, posB, posA)<10&&madPigmen){

                if(posB<mobB){

                    mobs.state[s]=2;

                }else{

                    mobs.state[s]=1;

                }

                if(dist(mobB, mobA, posB, posA)<1){

                    health-=9;

                    if(health<=0){

                        death="pigman";

                    }

                }

            }

            if(round(random(0,100))){}else{

                mobs.state[s]=round(random(0,2)+0.5);

            }if(round(random(0,50))){}else{

                mobs.state[s]=0;

            }

            if(!solidBlocks[world[mobA-(-1)][mobB]]&&world[mobA-(-1)][mobB]!==11&&world[mobA-(-1)][mobB]!==12){

                mobs.y[s]+=10;

            }

            break;

        case 5:

            noStroke();

            resetMatrix();

            var playerX = scrollX+mobX, playerY = scrollY+mobY-20;

if(mouseX>playerX){

    direction=LEFT;

}else{

    direction=RIGHT;

}

if(mobs.state[s]!==0){

    legPos = sin(time*30)*15;

}else{

    legPos = 0;

}

translate(playerX+10, playerY+50);

rotate(-legPos);

fill(77, 55, 0);

rect(-6, 0, 12, 30);

resetMatrix();

translate(playerX, playerY);

fill(194, 153, 87);

if(mobs.direction[s]===LEFT){

    scale(-1, 1);

    translate(-20, 0);

}

rect(0, -5, 20, 25);

fill(143, 112, 62);

rect(20,10,5,11);

fill(110, 78, 28);

rect(13,4,8,3);

fill(255);

rect(0+15, 0+7, 5, 3);

fill(0, 150, 0);

rect(17, 7, 3, 3);

fill(122, 84, 46);

rect(0+4, 0+20, 12, 30);

noStroke();

resetMatrix();

translate(playerX+10, playerY+50);

rotate(legPos);

fill(92, 62, 31);

rect(-6, 0, 12, 30);

fill(133, 92, 52);

resetMatrix();

translate(playerX, playerY);

rect(3,19,14,40);

resetMatrix();

translate(playerX+12, playerY+22);

rect(-5, 0, 10, 10);

fill(117, 78, 40);

rotate(45);

rect(0, 0, 20, 10);

resetMatrix();

            if(round(random(0,100))){}else{

                mobs.state[s]=round(random(0,2)+0.5);

            }if(round(random(0,50))){}else{

                mobs.state[s]=0;

            }

            if(!solidBlocks[world[mobA-(-1)][mobB]]&&world[mobA-(-1)][mobB]!==11&&world[mobA-(-1)][mobB]!==12){

                mobs.y[s]+=10;

            }
            if(mPressed&&mouseButton===RIGHT&&dist(mouseX,mouseY,mobX+scrollX+10,mobY+scrollY+20)<=40){

                isTrading=true;

                mobSelected=s;

            }

            break;
        case 6:
            
            noStroke();

            resetMatrix();

                translate(mobs.x[s]+scrollX+20, mobs.y[s]+scrollY+25);
                if(mobs.state[s]!==0){

                    rotate(sin(time*30)*15);

                }

                fill(217, 164, 137);

                rect(-5, 0, 10, 30);
                if(mobs.specs[s]){
                    fill(217);
                    rect(-7, 0, 14, 20);
                }
                resetMatrix();
                fill(217, 164, 137);
                translate(mobs.x[s]+scrollX-10, mobs.y[s]+scrollY+25);

                if(mobs.state[s]!==0){

                    rotate(-sin(time*30)*15);

                }

                rect(-5, 0, 10, 30);
                if(mobs.specs[s]){
                    fill(217);
                    rect(-7, 0, 14, 20);
                }
                resetMatrix();

                fill(242, 209, 191);
                translate(mobs.x[s]+scrollX-15, mobs.y[s]+scrollY+15);
                rect(0, 0, 40, 20);
                
                fill(245);
                if(mobs.specs[s]){
                    rect(-3, -5, 45, 25);
                }
                ellipse(5, 2, 3, 3);
                ellipse(23,15,3,3);
                ellipse(15,10,3,3);
                ellipse(34,5,3,3);
                ellipse(25,5,3,3);
                fill(242, 209, 191);
                resetMatrix();
                translate(mobs.x[s]+scrollX-10, mobs.y[s]+scrollY+25);

                if(mobs.state[s]!==0){

                    rotate(sin(time*30)*15);

                }

                rect(-5, 0, 10, 30);
                if(mobs.specs[s]){
                    fill(255);
                    rect(-7, 0, 14, 20);
                }
                resetMatrix();
                fill(242, 209, 191);
                translate(mobs.x[s]+scrollX+20, mobs.y[s]+scrollY+25);

                if(mobs.state[s]!==0){

                    rotate(-sin(time*30)*15);

                }

                rect(-5, 0, 10, 30);
                if(mobs.specs[s]){
                    fill(255);
                    rect(-7, 0, 14, 20);
                }
                fill(242, 209, 191);
            resetMatrix();

            if(dist(mobB, mobA, posB, posA)<4){

                var x = posX - posX*2 + 195;

                var y = posY - posY*2 + 135;

                if(mobs.direction[s]===LEFT){

                    translate(mobX+scrollX-10, mobY+scrollY+15);

                }else{

                    translate(mobX+scrollX+25, mobY+scrollY+15);

                }

                rotate(atan2(mobY-y, mobX-x));

                rect(-10, -10, 20, 20);

                if(posB<mobB){
                    if(mobs.specs[s]){
                        fill(255);
                        rect(0, -12, 12, 24);
                    }
                    fill(240, 180, 180);

                    rect(-10,0,6,10);

                    fill(255);

                    rect(-10, -6, 5, 3);

                    fill(0);

                    rect(-8, -6, 3, 3);

                    if(mobs.state[s]===0){

                        mobs.direction[s]=LEFT;

                    }

                }else{
                    if(mobs.specs[s]){
                        fill(255);
                        rect(0, -12, 12, 24);
                    }
                    fill(240, 180, 180);

                    rect(-10,-10,6,10);

                    fill(255);

                    rect(-10, 3, 5, 3);

                    fill(0);

                    rect(-8, 3, 3, 3);

                    if(mobs.state[s]===0){

                        mobs.direction[s]=RIGHT;

                    }

                }

            }else{

                if(mobs.direction===LEFT){

                    translate(mobX+scrollX+10, mobY+scrollY+15);

                }else{

                    translate(mobX+scrollX-10, mobY+scrollY+15);

                }

                if(direction===RIGHT){

                    scale(-1, 1);

                }

                mobs.headPos[s]=0;
                rect(-10, -10, 20, 20);
                if(mobs.specs[s]){
                    fill(255);
                    rect(0, -12, 12, 24);
                }

                fill(240, 180, 180);

                rect(-10,0,6,10);

                fill(255);

                rect(-10, -6, 5, 3);

                fill(0);

                rect(-8, -6, 3, 3);

            }

            resetMatrix();

            if(round(random(0,100))){}else{

                mobs.state[s]=round(random(0,2)+0.5);

            }if(round(random(0,50))){}else{

                mobs.state[s]=0;

            }

            if(!solidBlocks[world[mobA-(-1)][mobB]]&&world[mobA-(-1)][mobB]!==11&&world[mobA-(-1)][mobB]!==12){

                mobs.y[s]+=10;

            }
            if(mPressed&&mouseButton===RIGHT&&dist(mouseX,mouseY,mobX+scrollX+10,mobY+scrollY+20)<=30&&mobs.specs[s]>=1&&hotbar[blockSelected]===350){

                mobs.specs[s]=0;
                for(var i = 0; i < random(1,3); i++){
                    spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 54);
                }
                if(gamemode===0){
                    hotbarSpecs[blockSelected]--;
                }
                mPressed=false;
            }

            break;
        case 7:
            if(options.peaceful){

                mobs.health[s]=0;

            }

            noStroke();

            resetMatrix();

            var playerX = scrollX+mobX, playerY = scrollY+mobY-60;
fill(0);
if(mobs.state[s]!==0){

    legPos = sin(time*30)*15;

}else{

    legPos = 0;

}
translate(playerX+10, playerY+25);
rotate(legPos);

rect(-3, -3, 6, 60);

resetMatrix();
translate(playerX+10, playerY+50);

rotate(-legPos);

rect(-3, 0, 6, 60);

resetMatrix();

fill(25);

translate(playerX, playerY);

if(mobs.direction[s]===LEFT){

    scale(-1, 1);

    translate(-20, 0);

}
if(mobs.specs[s][1]===1){
    if(!round(random(0,100))){
        mobs.distance[s]=1;
    }
    translate(0,-15);
    rect(0,20,3,15);
    rect(0,30,20,5);
}
rect(0, 0, 20, 20);

fill(255, 0, 255);

rect(0+15, 0+9, 5, 3);

fill(25);
if(mobs.specs[s][1]===1){
    translate(0,15);
}
rect(0+4, 0+20, 12, 30);

noStroke();

resetMatrix();

translate(playerX+10, playerY+50);

rotate(legPos);

fill(35);

rect(-3, 0, 6, 60);

resetMatrix();

translate(playerX+10, playerY+25);

if(mobs.specs[s][0]){
    
}else{
    rotate(-legPos);
}

rect(-3, -3, 6, 60);

resetMatrix();

            if(dist(mobB, mobA, posB, posA)<10&&mobs.specs[s][1]){

                if(mobB<posB){

                    mobs.direction=RIGHT;

                }else{

                    mobs.direction=LEFT;

                }

            }
            if(dist(mobB, mobA, posB, posA)<10&&mobs.specs[s][1]){

                if(posB<mobB){

                    mobs.state[s]=2;

                }else{

                    mobs.state[s]=1;

                }

                if(dist(mobB, mobA, posB, posA)<1){

                    health-=7;

                    if(health<=0&&!isDead){
                        mobs.specs[s][1]=0;
                        death="enderman";

                    }

                }

                

            }

            if(round(random(0,100))){}else{

                mobs.state[s]=round(random(0,2)+0.5);

            }if(round(random(0,50))){}else{

                mobs.state[s]=0;

            }

            if(!solidBlocks[world[mobA-(-1)][mobB]]&&world[mobA-(-1)][mobB]!==11&&world[mobA-(-1)][mobB]!==12){

                mobs.y[s]+=10;

            }
            break;
        case 9:
            if(mobs.specs[s]===undefined){
                mobs.specs[s]=200;
            }
            if(mobs.specs[s]>200){

                drawFlame(mobX+scrollX-20, mobY+scrollY-20, 3);

            }

            if(options.peaceful){

                mobs.health[s]=0;

            }

            noStroke();

            resetMatrix();

            var playerX = scrollX+mobX, playerY = scrollY+mobY-20;

if(mouseX>playerX){

    direction=LEFT;

}else{

    direction=RIGHT;

}

fill(255,200,0);

translate(playerX, playerY);

if(mobs.direction[s]===LEFT){

    scale(-1, 1);

    translate(-20, 0);

}

rect(0, 0, 20, 20);

fill(100,75, 0);

rect(0, 13, 20, 7);

fill(255, 255, 200);

rect(0+15, 0+7, 5, 3);
fill(100,75, 0);
rect(17,7,3,3);

noStroke();

resetMatrix();
translate(playerX+10,playerY+20);
fill(255,200,0);
for(var i = 0; i < 4; i++){
    rect(sin(time*15+i*90)*20,-10,5,20);
    rect(-sin(time*15+i*90+45)*15,0,5,20);
    rect(sin(time*15+i*90)*10,20,5,20);
}
resetMatrix();

            if(mobs.specs[s]>200){

                drawFlame(mobX+scrollX-20, mobY+scrollY+5, 3);

            }

            if(dist(mobB, mobA, posB, posA)<10){
                mobs.specs[s]++;
                if(mobB<posB){

                    mobs.direction=RIGHT;

                }else{

                    mobs.direction=LEFT;

                }
                if(mobs.specs[s]>=300){
                    mobs.specs[s]=0;
                        fill(255, 150, 0);
                        ellipse(playerX,playerY,400,400);
                    if(dist(mobB,mobA,posB,posA)<5&&gamemode===1){
                        onFire=true;
                        health-=5;
                        if(health<=0&&!isDead){

                            death="blaze";

                        }
                    }
                }
            }

            if(dist(mobB, mobA, posB, posA)<10){

                mobs.state[s]=0;

            }

            if(round(random(0,100))){}else{

                mobs.state[s]=round(random(0,2)+0.5);

            }if(round(random(0,50))){}else{

                mobs.state[s]=0;

            }

            if(!solidBlocks[world[mobA-(-1)][mobB]]&&world[mobA-(-1)][mobB]!==11&&world[mobA-(-1)][mobB]!==12){

                mobs.y[s]+=10;

            }

            

            break;
}

            switch(mobs.state[s]){

                case 1:

                    if(!solidBlocks[world[mobA][mobB]]){

                        mobs.x[s]+=3;

                    }

                    break;

                case 2:

                    if(!solidBlocks[world[mobA][mobB-1]]){

                        mobs.x[s]-=3;

                    }

                    break;

            }

    if((world[mobA-(-1)][mobB]===11||world[mobA-(-1)][mobB]===12||world[mobA][mobB]===11||world[mobA][mobB]===12)){

        mobs.y[s]-=2;

    }

    if(dist(mobB, mobA, b, a)===0&&mPressed&&mouseButton===LEFT){

        if(mobs.type[s]===4){

            pigmanTimer=5000;

        }
        if(mobs.type[s]===7){
            mobs.specs[s][1]=1;
            if(!round(random(0,1))){
                mobs.distance[s]=1;
            }
        }
        mobs.health[s]--;

        if(mobB<posB){

            mobs.x[s]-=5;

        }else{

            mobs.x[s]+=5;

        }

        mobs.y[s]-=10;

        mPressed=false;

        if(hotbar[blockSelected]>311&&hotbar[blockSelected]<317){

            hotbarSpecs[blockSelected]--;

            mobs.health[s]-=(hotbar[blockSelected]-310)*2;

        }

        if(mobs.health[s]<=0){

            if(DO_NOT_TOUCH){

                for(var i = 0; i < 5; i++){

                    spawnEntity(mobB*40+random(-40,40), mobA*40+random(-40,40), 1, 0);

                }

            }

            switch(mobs.type[s]){

                case 0:

                    for(var i = 0; i < random(0,3); i++){

                        spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 317);

                    }

                    break;

                case 1:

                    for(var i = 0; i < random(0,3); i++){

                        spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 318);

                    }

                    break;

                case 2:

                    spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 348);

                    if(!round(random(0,40))){

                        if(round(random(0,5))){

                        spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 302);

                        }else{

                        spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 314);

                        }

                    }

                    break;

                case 3:

                    for(var i = 0; i < random(0,3); i++){

                spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 336);

                    }

                    break;

                case 4:

                    for(var i = 0; i < random(0,3); i++){

                        spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 319);

                    }

                    for(var i = 0; i < round(random(0,1)); i++){

                        spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 303);

                    }

                    if(!round(random(0,40))){

                        spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 315);

                    }

                    break;
                case 6:
                    if(mobs.specs[s]){
                        spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 54);
                    }
                    break;
                case 7:
                    if(!round(random(0,1))){
                        spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 352);
                    }
                    break;
                case 9:
                    if(!round(random(0,1))){
                        spawnEntity(mobs.x[s]+random(0, 40), mobs.y[s]+20, 0, 353);
                    }
                    break;

            }

        }

    }

}}}

for(var i = 0; i < mobs.length; i++){

    if((mobs.type[i]===2||mobs.type[i]===1)&&!night&&!round(random(0,500))){

        mobs.health[i]=0;

    }

}



if(hungerTimer>0){

    hungerTimer--;

}else{

    hungerTimer=2000;

    if(satration>0){

        satration--;

    }else if(hunger>0){

        hunger--;

    }

}

if(hunger>20){

    hunger=20;

}

if(isSprinting){

    hungerTimer-=9;

}

if(options.peaceful){

    hunger=20;

}

if(hunger<=6){

    isSprinting=false;

}

if(hunger<=0&&starveTimer<=0){

    health--;

    death="hunger";

    starveTimer=100;

}else if(hunger<=0){

    starveTimer--;

}

posA = (posY/40 - posY/20 + 4).toFixed(0, 0);

posB = (posX/40 - posX/20 + 5).toFixed(0, 0);

posA2 = ((posY-30)/40 - (posY-30)/20).toFixed(0, 0);

posB2 = ((posX+30)/40 - (posX+30)/20 + 5).toFixed(0, 0);

if(gamemode===0){

fall = 20;

if(inWater||world[posA][posB]===11||world[posA][posB]===12||world[posA][posB2]===11||world[posA][posB2]===12){

    minJump = 18;

}else if(inLava){

    minJump = 19;

}else{

    minJump = 0;

}

if(jump > minJump){

    jump--;

}

if(jump < minJump){

    jump++;

}

if (world[posA2][posB]===11||world[posA2][posB]===12){

    inWater = true;

}else{

    inWater = false;

}

playerSpeed = 8;

if (world[posA][posB]===13||world[posA][posB]===14){

    onFire = true;

    inLava = true;

}else{

    inLava = false;

}

if(world[posA][posB]===17){

    onFire = true;

}

if(!solidBlocks[world[posA-(-1)][posB]]&&!solidBlocks[world[posA-(-1)][posB2]]){

    if(fallTix>10){

        blocksFallen++;

    }

    

    posY -= fall - jump;

}else{

    jump=20;

    if(blocksFallen>5){

        health-=blocksFallen*2;

    }

    blocksFallen=0;

    fallTix=0;

}



if(health>20){

    health=20;

}

if(inWater){

    onFire=false;

}

}

noStroke();

resetMatrix();

var playerX = scrollX-posX+195, playerY = scrollY-posY+135;

if(onFire){

    drawFlame(playerX-18, playerY+30, 3);

    c = random(0, 400);

    if(c>399.5){

        onFire=false;

    }

    if(fireTix<10){

        fireTix++;

    }else{

        health--;

        if(health<=0){

            death="fire";

        }

        fireTix=0;

    }

}

if(DO_NOT_TOUCH){

    if(night){

        if(solidBlocks[getBlock(posA-(-1),posB)]){

            setBlock(posA-(-1),posB,13);

        }

        if(solidBlocks[getBlock(posA-(-1),posB2)]){

            setBlock(posA-(-1),posB2,13);

        }

        

    }else if(solidBlocks[getBlock(posA-(-1),posB)]){

        setBlock(posA-(-1),posB,39);

    }

}

if(mouseX>playerX){

    direction=LEFT;

}else{

    direction=RIGHT;

}

if(keys[65]||keys[68]){

    legPos = sin(time*30)*30;

    armPos = sin(time*30)*15;

}else{

    legPos = 0;

    if(!mPressed){

        armPos=0;

    }

}

if(solidBlocks[world[posA2-(-2)][posB]]||solidBlocks[world[posA2-(-2)][posB2]]){

    jump = 18;

}

if(!isDead&&!isSleeping){

translate(playerX+10, playerY+50);

rotate(-legPos);

fill(15, 0, 110);

rect(-6, 0, 12, 30);

if(armorSlots[2]>0){

    switch(armorSlots[2]){

        case 322:

            fill(225);

            stroke(150);

            break;

        case 326:

            fill(255, 213, 0);

            stroke(191, 150, 0);

            break;

        case 330:

            fill(0, 255, 255);

            stroke(0, 168, 168);

            break;

        case 334:

            fill(189, 120, 0);

            stroke(125, 75, 0);

            break;

    }

    rect(-6, 0, 11, 25, 30);

    noStroke();

}

if(armorSlots[3]>0){

    switch(armorSlots[3]){

        case 323:

            fill(225);

            stroke(150);

            break;

        case 327:

            fill(255, 213, 0);

            stroke(191, 150, 0);

            break;

        case 331:

            fill(0, 255, 255);

            stroke(0, 168, 168);

            break;

        case 335:

            fill(189, 120, 0);

            stroke(125, 75, 0);

            break;

    }

    rect(-7, 20, 14, 13, 30);

    noStroke();

}

resetMatrix();

translate(playerX+10, playerY+22);

rotate(-armPos);

fill(0, 122, 122);

rect(-5, 0, 10, 10);

fill(143, 105, 43);

rect(-5, 10, 10, 20);

resetMatrix();

fill(199, 154, 77);

translate(playerX, playerY);

if(direction===RIGHT){

    scale(-1, 1);

    translate(-20, 0);

}

rect(0, 0, 20, 20);

fill(117, 84, 0);

triangle(0, 0+5, 0+15, 0+5, 0, 0+10);

rect(0, 0, 20, 5);

fill(255);

rect(0+15, 0+7, 5, 3);

fill(108, 0, 196);

rect(0+17, 0+7, 3, 3);

fill(0, 201, 201);

rect(0+4, 0+20, 12, 30);

if(armorSlots[1]>0){

    switch(armorSlots[1]){

        case 321:

            fill(225);

            stroke(150);

            break;

        case 325:

            fill(255, 213, 0);

            stroke(191, 150, 0);

            break;

        case 329:

            fill(0, 255, 255);

            stroke(0, 168, 168);

            break;

        case 333:

            fill(189, 120, 0);

            stroke(125, 75, 0);

            break;

    }

    rect(2, 20, 16, 35, 15);

    noStroke();

}

if(armorSlots[0]>0){

    switch(armorSlots[0]){

        case 320:

            fill(225);

            stroke(150);

            break;

        case 324:

            fill(255, 213, 0);

            stroke(191, 150, 0);

            break;

        case 328:

            fill(0, 255, 255);

            stroke(0, 168, 168);

            break;

        case 332:

            fill(189, 120, 0);

            stroke(125, 75, 0);

            break;

    }

    rect(-2, -3, 25, 8, 30);

}noStroke();

if(mPressed&&mouseButton===LEFT&&armTimer<=0){

    armTimer = 5;

}

if(armTimer>0){

    armTimer--;

}

resetMatrix();

translate(playerX+10, playerY+50);

rotate(legPos);

fill(23, 0, 156);

rect(-6, 0, 12, 30);

if(armorSlots[2]>0){

    switch(armorSlots[2]){

        case 322:

            fill(225);

            stroke(150);

            break;

        case 326:

            fill(255, 213, 0);

            stroke(191, 150, 0);

            break;

        case 330:

            fill(0, 255, 255);

            stroke(0, 168, 168);

            break;

        case 334:

            fill(189, 120, 0);

            stroke(125, 75, 0);

            break;

    }

    rect(-6, -3, 11, 28, 30);

    noStroke();

}

if(armorSlots[3]>0){

    switch(armorSlots[3]){

        case 323:

            fill(225);

            stroke(150);

            break;

        case 327:

            fill(255, 213, 0);

            stroke(191, 150, 0);

            break;

        case 331:

            fill(0, 255, 255);

            stroke(0, 168, 168);

            break;

        case 335:

            fill(189, 120, 0);

            stroke(125, 75, 0);

            break;

    }

    rect(-7, 20, 14, 13, 30);

    noStroke();

}

resetMatrix();

translate(playerX+10, playerY+22);

if(armTimer>0){

    if(direction===RIGHT){

        rotate(armTimer*10);

    }else{

        rotate(-armTimer*10);

    }

}else{

    rotate(armPos);

}

fill(0, 189, 189);

rect(-5, 0, 10, 10);

fill(199, 154, 77);

rect(-5, 10, 10, 20);

if(armorSlots[1]>0){

    switch(armorSlots[1]){

        case 321:

            fill(225);

            stroke(150);

            break;

        case 325:

            fill(255, 213, 0);

            stroke(191, 150, 0);

            break;

        case 329:

            fill(0, 255, 255);

            stroke(0, 168, 168);

            break;

        case 333:

            fill(189, 120, 0);

            stroke(125, 75, 0);

            break;

    }

    rect(-8, -3, 15, 15, 15);

    noStroke();

}

if(direction===RIGHT){

    scale(-1, 1);

}

if(hotbar[blockSelected]>300){

    drawBlocks(hotbar[blockSelected], 6, 10);

}else{

    scale(0.75, 0.75);

    drawBlocks(hotbar[blockSelected], 6, 20);

}

resetMatrix();

if(onFire){

    drawFlame(playerX-20, playerY, 3);

}

}

posA2 = ((posY+10)/40 - (posY+10)/20+4).toFixed(0, 0);

posA2 = ((posY-30)/40 - (posY-30)/20+4).toFixed(0, 0);

if(place+50>world[0].length){

    genWorld();

}



if(hide===false){

fill(199);

stroke(0, 0, 0);

rect(10, 350, 380, 50);

fill(230, 230, 230);

rect(blockSelected*43+15, 361, 30, 30);

noStroke();

for(var i=0; i<9; i++){

    var j = i*43+20;

    noStroke();

    drawBlocks(hotbar[i], j, 366);

    noStroke();

    if(itemDurabilities[hotbar[i]]!==null&&hotbarSpecs[i]!==itemDurabilities[hotbar[i]]){

        var filler = 255/itemDurabilities[hotbar[i]];

        fill(255-hotbarSpecs[i]*filler, hotbarSpecs[i]*filler, 0);

        rect(j, 388, hotbarSpecs[i]/(itemDurabilities[hotbar[i]]/20), 3);

        if(hotbarSpecs[i]<=0){

            hotbarSpecs[i]=0;

            hotbarStacks[i]=0;

            hotbar[i]=0;

        }

    }

    fill(0);

    text(i+1, j-7, 363);

    fill(255);

    textSize(15);

    if(hotbarStacks[i]!==0&&hotbarStacks[i]!==1){

        text(hotbarStacks[i], j+20, 366+23);

    }

    if(hotbarStacks[i]===0){

        hotbar[i]=0;

    }

    textSize(12);

}}

if(!isDead){



if(shake===2){

    shake=-2;

}else{

    shake=2;

}

if(gamemode===0){

if(inWater){

    drownCount++;

    for(var ll = 0; ll < oxygen; ll++){

        noFill();

        stroke(0, 196, 230, 150);

        ellipse(400-ll*16-40, 302, 16, 16);

    }

    if(drownCount>50){

        oxygen--;

        drownCount=0;

        if(oxygen<0){

            health-=2;

            if(health<=0){

                death="water";

            }

        }

    }

}else{

    oxygen=10;

}

for(var L = 0; L < armor/2; L++){

    image(shield, L*16+24, 300, 8, 12);

}

for(var l = 0; l < (armor-1)/2; l++){

    image(shield, l*16+20, 292, 16, 24);

}

stroke(0);

fill(204, 122, 0);

for(var i = 0; i < hunger/2; i++){

    stroke(237);

    strokeWeight(2);

    translate(400-i*16-40+2, 324);

    line(0,0,-5,5);

    stroke(110, 66, 0);

    strokeWeight(1);

    rotate(45);

    ellipse(0,0, 8, 10);

    resetMatrix();

    noStroke();

    if(i===round(hunger/2)-1&&i!==hunger/2-1){

        fill(255, 0, 0);

        ellipse(400-i*16-40+4, 322,5,5);

        fill(225);

        ellipse(400-i*16-40+4, 322,2,2);

    }

}

}



if(inventory===false&&news===false&&isCrafting===false&&isSmelting===false){
a = (mouseY/40 + 0.5 - scrollY/40).toFixed(0, 0) - 1;

b = (mouseX/40 + 0.5 - scrollX/40).toFixed(0, 0) - 1;

if (mPressed&&mouseButton===RIGHT&&hotbar[blockSelected]<300&&hotbar[blockSelected]!==0&&!(hotbar[blockSelected]===60&&nether)){

    if(world[a][b]===0||world[a][b]===11||world[a][b]===12||world[a][b]===13||world[a][b]===14){

        world[a][b]=hotbar[blockSelected];

        armTimer=5;

        if(world[a][b]===33){

            var newFurnace = [0,0,0,50,0,0,0,0,0,0,0,0];

            specs[a][b]=newFurnace;

        }else if(world[a][b]===55){

        if(posB>b&&world[a][b-1]===0){

            world[a][b-1]=56;

        }else if(world[a][b-(-1)]===0){

            world[a][b-(-1)]=56;

        }else if(gamemode===0){

            spawnEntity(b*40,a*40,0,56);

        }
        }

        if(world[a][b]===34){

            var newChest = [

        [[0,0,0,0],

        [0,0,0,0],

        [0,0,0,0],

        [0,0,0,0],

        [0,0,0,0],

        [0,0,0,0]],

        [[0,0,0,0],

        [0,0,0,0],

        [0,0,0,0],

        [0,0,0,0],

        [0,0,0,0],

        [0,0,0,0]],

        [[0,0,0,0],

        [0,0,0,0],

        [0,0,0,0],

        [0,0,0,0],

        [0,0,0,0],

        [0,0,0,0]]];

            specs[a][b]=newChest;

        }

        if(gamemode===0){

        if(!itemDurabilities[hotbar[blockSelected]]){

            if(hotbar[blockSelected]===11||hotbar[blockSelected]===13){

                hotbar[blockSelected]=337;

                mPressed=false;

            }else{

                hotbarStacks[blockSelected]--;

            }

        }else{

            hotbarSpecs[blockSelected]--;

        }

        }

        if(world[a][b]===28){

            specs[a][b]=1;

            specs[a-1][b]=1;

            world[a-1][b]=29;

        }

    }else {

        if (world[a][b]===15&&hotbar[blockSelected]===17&&specs[a][b]===0){

            specs[a][b]=100;

        }

    }

}

if(mPressed&&mouseButton===RIGHT){
    if((world[a][b]===55||world[a][b]===56)){
        if(dist(posB,posA,b,a)<=2){

        if(night){

            isSleeping=true;

        }else{

            broadcast("You can only sleep at night.");

        }
        }else{
            broadcast("You are not near enough to the bed.");
        }
        mPressed=false;

    }
    if((world[a][b]===11||world[a][b]===13)&&hotbar[blockSelected]===337){

        if(gamemode===0){

        if(hotbarStacks[blockSelected]===1){

            hotbar[blockSelected]=world[a][b];

        }else{

            hotbarStacks[blockSelected]--;

            getItem(world[a][b], 1);

        }

        }

        world[a][b]=0;

        mPressed=false;

    }
    if(hotbar[blockSelected]===355&&world[a][b]===58&&specs[a][b]===0){
        specs[a][b]=1;
        if(gamemode===0){
            hotbarStacks[blockSelected]--;
        }
        mPressed=false;
    }
    if(hotbar[blockSelected]===340){

        spawnEntity(b*40, a*40, 1, 0);

        if(gamemode===0){

            hotbarStacks[blockSelected]--;

        }

        mPressed=false;

    }

    if(world[a][b]===33){

        isSmelting=true;

        blockTargeted=[a, b];

        mPressed=false;

    }

    

    if(world[a][b]===45){

        onCommandBlock=true;

        blockTargeted=[a, b];

        input=specs[a][b][1];

        mPressed=false;

    }

    

    if(world[a][b]===34){

        onChest=true;

        blockTargeted=[a, b];

        mPressed=false;

    }

    if((world[a][b]===3||world[a][b]===2)&&hotbar[blockSelected]>=341&&hotbar[blockSelected]<=345&&opaqueBlocks[world[a-1][b]]){

        world[a][b]=46;

        armTimer=5;

        if(gamemode===0){

            hotbarSpecs[blockSelected]--;

        }

    }

    if(world[a][b]===27){

        isCrafting=true;

    }else if(world[a][b]===26&&hotbar[blockSelected]===305){

        heartsShowing=true;

        hotbarStacks[blockSelected]--;

        if(shieldsShowing!==false){

            shieldsShowing+=1000;

        }

    }else if(world[a][b]===28){

        if(specs[a][b]===0){

            specs[a][b]=1;

            specs[a-1][b]=1;

        }else if(specs[a][b]===1){

            specs[a][b]=0;

            specs[a-1][b]=0;

        }

        mouseButton=2;

    }else if(world[a][b]===29){

        if(specs[a][b]===0){

            specs[a][b]=1;

            specs[a-(-1)][b]=1;

        }else if(specs[a][b]===1){

            specs[a][b]=0;

            specs[a-(-1)][b]=0;

        }

        mouseButton=2;

    }

    if(hotbar[blockSelected]===348){

        hunger-=4;

        satration=1;

        mPressed=false;

        hotbarStacks[blockSelected]--;

    }

    if(hotbar[blockSelected]===317&&hunger<20){

        hunger+=3;

        if(satration<2){

            satration+=2;

        }else{

            satration++;

        }

        hotbarStacks[blockSelected]--;

        mPressed=false;

    }

    if(hotbar[blockSelected]===319&&hunger<20){

        hunger+=8;

        if(satration<2){

            satration+=13;

        }else{

            satration+=3;

        }

        hotbarStacks[blockSelected]--;

        mPressed=false;

    }

    if(hotbar[blockSelected]===347&&hunger<20){

        hunger+=5;

        if(satration<2){

            satration+=5;

        }else{

            satration+=2;

        }

        hotbarStacks[blockSelected]--;

        mPressed=false;

    }

}

}else if (inventory===true){

    var craftingSquares = [[],[],[]];

    for(var i = 0; i < 3; i++){

        for(var j = 0; j < 3; j++){

            craftingSquares[i][j] = craftingGrid[i*3+j];

        }

    }

    if(mouseX>=70&&mouseX<=90&&mouseY>=280&&mPressed&&mouseY<=300&&invScroll>0){

        invScroll--;

    }else if(mouseX>=95&&mouseX<=115&&mouseY>=280&&mouseY<=300&&mPressed&&invScroll<allBlocks.length-6){

        invScroll++;

    }else if(mouseY<350){

        if(mouseX<220){

        a = (mouseY/40+0.5).toFixed(0, 0) - 1;

        b = (mouseX/40+0.75).toFixed(0, 0) - 2;

    if(a<7&&b<5&&a>0&&b>0){

        if(gamemode===0){

        setTag(invContents[a-1][b-1]);

        if(mPressed){

        if(invContents[a-1][b-1]===holdingBlock){

            while(holdingStacks<maxStacks[holdingBlock]&&invStacks[a-1][b-1]>0){

                invStacks[a-1][b-1]--;

                holdingStacks++;

            }

        }

        var oldBlock = holdingBlock;

        var oldStack = holdingStacks;

        var oldSpec = holdingSpecs;

        holdingBlock=invContents[a-1][b-1];

        holdingStacks=invStacks[a-1][b-1];

        holdingSpecs=invSpecs[a-1][b-1];

        invContents[a-1][b-1]=oldBlock;

        invStacks[a-1][b-1]=oldStack;

        invSpecs[a-1][b-1]=oldSpec;

        mPressed=false;

        }

        }else{

        setTag(allBlocks[a-1+invScroll][b-1]);

        if(mPressed){

        if(holdingBlock===0){

            holdingBlock=allBlocks[a-1+invScroll][b-1];

            holdingStacks=1;

            if(keys[SHIFT]){

                holdingStacks=maxStacks[allBlocks[a-1+invScroll][b-1]];

            }

        }else{

            holdingBlock=0;

        }

        if(itemDurabilities[holdingBlock]){

            holdingSpecs=itemDurabilities[holdingBlock];

        }else{

            holdingSpecs=0;

        }

        keyCode=0;

        mPressed=false;

        }

        }

    }}else{

        a = ((mouseY)/30).toFixed(0, 0)-2;

        b = ((mouseX)/30).toFixed(0, 0)-9;

    if(mouseY<200&&mouseX>210&&b<2&&b>=0&&a<2&&a>=0){

        setTag(craftingSquares[a][b]);

        if(mPressed){

        if(craftingSquares[a][b]===0){

            craftingGrid[a*3+b]=holdingBlock;

            holdingStacks--;

            keyCode=0;

            mPressed=false;

        }else if(holdingBlock===0||holdingBlock===craftingSquares[a][b]){

            holdingBlock=craftingGrid[a*3+b];

            holdingStacks++;

            craftingGrid[a*3+b]=0;

            mPressed=false;

        }

        }

    }

    if(mouseX>255&&mouseX<295&&mouseY>140&&mouseY<180){

        setTag(craftedItem);

        if(mPressed&&craftedItem!==0){

        if(keys[SHIFT]){

            getItem(craftedItem, craftedStacks);

            craftedItem=0;

            craftedStacks=0;

            craftingGrid=[0,0,0,0,0,0,0,0,0];

        }else if(holdingBlock===0){

            holdingBlock=craftedItem;

            holdingStacks=craftedStacks;

            holdingSpecs=itemDurabilities[craftedItem];

            craftingGrid=[0,0,0,0,0,0,0,0,0];

            mPressed=false;

        }

        }

    }else if(mouseX>240&&mouseX<310&&mouseY>185&&mouseY<255){

        a = ((mouseY-175)/30).toFixed(0,0)-1;

        b = ((mouseX-225)/35).toFixed(0,0)-1;

        setTag(armorSlots[a*2+b]);

        if(mPressed&&a>=0&&a<=1&&b>=0&&b<=1){

            if(holdingBlock===0){

                holdingBlock = armorSlots[a*2+b];

                holdingSpecs = armorSpecs[a*2+b];

                holdingStacks = 1;

                armorSlots[a*2+b]=0;

                armorSpecs[a*2+b]=0;

                mPressed=false;

            }else if(holdingBlock>=320&&holdingBlock<=335){

                var data = holdingBlock;

                if(data>300){

                    while(data>3){

                        data-=4;

                    }

                }

                if(data===a*2+b){

                    var oldBlock = holdingBlock;

                    var oldSpecs = holdingSpecs;

                    holdingBlock = armorSlots[a*2+b];

                    holdingSpecs = armorSpecs[a*2+b];

                    armorSlots[a*2+b]=oldBlock;

                    armorSpecs[a*2+b]=oldSpecs;

                    mPressed=false;

                }

            }

        }

    }

    }}else {

        b = (mouseX/40).toFixed(0, 0);

        if(b>0&&b<=9){

        setTag(hotbar[b-1]);

    if(mPressed){

        if(hotbar[b-1]===holdingBlock){

            while(holdingStacks<maxStacks[holdingBlock]&&hotbarStacks[b-1]>0){

                hotbarStacks[b-1]--;

                holdingStacks++;

            }

        }

        var oldBlock = holdingBlock;

        var oldStack = holdingStacks;

        var oldSpec = holdingSpecs;

        holdingBlock=hotbar[b-1];

        holdingStacks=hotbarStacks[b-1];

        holdingSpecs=hotbarSpecs[b-1];

        hotbar[b-1]=oldBlock;

        hotbarStacks[b-1]=oldStack;

        hotbarSpecs[b-1]=oldSpec;

        keyCode=0;

        mPressed=false;

    }

    }}

}

if(onCommandBlock){

    if(input===undefined){

        input="";

    }

    fill(0, 0, 0, 100);

    rect(0,0,400,400);

    fill(255);

    strokeWeight(2);

    stroke(0);

    button(210,300,100,25,1,true,"Set Command");

    button(90,300,100,25,0,true,"Cancel");

    textAlign(LEFT,BOTTOM);

    onInputBox=true;

    fill(100);

    rect(50,175,300,30);

    if(functions[0]){

        onCommandBlock=false;

        onInputBox=false;

    }

    if(functions[1]){

        keyCode=ENTER;

        keyPressed();

    }

}

if (onChest){

var targetChest = specs[blockTargeted[0]][blockTargeted[1]];

if(mouseY<350){

    if(mouseX<200){

        a = ((mouseY-60)/40).toFixed(0,0);

        b = ((mouseX-50)/40).toFixed(0,0);

        if(b<1){b=0;}

        if(a<1){a=0;}

    if(a<6&&b<4&&a>=0&&b>=0){

        setTag(invContents[a][b]);

        if(mPressed){

        if(invContents[a][b]===holdingBlock){

            while(holdingStacks<maxStacks[holdingBlock]&&invStacks[a][b]>0){

                invStacks[a][b]--;

                holdingStacks++;

            }

        }

        var oldBlock = holdingBlock;

        var oldStack = holdingStacks;

        var oldSpec = holdingSpecs;

        holdingBlock=invContents[a][b];

        holdingStacks=invStacks[a][b];

        holdingSpecs=invSpecs[a][b];

        invContents[a][b]=oldBlock;

        invStacks[a][b]=oldStack;

        invSpecs[a][b]=oldSpec;

        mPressed=false;

        }

    }

    }else{

        a = ((mouseY-220)/40).toFixed(0,0)-(-4);

        b = ((mouseX-60)/40).toFixed(0,0)-4;

        if(a<6&&b<4&&a>=0&&b>=0){

        setTag(targetChest[0][a][b]);

        if(mPressed){

        if(targetChest[0][a][b]===holdingBlock){

            while(holdingStacks<maxStacks[holdingBlock]&&targetChest[1][a][b]>0){

                targetChest[1][a][b]--;

                holdingStacks++;

            }

        }

        var oldBlock = holdingBlock;

        var oldStack = holdingStacks;

        var oldSpec = holdingSpecs;

        holdingBlock=targetChest[0][a][b];

        holdingStacks=targetChest[1][a][b];

        holdingSpecs=targetChest[2][a][b];

        targetChest[0][a][b]=oldBlock;

        targetChest[1][a][b]=oldStack;

        targetChest[2][a][b]=oldSpec;

        mPressed=false;

        }

    }

    }

}else{

        b = (mouseX/40).toFixed(0, 0);

    if(b>0&&b<=9){

        setTag(hotbar[b-1]);

    if(mPressed){

        if(hotbar[b-1]===holdingBlock){

            while(holdingStacks<maxStacks[holdingBlock]&&hotbarStacks[b-1]>0){

                hotbarStacks[b-1]--;

                holdingStacks++;

            }

        }

        var oldBlock = holdingBlock;

        var oldStack = holdingStacks;

        var oldSpec = holdingSpecs;

        holdingBlock=hotbar[b-1];

        holdingStacks=hotbarStacks[b-1];

        holdingSpecs=hotbarSpecs[b-1];

        hotbar[b-1]=oldBlock;

        hotbarStacks[b-1]=oldStack;

        hotbarSpecs[b-1]=oldSpec;

        keyCode=0;

        mPressed=false;

    }

    }

}mPressed=false;

}

if (isTrading===true){

    if(mouseY<350){

        if(mouseX<220){

        a = (mouseY/40+0.5).toFixed(0, 0) - 1;

        b = (mouseX/40+0.75).toFixed(0, 0) - 2;

    if(a<7&&b<5&&a>0&&b>0){

        setTag(invContents[a-1][b-1]);

        if(mPressed){

        if(invContents[a-1][b-1]===holdingBlock){

            while(holdingStacks<maxStacks[holdingBlock]&&invStacks[a-1][b-1]>0){

                invStacks[a-1][b-1]--;

                holdingStacks++;

            }

        }

        var oldBlock = holdingBlock;

        var oldStack = holdingStacks;

        var oldSpec = holdingSpecs;

        holdingBlock=invContents[a-1][b-1];

        holdingStacks=invStacks[a-1][b-1];

        holdingSpecs=invSpecs[a-1][b-1];

        invContents[a-1][b-1]=oldBlock;

        invStacks[a-1][b-1]=oldStack;

        invSpecs[a-1][b-1]=oldSpec;

        mPressed=false;

        }

    }}else{

if(mouseX>255&&mouseX<295&&mouseY>240&&mouseY<280&&mPressed&&tradingSlots[0]===mobs.specs[mobSelected][0]&&tradingSlots[1]===mobs.specs[mobSelected][1]){

    if(keys[SHIFT]){

        getItem(mobs.specs[mobSelected][2], mobs.specs[mobSelected][5]);

    }else if(holdingBlock===0){

        holdingBlock=mobs.specs[mobSelected][2];

        holdingStacks=mobs.specs[mobSelected][5];

        holdingSpecs=itemDurabilities[mobs.specs[mobSelected][2]];

}mPressed=false;
tradingSlots[2]-=mobs.specs[mobSelected][3];
tradingSlots[3]-=mobs.specs[mobSelected][4];
if(tradingSlots[2]<=0){
    tradingSlots[0]=0;
}
if(tradingSlots[3]<=0){
    tradingSlots[1]=0;
}
}

if(mouseX>255&&mouseX<295&&mouseY>100&&mouseY<140&&mPressed){

    var oldBlock = holdingBlock;

    var oldStack = holdingStacks;

    var oldSpec = holdingSpecs;

    holdingBlock=tradingSlots[1];

    holdingStacks=tradingSlots[3];

    holdingSpecs=tradingSlots[5];

    tradingSlots[1]=oldBlock;

    tradingSlots[3]=oldStack;

    tradingSlots[5]=oldSpec;

    mPressed=false;

}

if(mouseX>255&&mouseX<295&&mouseY>50&&mouseY<90&&mPressed){

    var oldBlock = holdingBlock;

    var oldStack = holdingStacks;

    var oldSpec = holdingSpecs;

    holdingBlock=tradingSlots[0];

    holdingStacks=tradingSlots[2];

    holdingSpecs=tradingSlots[4];

    tradingSlots[0]=oldBlock;

    tradingSlots[2]=oldStack;

    tradingSlots[4]=oldSpec;

    mPressed=false;

}

    }}else{

        b = (mouseX/40).toFixed(0, 0);

    if(b>0&&b<=9){

        setTag(hotbar[b-1]);

    if(mPressed){

        if(hotbar[b-1]===holdingBlock){

            while(holdingStacks<maxStacks[holdingBlock]&&hotbarStacks[b-1]>0){

                hotbarStacks[b-1]--;

                holdingStacks++;

            }

        }

        var oldBlock = holdingBlock;

        var oldStack = holdingStacks;

        var oldSpec = holdingSpecs;

        holdingBlock=hotbar[b-1];

        holdingStacks=hotbarStacks[b-1];

        holdingSpecs=hotbarSpecs[b-1];

        hotbar[b-1]=oldBlock;

        hotbarStacks[b-1]=oldStack;

        hotbarSpecs[b-1]=oldSpec;

        keyCode=0;

        mPressed=false;

    }

    }

}

}

if (isCrafting===true){

    var craftingSquares = [[],[],[]];

    for(var i = 0; i < 3; i++){

        for(var j = 0; j < 3; j++){

            craftingSquares[i][j] = craftingGrid[i*3+j];

        }

    }

    if(mouseY<350){

        if(mouseX<220){

        a = (mouseY/40+0.5).toFixed(0, 0) - 1;

        b = (mouseX/40+0.75).toFixed(0, 0) - 2;

    if(a<7&&b<5&&a>0&&b>0){

        setTag(invContents[a-1][b-1]);

        if(mPressed){

        if(invContents[a-1][b-1]===holdingBlock){

            while(holdingStacks<maxStacks[holdingBlock]&&invStacks[a-1][b-1]>0){

                invStacks[a-1][b-1]--;

                holdingStacks++;

            }

        }

        var oldBlock = holdingBlock;

        var oldStack = holdingStacks;

        var oldSpec = holdingSpecs;

        holdingBlock=invContents[a-1][b-1];

        holdingStacks=invStacks[a-1][b-1];

        holdingSpecs=invSpecs[a-1][b-1];

        invContents[a-1][b-1]=oldBlock;

        invStacks[a-1][b-1]=oldStack;

        invSpecs[a-1][b-1]=oldSpec;

        mPressed=false;

        }

    }}else{

        a = ((mouseY)/30).toFixed(0, 0)-2;

        b = ((mouseX)/30).toFixed(0, 0)-9;

    if(mouseY<200&&mouseX>210&&b<3&&b>=0&&a<3&&a>=0){

        setTag(craftingSquares[a][b]);

        if(mPressed){

        if(craftingSquares[a][b]===0){

            craftingGrid[a*3+b]=holdingBlock;

            holdingStacks--;

            keyCode=0;

            mPressed=false;

        }else if(holdingBlock===0||holdingBlock===craftingSquares[a][b]){

            holdingBlock=craftingGrid[a*3+b];

            holdingStacks++;

            craftingGrid[a*3+b]=0;

            mPressed=false;

        }

        }

    }

    if(mouseX>270&&mouseX<315&&mouseY>225&&mouseY<270){

        setTag(craftedItem);

        if(mPressed){

        if(keys[SHIFT]){

            getItem(craftedItem, craftedStacks);

            craftedItem=0;

            craftedStacks=0;

            craftingGrid=[0,0,0,0,0,0,0,0,0];

        }else if(holdingBlock===0){

            holdingBlock=craftedItem;

            holdingStacks=craftedStacks;

            holdingSpecs=itemDurabilities[craftedItem];

            craftingGrid=[0,0,0,0,0,0,0,0,0];

            mPressed=false;

        }}

    }}}else{

        b = (mouseX/40).toFixed(0, 0);

    if(b>0&&b<=9){

        setTag(hotbar[b-1]);

    if(mPressed){

        if(hotbar[b-1]===holdingBlock){

            while(holdingStacks<maxStacks[holdingBlock]&&hotbarStacks[b-1]>0){

                hotbarStacks[b-1]--;

                holdingStacks++;

            }

        }

        var oldBlock = holdingBlock;

        var oldStack = holdingStacks;

        var oldSpec = holdingSpecs;

        holdingBlock=hotbar[b-1];

        holdingStacks=hotbarStacks[b-1];

        holdingSpecs=hotbarSpecs[b-1];

        hotbar[b-1]=oldBlock;

        hotbarStacks[b-1]=oldStack;

        hotbarSpecs[b-1]=oldSpec;

        keyCode=0;

        mPressed=false;

    }

    }

}}

if(isSmelting){

    if(mouseY<350){

        if(mouseX<220){

        a = (mouseY/40+0.5).toFixed(0, 0) - 1;

        b = (mouseX/40+0.75).toFixed(0, 0) - 2;

    if(a<7&&b<5&&a>0&&b>0){

        setTag(invContents[a-1][b-1]);

        if(mPressed){

        if(invContents[a-1][b-1]===holdingBlock){

            while(holdingStacks<maxStacks[holdingBlock]&&invStacks[a-1][b-1]>0){

                invStacks[a-1][b-1]--;

                holdingStacks++;

            }

        }

        var oldBlock = holdingBlock;

        var oldStack = holdingStacks;

        var oldSpec = holdingSpecs;

        holdingBlock=invContents[a-1][b-1];

        holdingStacks=invStacks[a-1][b-1];

        holdingSpecs=invSpecs[a-1][b-1];

        invContents[a-1][b-1]=oldBlock;

        invStacks[a-1][b-1]=oldStack;

        invSpecs[a-1][b-1]=oldSpec;

        mPressed=false;

        }

    }}else{

        var targetFurnace = specs[blockTargeted[0]][blockTargeted[1]];

for(var i = 0; i <= 10; i++){

    if(specs[blockTargeted[0]][blockTargeted[1]][i]===undefined){

specs[blockTargeted[0]][blockTargeted[1]][i]=0;

    }

}

var fuel = targetFurnace[0];

var fuelStacks = targetFurnace[1];

var fuelSpecs = targetFurnace[2];

var smeltingTime = targetFurnace[3];

var item = targetFurnace[4];

var itemStacks = targetFurnace[5];

var itemSpecs = targetFurnace[6];

var smeltedItem = targetFurnace[7];

var smeltedStacks = targetFurnace[8];

var smeltedSpecs = targetFurnace[9];

var burnTime = targetFurnace[10];



if(mouseX>255&&mouseX<295&&mouseY>240&&mouseY<280&&mPressed){

    if(keys[SHIFT]){

        getItem(smeltedItem, smeltedStacks);

        smeltedItem=0;

        smeltedStacks=0;

    }else if(holdingBlock===0){

        holdingBlock=smeltedItem;

        holdingStacks=smeltedStacks;

        smeltedItem=0;smeltedStacks=0;

        holdingSpecs=itemDurabilities[smeltedItem];

}mPressed=false;}

if(mouseX>255&&mouseX<295&&mouseY>130&&mouseY<170&&mPressed){

    var oldBlock = holdingBlock;

    var oldStack = holdingStacks;

    var oldSpec = holdingSpecs;

    holdingBlock=fuel;

    holdingStacks=fuelStacks;

    holdingSpecs=fuelSpecs;

    fuel=oldBlock;

    fuelStacks=oldStack;

    fuelSpecs=oldSpec;

    mPressed=false;

}

if(mouseX>255&&mouseX<295&&mouseY>50&&mouseY<90&&mPressed){

    var oldBlock = holdingBlock;

    var oldStack = holdingStacks;

    var oldSpec = holdingSpecs;

    holdingBlock=item;

    holdingStacks=itemStacks;

    holdingSpecs=itemSpecs;

    item=oldBlock;

    itemStacks=oldStack;

    itemSpecs=oldSpec;

    mPressed=false;

}

specs[blockTargeted[0]][blockTargeted[1]][0]=fuel;

specs[blockTargeted[0]][blockTargeted[1]][1]=fuelStacks;

specs[blockTargeted[0]][blockTargeted[1]][2]=fuelSpecs;

specs[blockTargeted[0]][blockTargeted[1]][3]=smeltingTime;

specs[blockTargeted[0]][blockTargeted[1]][4]=item;

specs[blockTargeted[0]][blockTargeted[1]][5]=itemStacks;

specs[blockTargeted[0]][blockTargeted[1]][6]=itemSpecs;

specs[blockTargeted[0]][blockTargeted[1]][7]=smeltedItem;

specs[blockTargeted[0]][blockTargeted[1]][8]=smeltedStacks;

specs[blockTargeted[0]][blockTargeted[1]][9]=smeltedSpecs;

specs[blockTargeted[0]][blockTargeted[1]][10]=burnTime;

    }}else{

        b = (mouseX/40).toFixed(0, 0);

    if(b>0&&b<=9){

        setTag(hotbar[b-1]);

    if(mPressed){

        if(hotbar[b-1]===holdingBlock){

            while(holdingStacks<maxStacks[holdingBlock]&&hotbarStacks[b-1]>0){

                hotbarStacks[b-1]--;

                holdingStacks++;

            }

        }

        var oldBlock = holdingBlock;

        var oldStack = holdingStacks;

        var oldSpec = holdingSpecs;

        holdingBlock=hotbar[b-1];

        holdingStacks=hotbarStacks[b-1];

        holdingSpecs=hotbarSpecs[b-1];

        hotbar[b-1]=oldBlock;

        hotbarStacks[b-1]=oldStack;

        hotbarSpecs[b-1]=oldSpec;

        keyCode=0;

        mPressed=false;

    }

    }

}}

if(holdingStacks===0||holdingBlock===0){

    holdingBlock=0;

    holdingStacks=0;

    holdingSpecs=0;

}

        if(keys[112]){

            if(hide===false){

                hide=true;

            }else{

                hide=false;

            }

            keyCode=0;

        }

if(keyTimer>0&&isSprinting===false){

    keyTimer--;

}

    if(!inventory&&!isCrafting&&!isSmelting&&!onChest&&!onCommandBlock&&!isTrading){

        if(keys[68]){

            

            posB2 = ((posX+30)/40 - (posX+30)/20 + 6).toFixed(0, 0);

            if(((!solidBlocks[world[posA][posB2]]||(world[posA][posB2]===28&&specs[posA][posB2]===0)||(world[posA][posB2]===29&&specs[posA][posB2]===0))&&(!solidBlocks[world[posA2][posB2]]||(world[posA2][posB2]===28&&specs[posA2][posB2]===0)||(world[posA2][posB2]===29&&specs[posA2][posB2]===0))&&(!solidBlocks[world[posA2-1][posB2]]||(world[posA2-1][posB2]===28&&specs[posA2-1][posB-1]===0)||(world[posA2-1][posB2]===29&&specs[posA2-1][posB2]===0))&&gamemode===0)||gamemode===1){

                if(keyTimer>0){

                    isSprinting=true;

                    playerSpeed = playerSpeed * 1.5;

                }

                posX-=playerSpeed;

                if(isSprinting){

                    playerSpeed = playerSpeed / 1.5;

                }

            }else{

                isSprinting=false;

                if(world[posA2][posB2]===31||world[posA][posB2]===31){

                    health-=1;

                }

            }

            posB2 = ((posX+30)/40 - (posX+30)/20 + 5).toFixed(0, 0);

        }

        if(keys[65]){

            

            if(((!solidBlocks[world[posA][posB-1]]||(world[posA][posB-1]===28&&specs[posA][posB-1]===0)||(world[posA][posB-1]===29&&specs[posA][posB-1]===0))&&(!solidBlocks[world[posA2][posB-1]]||(world[posA2][posB-1]===28&&specs[posA2][posB-1]===0)||(world[posA2][posB-1]===29&&specs[posA2][posB-1]===0))&&(!solidBlocks[world[posA2-1][posB-1]]||(world[posA2-1][posB-1]===28&&specs[posA2-1][posB-1]===0)||(world[posA2-1][posB-1]===29&&specs[posA2-1][posB-1]===0))&&gamemode===0)||gamemode===1){

                if(keyTimer>0){

                    isSprinting=true;

                    playerSpeed = playerSpeed * 1.5;

                }

                posX+=playerSpeed;

                if(isSprinting){

                    playerSpeed = playerSpeed / 1.5;

                }

            }else{

                if(world[posA2][posB-1]===31||world[posA][posB-1]===31){

                    health-=1;

                }

                isSprinting=false;

            }

        }

        if(keys[16]||keys[83]){

            if((world[posA-(-1)][posB]===30||world[posA-(-1)][posB]===0||gamemode===1)&&!onInputBox){

                posY-=playerSpeed;

            }

            if(isSitting){

                isSitting=false;

            }else{

                isSitting=true;

            }

            keyCode=0;

        }

        if(keys[32]||keys[87]){

            if(gamemode===0){

            if(!solidBlocks[world[posA-2][posB]]){

                if(inWater||world[posA2][posB]===11||world[posA2][posB]===12||world[posA2][posB2]===11||world[posA2][posB2]===12){

                    jump=23;

                    if(solidBlocks[world[posA-(-1)][posB]]||solidBlocks[world[posA-(-1)][posB2]]){

                        posY+=6;

                    }

                }else if(inLava||world[posA2][posB]===13||world[posA2][posB]===14||world[posA2][posB2]===13||world[posA2][posB2]===14){

                    onFire = true;

                    jump=23;

                    if(solidBlocks[world[posA-(-1)][posB]]||solidBlocks[world[posA-(-1)][posB2]]){

                        posY+=6;

                    }

                }else if(solidBlocks[world[posA-(-1)][posB]]||solidBlocks[world[posA-(-1)][posB2]]){

                    jump=30;

                    posY+=6;

                }

            }

            if(world[posA][posB]===30){

                posY+=playerSpeed;

            }

            }else{

                posY+=playerSpeed;

            }

        }

        if(keys[115]){

            health-=4;

            broadcast("Ouch...");

            keys[115]=false;

        }

    }

if(posX<-10&&!(end&&posX<-1190)){

    scrollX=posX;

}

if(posY<0&&posY>-1187){

    scrollY=posY;

}

if(gamemode===1){

    hunger=20;

    satration=5;

}

if(keyCode>48&&keyCode<58&&onInputBox===false){

    blockSelected=keyCode-49;

}



if(!mPressed){

    blockStrength=null;

}

if(mPressed&&mouseButton===3&&gamemode===1){

    if(world[a][b]!==0){

        var slotFound = false;

        for(var i = 0; i < 9; i++){

            if((hotbar[i]===0||hotbar[i]===world[a][b])&&!slotFound){

                blockSelected=i;

                slotFound = true;

            }

        }

        if(hotbar[blockSelected]!==world[a][b]){

            hotbar[blockSelected]=world[a][b];

            hotbarStacks[blockSelected]=1;

        }

    }

    mPressed = false;

}

if(mPressed&&mouseButton===LEFT&&inventory===false&&news===false&&world[a][b]!==18&&!isCrafting&&!isSmelting&&!onChest&&!onCommandBlock){

    if(world[a][b]<10||world[a][b]>14){

        if(blockStrength===null){

            selDurability = blockDurability[world[a][b]];

            if(gamemode===1){

                selDurability=0;

            }

            for(var i = 307; i <= 311; i++){

                if(hotbar[blockSelected]===i){

                    selDurability=selDurability/(hotbar[blockSelected]-305+blockDurability[world[a][b]]/50);

                }

            }

            

            blockTargeted = [a, b];

            blockStrength=selDurability;

        }

        if(blockStrength<=0){
        switch(world[a][b]){
            case 28:

                world[a-1][b]=0;

                break;

            case 29:

                world[a-(-1)][b]=0;

                break;
            case 55:

                if(world[a][b-1]===56){

                    world[a][b-1]=0;

                }

                if(world[a][b-(-1)]===56){

                    world[a][b-(-1)]=0;

                } 

                break;

            case 56:

                if(world[a][b-1]===55){

                    world[a][b-1]=0;

                }

                if(world[a][b-(-1)]===55){

                    world[a][b-(-1)]=0;

                }

                break;
        }
        if(gamemode===0){

        switch(world[a][b]){

            case 1:

                if(hotbar[blockSelected]>=307&&hotbar[blockSelected]<=311){

                spawnEntity(b*40+random(0,20),a*40+10, 0, 4);

                }

                break;

            case 2:

                spawnEntity(b*40+random(0,20),a*40+10, 0, 3);

                break;

            case 3:

                spawnEntity(b*40+random(0,20),a*40+10, 0, 3);

                break;

            case 4:

                if(hotbar[blockSelected]>=307&&hotbar[blockSelected]<=311){

                spawnEntity(b*40+random(0,20),a*40+10, 0, 4);

                }

                break;

            case 5:

                spawnEntity(b*40+random(0,20),a*40+10, 0, 5);

                break;

            case 6:

                if(hotbar[blockSelected]>=307&&hotbar[blockSelected]<=311){

                spawnEntity(b*40+random(0,20),a*40+10, 0, 6);

                }

                break;

            case 7:

                spawnEntity(b*40+random(0,20),a*40+10, 0, 7);

                break;

            case 8:

                if(hotbar[blockSelected]===311){

                spawnEntity(b*40+random(0,20),a*40+10, 0, 8);

                }

                break;

            case 9:

                c = random(0, 5);

                if(c > 4.5){

                    spawnEntity(b*40+random(0,20),a*40+10, 0, 16);

                }

                break;

            case 15:

                spawnEntity(b*40+random(0,20),a*40+10, 0, 15);

                break;

            case 16:

                spawnEntity(b*40+random(0,20),a*40+10, 0, 16);

                break;

            case 19:

                if(hotbar[blockSelected]>=307&&hotbar[blockSelected]<=311){

                spawnEntity(b*40+random(0,20),a*40+10, 0, 19);

                }

                break;

            case 20:

                spawnEntity(b*40+random(0,20),a*40+10, 0, 20);

                break;

            case 21:

                c = random(0, 5);

                if(c>4){

                    spawnEntity(b*40+random(0,20),a*40+10, 0, 306);

                }else{

                    spawnEntity(b*40+random(0,20),a*40+10, 0, 21);

                }

                break;

            case 22:

                if(hotbar[blockSelected]>=307&&hotbar[blockSelected]<=311){

                spawnEntity(b*40+random(0,20),a*40+10, 0, 301);

                }

                break;

            case 23:

                if(hotbar[blockSelected]>=308&&hotbar[blockSelected]<=311){

                spawnEntity(b*40+random(0,20),a*40+10, 0, 23);

                }

                break;

            case 24:

                if(hotbar[blockSelected]>=309&&hotbar[blockSelected]<=311){

                spawnEntity(b*40+random(0,20),a*40+10, 0, 24);

                }

                break;

            case 25:

                if(hotbar[blockSelected]>=309&&hotbar[blockSelected]<=311){

                c = round(random(4, 5));

                for(var i = 0; i < c; i++){

                    spawnEntity(b*40+random(0,20),a*40+10, 0, 304);

                }

                }

                break;

            case 26:

                if(hotbar[blockSelected]>=309&&hotbar[blockSelected]<=311){

                spawnEntity(b*40+random(0,20),a*40+10, 0, 305);

                }

                break;

            case 27:

                spawnEntity(b*40+random(0,20),a*40+10, 0, 27);

                break;

            case 28:

                spawnEntity(b*40+random(0,20),a*40+10, 0, 28);

                world[a-1][b]=0;

                break;

            case 29:

                spawnEntity(b*40+random(0,20),a*40+10, 0, 28);

                world[a-(-1)][b]=0;

                break;

            case 30:

                spawnEntity(b*40+random(0,20),a*40+10, 0, 30);

                break;

            case 31:

                spawnEntity(b*40+random(0,20),a*40+10, 0, 31);

                break;

            case 33:

                spawnEntity(b*40+random(0,20),a*40+10,0,33);

for(var i = 0; i < specs[a][b][1]; i++){

    spawnEntity(b*40+random(0,20),a*40+10,0,specs[a][b][0]);

}

for(var i = 0; i < specs[a][b][5]; i++){

    spawnEntity(b*40+random(0,20),a*40+10,0,specs[a][b][4]);

}

for(var i = 0; i < specs[a][b][8]; i++){

    spawnEntity(b*40+random(0,20),a*40+10,0,specs[a][b][7]);

}

                break;

            case 34:

                spawnEntity(b*40+random(0,20),a*40+10,0,34);

                if(specs[a][b]!==null||specs[a][b]!==0){

for(var i = 0; i < 6; i++){

    for(var j = 0; j < 4; j++){

for(var k = 0; k < specs[a][b][1][i][j]; k++){

    spawnEntity(b*40+random(0,20),a*40+10,0,specs[a][b][0][i][j]);

}

    }

}

                }

                break;

            case 35:

                if(hotbar[blockSelected]>=307&&hotbar[blockSelected]<=311){

                spawnEntity(b*40+random(0,20),a*40+10,0,35);

                }

                break;

            case 37:

                if(hotbar[blockSelected]>=308&&hotbar[blockSelected]<=311){

                spawnEntity(b*40+random(0,20),a*40+10,0,37);

                }

                break;

            case 38:

                if(hotbar[blockSelected]>=309&&hotbar[blockSelected]<=311){

                spawnEntity(b*40+random(0,20),a*40+10,0,38);

                }

                break;

            case 39:

                if(hotbar[blockSelected]>=307&&hotbar[blockSelected]<=311){

                spawnEntity(b*40+random(0,20),a*40+10,0,39);

                }

                break;

            case 40:

                spawnEntity(b*40+random(0,20),a*40+10,0,40);

                break;

            case 41:

                spawnEntity(b*40+random(0,20),a*40+10,0,41);

                break;

            case 42:

                spawnEntity(b*40+random(0,20),a*40+10,0,42);

                break;

            case 43:

                if(hotbar[blockSelected]>=309&&hotbar[blockSelected]<=311){

                    for(var i = 0; i < random(3,6); i++){

                        spawnEntity(b*40+random(0,20),a*40+10,0,42);

                    }

                }

                break;

            case 44:

                spawnEntity(b*40+random(0,20),a*40+10,0,44);

                break;

            case 46:

                spawnEntity(b*40+random(0,20),a*40+10,0,3);

                break;

            case 47:

                if(!round(random(0,3))){

                    spawnEntity(b*40+random(0,20),a*40+10,0,48);

                }

                break;

            case 48:

                switch(specs[a][b]){

                    case 0:

                    case 1:

                    case 2:

                        spawnEntity(b*40+random(0,20),a*40+10,0,48);

                        break;

                    case 3:

                    case 4:

                    case 5:

                    case 6:

                    case 7:

                        for(var i = 0; i < round(random(1,2)); i++){

                            spawnEntity(b*40+random(0,20),a*40+10,0,48);

                        }

                        if(specs[a][b]===7){

                            spawnEntity(b*40+random(0,20),a*40+10,0,346);

                        }

                        break;

                }

                break;
                case 49:
                    spawnEntity(b*40+random(0,20),a*40+10,0,349);
                    break;
                case 50:
                    spawnEntity(b*40+random(0,20),a*40+10,0,50);
                    break;
                case 51:
                    spawnEntity(b*40+random(0,20),a*40+10,0,51);
                    break;
                case 52:
                    spawnEntity(b*40+random(0,20),a*40+10,0,52);
                    break;
                case 53:
                    spawnEntity(b*40+random(0,20),a*40+10,0,53);
                    break;
                case 54:
                    spawnEntity(b*40+random(0,20),a*40+10,0,54);
                    break;
                case 57:
                    spawnEntity(b*40+random(0,20),a*40+10,0,57);
                    break;
                case 59:
                    spawnEntity(b*40+random(0,20),a*40+10,0,59);
                    break;

        }

        }

        blockStrength=null;

        if(world[a][b]!==0){

        if(hotbar[blockSelected]>=307&&hotbar[blockSelected]<=311){

            hotbarSpecs[blockSelected]--;

        }else if(hotbar[blockSelected]>=312&&hotbar[blockSelected]<=316){

            hotbarSpecs[blockSelected]-=2;

        }

        }

        world[a][b]=0;

        }else if(blockStrength!==null){

            if(blockTargeted[0]===a&&blockTargeted[1]===b){

                blockStrength--;

            }else{

                blockStrength=null;

        }}

    }

}else if(mPressed&&inventory===false&&news===false&&world[a][b]===18){

    if(nether === false){

        overWorld = world;

        world = netherWorld;

        nether = true;

    }else if(nether === true){

        netherWorld = world;

        world = overWorld;

        nether = false;

    }

}
if(mPressed&&inventory===false&&news===false&&world[a][b]===60){

    if(end === false){

        overWorld = world;

        world = endWorld;

        end = true;
        posX=-176;
        posY=-228;

    }else if(end === true){

        onPoem=true;

    }

}
noStroke();

if(keys[84]){

    if(!onInputBox){

        onInputBox=true;

    }

    keys[84]=false;

}

}

textSize(15);

if(onInputBox){

    

if(onCommandBlock){

    textSize(20);

    fill(255);

if(inputTimer<=0){

    inputTimer=25;

}else{

    inputTimer--;

}

if(inputTimer>10){

    text(input+"_", 60, 200);

}else{

    text(input, 60, 200);

}

}else{

    fill(0, 0, 0, 60);

rect(0, 385, 400, 15);

if(inputTimer<=0){

    inputTimer=25;

}else{

    inputTimer--;

}

fill(255);

if(inputTimer>10){

    text(input+"_", 5, 395);

}else{

    text(input, 5, 395);

}

textAlign(LEFT, BOTTOM);

for(var i = messages.length-20; i < messages.length; i++){

    if(messages[i]!==undefined){

        fill(0, 0, 0, 60);

        rect(0, i*15-messages.length*15+300, 300, 15);

        fill(255);

        text(messages[i], 5, i*15-messages.length*15+313);

        msgTimers[i]--;

    }

}

}

}else{

for(var i = messages.length-10; i < messages.length; i++){

    if(messages[i]!==undefined&&msgTimers[i]>0){

        if(msgTimers[i]>20){

            fill(0, 0, 0, 60);

        }else{

            fill(0, 0, 0, msgTimers[i]*3);

        }

        rect(0, i*15-messages.length*15+300, 300, 15);

        if(msgTimers[i]>10){

            fill(255);

        }else{

            fill(255, 255, 255, msgTimers[i]*25.5);

        }

        text(messages[i], 5, i*15-messages.length*15+313);

        msgTimers[i]--;

    }

}

}

textSize(12);

if(nether===true||night===true||end===true){

        fill(255, 255, 255);

    }else{

        fill(0, 0, 0);

        

    }



if(keyIsPressed&&keyCode===114&&debugMenu===false){

    debugMenu=true;

    keyCode=0;

}else if(keyIsPressed&&keyCode===114){

    debugMenu=false;

    keyCode=0;

}



if(keyCode===69&&(isCrafting||isSmelting||isTrading)&&!onInputBox){

    isSmelting=false;

    isCrafting=false;

    isTrading=false;

    keyCode=0;

}

if(keyCode===69&&inventory===false&&isCrafting===false&&isSmelting===false&&!onInputBox&&!isTrading){

    inventory=true;

    keyCode=0;

}

var craftingSquares = [[],[],[]];

for(var r = 0; r < 3; r++){

    for(var s = 0; s < 3; s++){

        craftingSquares[s][r] = craftingGrid[r+s*3];

    }

}

if(onChest){

var targetChest = specs[blockTargeted[0]][blockTargeted[1]];

    if(keyCode===69){

        onChest=false;

        keyCode=0;

    }

    isCrafting=false;

    isSmelting=false;

    e2open=false;

    fill(199, 199, 199);

    stroke(0, 0, 0);

    strokeWeight(3);

    rect(25, 10, 350, 300);

    textSize(20);

    fill(0, 0, 0);

    text("Chest:", 30, 30);

    textSize(12);

    strokeWeight(2);

    line(200, 30, 200, 285);

    noStroke();

    drawInventory(40, 50, 40, invContents);

    for(var i = 0; i < 4; i++){

        for(var j = 0; j < 6; j++){

        drawBlocks(targetChest[0][j][i], i*40+210, j*40+50);

        if(targetChest[1][j][i]>1){

            textSize(15);

            fill(255);

            text(targetChest[1][j][i], i*40+230, j*40+73);

        }textSize(12);

        }

    }

    stroke(0, 0, 0);

    strokeWeight(2);

    drawBlocks(holdingBlock, mouseX-10, mouseY-10);

    if(itemTag!==null&&itemTag!==""){

        stroke(54, 0, 171);

        fill(0, 0, 0);

        var length = (itemTag.split()).length;

        rect(mouseX, mouseY-15, length*85, 15);

        fill(255, 255, 255);

        text(itemTag, mouseX, mouseY);

    }

    fill(255);

    if(holdingStacks>1){

        textSize(15);

        text(holdingStacks, mouseX+10, mouseY+13);

        textSize(12);

    }

}

if(inventory===true){

    if(keyCode===69){

        inventory=false;

        keyCode=0;

    }

    onChest=false;

    isCrafting=false;

    isSmelting=false;

    e2open=false;

    fill(199, 199, 199);

    stroke(0, 0, 0);

    strokeWeight(3);

    rect(50, 10, 300, 300);

    textSize(20);

    fill(0, 0, 0);

    text("Inventory:", 60, 30);

    textSize(12);

    strokeWeight(2);

    noStroke();

    if(gamemode===0){

    drawInventory(70, 50, 40, invContents);

    }else{

        for (var gg = 0; gg < 4; gg++){

            for(var hh = 0; hh < 6; hh++){

                g = gg*40+70;

                h = hh*40+50;

                noStroke();

                drawBlocks(allBlocks[hh+invScroll][gg], g, h);

        }}

    }

    for(var d = 0; d < 2; d++){

        for(var e = 0; e < 2; e++){

            strokeWeight(2);

            stroke(0, 0, 0);

            fill(222, 222, 222);

            rect(d*35+240, e*35+40, 35, 35);

            fill(0, 0, 0);

            noStroke();

            drawBlocks(craftingSquares[e][d], d*35+250, e*35+50);

        }

    }

    if(gamemode===1){

    fill(100);

    stroke(0);

    rect(70, 280, 20, 20);

    rect(95, 280, 20, 20);

    fill(225);

    triangle(72, 295, 88, 295, 80, 285);

    triangle(97, 285, 113, 285, 105, 295);

    stroke(0, 0, 0);

    }

    fill(100);

    rect(240, 250, 70, 45);

    image(skin, 250, 220, 50, 90);

    fill(222, 222, 222);

    for(var d = 0; d < 2; d++){

        for(var e = 0; e < 2; e++){

            strokeWeight(2);

            stroke(0);

            rect(d*35+240, e*30+190, 35, 30);

            fill(0, 0, 0);

            noStroke();

            drawBlocks(armorSlots[e*2+d], d*35+250, e*30+195);

            if(itemDurabilities[armorSlots[e*2+d]]!==null&&armorSpecs[e*2+d]!==itemDurabilities[armorSlots[e*2+d]]){

        var filler = 255/itemDurabilities[armorSlots[e*2+d]];

        fill(255-armorSpecs[e*2+d]*filler, armorSpecs[e*2+d]*filler, 0);

        rect(d*35+250, e*30+216, armorSpecs[e*2+d]/(itemDurabilities[armorSlots[e*2+d]]/20), 3);

                if(armorSpecs[e*2+d]<=0){

                    armorSlots[e*2+d]=0;

                    armorSpecs[e*2+d]=0;

                }

            }

            fill(222, 222, 222);

            stroke(0);

        }

    }

    rect(255, 140, 40, 40);

    drawBlocks(craftedItem, 265, 150);

    drawBlocks(holdingBlock, mouseX-10, mouseY-10);

    if(itemTag!==null&&itemTag!==""&&itemTag!==undefined){

        stroke(54, 0, 171);

        fill(0, 0, 0);

        rect(mouseX, mouseY-15, 85, 15);

        fill(255, 255, 255);

        text(itemTag, mouseX, mouseY);

    }

    fill(255);

    if(holdingStacks>1){

        textSize(15);

        text(holdingStacks, mouseX+10, mouseY+13);

        textSize(12);

    }

    textSize(15);

    if(craftedStacks>1){

        text(craftedStacks, 285, 177);

    }

    var canCraft;

    var itemCrafted = false;

    for(var i = 0; i < recipes.length; i++){

        if(!itemCrafted){

        for(var j = 0; j < recipes[i].length; j++){

            if(recipes[i].length>0){

                canCraft = true;

                for(var k = 0; k < 9; k++){

                    if(craftingGrid[k]!==recipes[i][j][k]&&canCraft){

                        canCraft = false;

                    }

                }

                if(canCraft){

                    craftedItem = i;

                    craftedStacks = recipeAmounts[i];

                    itemCrafted = true;

                }

            }

        }}

    }

    if(!itemCrafted){

        craftedItem = 0;

        craftedStacks = 0;

    }

}
if(isTrading){

    fill(199, 199, 199);

    stroke(0, 0, 0);

    strokeWeight(3);

    rect(50, 10, 300, 300);

    textSize(20);

    fill(0, 0, 0);

    text("Villager:", 60, 30);

    textSize(12);

    strokeWeight(2);

    noStroke();

    drawInventory(70, 50, 40, invContents);

    noStroke();

    fill(222);

    stroke(0);

    triangle(265, 170, 285, 170, 275, 220);
    triangle(305, 170, 325, 170, 315, 220);

    rect(255, 50, 40, 40);

    rect(255, 100, 40, 40);

    rect(255, 240, 40, 40);
    var selVillager = mobs.specs[mobSelected];
    drawBlocks(selVillager[0], 305, 60);
    drawBlocks(selVillager[1], 305, 110);
    drawBlocks(selVillager[2], 305, 250);
    drawBlocks(tradingSlots[0], 265, 60);
    drawBlocks(tradingSlots[1], 265, 110);
    if(selVillager[0]===tradingSlots[0]&&selVillager[1]===tradingSlots[1]&&
    tradingSlots[2]>=selVillager[3]&&tradingSlots[3]>=selVillager[4]){
        drawBlocks(selVillager[2], 265, 250);
    }
    fill(255);

    textSize(15);

    if(selVillager[5]>1){

        text(selVillager[5], 325, 275);
        if(selVillager[0]===tradingSlots[0]&&selVillager[1]===tradingSlots[1]){
            text(selVillager[5], 285, 275);
        }
    }

    if(selVillager[4]>1){

        text(selVillager[4], 325, 135);

    }

    if(selVillager[3]>1){
        text(selVillager[3], 325, 85);
        
    }
    if(tradingSlots[2]>1){
        text(tradingSlots[2], 285, 85);
    }
    if(tradingSlots[3]>1){
        text(tradingSlots[3], 285, 135);
    }
    

    drawBlocks(holdingBlock, mouseX-10, mouseY-10);

    if(itemTag!==null&&itemTag!==""){

        stroke(54, 0, 171);

        fill(0, 0, 0);

        rect(mouseX, mouseY-15, 85, 15);

        fill(255, 255, 255);

        text(itemTag, mouseX, mouseY);

    }

    fill(255);

    if(holdingStacks>1){

        textSize(15);

        text(holdingStacks, mouseX+10, mouseY+13);

        textSize(12);

    }

    textSize(15);

}
if(isSmelting){

    var targetFurnace = specs[blockTargeted[0]][blockTargeted[1]];

    var fuel = targetFurnace[0];

    var fuelStacks = targetFurnace[1];

    var fuelSpecs = targetFurnace[2];

    var smeltingTime = targetFurnace[3];

    var item = targetFurnace[4];

    var itemStacks = targetFurnace[5];

    var itemSpecs = targetFurnace[6];

    var smeltedItem = targetFurnace[7];

    var smeltedStacks = targetFurnace[8];

    var smeltedSpecs = targetFurnace[9];

    var burnTime = targetFurnace[10];

    var setValue = targetFurnace[11];

    fill(199, 199, 199);

    stroke(0, 0, 0);

    strokeWeight(3);

    rect(50, 10, 300, 300);

    textSize(20);

    fill(0, 0, 0);

    text("Furnace:", 60, 30);

    textSize(12);

    strokeWeight(2);

    noStroke();

    drawInventory(70, 50, 40, invContents);

    noStroke();

    fill(173, 49, 0);

    var fireHeight = (burnTime/setValue)*5;

    triangle(275, 120, 280, 120-fireHeight, 285, 120);

    triangle(265, 120, 270, 120-fireHeight, 275, 120);

    fill(227, 170, 0);

    triangle(277, 120, 280, 122-fireHeight/1.2, 283, 120);

    triangle(267, 120, 270, 122-fireHeight/1.2, 273, 120);

    fill(222);

    stroke(0);

    if(smeltingTime>0&&smeltingTime<49){

        triangle(265, 180, 285, 180, 275, 180+51-smeltingTime);

    }

    rect(255, 50, 40, 40);

    rect(255, 130, 40, 40);

    rect(255, 240, 40, 40);

    drawBlocks(item, 265, 60);

    drawBlocks(smeltedItem, 265, 250);

    drawBlocks(fuel, 265, 140);

    fill(255);

    textSize(15);

    if(smeltedStacks>1){

        text(smeltedStacks, 285, 275);

    }

    if(fuelStacks>1){

        text(fuelStacks, 285, 165);

    }

    if(itemStacks>1){

        text(itemStacks, 285, 85);

    }

    if(fuelStacks>1){

    }

    drawBlocks(holdingBlock, mouseX-10, mouseY-10);

    if(itemTag!==null&&itemTag!==""){

        stroke(54, 0, 171);

        fill(0, 0, 0);

        rect(mouseX, mouseY-15, 85, 15);

        fill(255, 255, 255);

        text(itemTag, mouseX, mouseY);

    }

    fill(255);

    if(holdingStacks>1){

        textSize(15);

        text(holdingStacks, mouseX+10, mouseY+13);

        textSize(12);

    }

    textSize(15);

specs[blockTargeted[0]][blockTargeted[1]][0]=fuel;

specs[blockTargeted[0]][blockTargeted[1]][1]=fuelStacks;

specs[blockTargeted[0]][blockTargeted[1]][2]=fuelSpecs;

specs[blockTargeted[0]][blockTargeted[1]][3]=smeltingTime;

specs[blockTargeted[0]][blockTargeted[1]][4]=item;

specs[blockTargeted[0]][blockTargeted[1]][5]=itemStacks;

specs[blockTargeted[0]][blockTargeted[1]][6]=itemSpecs;

specs[blockTargeted[0]][blockTargeted[1]][7]=smeltedItem;

specs[blockTargeted[0]][blockTargeted[1]][8]=smeltedStacks;

specs[blockTargeted[0]][blockTargeted[1]][9]=smeltedSpecs;

specs[blockTargeted[0]][blockTargeted[1]][10]=burnTime;

}

for(var e = 0; e < 2; e++){

for(var d = 0; d < 2; d++){

if(armorSpecs[e*2+d]<=0){

    armorSlots[e*2+d]=0;

    armorSpecs[e*2+d]=0;

}}}

if(e2open===true&&news===false){

    fill(189, 189, 189);

    stroke(0, 0, 0);

    strokeWeight(3);

    rect(100, 0, 300, 50);

    textSize(20);

    fill(0, 0, 0);

    text("Press E to open your inventory", 110, 30);

    textSize(12);

    strokeWeight(2);

    noStroke();

}

for(var ii = 0; ii < 4; ii++){

    for(var jj = 0; jj < 6; jj++){

        if(invStacks[jj][ii]===0){

            invContents[jj][ii]=0;

        }

        if(invContents[jj][ii]===0){

            invSpecs[jj][ii]=0;

        }

    }

}

if(health<=0){

    isDead=true;

}

if(news===true){

    fill(189, 189, 189);

    stroke(0, 0, 0);

    strokeWeight(3);

    rect(100, 100, 200, 200);

    textSize(20);

    fill(0, 0, 0);

    text("News:", 110, 120);

    textSize(15);

    text(MainArticle, 110, 130, 180, 160);

    textSize(12);

    text(NEWS, 110, 180, 180, 140);

    textSize(10);

    text("Press Enter to close", 110, 290);

    textSize(12);

    strokeWeight(2);

}
if(isSleeping){

    if(!night){

        isSleeping=false;

    }

    if(sleepTimer>=100){

        time=0;

        isSleeping=false;

        spawnpoint=[posX,posY];

        sleepTimer=0;

    }else{

        sleepTimer++;

        fill(0, 0, 0, sleepTimer*2.55);

        rect(0,0,400,400);

    }

}
if(keys[ENTER]&&news){

    news=false;

}

if(isCrafting){

    fill(199, 199, 199);

    stroke(0, 0, 0);

    strokeWeight(3);

    rect(50, 10, 300, 300);

    textSize(20);

    fill(0, 0, 0);

    text("Crafting:", 60, 30);

    textSize(12);

    strokeWeight(2);

    noStroke();

    drawInventory(70, 50, 40, invContents);

    for(var d = 0; d < 3; d++){

        for(var e = 0; e < 3; e++){

            strokeWeight(2);

            stroke(0, 0, 0);

            fill(222, 222, 222);

            rect(d*35+240, e*35+40, 35, 35);

            fill(0, 0, 0);

            noStroke();

               drawBlocks(craftingSquares[e][d], d*35+250, e*35+50);

        }

    }

    stroke(0, 0, 0);

    fill(222, 222, 222);

    rect(270, 225, 45, 45);

    drawBlocks(craftedItem, 283, 238);

    drawBlocks(holdingBlock, mouseX-10, mouseY-10);

    fill(255);

    if(holdingStacks>1){

        textSize(15);

        text(holdingStacks, mouseX+10, mouseY+13);

        textSize(12);

    }

    if(itemTag!==null&&itemTag!==""){

        stroke(54, 0, 171);

        fill(0, 0, 0);

        var length = 1;

        rect(mouseX, mouseY-15, length*85, 15);

        fill(255, 255, 255);

        text(itemTag, mouseX, mouseY);

    }

    textSize(15);

    fill(255, 255, 255);

    if(craftedStacks>1){

        text(craftedStacks, 303, 270);

    }

    var canCraft;

    var itemCrafted = false;

    for(var i = 0; i < recipes.length; i++){

        if(!itemCrafted){

        for(var j = 0; j < recipes[i].length; j++){

            if(recipes[i].length>0){

                canCraft = true;

                for(var k = 0; k < 9; k++){

                    if(craftingGrid[k]!==recipes[i][j][k]&&canCraft){

                        canCraft = false;

                    }

                }

                if(canCraft){

                    craftedItem = i;

                    craftedStacks = recipeAmounts[i];

                    itemCrafted = true;

                }

            }

        }}

    }

    if(!itemCrafted){

        craftedItem = 0;

        craftedStacks = 0;

    }

}





scale(0.25, 0.25);

noStroke();

        fill(255, 255, 255);

        ellipse(1500, 100, 125, 125);

        fill(255, 213, 168);

        rect(1465, 91, 30, 68);

        ellipse(1480, 91, 30, 30);

        rect(1480, 103, 45, 15);

        rect(1480, 76, 45, 15);

        ellipse(1526, 83.5, 20, 14);

        ellipse(1526, 110.5, 20, 14);

        stroke(0, 0, 0);

        strokeWeight(5);

        point(1480, 87);

        line(1527, 100, 1562, 100);

        line(1537, 100, 1537, 91);

        noStroke();

        fill(255, 0, 0);

        ellipse(1537, 83, 10, 10);

        fill(143, 143, 143);

        rect(1525, 95, 25, 15);

        stroke(255, 0, 0);

        noFill();

        strokeWeight(12);

        ellipse(1500, 100, 125, 125);

        scale(4, 4);

if(debugMenu===true){

    if(nether===true||night===true){

        fill(255, 255, 255);

    }else{

        fill(0, 0, 0);

    }

    text("Minecraft Khan Academy edition " + version, 10, 20);

    text("Bennimus Studios", 10, 30);

    text("Key Code: " + keyCode, 10, 50);

    text("Mouse Button: " + mouseButton, 10, 60);

    text("Inventory: " + inventory, 10, 70);

    text("Current block: " + world[a][b], 10, 80);

    text("Time: " + time, 120, 50);

    text("Sun Pos: " + sunPos.toFixed(0, 0), 120, 60);

    text("Crouching: " + isSitting, 120, 70);

    text("Blocks generated: " + world[0].length, 120, 80);

    text("Asteroids spawned: " + mobs.length, 120, 90);

    text("Position: " + place, 240, 50);

    text("Jump: " + jump, 240, 60);

    text("Inside block: " + world[posA][posB], 240, 70);

    text("Blocks fallen: " + blocksFallen, 240, 80);

    text("x: " + posB + " (cursor " + b + ")", 10, 100);

    text("y: " + posA + " (cursor " + a + ")", 10, 110);

    text("x2: " + posB2, 10, 120);

    text("y2: " + posA2, 10, 130);

    text("Key ticks: " + keyTimer, 240, 90);

    text("Sprinting: " + isSprinting, 240, 100);

}

lastItemSelected=hotbar[blockSelected];

if(hide === false&&isDead===false){

    noStroke();

    fill(255);

    rect(mouseX - 5, mouseY - 1, 10, 2);

    rect(mouseX - 1, mouseY - 5, 2, 10);

}else if(hide===false){

    cursor(ARROW);

}}

if(gamemode===0){

var damage = oldHealth-health;

armor = 0;

for(var i = 0; i < 4; i++){

    switch(armorSlots[i]){

        case 320:

            armor+=2;

            break;

        case 321:

            armor+=6;

            break;

        case 322:

            armor+=5;

            break;

        case 323:

            armor+=2;

            break;

        case 324:

            armor+=2;

            break;

        case 325:

            armor+=5;

            break;

        case 326:

            armor+=3;

            break;

        case 327:

            armor++;

            break;

        case 328:

            armor+=3;

            break;

        case 329:

            armor+=8;

            break;

        case 330:

            armor+=6;

            break;

        case 331:

            armor+=3;

            break;

        case 332:

            armor++;

            break;

        case 333:

            armor+=3;

            break;

        case 334:

            armor+=2;

            break;

        case 335:

            armor++;

            break;

    }

}

if(damageTimer>0){

    damageTimer--;

}

if(damageTimer>0&&damage>0){

    health=oldHealth;

    isDead=false;

    if(damageTimer<=0){

        health-=damage;

        health+=round((damage*(armor/20))*0.8);

    }

}

if(health<=0&&gamemode!==1){

    isDead=true;

}

if(damage>0&&damageTimer===0){

    damageTimer=20;

    health+=round(damage*(armor/20))*0.8;

    for(var i = 0; i < 4; i++){

        if(armorSpecs[i]>0){

            armorSpecs[i]--;

        }

    }

}

oldHealth=health;

if(options.peaceful&&!isDead){

    if(regenTix<=0){

        regenTix=50;

        health++;

    }else{

        regenTix--;

    }

}

if(hunger>=18&&!isDead){

    if(regenTix2<=0){

        regenTix2=100;

        health++;

    }else{

        regenTix2--;

    }

}

if(health>20){

    health=20;

}

if(oldHealth>20){

    oldHealth=20;

}

noCursor();

if(health>0){

    isDead=false;

}

if(!bennimusStudios){

for(var l = 0; l < health/2; l++){

    if(health<=4){

        if(health < 3){

            image(heart, l*16+20, 317+shake, 12, 20);

        }else{

            if(shaken===false){

                shaken=true;

                image(heart, l*16+25, 317+shake, 12, 20);

            }else{

                image(heart, l*16+25, 317-shake, 12, 20);

                shaken=false;

            }

        }

    }else{

        image(heart, l*16+23, 317, 12, 20);

    }

}

for(var l = 0; l < (health-1)/2; l++){

    if(health<=4){

        if(health < 3){

            image(heart, l*16+20, 312+shake, 19, 28);

        }else{

            if(shaken===false){

                shaken=true;

                image(heart, l*16+20, 312+shake, 19, 28);

            }else{

                image(heart, l*16+20, 312-shake, 19, 28);

                shaken=false;

            }

        }

    }else{

        image(heart, l*16+20, 312, 19, 28);

    }

}}

if(health<=0&&!deathmessageShown){

    switch(death){

        case "tnt":

            broadcast(username+" blew up");

            break;

        case "creeper":

            broadcast(username+" was blown up by Creeper");

            break;

        case "zombie":

            broadcast(username+" was slain by Zombie");

            break;

        case "pigman":

            broadcast(username+" was slain by Zombie Pigman");

            break;
        case "enderman":
            broadcast(username+" was slain by Enderman");
            break;
        case "enderdragon":
            broadcast(username+" was ended");
            break;
        case "blaze":
            broadcast(username+" was slain by Blaze");
            break;
        case "water":

            broadcast(username+" drowned");

            break;

        case "fire":

            broadcast(username+" burned up in a fire");

            break;

        case "hunger":

            broadcast(username+" starved to death");

            break;

    }

    deathmessageShown=true;

}

}else{

    health=20;

}

if(posB>world[0].length){

    background(105, 42, 0);

    textAlign(CENTER, CENTER);

    fill(225);

    textSize(20);

    text("Building Terrain...", 200, 150);

    stroke(0, 100, 0);

    line(150,200,250,200);

    stroke(0, 255, 0);

    line(150,200,-(posB-world[0].length)/1.8+250,200);

    textAlign(TOP, LEFT);

}

noCursor();
if(onPoem){
    cursor(ARROW);
    health=20;
    hunger=20;
    background(75, 25, 0);
    fill(255, 0, 0);
    for(var i = 0; i < endPoem.length; i++){
        if(endPoem[i].substr(0,1)==="1"){
            fill(0, 158, 158);
        }else if(endPoem[i].substr(0,1)==="2"){
            fill(0, 158, 0);
        }
        text(endPoem[i].substr(1),20,420-poemScroll+i*100,360,100);
    }
    button(10,10,40,20,0,true,"Skip");
    poemScroll++;
    if(poemScroll>=8000||functions[0]){
        poemScroll=0;
        onPoem=false;
        endWorld=world;
        world=overWorld;
        end=false;
    }
}
if(bennimusStudios===false&&isDead&&gamemode!==1){

    for(var i = 0; i < 6; i++){

        for(var j = 0; j < 4; j++){

            for(var k = 0; k < invStacks[i][j]; k++){

                spawnEntity(posB*40+random(-100,100),posA*40,0,invContents[i][j]);

            }

            invContents[i][j]=0;

            invStacks[i][j]=0;

        }

    }

    for(var i = 0; i < 9; i++){

        for(var j = 0; j < hotbarStacks[i]; j++){

            spawnEntity(posB*40+random(-100,100),posA*40,0,hotbar[i]);

        }

        hotbar[i]=0;

        hotbarStacks[i]=0;

    }

    for(var i = 0; i < 4; i++){

        spawnEntity(posB*40+random(-100,100),posA*40,0,armorSlots[i]);

        armorSlots[i]=0;

        armorSpecs[i]=0;

    }

    noStroke();

    fill(200, 0, 0, 50);
    cursor(ARROW);
    rect(0, 0, 400, 400);

    fill(255, 255, 255);

    textSize(30);

    text("You died.", 140, 100);

    textSize(20);

    strokeWeight(2);

    stroke(0);

    button(150,200,100,50,0,true,"Respawn");

    textSize(12);

    if(functions[0]){

        health=20;

        hunger=20;

        satration=5;

        posX = spawnpoint[0];

        posY = spawnpoint[1];

        deathmessageShown=false;

        if(nether){

            netherWorld=world;

            world=overWorld;

            nether=false;

        }
        if(end){

            endWorld=world;

            world=overWorld;

            end=false;

        }

    }

}

if(bennimusStudios){

    logoTix++;

    if(logoTix<70){

        noStroke();
    background(255);
        fill(255, 213, 168);
        rect(130, 160, 60, 137);
        ellipse(160, 160, 60, 60);
        rect(160, 207-13, 70, 30);
        rect(160, 153-23, 70, 30);
        ellipse(230, 168-23, 40, 29);
        ellipse(230, 222-13, 40, 29);
        fill(255);
        ellipse(192,177,18,33);
        stroke(0, 0, 0);
        strokeWeight(10);
        point(161, 175-13);
        line(255, 200-13, 325, 200-13);
        line(275, 200-13, 275, 175-13);
        noStroke();
        fill(255, 0, 0);
        ellipse(275, 167-13, 20, 20);
        fill(143, 143, 143);
        rect(250, 190-13, 50, 30);
        stroke(0, 0, 0);
        stroke(255, 0, 0);
        noFill();
        strokeWeight(25);
        ellipse(200, 200-15, 250, 250);
        noStroke();
    for(var i = 0; i < 40; i++){
        fill(i/2+212);
        rect(0,400-i*2,400,2);
    }
    for(var i = 0; i < 150; i++){
        var x = sin(i/2+180)*150, y = cos(i/2+180)*150;
        var n = noise(i/2,sound+5)*70;
        fill(255-i/3, 0, 0);
        rect(171+x+n,y+472,x*-2,2);
    }
    for(var i = 0; i < 55; i++){
        var x = sin(i+180)*120, y = cos(i+180)*125;
        var n = noise(i/2,sound+3)*70;
        fill(i/3+212);
        rect(171+x+n,y+472,x*-2,2);
    }
    for(var i = 9; i < 38; i++){
        var x = sin(i+180)*120, y = cos(i+180)*125;
        var n = noise(i/2,sound+3)*70;
        fill(i/2+209,i/2+188,i/2+158);
        rect(171+x+n,y+472,x*-1-15,2);
    }
    for(var i = 0; i < 50; i++){
        var n = noise(i/2+38,sound-3)*70;
        fill(i/2+224,i/2+208,i/2+184);
        rect(100+n,i*2+373,58,2);
    }
    sound+=0.03;
    fill(0);
    textSize(40);
    text("BENNIMUS STUDIOS", 0, 40);

    }

    if(logoTix>100){

        noStroke();

        fill(255, 255, 255, 20);

        rect(0, 0, 400, 400);

    }

    if(logoTix>150){

        bennimusStudios=false;

        onTitleScreen=true;

        herp = 0;

    }

}

if(herp===undefined){

    herp=0;

}

if(optionsScreen){

    cursor(ARROW);

    background(117, 64, 0);

    fill(225);

    textSize(50);

    textAlign(CENTER, CENTER);

    text("Options", 200, 50);

    textSize(20);

    button(100, 100, 200, 25, 10, true, "Clouds: "+options.clouds);

    button(100, 130, 200, 25, 11, true, "Fire Animation: "+options.fireAnimation);

    button(100, 160, 200, 25, 12, true, "Peaceful mode: "+options.peaceful);

    button(100, 220, 200, 25, 14, true, "3D Blocks: "+options._3D);

    if(gamemode===0){

        button(100, 190, 200, 25, 13, true, "Gamemode: Survival");

    }else{

        button(100, 190, 200, 25, 13, true, "Gamemode: Creative");

    }

    button(150, 350, 100, 25, 2, true, "Back");

    if(functions[2]){

        optionsScreen=false;

    }

    if(functions[10]){

        options.clouds=options.clouds?false:true;

    }

    if(functions[11]){

        options.fireAnimation=options.fireAnimation?false:true;

    }

    if(functions[12]){

        options.peaceful=options.peaceful?false:true;

    }

    if(functions[13]){

        gamemode=gamemode===0?1:0;

    }

    if(functions[14]){

        options._3D=options._3D?false:true;

    }

}else if(onTitleScreen){

    cursor(ARROW);

    background(196, 225, 255);

    drawWorld();

    scrollX = sin(herp)*50-200;

    herp++;

    fill(150);

    stroke(0);

    rect(50, 25, 305, 50);

    fill(0, 0, 0, 100);

    textAlign(CENTER, CENTER);

    textSize(50);

    text("MINECRAFT", 200, 55);

    fill(200);

    textSize(53);

    text("MINECRAFT", 200, 50);

    fill(125);

    rect(100, 70, 200, 30);

    fill(0, 0, 0, 100);

    textSize(16);

    text("KHAN ACADEMY EDITION", 200, 86);

    fill(200);

    textSize(17);

    text("KHAN ACADEMY EDITION", 200, 85);

    fill(163, 139, 0);

    translate(300, 85);

    rotate(340);

    textSize((sin(herp*15)*3+20)-(splashes[curSplash].length-20)/2);

    

    text(splashes[curSplash], 0,0);

    resetMatrix();

    fill(242, 210, 3);

    translate(298, 84);

    rotate(340);

    text(splashes[curSplash], 0,0);

    resetMatrix();

    fill(0);

    if(herp>360){

        herp=0;

    }

    textSize(25);

    button(125, 140, 150, 30, 0, true, "Singleplayer");


    button(125, 210, 150, 30, 1, true, "Options");

    textSize(20);

    text(version, 30, 375);

    fill(200);

    rect(50, 250, 300, 100);

    fill(0);

    textAlign(CENTER, CENTER);

    text("<<NEWS>>", 200, 265);

    fill(0);

    textAlign(LEFT, BOTTOM);

    textSize(15);

    text(MainArticle, 55, 290);

    textSize(12);

    text(NEWS, 55, 285, 290, 100);

    if(functions[1]){

        optionsScreen=true;

    }

    if(functions[0]){

        onTitleScreen=false;noCursor();

        broadcast("<<<( ~Bennimus Studios~ )>>>");

        broadcast("Welcome to Minecraft "+version+"!");

        broadcast("A & D to move left and right,");

        broadcast("W or Space to jump,");

        broadcast("E to open your inventory,");

        broadcast("T to chat.");

        broadcast("<<<( ~<><><><><><><>~ )>>>");

    }


}

if(heartsShowing){

    frameRate(30);

    filter(INVERT);

    fill(0, 255, 255);

    textSize(20);

    text("Time left: " + shieldsShowing, 270, 350);

    textSize(12);

}else{

    frameRate(60);

}

if(gamemode===1){

    health=20;

    isDead=false;

}

}catch(error){

    background(0,0,255);

        fill(230);

        noStroke();

        rect(160,100,80,20);

        textFont(createFont("Courier",15),15);

        textAlign(CENTER,CENTER);

        fill(0, 0, 255);

        text("Oh Noes!",200,110);

        fill(255);

        textAlign(LEFT,BOTTOM);

        text("A fatal error has occured in Minecraft and the program was forced to shut down.\n\n\nReason: "+error,0,150,400,200);textAlign(CENTER,CENTER);

        text("Press 'Restart' to restart the program and\nreport what you did to Tips & Thanks\n\n\n-Bennimus Studios-",200,350);

        textAlign(LEFT,BOTTOM);
        broadcast(error);
        textFont(createFont("Arial",15),15);

}

};

keyPressed = function(){

    if(!onInputBox||keyCode===SHIFT){

        keys[keyCode]=true;

        if(keyCode===LEFT){

            keys[65]=true;

        }if(keyCode===RIGHT){

            keys[68]=true;

        }if(keyCode===UP){

            keys[87]=true;

        }if(keyCode===DOWN){

            keys[83]=true;

        }

    }else{

        switch(keyCode){

            case ENTER:

                if(onCommandBlock){

                    broadcast("Command set to "+input);

                    specs[blockTargeted[0]][blockTargeted[1]][1] = input;

                    input = "";

                    onCommandBlock=false;

                    onInputBox=false;

                }else{

                    onInputBox=false;

                if(input!==""){

                    if(input.substr(0,1)==="/"){

                        var commandLine = input.split(" ");

switch(commandLine[0]){

    case "/say":

        var message = "";

            for(var i = 1; i < commandLine.length; i++){

                message+=commandLine[i]+" ";

            }

            broadcast("["+username+"] "+message);

        break;

    case "/gamemode":

        if(commandLine[1]<=1&&commandLine[1]>=0){

            gamemode=round(commandLine[1]);

            broadcast("Your game mode has been updated.");

        }else{

            broadcast(commandLine[1]+" is not a gamemode.");

        }

        break;

    case "/help":

        broadcast("==========[ HELP ]==========");

        broadcast("/give [data] [amount]");

        broadcast("gives you item by data and amount");

        broadcast("/clear");

        broadcast("clears your inventory");

        broadcast("/kill");

        broadcast("Ouch! that look like it hurt!");

        broadcast("/killall");

        broadcast("kills everything. Good for dat lag");

        broadcast("==========================");

        break;

    case "/me":

        var message = "";

        for(var i = 1; i < commandLine.length; i++){

            message+=commandLine[i]+" ";

        }

        broadcast("* "+username+" "+message);

        break;

    case "/clear":

        var itemsCleared = 0;

        for(var i = 0; i < 9; i++){

            itemsCleared+=hotbarStacks[i];

            hotbar[i]=0;hotbarStacks[i]=0;

        }

        for(var i = 0; i < 6; i++){

            for(var j = 0; j < 4; j++){

                itemsCleared+=invStacks[i][j];

                invContents[i][j]=0;invStacks[i][j]=0;

            }

        }

        for(var i = 0; i < 4; i++){

            if(armorSlots[i]){

                itemsCleared++;

                armorSlots[i]=0;armorSpecs[i]=0;

            }

        }

        if(itemsCleared){

            broadcast("Cleared the inventory of "+username+", removing "+itemsCleared+" items.");

        }else{

            broadcast("Could not clear the inventory of "+username+", no items to remove.");

        }

        break;

    case "/give":

        if(commandLine[1]!==undefined&&(commandLine[1]>0&&commandLine[1]<blocks)||(commandLine[1]>=300&&commandLine[1]<items)){

            if(commandLine[2]){

                getItem(commandLine[1]-0, commandLine[2]-0);

            }else{

                getItem(commandLine[1]-0, 1);

                commandLine[2]=1;

            }

            if(commandLine[1]<300){

                broadcast("given "+username+" "+commandLine[2]+" of "+commandLine[1]+" ("+tileNames[commandLine[1]]+").");

            }else{

                broadcast("given "+username+" "+commandLine[2]+" of "+commandLine[1]+" ("+itemNames[commandLine[1]-300]+").");

            }

        }else{

            broadcast(commandLine[1]+" is not a valid number.");

        }

        break;

    case "/kill":

        if(gamemode===0){

            health=-90;

            broadcast(username+" bid farewell.");

        }else{

            broadcast("Failed to kill "+username+".");

        }

        break;

    case "/killall":

        var mobsKilled = 0;

        for(var i = 0; i < mobs.length; i++){

                if(mobs.health[i]>0){

                    mobsKilled++;

                }

                mobs.health[i]=0;

        }
        dragonSpawned=false;
        broadcast("An asteroid collides with the earth, obliterating "+mobsKilled+" entities.");

        break;

    case "/time":

        if(commandLine[1]!==undefined&&commandLine[2]!==undefined){

            switch(commandLine[1]){

                case "set":

                    time=commandLine[2];

                    broadcast("Time set to "+time);

                    break;

                case "add":

                    time+=commandLine[2]-0;

                    if(time>20000){

                        while(time>20000){

                            time-=20000;

                        }

                    }

                    broadcast("Time set to "+time);

                    break;

                default:

                    broadcast("Usage: /time <set/add> <value>");

            }

        }else{broadcast("Usage: /time <set/add> <value>");}

        break;

    default:

        broadcast("Unknown command. Type /help for help.");

}

                    }else{

                        broadcast("<"+username+"> "+input);

                    }

                }input="";

                }

                

                break;

            case 32:

                input+=" ";

                break;

            case 48:

                if(keys[SHIFT]){

                    input+=")";

                }else{

                    input+="0";

                }

                break;

            case 49:

                if(keys[SHIFT]){

                    input+="!";

                }else{

                    input+="1";

                }

                break;

            case 50:

                if(keys[SHIFT]){

                    input+="@";

                }else{

                    input+="2";

                }

                break;

            case 51:

                if(keys[SHIFT]){

                    input+="#";

                }else{

                    input+="3";

                }

                break;

            case 52:

                if(keys[SHIFT]){

                    input+="$";

                }else{

                    input+="4";

                }

                break;

            case 53:

                if(keys[SHIFT]){

                    input+="%";

                }else{

                    input+="5";

                }

                break;

            case 54:

                if(keys[SHIFT]){

                    input+="^";

                }else{

                    input+="6";

                }

                break;

            case 55:

                if(keys[SHIFT]){

                    input+="&";

                }else{

                    input+="7";

                }

                break;

            case 56:

                if(keys[SHIFT]){

                    input+="*";

                }else{

                    input+="8";

                }

                break;

            case 57:

                if(keys[SHIFT]){

                    input+="(";

                }else{

                    input+="9";

                }

                break;

            case 65:

                if(keys[SHIFT]){

                    input+="A";

                }else{

                    input+="a";

                }

                break;

            case 66:

                if(keys[SHIFT]){

                    input+="B";

                }else{

                    input+="b";

                }

                break;

            case 67:

                if(keys[SHIFT]){

                    input+="C";

                }else{

                    input+="c";

                }

                break;

            case 68:

                if(keys[SHIFT]){

                    input+="D";

                }else{

                    input+="d";

                }

                break;

            case 69:

                if(keys[SHIFT]){

                    input+="E";

                }else{

                    input+="e";

                }

                break;

            case 70:

                if(keys[SHIFT]){

                    input+="F";

                }else{

                    input+="f";

                }

                break;

            case 71:

                if(keys[SHIFT]){

                    input+="G";

                }else{

                    input+="g";

                }

                break;

            case 72:

                if(keys[SHIFT]){

                    input+="H";

                }else{

                    input+="h";

                }

                break;

            case 73:

                if(keys[SHIFT]){

                    input+="I";

                }else{

                    input+="i";

                }

                break;

            case 74:

                if(keys[SHIFT]){

                    input+="J";

                }else{

                    input+="j";

                }

                break;

            case 75:

                if(keys[SHIFT]){

                    input+="K";

                }else{

                    input+="k";

                }

                break;

            case 76:

                if(keys[SHIFT]){

                    input+="L";

                }else{

                    input+="l";

                }

                break;

            case 77:

                if(keys[SHIFT]){

                    input+="M";

                }else{

                    input+="m";

                }

                break;

            case 78:

                if(keys[SHIFT]){

                    input+="N";

                }else{

                    input+="n";

                }

                break;

            case 79:

                if(keys[SHIFT]){

                    input+="O";

                }else{

                    input+="o";

                }

                break;

            case 80:

                if(keys[SHIFT]){

                    input+="P";

                }else{

                    input+="p";

                }

                break;

            case 81:

                if(keys[SHIFT]){

                    input+="Q";

                }else{

                    input+="q";

                }

                break;

            case 82:

                if(keys[SHIFT]){

                    input+="R";

                }else{

                    input+="r";

                }

                break;

            case 83:

                if(keys[SHIFT]){

                    input+="S";

                }else{

                    input+="s";

                }

                break;

            case 84:

                if(keys[SHIFT]){

                    input+="T";

                }else{

                    input+="t";

                }

                break;

            case 85:

                if(keys[SHIFT]){

                    input+="U";

                }else{

                    input+="u";

                }

                break;

            case 86:

                if(keys[SHIFT]){

                    input+="V";

                }else{

                    input+="v";

                }

                break;

            case 87:

                if(keys[SHIFT]){

                    input+="W";

                }else{

                    input+="w";

                }

                break;

            case 88:

                if(keys[SHIFT]){

                    input+="X";

                }else{

                    input+="x";

                }

                break;

            case 89:

                if(keys[SHIFT]){

                    input+="Y";

                }else{

                    input+="y";

                }

                break;

            case 90:

                if(keys[SHIFT]){

                    input+="Z";

                }else{

                    input+="z";

                }

                break;

            case 186:

                if(keys[SHIFT]){

                    input+=":";

                }else{

                    input+=";";

                }

                break;

            case 187:

                if(keys[SHIFT]){

                    input+="+";

                }else{

                    input+="=";

                }

                break;

            case 188:

                if(keys[SHIFT]){

                    input+="<";

                }else{

                    input+=",";

                }

                break;

            case 189:

                if(keys[SHIFT]){

                    input+="_";

                }else{

                    input+="-";

                }

                break;

            case 190:

                if(keys[SHIFT]){

                    input+=">";

                }else{

                    input+=".";

                }

                break;

            case 191:

                if(keys[SHIFT]){

                    input+="?";

                }else{

                    input+="/";

                }

                break;

            case 192:

                if(keys[SHIFT]){

                    input+="~";

                }else{

                    input+="`";

                }

                break;

            case 219:

                if(keys[SHIFT]){

                    input+="{";

                }else{

                    input+="[";

                }

                break;

            case 220:

                if(keys[SHIFT]){

                    input+="|";

                }else{

                    input+="\\";

                }

                break;

            case 221:

                if(keys[SHIFT]){

                    input+="}";

                }else{

                    input+="]";

                }

                break;

            case 222:

                if(keys[SHIFT]){

                    input+='"';

                }else{

                    input+="'";

                }

                break;

            case BACKSPACE:

                input=input.substr(0,input.length-1);

                break;

        }

    }

};

mousePressed = function(){mPressed=true;};

mouseReleased = function(){mPressed=false;};

keyReleased = function(){keys[keyCode]=false;

        if(keyCode===LEFT){

            keys[65]=false;

        }if(keyCode===RIGHT){

            keys[68]=false;

        }if(keyCode===UP){

            keys[87]=false;

        }if(keyCode===DOWN){

            keys[83]=false;

        }

    if(keyCode===68||keyCode===65||keyCode===LEFT||keyCode===RIGHT){

        keyTimer=5;isSprinting=false;

    }

};
