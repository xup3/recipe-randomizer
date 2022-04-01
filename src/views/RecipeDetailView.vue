<script setup lang="ts">
import { defineProps } from "vue";
import { useRecipeStore } from "@/stores/recipes";

const props = defineProps<{
  id: string;
}>();

const store = useRecipeStore();
const recipe = store.getRecipeById(props.id);
</script>

<template>
  <article class="recipe-detail-view">
    <img :src="recipe?.img" :alt="recipe?.heading" />

    <h1>{{ recipe?.heading }}</h1>

    <p>{{ recipe?.description }}</p>

    <div @click="$router.back()">Back</div>
  </article>
</template>
