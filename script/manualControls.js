import { OrbitControls } from './libs/OrbitControls.js';
import { isMobile } from './utils.js';


function setupManualControls(camera, canvas){
    // Init mouse and touch controls
    const controls = new OrbitControls(camera, canvas);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;


    if(isMobile()){
        controls.rotateSpeed = 0.7;
    } else {
        controls.rotateSpeed = 0.5;
    }
    
    // reverse control
    controls.rotateSpeed *= -1;

    controls.target.set(0, 0, 0);

    controls.update();

    controls.enabled = true;

    return controls;
}

export { setupManualControls }