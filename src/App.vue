<template>
  <v-app>
    <app-bar />

    <v-main>
      <div class="main">
        <graphic />

        <encrypter />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import AppBar from './components/app-bar/app-bar.vue';
import Graphic from './components/graphic/graphic.vue';
import Encrypter from './components/encrypter/encrypter.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
    Graphic,
    Encrypter,
  },
});
</script>
