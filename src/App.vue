<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import SearchBar from "./components/SearchBar.vue";

console.log("App created");

onMounted(() => {
  console.log("App mounted");
});

const whattoeat = () => {
  console.log("What to eat?");
};
</script>

<template>
  <header class="bg-white sticky top-0 z-10 pt-4">
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

  <footer class="bg-white sticky bottom-0 pb-4 pt-4">
    <button
      type="button"
      @click="whattoeat"
      class="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-lg px-5 py-2.5 text-center mt-2"
    >
      Tell me what I eat today
    </button>
  </footer>
</template>

<style>
@import "@/assets/base.scss";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
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
