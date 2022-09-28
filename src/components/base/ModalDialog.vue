<template>
  <button
    class="hover:text-sky-400 flex items-center py-2 px-3 rounded-md space-x-1 transition duration-150"
    type="button"
    @click="modal = true"
  >
    <i :class="`ci-list_check`"></i>
    Todos
  </button>
  <div
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-black bg-opacity-40 flex"
    :class="modal ? '' : 'hidden'"
  >
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto m-auto">
      <!-- Modal content -->
      <div
        class="relative bg-white rounded-lg shadow dark:bg-gray-700 transition duration-200 ease-in-out delay-200"
      >
        <!-- Modal header -->
        <div
          class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            To do List
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click="modal = false"
          >
            <i class="ci-close_big"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6 h-96 overflow-y-auto">
          <div
            v-for="(todo, i) in todos"
            :key="i"
            class="flex items-center justify-between space-x-2"
          >
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                name=""
                id=""
                :checked="todo.completed"
                class="w-5 h-5 rounded-md accent-sky-500 active:ring"
                @click="todo.completed = !todo.completed"
              />
              <span>
                {{ todo.title }}
              </span>
            </div>
            <div
              class="px-2 py-1 rounded-lg text-sm"
              :class="todo.completed ? 'bg-green-300' : 'bg-gray-100'"
            >
              {{ todo.completed ? "Done" : "Ongoing" }}
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
        >
          <button
            data-modal-toggle="defaultModal"
            type="button"
            class="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          >
            I accept
          </button>
          <button
            data-modal-toggle="defaultModal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-sky-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
const modal = ref(false);
const store = useStore();

const todos = computed(() => {
  return store.state.todos.todos;
});

async function getData() {
  await store.dispatch("getTodos");
}
onMounted(() => {
  getData();
});
</script>

<style></style>
