<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 xl:grid-cols-6 gap-3 p-4"
  >
    <UserItem v-for="(user, i) in users" :key="i" :data="user" />
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import UserItem from "../components/user/UserItem.vue";
const store = useStore();

const users = computed(() => {
  return store.state.user.users;
});
function getUser() {
  store.dispatch("getUser");
}
onMounted(() => {
  getUser();
});
</script>

<style scoped></style>
