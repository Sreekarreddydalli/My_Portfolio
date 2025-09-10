import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const WalkAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let mixer;
    let frameId;
    const clock = new THREE.Clock();
    const mountNode = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      mountNode.clientWidth / mountNode.clientHeight,
      1,
      1000
    );
    camera.position.set(0, 100, 400);
    camera.lookAt(new THREE.Vector3(0, 100, 0));

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    mountNode.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.2);
    directionalLight.position.set(0, 200, 100);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;
    controls.target.set(0, 100, 0);
    controls.update();

    // Load FBX
    const loader = new FBXLoader();
    loader.load(
      '/StartWalking2.fbx',
      (object) => {
        object.scale.set(1, 1, 1);
        object.position.set(0, 0, 0);

        object.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = false;
          }
        });

        scene.add(object);

        // Setup animation mixer
        mixer = new THREE.AnimationMixer(object);
        const clip = object.animations[0];

        if (clip) {
          const action = mixer.clipAction(clip);
          action.reset(); // Start from the beginning
          action.setLoop(THREE.LoopOnce); // Play only once
          action.clampWhenFinished = true; // Stop at the final frame
          action.enabled = true;

          // Start animation with a 2-second delay
          setTimeout(() => {
            action.play();
          }, 2000);
        } else {
          console.warn('No animation clips found.');
        }

        // Animation loop
        const animate = () => {
          frameId = requestAnimationFrame(animate);
          const delta = clock.getDelta();
          if (mixer) mixer.update(delta);
          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      (err) => {
        console.error('Error loading FBX model:', err);
      }
    );

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      if (mountNode) {
        while (mountNode.firstChild) {
          mountNode.removeChild(mountNode.firstChild);
        }
      }
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '20px',
      }}
    >
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '1600px',
          maxWidth: '1100px',
          overflow: 'hidden',
          marginLeft: '10px',
          marginTop: '-100px',
        }}
      />
    </div>
  );
};

export default WalkAnimation;