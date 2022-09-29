<template>
  <div
    class="h-16 bg-white border-b-gray-200 border-b flex items-center px-4 justify-between sticky top-0 z-10"
  >
    <div class="flex space-x-3 items-center text-sky-600">
      <i class="ci-cookie text-2xl"></i>
      <h1 class="text-xl font-semibold">Research Vite + Vue 3 + Tailwind</h1>
      <!-- <h1 class="text-xl font-bold">VVT</h1> -->
    </div>
    <div class="flex space-x-2 menu">
      <router-link
        class="hover:text-sky-400 flex items-center py-2 px-3 rounded-md space-x-1 transition duration-150"
        v-for="(menu, i) in data.menus"
        :key="i"
        :to="{ name: menu.page }"
        @click="selectedMenu = menu.name"
        :class="selectedMenu == menu.name ? 'text-sky-600  bg-sky-100' : ''"
      >
        <i :class="`ci-${menu.icon}`"></i>
        <span class="uppercase text-sm">
          {{ menu.name }}
        </span>
      </router-link>
      <modal-dialog />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import ModalDialog from "./ModalDialog.vue";
const selectedMenu = ref("User");
const data = reactive({
  menus: [
    {
      name: "Home",
      page: "LandingPage",
      icon: "home_alt_outline",
    },
    {
      name: "Posts",
      page: "Posts",
      icon: "note",
    },
    {
      name: "Photos",
      page: "Photos",
      icon: "image",
    },
    // {
    //   name: "Todos",
    //   page: "Todos",
    //   icon: "list_check",
    // },
    {
      name: "User",
      page: "User",
      icon: "group",
    },
  ],
});
</script>

<style scoped></style>
