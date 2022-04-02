import { defineStore } from "pinia";
import type { Recipe } from "@/types";

export const useRecipeStore = defineStore({
  id: "recipes",
  state: (): { recipes: Recipe[] } => ({
    recipes: [
      {
        id: 1,
        heading: "First recipe",
        description: "This is such a awesome recipe, you need to try that!",
        img: "",
        planned: [new Date()],
        history: [new Date(), new Date("December 17, 1995 03:24:00")],
      },
      {
        id: 2,
        heading: "Second recipe",
        description: "This is such a awesome recipe, you need to try that!",
        img: "",
        planned: [new Date()],
        history: [],
      },
      {
        id: 3,
        heading: "Third recipe",
        description: "This is such a awesome recipe, you need to try that!",
        img: "",
        planned: [new Date()],
        history: [],
      },
      {
        id: 4,
        heading: "Fourth recipe",
        description: "This is such a awesome recipe, you need to try that!",
        img: "",
        planned: [new Date()],
        history: [],
      },
      {
        id: 5,
        heading: "Fifth recipe",
        description: "This is such a awesome recipe, you need to try that!",
        img: "",
        planned: [new Date()],
        history: [],
      },
      {
        id: 6,
        heading: "Sixth recipe",
        description: "This is such a awesome recipe, you need to try that!",
        img: "",
        planned: [new Date()],
        history: [],
      },
    ],
  }),
  getters: {
    getRecipeById: (state) => {
      return (recipeId: string) =>
        state.recipes.find((recipe) => recipe.id.toString() === recipeId);
    },
  },
  actions: {
    removeRecipe(recipe: Recipe) {
      this.recipes.splice(this.recipes.indexOf(recipe), 1);
    },
  },
});
