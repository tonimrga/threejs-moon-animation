import * as THREE from 'three';

import '../style.css';

import createCamera from './camera';
import createControls from './controls';
import createLight from './light';
import createMoonMesh from './moon';
import createRenderer from './renderer';

const camera = createCamera();
const controls = createControls(camera);
const light = createLight();
const moonMesh = createMoonMesh();
const renderer = createRenderer();

// Scene definition and adding elements to scene
const scene = new THREE.Scene();
scene.add(light);
scene.add(moonMesh);
scene.add(camera);

// Rendering scene to the canvas
renderer.render(scene, camera);

// Resize handling
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation updates handling
const animate = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};
animate();
