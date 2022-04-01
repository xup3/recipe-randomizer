<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold text-gray-800">
      {{ msg }}
    </h1>
    <h3 class="text-lg text-gray-500">Never think about what to eat again</h3>
  </div>
</template>
