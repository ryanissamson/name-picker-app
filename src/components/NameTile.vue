<!-- NameTile.vue: Represents an individual tile with a participant's name. Supports fade-out functionality and staggered animations. -->

<template>
  <transition name="fade">
    <div class="name-tile" :class="{ hidden: isHidden, fadeOut: shouldFadeOut }" :style="inlineStyle">
      <span v-for="(namePart, index) in nameParts" :key="index">{{ namePart }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true, // The name to display in the tile
    },
    isHidden: {
      type: Boolean,
      default: false, // Controls whether the tile is hidden
    },
    shouldFadeOut: {
      type: Boolean,
      default: false, // Controls the fade-out animation
    },
    inlineStyle: {
      type: Object,
      required: true, // Receives the animation delay style
    },
  },
  computed: {
    // Splits the name into parts (first and last name, etc.)
    nameParts() {
      return this.name.split(' ');
    },
  },
};
</script>

<style scoped>
/* Styles for individual name tiles */
.name-tile {
  background-color: #ee0000;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  opacity: 0; /* Initially hidden for fade-in */
  animation: fadeIn 1.5s ease forwards; /* Fade-in effect */
  transition: opacity 1.5s ease, visibility 1.5s ease;
  flex-direction: column; /* Stack the name parts vertically */
}

.hidden {
  visibility: hidden; /* Hide without affecting layout */
}

.fadeOut {
  animation: fadeOut 1.5s ease forwards; /* Fade-out effect */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease, visibility 1.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
