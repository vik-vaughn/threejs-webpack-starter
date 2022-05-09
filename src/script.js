import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import * as dat from 'dat.gui'
import { Float32BufferAttribute, Mesh, MeshToonMaterial, UVMapping, WebGLCubeUVMaps } from 'three'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js'
// Loading
const textureLoader = new THREE.TextureLoader()

const normalTexture = textureLoader.load('/textures/NormalMap.jpg')
const chessTexture = textureLoader.load('/textures/WhiteNormalMap.png')
const checkerTexture = textureLoader.load('/textures/checkerBoard.jpg')


// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.BoxGeometry(1, 0.5, 1)


// Materials

const material = new THREE.MeshPhongMaterial()
const materialdark = new THREE.MeshPhongMaterial()

const chessMaterialWhite = new THREE.MeshPhongMaterial()
const chessMaterialBlack = new THREE.MeshPhongMaterial()

chessMaterialWhite.metalness = 0.5
chessMaterialWhite.roughness = 0.5
chessMaterialWhite.normalMap = chessTexture;
chessMaterialWhite.color = new THREE.Color(0xffffff)

chessMaterialBlack.metalness = 0.5
chessMaterialBlack.roughness = 0.5
chessMaterialBlack.normalMap = chessTexture;
chessMaterialBlack.color = new THREE.Color(0x101010)


//sviesus langelis
material.metalness = 0.0
material.roughness = 0.2
material.normalMap = normalTexture;

material.color = new THREE.Color(0xFFFDD0)

// tamsus langelis
materialdark.metalness = 0.0
materialdark.roughness = 0.2
materialdark.normalMap = normalTexture;

materialdark.color = new THREE.Color(0x966F33)

// Mesh

const board = new THREE.Group();

for (let x = 0; x < 8; x++) {
    for (let z = 0; z <8; z++) {
        let cube;
        if (z % 2 == 0){
            cube = new THREE.Mesh(geometry, x % 2 == 0 ? material : materialdark)
        } else {
            cube = new THREE.Mesh(geometry, x % 2 == 0 ? materialdark : material)
        }

        cube.position.set(x, 0, z)
        cube.receiveShadow = true;
        board.add(cube);
    }
}

//const cube = new THREE.Mesh(geometry,material)
board.receiveShadow= true;
scene.add(board)

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

// balti

// pestininkas
function pestininkasBaltas (){
    const pestininkas1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.1, 0.5),
        chessMaterialWhite
    );
    pestininkas1.position.set(2, 0.3, 4);
    

    const pestininkas2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.1, 0.4),
        chessMaterialWhite
    );
    pestininkas2.position.set(2, 0.4, 4);
    

    const pestininkas3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 0.3, 0.25),
        chessMaterialWhite
    );
    pestininkas3.position.set(2, 0.5, 4);
    

    const pestininkas4 = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.3, 0.15),
        chessMaterialWhite
    );
    pestininkas4.position.set(2, 0.7, 4);
    

    const pestininkas5 = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.2, 0.2),
        chessMaterialWhite
    );
    pestininkas5.position.set(2, 0.9, 4);

    const pawnGroup = new THREE.Group();

        pestininkas1.receiveShadow=true;
        pestininkas1.castShadow=true;
        pestininkas2.receiveShadow=true;
        pestininkas2.castShadow=true;
        pestininkas3.receiveShadow=true;
        pestininkas3.castShadow=true;
        pestininkas4.receiveShadow=true;
        pestininkas4.castShadow=true;
        pestininkas5.receiveShadow=true;
        pestininkas5.castShadow=true;

    pawnGroup.add(pestininkas1, pestininkas2, pestininkas3, pestininkas4, pestininkas5);
    // pawnGroup.receiveShadow = true;
    // pawnGroup.castShadow = true;

    scene.add(pawnGroup);
    pawnGroup.scale.set(1.25, 1.5, 1.25);
    pawnGroup.position.set(4.5, -0.13, 1);

    const pawn2 = pawnGroup.clone();
    scene.add(pawn2);
    pawn2.scale.set(1.25, 1.5, 1.25);
    pawn2.position.set(3.5, -0.13, 1);

    const pawn3 = pawnGroup.clone();
    scene.add(pawn3);
    pawn3.scale.set(1.25, 1.5, 1.25);
    pawn3.position.set(2.5, -0.13, 1);

    const pawn4 = pawnGroup.clone();
    scene.add(pawn4);
    pawn4.scale.set(1.25, 1.5, 1.25);
    pawn4.position.set(1.5, -0.13, 1);

    const pawn5 = pawnGroup.clone();
    scene.add(pawn5);
    pawn5.scale.set(1.25, 1.5, 1.25);
    pawn5.position.set(0.5, -0.13, 1);

    const pawn6 = pawnGroup.clone();
    scene.add(pawn6);
    pawn6.scale.set(1.25, 1.5, 1.25);
    pawn6.position.set(-0.5, -0.13, 1);

    const pawn7 = pawnGroup.clone();
    scene.add(pawn7);
    pawn7.scale.set(1.25, 1.5, 1.25);
    pawn7.position.set(-1.5, -0.13, 1);

    const pawn8 = pawnGroup.clone();
    scene.add(pawn8);
    pawn8.scale.set(1.25, 1.5, 1.25);
    pawn8.position.set(-2.5, -0.13, 1);
};

pestininkasBaltas();

