<script setup lang="ts">
import { ref } from "vue";

const recipe_search = ref("");

const inputChangeHandler = (e: Event): void => {
  console.log((e.target as HTMLInputElement).value);
};
</script>

<template>
  <div>
    <label>
      Search:
      <input
        type="text"
        name="recipe_search"
        v-model="recipe_search"
        @change="inputChangeHandler"
      />
    </label>
  </div>
</template>
