/**
 * Base
 */

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

scene.background = new THREE.Color("rgb(245, 245, 245)");

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("../static/textures/matcaps/3.png");

/**
 * Fonts
 */
const fontLoader = new THREE.FontLoader();

fontLoader.load("../static/fonts/helvetiker_regular.typeface.json", (font) => {
  // Material
  const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });

  // Text
  const textGeometry = new THREE.TextBufferGeometry(
    "Welcome to my portfolio!",
    {
      font: font,
      size: 0.6,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    }
  );

  //textGeometry.center();

  const text = new THREE.Mesh(textGeometry, material);
  text.position.x = -6.5;
  text.position.y = 1;

  scene.add(text);

  // Cubes
  const cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);

  for (let i = 0; i < 100; i++) {
    const cube = new THREE.Mesh(cubeGeometry, material);
    cube.position.x = (Math.random() - 0.5) * 10;
    cube.position.y = (Math.random() - 0.5) * 10;
    cube.position.z = (Math.random() - 0.5) * 10;
    cube.rotation.x = Math.random() * Math.PI;
    cube.rotation.y = Math.random() * Math.PI;
    const scale = Math.random();
    cube.scale.set(scale, scale, scale);

    scene.add(cube);
  }
});

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  80,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;
scene.add(camera);

// Controls
const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
