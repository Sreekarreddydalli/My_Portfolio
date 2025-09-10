import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const HelloWave = () => {
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
    camera.position.set(0, 150, 400);
    camera.lookAt(new THREE.Vector3(0, 100, 0));

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    mountNode.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(0, 200, 100);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.enableRotate = true;
    controls.target.set(0, 100, 0);
    controls.update();

    // Load FBX
    const loader = new FBXLoader();
    loader.load(
      '/Wave.fbx',
      (object) => {
        object.scale.set(1.2, 1.2, 1.2);
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
          action.setLoop(THREE.LoopRepeat);
          action.clampWhenFinished = false;
          action.reset();
          action.play();

          let loopCount = 0;

          mixer.addEventListener('loop', () => {
            loopCount++;
            if (loopCount === 1) {
              // Slow down after first loop
              action.timeScale = 0.8;
              console.log('Animation slowed for subsequent loops');
            }
          });
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
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        transform: 'translateY(30px) scale(1.2)',
      }}
    />
  );
};

export default HelloWave;
