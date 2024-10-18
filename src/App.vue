<!-- App.vue: Main entry point of the app that controls the background image, overlay, and name cards display logic. -->

<script setup>
import { ref, onMounted } from 'vue';
import NameList from './components/NameList.vue';
import { config } from './config'; // Import configuration variables

// State variables to control visibility of background, overlay, and name cards
const showBackground = ref(true);
const showWhiteOverlay = ref(true);
const showNameCards = ref(false);

// Path to the background image
const backgroundImage = ref('@/assets/app-logo.png');

// Control the timing of background, overlay, and name cards using onMounted lifecycle hook
onMounted(() => {
  setTimeout(() => {
    showWhiteOverlay.value = false;
  }, 2000); // Hide white overlay after 2 seconds

  setTimeout(() => {
    showBackground.value = false;
  }, 12000); // Hide background after 12 seconds

  setTimeout(() => {
    showNameCards.value = true;
  }, 3000); // Show name cards after 3 seconds
});
</script>

<template>
  <div id="app">
    <div v-if="showBackground" class="background-image"></div>
    <transition name="fade-overlay">
      <div v-if="showWhiteOverlay" class="white-overlay"></div>
    </transition>
    <transition name="fade-cards">
      <div v-if="showNameCards">
        <NameList :names="config.names" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Global styles for fonts */
* {
  font-family: 'Arial', sans-serif;
}

/* Main app container */
#app {
  margin: 0 !important;
  padding: 0 !important;
  position: relative;
}

/* Ensure full screen coverage without scrolling */
html, body {
  margin: 0 !important;
  padding: 0;
  height: 100%;
  overflow: hidden;
  font-family: 'Arial', sans-serif;
}

/* Background image styling */
.background-image {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vh;
  background-image: url('@/assets/app-logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
}

/* White overlay styling */
.white-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 10;
}

/* Fade animations for overlay and name cards */
.fade-overlay-enter-active, .fade-overlay-leave-active {
  transition: opacity 2s ease;
}
.fade-overlay-enter, .fade-overlay-leave-to {
  opacity: 1;
}
.fade-overlay-leave-to {
  opacity: 0;
}

.fade-cards-enter-active, .fade-cards-leave-active {
  transition: opacity 2s ease;
}
.fade-cards-enter, .fade-cards-leave-to {
  opacity: 0;
}
</style>
