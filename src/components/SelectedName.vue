<!-- SelectedName.vue -->

<template>
  <div v-if="selectedName" class="selected-name">
    <h2>Selected Name: {{ selectedName }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    selectedName: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.selected-name {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
}
</style>