// bokstas
function bokstasBaltas (){
    const bokstas1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.2, 0.55),
        chessMaterialWhite
    );
    bokstas1.position.set(2, 0.3, 4);
    scene.add(bokstas1);

    const bokstas2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.2, 0.45),
        chessMaterialWhite
    );
    bokstas2.position.set(2, 0.4, 4);
    scene.add(bokstas2);

    const bokstas3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.05, 0.55),
        chessMaterialWhite
    );
    bokstas3.position.set(2, 0.5, 4);
    scene.add(bokstas3);

    const bokstas4 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.15, 0.45),
        chessMaterialWhite
    );
    bokstas4.position.set(2, 0.55, 4);
    scene.add(bokstas4);

    const bokstas5 = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.85, 0.35),
        chessMaterialWhite
    );
    bokstas5.position.set(2, 0.65, 4);
    scene.add(bokstas5);

    const bokstas6 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.15, 0.45),
        chessMaterialWhite
    );
    bokstas6.position.set(2, 1.15, 4);
    scene.add(bokstas6);

    const bokstas7 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.1),
        chessMaterialWhite
    );
    bokstas7.position.set(2.2, 1.25, 3.825);
    scene.add(bokstas7);

    const bokstas8 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.1),
        chessMaterialWhite
    );
    bokstas8.position.set(1.8, 1.25, 4.175);
    scene.add(bokstas8);

    const bokstas9 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.05, 0.05),
        chessMaterialWhite
    );
    bokstas9.position.set(1.825, 1.25, 3.8);
    scene.add(bokstas9);

    const bokstas10 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.05, 0.05),
        chessMaterialWhite
    );
    bokstas10.position.set(2.175, 1.25, 4.2);
    scene.add(bokstas10);

    const rookGroup = new THREE.Group();

        bokstas1.receiveShadow=true;
        bokstas1.castShadow=true;
        bokstas2.receiveShadow=true;
        bokstas2.castShadow=true;
        bokstas3.receiveShadow=true;
        bokstas3.castShadow=true;
        bokstas4.receiveShadow=true;
        bokstas4.castShadow=true;
        bokstas5.receiveShadow=true;
        bokstas5.castShadow=true;
        bokstas6.receiveShadow=true;
        bokstas6.castShadow=true;
        bokstas7.receiveShadow=true;
        bokstas7.castShadow=true;
        bokstas8.receiveShadow=true;
        bokstas8.castShadow=true;
        bokstas9.receiveShadow=true;
        bokstas9.castShadow=true;
        bokstas10.receiveShadow=true;
        bokstas10.castShadow=true;

        rookGroup.add(bokstas1, bokstas2, bokstas3, bokstas4, bokstas5, bokstas6, bokstas7,
        bokstas8, bokstas9, bokstas10);

        scene.add(rookGroup);
        rookGroup.scale.set(1.25, 1.3, 1.25);
        rookGroup.position.set(4.5, -0.13, 2);

        const rook2 = rookGroup.clone();
        scene.add(rook2);
        rook2.scale.set(1.25, 1.3, 1.25);
        rook2.position.set(-2.5, -0.13, 2);
};

bokstasBaltas();

// zirgas
function zirgasBaltas (){

const chessMaterialWhiteBrown = chessMaterialWhite.clone()
chessMaterialWhiteBrown.color = new THREE.Color(0x757575)

const zirgas1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.2, 0.55),
    chessMaterialWhite
);
zirgas1.position.set(2, 0.3, 4);
scene.add(zirgas1);

const zirgas2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.2, 0.45),
    chessMaterialWhite
);
zirgas2.position.set(2, 0.4, 4);
scene.add(zirgas2);

const zirgas3 = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.05, 0.55),
    chessMaterialWhite
);
zirgas3.position.set(2, 0.5, 4);
scene.add(zirgas3);

const zirgas4 = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.15, 0.45),
    chessMaterialWhite
);
zirgas4.position.set(2, 0.55, 4);
scene.add(zirgas4);

const zirgas5 = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.85, 0.35),
    chessMaterialWhite
);
zirgas5.position.set(2, 0.65, 4);
scene.add(zirgas5);

const zirgas6 = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.45, 0.65),
    chessMaterialWhite
);
zirgas6.position.set(2, 1.3, 4);
scene.add(zirgas6);


const zirgas7 = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.25, 0.2),
    chessMaterialWhite
);
zirgas7.position.set(2, 1.3, 3.6);
scene.add(zirgas7);

const zirgas8 = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.13, 0.3),
    chessMaterialWhite
);
zirgas8.position.set(2, 1.59, 4);
scene.add(zirgas8);

const zirgas9 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.05, 0.05),
    chessMaterialWhiteBrown
);
zirgas9.position.set(1.8502, 1.399, 3.5);
scene.add(zirgas9);

const zirgas10 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.05, 0.05),
    chessMaterialWhiteBrown
);
zirgas10.position.set(2.1499, 1.399, 3.5);
scene.add(zirgas10);

const zirgas11 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.29, 0.05),
    chessMaterialWhite
);
zirgas11.position.set(2.2005, 1.64, 4.175);
scene.add(zirgas11);

const zirgas12 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.29, 0.05),
    chessMaterialWhite
);
zirgas12.position.set(1.8, 1.64, 4.175);
scene.add(zirgas12);

const zirgas13 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.05, 0.1),
    chessMaterialWhiteBrown
);
zirgas13.position.set(2.209, 1.6, 4);
scene.add(zirgas13);

const zirgas14 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.05, 0.1),
    chessMaterialWhiteBrown
);
zirgas14.position.set(1.795, 1.6, 4);
scene.add(zirgas14);

