<template>
  <main>
    <div class="wrapper">
      <router-link class="home" to="/">Return to home page</router-link>
      <h1>About this page</h1>
      <p>
        This is a simple page where you can see the list of Ali kebaba shops in
        Croatia and all their details.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "AboutView",
};
</script>
<style scoped>
h1 {
  margin: 70px 0px 20px;
  font-size: 30px;
}
</style>
