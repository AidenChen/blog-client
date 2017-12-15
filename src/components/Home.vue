<template>
  <div id="particles"></div>
</template>

<script>
import 'particles.js/particles';
import particles from '../assets/js/particles';

export default {
  name: 'Home',
  mounted() {
    window.particlesJS('particles', particles);
  }
};
</script>
