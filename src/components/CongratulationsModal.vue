<!-- CongratulationsModal.vue: Displays a modal with the winner's name, a logo, and an optional congratulatory image (congrats.gif). Includes a confetti effect for celebration. -->

<template>
  <transition name="fade-modal">
    <div v-if="show" class="modal-overlay">
      <!-- Confetti effect covering the screen -->
      <div class="confetti-container">
        <div v-for="particle in confettiParticles" :key="particle" class="confetti" :style="getRandomStyles()"></div>
      </div>

      <div class="modal">
        <!-- App logo displayed at the top -->
        <img :src="logo" alt="App logo" class="modal-logo" />

        <!-- Modal title and winner's name -->
        <h1>{{ config.winnerModalTitle }}</h1>
        <p class="swinging-text" v-html="winnerMessage"></p>

        <!-- Display the congratulatory image below the text -->
        <img :src="congratsGif" alt="Congratulations Image" class="congrats-image" />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed, ref } from 'vue';
import { config } from '../config'; // Import config file
import logo from '@/assets/app-logo.png'; // Import the app logo
import congratsGif from '@/assets/congrats.gif'; // Import the congratulatory image

const props = defineProps({
  winnerName: String, // Name of the winner
  show: Boolean,      // Boolean to control the visibility of the modal
});

// Compute the winner's name in the message dynamically
const winnerMessage = computed(() => {
  return config.winnerModalDescription.replace('[name]', props.winnerName);
});

// Generate confetti particles for the celebration effect
const confettiParticles = ref(Array.from({ length: 100 }, (_, index) => index));

// Randomize confetti particle styles (position, size, delay)
const getRandomStyles = () => {
  const randomLeft = Math.random() * 100;
  const randomSize = Math.random() * (15 - 5) + 5;
  const randomDelay = Math.random() * 5;
  const randomDuration = Math.random() * (3 - 1) + 1;
  return {
    left: `${randomLeft}%`,
    width: `${randomSize}px`,
    height: `${randomSize}px`,
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`,
  };
};
</script>

<style scoped>
/* Modal overlay styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal content */
.modal {
  background-color: #ffffff;
  color: #000000;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 60vw;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Logo styling */
.modal-logo {
  width: 240px;
  margin-bottom: 20px;
}

/* Winner's name animation (swing effect) */
h1 {
  font-size: 3em;
  color: #000000;
}
p {
  font-size: 2em;
  color: #000000;
  white-space: pre-wrap;
}
.swinging-text {
  display: inline-block;
  animation: swing 3s ease-in-out infinite;
}
@keyframes swing {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

/* Congratulations image */
.congrats-image {
  margin-top: 20px;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* Confetti styles */
.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: 1000;
}
.confetti {
  position: absolute;
  background-color: var(--confetti-color, #fff);
  opacity: 0.8;
  animation: confetti-fall 3s linear infinite;
  transform-origin: center;
  top: -10px;
}
@keyframes confetti-fall {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(100vh) rotate(720deg); }
}
.confetti:nth-child(odd) { --confetti-color: #f44336; } /* Red */
.confetti:nth-child(even) { --confetti-color: #2196f3; } /* Blue */
.confetti:nth-child(3n) { --confetti-color: #ffeb3b; } /* Yellow */
.confetti:nth-child(4n) { --confetti-color: #4caf50; } /* Green */
.confetti:nth-child(5n) { --confetti-color: #e91e63; } /* Pink */
</style>
