import * as THREE from 'three';

export default function createLight() {
    const light = new THREE.PointLight(0xFFFFFF, 1);
    light.position.set(-100, 10, 50);
    return light;
}
