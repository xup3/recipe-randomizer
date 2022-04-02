<script setup lang="ts">
import { computed } from "vue";
import { useRecipeStore } from "@/stores/recipes";

const props = defineProps<{
  id: string;
}>();

const store = useRecipeStore();
const recipe = store.getRecipeById(props.id);

const historyDates = computed(() => {
  return recipe?.history;
});
</script>

<template>
  <article class="recipe-detail-view">
    <img :src="recipe?.img" :alt="recipe?.heading" />

    <h1>{{ recipe?.heading }}</h1>

    <p>{{ recipe?.description }}</p>

    <p>
      You've cooked this recipe on these Dates:
      {{ historyDates?.toLocaleString() }}
    </p>

    <div @click="$router.back()">Back</div>
  </article>
</template>
