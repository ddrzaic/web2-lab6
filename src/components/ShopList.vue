<template>
  <ul>
    <li
      v-for="item in filteredShops(searchFilter)"
      :key="item.id"
      v-on:click="showDetails(item)"
    >
      <div class="item">
        <div>
          <p class="name">{{ item.name }}</p>
          <p class="address">
            {{ item.address }}
          </p>
        </div>
        <p class="more-info">More info...</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { useShops } from "../stores/store.js";
import { mapState, mapStores } from "pinia";

export default {
  name: "List-Component",
  props: {
    searchFilter: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(useShops, ["filteredShops"]),
    ...mapStores(useShops),
  },
  methods: {
    showDetails(item) {
      this.mainStore.selectShop(item);
      this.$router.push("/shop");
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  font-size: 24px;
}
li {
  margin: 10px 60px 10px 30px;
  cursor: pointer;
}
.name {
  text-decoration: underline;
}
.item {
  display: flex;
  flex-direction: row;
}
.address {
  display: block;
  font-size: 16px;
  color: #ffcdc3;
  text-decoration: none !important;
}
p {
  margin: 0;
}
.more-info {
  margin-left: auto;
  color: #ffcdc3;
  font-size: 13px;
  text-decoration: underline;
  align-self: center;
}
</style>
