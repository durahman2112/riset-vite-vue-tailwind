<template>
  <AppBar />
  <div
    class="bg-white border-r fixed left-0 top-0 bottom-0 overflow-y-auto pt-20 p-4"
    style="width: 15rem"
  >
    test
  </div>
  <div
    class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 bg-gray-50 min-h-screen"
    style="margin-left: 15rem"
  >
    <h1 class="text-3xl font-semibold p-4">{{ this.$route.name }}</h1>
    <RouterView />
  </div>
</template>

<script setup>
import AppBar from "../components/base/AppBar.vue";
</script>

<style></style>