const knightGroup = new THREE.Group();

        zirgas1.receiveShadow=true;
        zirgas1.castShadow=true;
        zirgas2.receiveShadow=true;
        zirgas2.castShadow=true;
        zirgas3.receiveShadow=true;
        zirgas3.castShadow=true;
        zirgas4.receiveShadow=true;
        zirgas4.castShadow=true;
        zirgas5.receiveShadow=true;
        zirgas5.castShadow=true;
        zirgas6.receiveShadow=true;
        zirgas6.castShadow=true;
        zirgas7.receiveShadow=true;
        zirgas7.castShadow=true;
        zirgas8.receiveShadow=true;
        zirgas8.castShadow=true;
        zirgas9.receiveShadow=true;
        zirgas9.castShadow=true;
        zirgas10.receiveShadow=true;
        zirgas10.castShadow=true;
        zirgas11.receiveShadow=true;
        zirgas11.castShadow=true;
        zirgas12.receiveShadow=true;
        zirgas12.castShadow=true;
        zirgas13.receiveShadow=true;
        zirgas13.castShadow=true;
        zirgas14.receiveShadow=true;
        zirgas14.castShadow=true;

        knightGroup.add(zirgas1, zirgas2, zirgas3, zirgas4, zirgas5, zirgas6, zirgas7, zirgas8,
            zirgas9, zirgas10, zirgas11, zirgas12, zirgas13, zirgas14);

            scene.add(knightGroup);
            knightGroup.scale.set(1.25, 1.1, 1.25);
            knightGroup.position.set(3.5, -0.13, 2);
    
            const knight2 = knightGroup.clone();
            scene.add(knight2);
            knight2.scale.set(1.25, 1.1, 1.25);
            knight2.position.set(-1.5, -0.13, 2);
};

zirgasBaltas();

function rikisBaltas (){
const rikis1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.2, 0.55),
    chessMaterialWhite
);
rikis1.position.set(2, 0.3, 4);
scene.add(rikis1);

const rikis2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.2, 0.45),
    chessMaterialWhite
);
rikis2.position.set(2, 0.4, 4);
scene.add(rikis2);

const rikis3 = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.05, 0.55),
    chessMaterialWhite
);
rikis3.position.set(2, 0.5, 4);
scene.add(rikis3);

const rikis4 = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.35, 0.35),
    chessMaterialWhite
);
rikis4.position.set(2, 0.65, 4);
scene.add(rikis4);

const rikis5 = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.45, 0.15),
    chessMaterialWhite
);
rikis5.position.set(2, 1, 4);
scene.add(rikis5);

const rikis6 = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.35, 0.35),
    chessMaterialWhite
);
rikis6.position.set(2, 1.4, 4);
scene.add(rikis6);

const rikis7 = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.15, 0.15),
    chessMaterialWhite
);
rikis7.position.set(2, 1.65, 4);
scene.add(rikis7);

const bishopGroup = new THREE.Group();

        rikis1.receiveShadow=true;
        rikis1.castShadow=true;
        rikis2.receiveShadow=true;
        rikis2.castShadow=true;
        rikis3.receiveShadow=true;
        rikis3.castShadow=true;
        rikis4.receiveShadow=true;
        rikis4.castShadow=true;
        rikis5.receiveShadow=true;
        rikis5.castShadow=true;
        rikis6.receiveShadow=true;
        rikis6.castShadow=true;
        rikis7.receiveShadow=true;
        rikis7.castShadow=true;

        bishopGroup.add(rikis1, rikis2, rikis3, rikis4, rikis5, rikis6, rikis7);

            scene.add(bishopGroup);
            bishopGroup.scale.set(1.25, 1.2, 1.25);
            bishopGroup.position.set(2.5, -0.13, 2);
    
            const bishop2 = bishopGroup.clone();
            scene.add(bishop2);
            bishop2.scale.set(1.25, 1.2, 1.25);
            bishop2.position.set(-0.5, -0.13, 2);
};

rikisBaltas();

function karalieneBaltas (){
const karaliene1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.2, 0.55),
    chessMaterialWhite
);
karaliene1.position.set(2, 0.3, 4);
scene.add(karaliene1);

const karaliene2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.2, 0.45),
    chessMaterialWhite
);
karaliene2.position.set(2, 0.4, 4);
scene.add(karaliene2);

const karaliene3 = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.05, 0.55),
    chessMaterialWhite
);
karaliene3.position.set(2, 0.5, 4);
scene.add(karaliene3);

const karaliene4 = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.15, 0.45),
    chessMaterialWhite
);
karaliene4.position.set(2, 0.55, 4);
scene.add(karaliene4);

const karaliene5 = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.55, 0.35),
    chessMaterialWhite
);
karaliene5.position.set(2, 0.85, 4);
scene.add(karaliene5);

const karaliene6 = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.25, 0.15),
    chessMaterialWhite
);
karaliene6.position.set(2, 1.25, 4);
scene.add(karaliene6);

const karaliene7 = new THREE.Mesh(
    new THREE.BoxGeometry(0.375, 0.15, 0.375),
    chessMaterialWhite
);
karaliene7.position.set(2, 1.45, 4);
scene.add(karaliene7);

const karaliene8 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.2, 0.05),
    chessMaterialWhite
);
karaliene8.position.set(1.9, 1.55, 4.1);
scene.add(karaliene8);

const karaliene9 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.2, 0.05),
    chessMaterialWhite
);
karaliene9.position.set(2.1, 1.55, 4.1);
scene.add(karaliene9);

const karaliene10 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.2, 0.05),
    chessMaterialWhite
);
karaliene10.position.set(1.9, 1.55, 3.9);
scene.add(karaliene10);

const karaliene11 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.2, 0.05),
    chessMaterialWhite
);
karaliene11.position.set(2.1, 1.55, 3.9);
scene.add(karaliene11);

