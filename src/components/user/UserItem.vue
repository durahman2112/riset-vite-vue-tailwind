<template>
  <div
    class="p-4 rounded-md bg-white border hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition duration-300 cursor-pointer"
  >
    <div class="w-24 h-24 rounded-full mx-auto bg-sky-100 my-4">
      <img
        :src="`https://picsum.photos/id/${data.id}0/200/200`"
        class="w-24 h-24 rounded-full"
        alt=""
        srcset=""
      />
    </div>
    <h1 class="text-lg font-semibold antialiased text-center">
      {{ data.name }}
    </h1>
    <p
      class="text-xs text-gray-500 antialiased text-ellipsis overflow-hidden w-full text-center"
    >
      @{{ data.username }}
    </p>
    <!-- <hr class="my-4" />
    <p class="text-xs text-gray-500">Email</p>
    <p class="text-sm antialiased break-words w-full">
      {{ data.email }}
    </p>
    <p class="text-xs text-gray-500">Phone</p>
    <p class="text-sm antialiased break-words w-full">
      {{ data.phone }}
    </p> -->
    <!-- <button
      class="w-full px-4 py-2 bg-sky-500 mt-4 text-white rounded-xl hover:bg-sky-600 transition duration-150"
    >
      Detail
    </button> -->
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style></style>
