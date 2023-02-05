import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function createControls(camera) {
    const canvas = document.querySelector('#three_canvas');
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;
    return controls;
}
