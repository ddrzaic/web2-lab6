<template>
  <main>
    <h1>{{ shop.name }}</h1>
    <p>{{ shop.address }}</p>
    <p>City: {{ shop.city }}</p>
    <p>Working hours: {{ shop.starts_at }} - {{ shop.ends_at }}</p>
    <p>Phone: {{ shop.phone }}</p>
    <p>Glovo delivers: {{ shop.has_glovo ? "Yes" : "No" }}</p>
  </main>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
    shop: {
      type: Object,
      required: true,
    },
  },
};
</script>
