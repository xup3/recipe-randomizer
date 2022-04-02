<script setup lang="ts">
import type { Recipe } from "@/types";

defineProps<{
  recipe: Recipe;
}>();
</script>

<template>
  <router-link :to="{ path: `/recipe/${recipe.id}` }">
    <div class="recipe mb-2 border border-gray-400 rounded-md p-2">
      <h3 class="recipe-heading font-medium text-xl mb-2">
        {{ recipe.heading }}
      </h3>
      <img class="recipe-image" :src="recipe.img" :alt="recipe.heading" />
      <p class="recipe-description">{{ recipe.description }}</p>
    </div>
  </router-link>
</template>
