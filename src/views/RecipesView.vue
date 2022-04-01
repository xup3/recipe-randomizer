<script setup lang="ts">
import RecipeDetails from "../components/RecipeDetails.vue";
import { useRecipeStore } from "@/stores/recipes";

type Recipe = {
  id: number;
  heading: string;
  description: string;
  img: string;
};

const store = useRecipeStore();
const recipes: Recipe[] = store.$state.recipes;
</script>

<template>
  <div class="recipes">
    <h2 class="mb-4 font-bold text-2xl">This is the recipe page</h2>

    <div class="recipe-container">
      <RecipeDetails
        v-for="recipe in recipes"
        :recipe="recipe"
        v-bind:key="recipe.id"
      />
    </div>
  </div>
</template>
