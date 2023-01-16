<template>
  <main>
    <div class="wrapper">
      <router-link class="home" to="/">Return to home page</router-link>
      <ShopInfo :shop="selectedShop" v-if="selectedShop.id" />
    </div>
  </main>
</template>

<script>
import { mapState } from "pinia";
import { useShops } from "../stores/store.js";
import ShopInfo from "../components/ShopInfo.vue";

export default {
  computed: {
    ...mapState(useShops, ["selectedShop"]),
  },

  data() {
    return {
      store: {},
    };
  },
  components: {
    ShopInfo,
  },
  created() {
    if (!this.selectedShop.id) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.home {
  font-size: 17px;
  cursor: pointer;
  text-decoration: underline;
  margin-bottom: 50px;
}
</style>
