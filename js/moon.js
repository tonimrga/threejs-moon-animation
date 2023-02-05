import * as THREE from 'three';

// Moon shape definition
export default function createMoonMesh() {
    const moonGeometry = new THREE.SphereGeometry(3, 64, 64);
    const moonTexture = new THREE.TextureLoader().load('../moon_texture.jpg');
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
    return moonMesh;
}
