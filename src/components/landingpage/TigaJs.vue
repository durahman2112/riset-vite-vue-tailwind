<template>
  <div id="container" class="w-full h-full flex items-center"></div>
</template>

<script setup>
import * as THREE from "three";

// import Stats from "three/addons/libs/stats.module.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { onMounted } from "@vue/runtime-core";
import LittlestTokyo from "./LittlestTokyo.glb";
onMounted(() => {
  let mixer;

  const clock = new THREE.Clock();
  const container = document.getElementById("container");

  // const stats = new Stats();
  // container.appendChild(stats.dom);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(600, 600);
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  const pmremGenerator = new THREE.PMREMGenerator(renderer);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  scene.environment = pmremGenerator.fromScene(
    new RoomEnvironment(),
    0.04
  ).texture;

  const camera = new THREE.PerspectiveCamera(40, 400 / 400, 1, 100);
  camera.position.set(5, 2, 8);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.5, 0);
  controls.update();
  controls.enablePan = false;
  controls.enableDamping = true;

  const dracoLoader = new DRACOLoader();
  // dracoLoader.setDecoderPath("./threejs/");

  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  loader.load(
    LittlestTokyo,
    function (gltf) {
      const model = gltf.scene;
      model.position.set(1, 1, 0);
      model.scale.set(0.01, 0.01, 0.01);
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      mixer.clipAction(gltf.animations[0]).play();

      animate();
    },
    undefined,
    function (e) {
      console.error(e);
    }
  );

  window.onresize = function () {
    camera.aspect = 400 / 400;
    camera.updateProjectionMatrix();

    renderer.setSize(400, 400);
  };

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    mixer.update(delta);

    controls.update();

    // stats.update();

    renderer.render(scene, camera);
  }
});
</script>

<style></style>
