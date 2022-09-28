<template>
  <div
    class="p-4 rounded-md bg-white border hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition duration-300 cursor-pointer"
  >
    <h1 class="text-lg font-semibold antialiased">
      {{ data.name }}
    </h1>
    <p
      class="text-xs text-gray-500 antialiased text-ellipsis overflow-hidden w-full"
    >
      @{{ data.username }}
    </p>
    <hr class="my-4" />
    <p class="text-xs text-gray-500">Email</p>
    <p class="text-body antialiased break-words w-full">
      {{ data.email }}
    </p>
    <p class="text-xs text-gray-500">Phone</p>
    <p class="text-body antialiased break-words w-full">
      {{ data.phone }}
    </p>
    <p class="text-xs text-gray-500">Website</p>
    <p class="text-body antialiased break-words w-full">
      {{ data.website }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style></style>