const karaliene12 = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.05, 0.05),
    chessMaterialWhite
);
karaliene12.position.set(2, 1.55, 3.9);
scene.add(karaliene12);

const karaliene13 = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.05, 0.05),
    chessMaterialWhite
);
karaliene13.position.set(2, 1.55, 4.1);
scene.add(karaliene13);

const karaliene14 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.05, 0.15),
    chessMaterialWhite
);
karaliene14.position.set(1.9, 1.55, 4);
scene.add(karaliene14);

const karaliene15 = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.05, 0.15),
    chessMaterialWhite
);
karaliene15.position.set(2.1, 1.55, 4);
scene.add(karaliene15);

const queenGroup = new THREE.Group();

        karaliene1.receiveShadow=true;
        karaliene1.castShadow=true;
        karaliene2.receiveShadow=true;
        karaliene2.castShadow=true;
        karaliene3.receiveShadow=true;
        karaliene3.castShadow=true;
        karaliene4.receiveShadow=true;
        karaliene4.castShadow=true;
        karaliene5.receiveShadow=true;
        karaliene5.castShadow=true;
        karaliene6.receiveShadow=true;
        karaliene6.castShadow=true;
        karaliene7.receiveShadow=true;
        karaliene7.castShadow=true;
        karaliene8.receiveShadow=true;
        karaliene8.castShadow=true;
        karaliene9.receiveShadow=true;
        karaliene9.castShadow=true;
        karaliene10.receiveShadow=true;
        karaliene10.castShadow=true;
        karaliene11.receiveShadow=true;
        karaliene11.castShadow=true;
        karaliene12.receiveShadow=true;
        karaliene12.castShadow=true;
        karaliene13.receiveShadow=true;
        karaliene13.castShadow=true;
        karaliene14.receiveShadow=true;
        karaliene14.castShadow=true;
        karaliene15.receiveShadow=true;
        karaliene15.castShadow=true;

        queenGroup.add(karaliene1, karaliene2, karaliene3, karaliene4, karaliene5, karaliene6, karaliene7,
            karaliene8, karaliene9, karaliene10, karaliene11, karaliene12, karaliene13, karaliene14, karaliene15);

            scene.add(queenGroup);
            queenGroup.scale.set(1.25, 1.3, 1.25);
            queenGroup.position.set(0.5, -0.13, 2);
}; 

karalieneBaltas();

// juodi

function pestininkasJuodas (){
    const pestininkas1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.1, 0.5),
        chessMaterialBlack
    );
    pestininkas1.position.set(2, 0.3, 4);
    

    const pestininkas2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.1, 0.4),
        chessMaterialBlack
    );
    pestininkas2.position.set(2, 0.4, 4);
    

    const pestininkas3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 0.3, 0.25),
        chessMaterialBlack
    );
    pestininkas3.position.set(2, 0.5, 4);
    

    const pestininkas4 = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.3, 0.15),
        chessMaterialBlack
    );
    pestininkas4.position.set(2, 0.7, 4);
    

    const pestininkas5 = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.2, 0.2),
        chessMaterialBlack
    );
    pestininkas5.position.set(2, 0.9, 4);

    const pawnGroup = new THREE.Group();

        pestininkas1.receiveShadow=true;
        pestininkas1.castShadow=true;
        pestininkas2.receiveShadow=true;
        pestininkas2.castShadow=true;
        pestininkas3.receiveShadow=true;
        pestininkas3.castShadow=true;
        pestininkas4.receiveShadow=true;
        pestininkas4.castShadow=true;
        pestininkas5.receiveShadow=true;
        pestininkas5.castShadow=true;

    pawnGroup.add(pestininkas1, pestininkas2, pestininkas3, pestininkas4, pestininkas5);
    // pawnGroup.receiveShadow = true;
    // pawnGroup.castShadow = true;

    scene.add(pawnGroup);
    pawnGroup.scale.set(1.25, 1.5, 1.25);
    pawnGroup.position.set(4.5, -0.13, -4);

    const pawn2 = pawnGroup.clone();
    scene.add(pawn2);
    pawn2.scale.set(1.25, 1.5, 1.25);
    pawn2.position.set(3.5, -0.13, -4);

    const pawn3 = pawnGroup.clone();
    scene.add(pawn3);
    pawn3.scale.set(1.25, 1.5, 1.25);
    pawn3.position.set(2.5, -0.13, -4);

    const pawn4 = pawnGroup.clone();
    scene.add(pawn4);
    pawn4.scale.set(1.25, 1.5, 1.25);
    pawn4.position.set(1.5, -0.13, -4);

    const pawn5 = pawnGroup.clone();
    scene.add(pawn5);
    pawn5.scale.set(1.25, 1.5, 1.25);
    pawn5.position.set(0.5, -0.13, -4);

    const pawn6 = pawnGroup.clone();
    scene.add(pawn6);
    pawn6.scale.set(1.25, 1.5, 1.25);
    pawn6.position.set(-0.5, -0.13, -4);

    const pawn7 = pawnGroup.clone();
    scene.add(pawn7);
    pawn7.scale.set(1.25, 1.5, 1.25);
    pawn7.position.set(-1.5, -0.13, -4);

    const pawn8 = pawnGroup.clone();
    scene.add(pawn8);
    pawn8.scale.set(1.25, 1.5, 1.25);
    pawn8.position.set(-2.5, -0.13, -4);
};

pestininkasJuodas()

