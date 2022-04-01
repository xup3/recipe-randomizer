<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import SearchBar from "./components/SearchBar.vue";

console.log("App created");

onMounted(() => {
  console.log("App mounted");
});
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Recipe Randomizer" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/recipes">Recipes</RouterLink>
      </nav>

      <SearchBar />
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.scss";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  font-weight: normal;
}

main {
  margin-top: 2rem;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
