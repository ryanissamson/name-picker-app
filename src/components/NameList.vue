<!-- NameList.vue: Manages the display of the name grid and modals for selecting a random winner and showing the winner announcement. -->

<template>
  <div class="container">
    <!-- NameGrid with the staggered name fade-in effect -->
    <NameGrid :names="visibleNames" :hiddenNames="hiddenNames" :selectedName="selectedName" :shouldFadeOut="triggerFadeOut" />

    <!-- Modal for selecting a random participant -->
    <Modal v-if="showModal" :registrantCount="visibleNames.length" @select-random="handleRandomSelection" />

    <!-- Modal for announcing the winner -->
    <CongratulationsModal
        v-if="showCongratsModal"
        :winnerName="selectedName"
        :show="showCongratsModal"
        @close="showCongratsModal = false"
    />
  </div>
</template>

<script>
import NameGrid from './NameGrid.vue';
import Modal from './Modal.vue';
import CongratulationsModal from './CongratulationsModal.vue';
import { config } from '@/config'; // Import config for names and settings

export default {
  components: {
    NameGrid, Modal, CongratulationsModal,
  },
  data() {
    return {
      names: config.names, // List of names from config
      visibleNames: [], // Initially empty for staggered fade-in
      hiddenNames: [], // Track which names are hidden (faded out)
      selectedName: null, // Name of the selected winner
      showModal: false, // Controls visibility of the selection modal
      showCongratsModal: false, // Controls visibility of the congratulations modal
      triggerFadeOut: false, // Triggers fade-out of name tiles
      excludedNames: config.excludedNames, // Names to exclude from selection
    };
  },
  mounted() {
    // Staggered fade-in for names after a delay
    setTimeout(() => {
      this.visibleNames = this.names;
    }, 500);

    // Show the selection modal after all names have loaded
    setTimeout(() => {
      this.showModal = true;
    }, 10500);
  },
  computed: {
    // Returns the total count of registrants
    registrantCount() {
      return this.names.length;
    },
  },
  methods: {
    // Handles random name selection, excluding certain names
    handleRandomSelection() {
      const selectableNames = this.names.filter(name => !this.excludedNames.includes(name));
      this.selectedName = selectableNames[Math.floor(Math.random() * selectableNames.length)];

      // Start fade-out of modal and name tiles
      setTimeout(() => {
        this.showModal = false;
      }, 500);

      setTimeout(() => {
        this.triggerFadeOut = true;
        this.randomFadeOutNames();

        // Show the congratulations modal after names have faded out
        setTimeout(() => {
          this.showCongratsModal = true;
        }, 13000);
      }, 2000);
    },
    // Fades out names randomly except for the winner
    randomFadeOutNames() {
      const namesToRemove = this.names.filter(name => name !== this.selectedName);
      const shuffledNames = this.shuffleArray(namesToRemove);
      const timeInterval = 10000 / shuffledNames.length;

      shuffledNames.forEach((name, index) => {
        setTimeout(() => {
          this.hiddenNames.push(name);
        }, index * timeInterval);
      });
    },
    // Shuffles the array of names (Fisher-Yates algorithm)
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
};
</script>

<style scoped>
/* Full-page container for the name grid and modals */
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
