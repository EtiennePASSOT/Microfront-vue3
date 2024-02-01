<script setup>
import { onMounted } from "vue";

const BASE_URL_MICRO_APP = "/dist/my-micro-app";

const loadManifest = async () => {
  const manifest = await fetch(`${BASE_URL_MICRO_APP}/.vite/manifest.json`);
  return await manifest.json();
};

const loadScript = async (manifest) => {
  const script = document.createElement("script");
  script.src = `${BASE_URL_MICRO_APP}/${manifest["index.html"].file}`;
  script.type = "module";
  document.head.appendChild(script);
};

function loadApp() {
  const intervalId = setInterval(() => {
    if (window.apps && window.apps.microApp) {
      window.apps.microApp(document.getElementById("my-micro-app"));
      clearInterval(intervalId);
    }
  }, 10);
}

onMounted(async () => {
  const manifest = await loadManifest();
  loadScript(manifest);
  loadApp(manifest);
});
</script>

<template>
  <div class="my-app">
    <h1>My app</h1>

    <div id="my-micro-app"></div>
  </div>
</template>

<style lang="css">
.my-app {
  padding: 16px;
  background-color: #f0f0f0;
}
</style>