function bokstasJuodas (){
    const bokstas1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.2, 0.55),
        chessMaterialBlack
    );
    bokstas1.position.set(2, 0.3, 4);
    scene.add(bokstas1);

    const bokstas2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.2, 0.45),
        chessMaterialBlack
    );
    bokstas2.position.set(2, 0.4, 4);
    scene.add(bokstas2);

    const bokstas3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.05, 0.55),
        chessMaterialBlack
    );
    bokstas3.position.set(2, 0.5, 4);
    scene.add(bokstas3);

    const bokstas4 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.15, 0.45),
        chessMaterialBlack
    );
    bokstas4.position.set(2, 0.55, 4);
    scene.add(bokstas4);

    const bokstas5 = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.85, 0.35),
        chessMaterialBlack
    );
    bokstas5.position.set(2, 0.65, 4);
    scene.add(bokstas5);

    const bokstas6 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.15, 0.45),
        chessMaterialBlack
    );
    bokstas6.position.set(2, 1.15, 4);
    scene.add(bokstas6);

    const bokstas7 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.1),
        chessMaterialBlack
    );
    bokstas7.position.set(2.2, 1.25, 3.825);
    scene.add(bokstas7);

    const bokstas8 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.1),
        chessMaterialBlack
    );
    bokstas8.position.set(1.8, 1.25, 4.175);
    scene.add(bokstas8);

    const bokstas9 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.05, 0.05),
        chessMaterialBlack
    );
    bokstas9.position.set(1.825, 1.25, 3.8);
    scene.add(bokstas9);

    const bokstas10 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.05, 0.05),
        chessMaterialBlack
    );
    bokstas10.position.set(2.175, 1.25, 4.2);
    scene.add(bokstas10);

    const rookGroup = new THREE.Group();

        bokstas1.receiveShadow=true;
        bokstas1.castShadow=true;
        bokstas2.receiveShadow=true;
        bokstas2.castShadow=true;
        bokstas3.receiveShadow=true;
        bokstas3.castShadow=true;
        bokstas4.receiveShadow=true;
        bokstas4.castShadow=true;
        bokstas5.receiveShadow=true;
        bokstas5.castShadow=true;
        bokstas6.receiveShadow=true;
        bokstas6.castShadow=true;
        bokstas7.receiveShadow=true;
        bokstas7.castShadow=true;
        bokstas8.receiveShadow=true;
        bokstas8.castShadow=true;
        bokstas9.receiveShadow=true;
        bokstas9.castShadow=true;
        bokstas10.receiveShadow=true;
        bokstas10.castShadow=true;

        rookGroup.add(bokstas1, bokstas2, bokstas3, bokstas4, bokstas5, bokstas6, bokstas7,
        bokstas8, bokstas9, bokstas10);

        scene.add(rookGroup);
        rookGroup.scale.set(1.25, 1.3, 1.25);
        rookGroup.position.set(4.5, -0.13, -5);

        const rook2 = rookGroup.clone();
        scene.add(rook2);
        rook2.scale.set(1.25, 1.3, 1.25);
        rook2.position.set(-2.5, -0.13, -5);
};

bokstasJuodas()

function zirgasJuodas(){

    const chessMaterialBlackBrown = chessMaterialBlack.clone()
    chessMaterialBlackBrown.color = new THREE.Color(0x191919)

    const zirgas1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.2, 0.55),
        chessMaterialBlack
    );
    zirgas1.position.set(2, 0.3, 4);
    scene.add(zirgas1);
    
    const zirgas2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.2, 0.45),
        chessMaterialBlack
    );
    zirgas2.position.set(2, 0.4, 4);
    scene.add(zirgas2);
    
    const zirgas3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.05, 0.55),
        chessMaterialBlack
    );
    zirgas3.position.set(2, 0.5, 4);
    scene.add(zirgas3);
    
    const zirgas4 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.15, 0.45),
        chessMaterialBlack
    );
    zirgas4.position.set(2, 0.55, 4);
    scene.add(zirgas4);
    
    const zirgas5 = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.85, 0.35),
        chessMaterialBlack
    );
    zirgas5.position.set(2, 0.65, 4);
    scene.add(zirgas5);
    
    const zirgas6 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.45, 0.65),
        chessMaterialBlack
    );
    zirgas6.position.set(2, 1.3, 4);
    scene.add(zirgas6);
    
    
    const zirgas7 = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.25, 0.2),
        chessMaterialBlack
    );
    zirgas7.position.set(2, 1.3, 3.6);
    scene.add(zirgas7);
    
    const zirgas8 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.13, 0.3),
        chessMaterialBlack
    );
    zirgas8.position.set(2, 1.59, 4);
    scene.add(zirgas8);
    
    const zirgas9 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.05),
        chessMaterialBlackBrown
    );
    zirgas9.position.set(1.8502, 1.399, 3.5);
    scene.add(zirgas9);
    
    const zirgas10 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.05),
        chessMaterialBlackBrown
    );
    zirgas10.position.set(2.1499, 1.399, 3.5);
    scene.add(zirgas10);
    
    const zirgas11 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.29, 0.05),
        chessMaterialBlack
    );
    zirgas11.position.set(2.2005, 1.64, 4.175);
    scene.add(zirgas11);
    
    const zirgas12 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.29, 0.05),
        chessMaterialBlack
    );
    zirgas12.position.set(1.8, 1.64, 4.175);
    scene.add(zirgas12);
    
    const zirgas13 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.1),
        chessMaterialBlackBrown
    );
    zirgas13.position.set(2.209, 1.6, 4);
    scene.add(zirgas13);
    
    const zirgas14 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.1),
        chessMaterialBlackBrown
    );
    zirgas14.position.set(1.795, 1.6, 4);
    scene.add(zirgas14);
    
    const knightGroup = new THREE.Group();
    
            zirgas1.receiveShadow=true;
            zirgas1.castShadow=true;
            zirgas2.receiveShadow=true;
            zirgas2.castShadow=true;
            zirgas3.receiveShadow=true;
            zirgas3.castShadow=true;
            zirgas4.receiveShadow=true;
            zirgas4.castShadow=true;
            zirgas5.receiveShadow=true;
            zirgas5.castShadow=true;
            zirgas6.receiveShadow=true;
            zirgas6.castShadow=true;
            zirgas7.receiveShadow=true;
            zirgas7.castShadow=true;
            zirgas8.receiveShadow=true;
            zirgas8.castShadow=true;
            zirgas9.receiveShadow=true;
            zirgas9.castShadow=true;
            zirgas10.receiveShadow=true;
            zirgas10.castShadow=true;
            zirgas11.receiveShadow=true;
            zirgas11.castShadow=true;
            zirgas12.receiveShadow=true;
            zirgas12.castShadow=true;
            zirgas13.receiveShadow=true;
            zirgas13.castShadow=true;
            zirgas14.receiveShadow=true;
            zirgas14.castShadow=true;
    
            knightGroup.add(zirgas1, zirgas2, zirgas3, zirgas4, zirgas5, zirgas6, zirgas7, zirgas8,
                zirgas9, zirgas10, zirgas11, zirgas12, zirgas13, zirgas14);
    
                scene.add(knightGroup);
                knightGroup.scale.set(1.25, 1.1, 1.25);
                knightGroup.rotateY(91.1)
                knightGroup.position.set(8.5, -0.13, 5);
        
                const knight2 = knightGroup.clone();
                scene.add(knight2);
                knight2.scale.set(1.25, 1.1, 1.25);
                knight2.position.set(3.5, -0.13, 5);
};

