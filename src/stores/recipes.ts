import { defineStore } from "pinia";

export const useRecipeStore = defineStore({
  id: "recipes",
  state: () => ({
    recipes: [
      {
        id: 1,
        heading: "First recipe",
        description: "This is such a awesome recipe, you need to try that!",
        img: "",
      },
      {
        id: 2,
        heading: "Second recipe",
        description: "This is such a awesome recipe, you need to try that!",
        img: "",
      },
      {
        id: 3,
        heading: "Third recipe",
        description: "This is such a awesome recipe, you need to try that!",
        img: "",
      },
      {
        id: 4,
        heading: "Fourth recipe",
        description: "This is such a awesome recipe, you need to try that!",
        img: "",
      },
      {
        id: 5,
        heading: "Fifth recipe",
        description: "This is such a awesome recipe, you need to try that!",
        img: "",
      },
      {
        id: 6,
        heading: "Sixth recipe",
        description: "This is such a awesome recipe, you need to try that!",
        img: "",
      },
    ],
  }),
  getters: {
    getRecipeById: (state) => {
      return (recipeId: string) =>
        state.recipes.find((recipe) => recipe.id.toString() === recipeId);
    },
  },
});
