<template>
  <div>
    <input
      type="text"
      v-model="searchFilter"
      @input="search"
      placeholder="Search..."
    />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      searchFilter: this.value,
    };
  },
  watch: {
    modelValue(newValue) {
      this.searchFilter = newValue;
    },
  },
  methods: {
    search() {
      // emit the input event
      this.$emit("update:modelValue", this.searchFilter);
    },
  },
};
</script>
