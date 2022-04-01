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
  <div class="recipe_view">
    <h1>This is the page for recipe id: {{ props.id }}</h1>

    {{ recipe }}

    <div @click="$router.back()">Back</div>
  </div>
</template>
