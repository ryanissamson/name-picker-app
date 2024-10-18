<!-- NameGrid.vue: Displays a responsive grid of participant names with a staggered fade-in effect. Each name is shown in a NameTile component. -->

<template>
  <div class="name-grid">
    <NameTile
        v-for="(name, index) in names"
        :key="name"
        :name="name"
        :isHidden="hiddenNames.includes(name)"
        :inlineStyle="getTileStyle()"
    />
  </div>
</template>

<script>
import NameTile from './NameTile.vue';

export default {
  components: {
    NameTile, // Individual tiles for each name
  },
  props: {
    names: {
      type: Array,
      required: true, // List of names to display
    },
    hiddenNames: {
      type: Array,
      default: () => [], // Track names that are hidden (faded out)
    },
  },
  methods: {
    // Generates a random animation delay for staggered fade-in
    getTileStyle() {
      const randomDelay = Math.random() * 5000 + 3000; // Delay between 3-5 seconds
      return {
        animationDelay: `${randomDelay}ms`,
      };
    },
  },
};
</script>

<style scoped>
/* Responsive grid layout for name tiles */
.name-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Responsive columns */
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  justify-items: stretch;
  align-items: stretch;
}
</style>
