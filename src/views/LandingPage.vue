<template>
  <AppBarLanding />
  <div class="container md:px-24 mt-8">
    <div class="grid grid-cols-12">
      <div class="md:col-span-6 col-span-12 order-1 md:order-1 pt-10">
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
      <div class="md:col-span-6 col-span-12 order-2 md:order-2 pt-10">
        <TigaJs />
      </div>
    </div>
    <div
      class="bg-sky-900 text-white w-full rounded-xl p-10 grid grid-cols-12 mt-28"
    >
      <div class="md:col-span-5 col-span-12 flex justify-end relative">
        <img
          src="../assets/image/landing-2.svg"
          alt=""
          srcset=""
          width="500"
          class="absolute left-0"
          style="bottom: -2.5rem"
        />
      </div>
      <div class="md:col-span-7 col-span-12">
        <p class="font-semibold text-3xl" style="line-hight: 50px">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          totam dicta illo?
        </p>
        <p class="text-gray-300 text-lg mt-6" style="line-hight: 30px">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          assumenda placeat eveniet earum ullam! Nemo ipsa impedit quidem,
          dolorem nobis non eos voluptatibus et magnam fuga explicabo quaerat
          quod facere doloribus. Commodi necessitatibus earum sapiente nihil,
          error explicabo?
        </p>
        <div class="flex items-center space-x-10 mt-6">
          <div class="flex flex-col items-star">
            <p class="text-3xl font-semibold">12K+</p>
            <p class="text-gray-300 text-lg">Users</p>
          </div>
          <div class="flex flex-col items-star">
            <p class="text-3xl font-semibold">240+</p>
            <p class="text-gray-300 text-lg">Projects</p>
          </div>
          <div class="flex flex-col items-star">
            <p class="text-3xl font-semibold">93%</p>
            <p class="text-gray-300 text-lg">Positive Ratings</p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-32"></div>
  </div>
</template>

<script setup>
import AppBarLanding from "../components/landingpage/AppBarLanding.vue";
import TigaJs from "../components/landingpage/TigaJs.vue";
</script>

<style></style>
