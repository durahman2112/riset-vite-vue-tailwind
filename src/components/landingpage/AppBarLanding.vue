<template>
  <div
    class="h-16 bg-white border-b-gray-200 flex items-center px-4 justify-between sticky top-0 z-10 container md:px-24"
  >
    <div class="flex space-x-3 items-center text-sky-600">
      <i class="ci-cookie text-2xl"></i>
      <!-- <h1 class="text-xl font-semibold">Vite Vue Tailwind</h1> -->
      <!-- <h1 class="text-xl font-bold">VVT</h1> -->
      <div class="flex space-x-2 menu">
        <router-link
          class="hover:text-sky-400 flex items-center py-2 px-3 rounded-md space-x-1 transition duration-150"
          v-for="(menu, i) in data.menus"
          :key="i"
          :to="{ name: menu.page }"
          @click="selectedMenu = menu.name"
          :class="selectedMenu == menu.name ? 'text-sky-600' : 'text-gray-400'"
        >
          <!-- <i :class="`ci-${menu.icon}`"></i> -->
          <span class="uppercase text-sm">
            {{ menu.name }}
          </span>
        </router-link>
      </div>
    </div>
    <!-- <modal-dialog /> -->
    <button
      class="hover:text-white hover:bg-sky-600 flex items-center py-2 px-6 rounded-md space-x-1 transition duration-150 border"
      type="button"
    >
      Log In
    </button>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import ModalDialog from "../base/ModalDialog.vue";
const selectedMenu = ref("Home");
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
