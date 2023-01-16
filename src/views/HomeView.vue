<template>
  <main>
    <div class="header">
      <h1>Home</h1>
      <router-link class="about" to="/about">About</router-link>
    </div>

    <SearchInput v-model="searchFilter" />
    <ShopList :searchFilter="searchFilter" />
  </main>
</template>

<script>
import { mapStores } from "pinia";
import ShopList from "../components/ShopList.vue";
import { useShops } from "../stores/store.js";
import SearchInput from "../components/SearchInput.vue";

export default {
  computed: {
    ...mapStores(useShops),
  },

  data() {
    return {
      searchFilter: "",
    };
  },
  created() {
    this.mainStore.fetchShops();
  },
  components: {
    ShopList,
    SearchInput,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 40px 70px;
}
.about {
  font-size: 20px;
  cursor: pointer;
  text-decoration: underline;
}
</style>
