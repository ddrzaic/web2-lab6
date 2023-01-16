<script>
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    RouterView,
  },
};
</script>

<template>
  <RouterView />
</template>

<style>
* {
  background-color: black;
  color: #ececec;
}
input {
  background-color: #ececec;
  color: black;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  margin-left: 60px;
}
*:focus {
  outline: none;
}
.wrapper {
  display: flex;
  flex-direction: column;
  margin: 40px 80px 70px;
}
p {
  font-size: 20px;
}
</style>
