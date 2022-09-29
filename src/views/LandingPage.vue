<template>
  <AppBarLanding />
  <div class="container md:px-24 mt-8">
    <div class="grid grid-cols-12">
      <div class="col-span-6">
        <h1 class="text-7xl font-bold" style="line-height: 84px">
          Lorem ipsum dolor consectetur sit amet
        </h1>
        <div class="mt-6"></div>
        <p class="text-lg text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          cumque quis optio alias tenetur porro explicabo a culpa. Hic, atque
          quam? Optio nisi pariatur provident cumque quae. Atque quia aperiam
          laborum, laudantium recusandae amet veniam minima. Maxime corrupti
          voluptatum incidunt.
        </p>
        <div class="mt-6"></div>
        <div class="row space-x-4">
          <button
            class="py-4 px-6 bg-sky-600 text-white text-base font-semibold rounded-md shadow-lg hover:bg-sky-700 hover:shadow-2xl transition duration-200"
          >
            Register Now!
          </button>
          <button
            class="py-4 px-6 bg-transparent border border-transparent text-sky-600 text-base font-semibold rounded-md hover:border hover:border-sky-600 transition duration-200"
          >
            Pelajari lebih dulu
          </button>
        </div>
      </div>
      <div class="col-span-6">
        <img
          src="https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=608&q=80"
          alt=""
          srcset=""
          class="rounded-xl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBarLanding from "../components/landingpage/AppBarLanding.vue";
</script>

<style></style>
