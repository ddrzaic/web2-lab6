import { defineStore } from "pinia";

export const useShops = defineStore({
  id: "main",
  state: () => ({
    stores: [],
    storeView: {},
  }),
  getters: {
    shops() {
      return this.stores;
    },
    filteredShops: (state) => (filter) => {
      return state.stores.filter((store) => {
        return (
          store.name.toLowerCase() + store.address.toLowerCase()
        ).includes(filter.toLowerCase());
      });
    },
    selectedShop() {
      return this.storeView;
    },
  },
  actions: {
    fetchShops() {
      try {
        fetch(import.meta.env.VITE_BACKEND_URL)
          .then((response) => response.json())
          .then((data) => {
            this.stores = data["shops"];
          });
      } catch (error) {
        console.log(error);
      }
    },
    selectShop(shop) {
      this.storeView = shop;
    },
  },
});
