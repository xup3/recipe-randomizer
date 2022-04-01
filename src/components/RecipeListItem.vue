<script setup lang="ts">
import { defineProps } from "vue";

type Recipe = {
  id: number;
  heading: string;
  description: string;
  img: string;
};

const props = defineProps<{
  recipe: Recipe;
}>();
</script>

<template>
  <router-link :to="{ path: `/recipe/${props.recipe.id}` }">
    <div class="recipe mb-2 border border-gray-400 rounded-md p-2">
      <h3 class="recipe-heading font-medium text-xl mb-2">
        {{ props.recipe.heading }}
      </h3>
      <img
        class="recipe-image"
        :src="props.recipe.img"
        :alt="props.recipe.heading"
      />
      <p class="recipe-description">{{ props.recipe.description }}</p>
    </div>
  </router-link>
</template>
