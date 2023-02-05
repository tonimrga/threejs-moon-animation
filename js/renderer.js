import * as THREE from 'three';

export default function createRenderer() {
    const canvas = document.querySelector('#three_canvas');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(2);
    return renderer;
}