zirgasJuodas()

function rikisJuodas(){
    const rikis1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.2, 0.55),
        chessMaterialBlack
    );
    rikis1.position.set(2, 0.3, 4);
    scene.add(rikis1);
    
    const rikis2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.2, 0.45),
        chessMaterialBlack
    );
    rikis2.position.set(2, 0.4, 4);
    scene.add(rikis2);
    
    const rikis3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.05, 0.55),
        chessMaterialBlack
    );
    rikis3.position.set(2, 0.5, 4);
    scene.add(rikis3);
    
    const rikis4 = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.35, 0.35),
        chessMaterialBlack
    );
    rikis4.position.set(2, 0.65, 4);
    scene.add(rikis4);
    
    const rikis5 = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.45, 0.15),
        chessMaterialBlack
    );
    rikis5.position.set(2, 1, 4);
    scene.add(rikis5);
    
    const rikis6 = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.35, 0.35),
        chessMaterialBlack
    );
    rikis6.position.set(2, 1.4, 4);
    scene.add(rikis6);
    
    const rikis7 = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.15, 0.15),
        chessMaterialBlack
    );
    rikis7.position.set(2, 1.65, 4);
    scene.add(rikis7);
    
    const bishopGroup = new THREE.Group();
    
            rikis1.receiveShadow=true;
            rikis1.castShadow=true;
            rikis2.receiveShadow=true;
            rikis2.castShadow=true;
            rikis3.receiveShadow=true;
            rikis3.castShadow=true;
            rikis4.receiveShadow=true;
            rikis4.castShadow=true;
            rikis5.receiveShadow=true;
            rikis5.castShadow=true;
            rikis6.receiveShadow=true;
            rikis6.castShadow=true;
            rikis7.receiveShadow=true;
            rikis7.castShadow=true;
    
            bishopGroup.add(rikis1, rikis2, rikis3, rikis4, rikis5, rikis6, rikis7);
    
                scene.add(bishopGroup);
                bishopGroup.scale.set(1.25, 1.2, 1.25);
                bishopGroup.position.set(2.5, -0.13, -5);
        
                const bishop2 = bishopGroup.clone();
                scene.add(bishop2);
                bishop2.scale.set(1.25, 1.2, 1.25);
                bishop2.position.set(-0.5, -0.13, -5);

};

rikisJuodas()

