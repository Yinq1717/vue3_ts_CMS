import { defineStore } from "pinia";

const useCounter = defineStore("counter", {
  state: () => ({
    count: 20,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    changeCount(newCount: number) {
      this.count = newCount;
    },
  },
});

export default useCounter;
