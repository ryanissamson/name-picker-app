<!-- Modal.vue: This modal allows users to trigger a random selection of a participant. It includes a logo, title, description, and a button to start the selection process. -->

<template>
  <transition name="fade-modal">
    <div class="modal-overlay">
      <div class="modal">
        <!-- Display the app logo above the title -->
        <img :src="logo" alt="App logo" class="modal-logo" />

        <!-- Render the modal title and description dynamically -->
        <p v-html="config.modalTitle" class="modal-title"></p>
        <p v-html="participantCountText"></p>

        <!-- Button to trigger random participant selection -->
        <button @click="$emit('select-random')">{{ config.buttonText }}</button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'; // Import computed
import { config } from '@/config'; // Import the config file
import logo from '@/assets/app-logo.png'; // Import the app logo

const props = defineProps({
  registrantCount: Number, // The total number of registrants
});

// Dynamically replace the [count] token in the modal description
const participantCountText = computed(() => {
  return config.modalDescription.replace('[count]', props.registrantCount);
});
</script>

<style scoped>
/* Modal overlay for the initial modal */
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
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 60vw;
  max-width: 800px;
  min-height: 60vh;
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

/* Title and description styling */
.modal-title {
  font-size: 3em;
  font-weight: normal;
  margin: 0;
  padding: 0;
}
p {
  font-size: 2em;
}

/* Button styling */
button {
  background-color: #ee0000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  font-size: 2em;
  cursor: pointer;
  margin-top: 30px;
}
button:hover {
  background-color: #a60000; /* Darker red on hover */
}

.fade-modal-enter-active, .fade-modal-leave-active {
  transition: opacity 2s ease;
}
.fade-modal-enter, .fade-modal-leave-to {
  opacity: 0;
}
</style>
