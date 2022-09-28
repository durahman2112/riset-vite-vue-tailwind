<template>
  <div
    class="h-16 bg-white border-b-gray-200 border-b flex items-center px-4 justify-between sticky top-0 z-10"
  >
    <h1 class="text-xl font-medium">Research Vite + Vue 3 + Tailwind</h1>
    <div class="flex space-x-6 menu">
      <router-link
        class="hover:text-sky-400"
        v-for="(menu, i) in data.menus"
        :key="i"
        :to="{ name: menu.page }"
        @click="selectedMenu = menu.name"
        :class="selectedMenu == menu.name ? 'text-sky-600 font-medium' : ''"
        >{{ menu.name }}</router-link
      >
    </div>
    <i class="ci-message_round"></i>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
const selectedMenu = ref("User");
const data = reactive({
  menus: [
    {
      name: "Posts",
      page: "Posts",
    },
    {
      name: "Photos",
      page: "Photos",
    },
    {
      name: "Todos",
      page: "Todos",
    },
    {
      name: "User",
      page: "User",
    },
  ],
});
</script>

<style scoped></style>
