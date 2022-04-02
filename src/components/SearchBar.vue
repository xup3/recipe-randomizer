<script setup lang="ts">
import { ref } from "vue";

const recipe_search = ref("");

const inputChangeHandler = (e: Event): void => {
  console.log((e.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    type="text"
    class="focus:ring-indigo-500 focus:border-indigo-500 pl-2 pr-12 sm:text-sm border-gray-300 rounded-md mt-4 relative block w-full shadow-sm"
    name="recipe_search"
    placeholder="Search a recipe"
    v-model="recipe_search"
    @change="inputChangeHandler"
  />
</template>