function karalieneJuodas(){
    const karaliene1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.2, 0.55),
        chessMaterialBlack
    );
    karaliene1.position.set(2, 0.3, 4);
    scene.add(karaliene1);
    
    const karaliene2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.2, 0.45),
        chessMaterialBlack
    );
    karaliene2.position.set(2, 0.4, 4);
    scene.add(karaliene2);
    
    const karaliene3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.05, 0.55),
        chessMaterialBlack
    );
    karaliene3.position.set(2, 0.5, 4);
    scene.add(karaliene3);
    
    const karaliene4 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.15, 0.45),
        chessMaterialBlack
    );
    karaliene4.position.set(2, 0.55, 4);
    scene.add(karaliene4);
    
    const karaliene5 = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.55, 0.35),
        chessMaterialBlack
    );
    karaliene5.position.set(2, 0.85, 4);
    scene.add(karaliene5);
    
    const karaliene6 = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.25, 0.15),
        chessMaterialBlack
    );
    karaliene6.position.set(2, 1.25, 4);
    scene.add(karaliene6);
    
    const karaliene7 = new THREE.Mesh(
        new THREE.BoxGeometry(0.375, 0.15, 0.375),
        chessMaterialBlack
    );
    karaliene7.position.set(2, 1.45, 4);
    scene.add(karaliene7);
    
    const karaliene8 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.2, 0.05),
        chessMaterialBlack
    );
    karaliene8.position.set(1.9, 1.55, 4.1);
    scene.add(karaliene8);
    
    const karaliene9 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.2, 0.05),
        chessMaterialBlack
    );
    karaliene9.position.set(2.1, 1.55, 4.1);
    scene.add(karaliene9);
    
    const karaliene10 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.2, 0.05),
        chessMaterialBlack
    );
    karaliene10.position.set(1.9, 1.55, 3.9);
    scene.add(karaliene10);
    
    const karaliene11 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.2, 0.05),
        chessMaterialBlack
    );
    karaliene11.position.set(2.1, 1.55, 3.9);
    scene.add(karaliene11);
    
    const karaliene12 = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.05, 0.05),
        chessMaterialBlack
    );
    karaliene12.position.set(2, 1.55, 3.9);
    scene.add(karaliene12);
    
    const karaliene13 = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.05, 0.05),
        chessMaterialBlack
    );
    karaliene13.position.set(2, 1.55, 4.1);
    scene.add(karaliene13);
    
    const karaliene14 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.15),
        chessMaterialBlack
    );
    karaliene14.position.set(1.9, 1.55, 4);
    scene.add(karaliene14);
    
    const karaliene15 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.15),
        chessMaterialBlack
    );
    karaliene15.position.set(2.1, 1.55, 4);
    scene.add(karaliene15);
    
    const queenGroup = new THREE.Group();
    
            karaliene1.receiveShadow=true;
            karaliene1.castShadow=true;
            karaliene2.receiveShadow=true;
            karaliene2.castShadow=true;
            karaliene3.receiveShadow=true;
            karaliene3.castShadow=true;
            karaliene4.receiveShadow=true;
            karaliene4.castShadow=true;
            karaliene5.receiveShadow=true;
            karaliene5.castShadow=true;
            karaliene6.receiveShadow=true;
            karaliene6.castShadow=true;
            karaliene7.receiveShadow=true;
            karaliene7.castShadow=true;
            karaliene8.receiveShadow=true;
            karaliene8.castShadow=true;
            karaliene9.receiveShadow=true;
            karaliene9.castShadow=true;
            karaliene10.receiveShadow=true;
            karaliene10.castShadow=true;
            karaliene11.receiveShadow=true;
            karaliene11.castShadow=true;
            karaliene12.receiveShadow=true;
            karaliene12.castShadow=true;
            karaliene13.receiveShadow=true;
            karaliene13.castShadow=true;
            karaliene14.receiveShadow=true;
            karaliene14.castShadow=true;
            karaliene15.receiveShadow=true;
            karaliene15.castShadow=true;
    
            queenGroup.add(karaliene1, karaliene2, karaliene3, karaliene4, karaliene5, karaliene6, karaliene7,
                karaliene8, karaliene9, karaliene10, karaliene11, karaliene12, karaliene13, karaliene14, karaliene15);
    
                scene.add(queenGroup);
                queenGroup.scale.set(1.25, 1.3, 1.25);
                queenGroup.position.set(0.5, -0.13, -5);
};

karalieneJuodas()

// custom karalius

function customPieces(){
var mtlLoader = new MTLLoader();
mtlLoader.load('/assets/aa3c1079-8985-4264-8c41-5f87f3c393a3.mtl', function(materials) {
    materials.preload();

    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('assets/aa3c1079-8985-4264-8c41-5f87f3c393a3.obj', function(object) {
    object.position.y = 0.3;
    object.position.x = 3.85;
    object.position.z = 0;
    object.scale.set(0.011, 0.011, 0.011)
    object.rotateY(80.13);
    object.receiveShadow = true;
    object.traverse(function(child){child.castShadow = true;})
    object.traverse(function(child){child.receiveShadow = true;})
    object.color = new THREE.Color(0x434343)
    scene.add(object);
    });
});

var mtlLoader = new MTLLoader();
mtlLoader.load('/assets/007e533f-3911-4b3b-97ea-34b6574d1b12.mtl', function(materials) {
    materials.preload();

    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('assets/007e533f-3911-4b3b-97ea-34b6574d1b12.obj', function(object) {
    object.position.y = 0.3;
    object.position.x = 3.85;
    object.position.z = 7;
    object.scale.set(0.011, 0.011, 0.011)
    object.rotateY(80.13);
    object.receiveShadow = true;
    object.traverse(function(child){child.castShadow = true;})
    object.traverse(function(child){child.receiveShadow = true;})
    object.color = new THREE.Color(0x434343)
    scene.add(object);
    });
});
};

customPieces()

// function assignUV(geometry) { 
//     // geometry.faceVertexUvs[0] = []; 
//     geometry.faces.forEach(new function(face) { 
//        var uvs = [];
//        var ids = [ 'a', 'b', 'c'];
//        for( var i = 0; i < ids.length; i++ ) {
//            var vertex = geometry.vertices[ face[ ids[ i ] ] ].clone();
//            var n = vertex.normalize();
//            var u =  .5 + Math.atan2( n.z, - n.x ) / ( 2.0 * Math.PI ) ;
//            var v =  .5 - Math.asin(n.y) / Math.PI ;
//            uvs.push( new THREE.Vector2( u, v ) );
//        }
//        geometry.faceVertexUvs[ 0 ].push( uvs );
//    });
//    geometry.uvsNeedUpdate = true;
// }

const tekstura = textureLoader.load('/textures/UVChecker.png')
    tekstura.offset.y += 0.1;
    tekstura.offset.x += 0.2;
    tekstura.wrapS = tekstura.wrapT = THREE.MirroredRepeatWrapping;
    // tekstura.needsUpdate = true;
    // tekstura.repeat.set( 11, 111 );

    var materijalas = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: false});

