export const useStore = defineStore("useStore", () => {
  let test = ref<string>("");

  return {
    test,
  };
});