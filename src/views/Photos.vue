<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 xl:grid-cols-6 gap-3 p-4"
  >
    <div
      class="rounded-lg hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition duration-300"
      v-for="(image, i) in photos"
      :key="i"
    >
      <img :src="image.url" alt="" srcset="" />
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

const photos = computed(() => {
  return store.state.photos.photos;
});
async function getPhotos() {
  await store.dispatch("getPhotos");
}
onMounted(() => {
  getPhotos();
});
</script>

<style scoped></style>