var points25 = [];
var uvs = [];
var r = 15;
var total = 150;
    for (var i = 0; i <total; i++) {
        var lat = map_range(i, 0, total, 0, Math.PI);
        for (var j = 0; j < total; j++) {
            var lon = map_range(j, 0, total, 0, Math.PI*2)
            var x = r * Math.sin(lat) * Math.cos(lon);
            var y = r * Math.sin(lat) * Math.sin(lon);
            var z = r * Math.cos(lat);
            points25.push(new THREE.Vector3(x, y, z));
            var U = (Math.atan2(x,z)/(2*Math.PI))+0.5;
            var V = (Math.asin(y)/Math.PI)+0.5;
            uvs.push(new THREE.Vector2(U,V));
            // var spGeom = new THREE.SphereGeometry(0.1);
            // var spMesh = new THREE.Mesh(spGeom, materijalas);
            // scene.add(spMesh);
            // spMesh.position.set(x,y,z);
            
        }
    }

    
    
    const geometry25 = new ConvexGeometry(points25);

    // var geoUVS = Float32Array.from(uvs);
    // geometry25.setAttribute('uv', new  THREE.BufferAttribute(geoUVS, 2))
    geometry25.setAttribute('uv', new Float32BufferAttribute(uvs, 2));

    // assignUV(geometry25);

    const material25 = new THREE.MeshStandardMaterial();
    material25.map = tekstura;
    material25.castShadow=true;
    material25.receiveShadow=true;
    // material25.color = new THREE.Color(0xFFF1FF);
    // material25.wireframe = true;
    // material25.normalMap = checkerTexture;
    const mesh25 = new THREE.Mesh(geometry25, material25);
    scene.add(mesh25);
    // mesh25.scale.set(5,5,5)



    // const geometrija = new THREE.BoxGeometry(5,5,5);
    // const materija = new THREE.MeshBasicMaterial({color: 0x00f00});
    // const kubas = new THREE.Mesh(geometrija, materija);
    // scene.add(kubas);
    

// Ambient Light

const light3 = new THREE.AmbientLight(0xffffff, 0.4)
// light3.castShadow=true;
scene.add(light3)

// Spotlight

const distance1 = 21.0;
const angle1 = Math.PI / 4.0;
const penumbra1 = 0.25;
const decay1 = 0.75;

const light4 = new THREE.SpotLight(0xffffff, 1.59, distance1, angle1, penumbra1, decay1);
light4.position.set(6, 25, -5);
light4.target.position.set(4.5, 2, 1.35);
light4.castShadow = true;

scene.add(light4);
scene.add(light4.target);

const light1 = gui.addFolder('Spotlight 1')

light1.add(light4.position, 'x').min(-5).max(10).step(0.01)
light1.add(light4.position, 'y').min(23).max(35).step(0.01)
light1.add(light4.position, 'z').min(-5).max(10).step(0.01)
light1.add(light4.target.position, 'x').min(-5).max(10).step(0.01)
light1.add(light4.target.position, 'y').min(-5).max(10).step(0.01)
light1.add(light4.target.position, 'z').min(-5).max(10).step(0.01)
light1.add(light4, 'distance').min(-40).max(40).step(0.01)
light1.add(light4, 'angle').min(Math.PI/180).max(Math.PI/2).step(0.01)
light1.add(light4, 'penumbra').min(0).max(1).step(0.01)
light1.add(light4, 'decay').min(0).max(1).step(0.01)
light1.add(light4, 'intensity').min(0).max(10).step(0.01)

const light4Color = {
    color: 0xffffff
}

light1.addColor(light4Color, 'color')
    .onChange(() => {
        light4.color.set(light4Color.color)
    })

 const pointLightHelper4 = new THREE.SpotLightHelper(light4)
 scene.add(pointLightHelper4)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = -5
camera.position.y = 35
camera.position.z = 0
scene.add(camera)
const clock2 = new THREE.Clock()


var rotation1 = {
     switch: true
}
    function cameraRotation(){
        rotation1 = !rotation1
        if(rotation1)
        {
            const tick2 = () =>
            {
            const elapsedTime2 = clock2.getElapsedTime() * 0.5;
            if(!rotation1)
                return;
            camera.position.x = Math.cos(elapsedTime2) * 15;
            camera.position.y = 5;
            camera.position.z = Math.sin(elapsedTime2) * 15;
            window.requestAnimationFrame(tick2)
            }
            tick2() 
            
        }
        else
        {
            
            // camera.position.x = 3
            // camera.position.y = 9
            // camera.position.z = -3
            
        }
    };


    gui.add(rotation1, 'switch').onChange(cameraRotation).name('rotation');
    
// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(4.5, 0, 4.5)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// ar sito REIKIA?
renderer.shadowMap.enabled = true;

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime() * 0.5;

    // var controls1 = new function () {
    //     this.rotation=false;
    
    //     this.redraw = function () {
    //         if(this.rotation)
    //         {
    //             camera.position.x = Math.cos(elapsedTime) * 15;
    //             camera.position.y = 5;
    //             camera.position.z = Math.sin(elapsedTime) * 15;
    //         }
    //         else
    //         {
    //             camera.position.x = Math.cos(elapsedTime) * 15;
    //             camera.position.y = 5;
    //             camera.position.z = Math.sin(elapsedTime) * 15;
    //         }
            
    //  };
    //  }
     //controls1();
    // gui.add(controls1, "rotation").onChange(controls1.redraw);
    // Update objects
    //board.rotation.y = .5 * elapsedTime;
    //camera.position.x = Math.cos(elapsedTime) * 15;
    //camera.position.y = 5;
    //camera.position.z = Math.sin(elapsedTime) * 15;   

    // Update Orbital Controls (SITA GAL UZKOMENTUOT)
    controls.update()

    pointLightHelper4.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()
