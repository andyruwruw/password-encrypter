<template>
  <v-app>
    <app-bar />

    <v-main>
      <div class="main">
        <graphic />

        <h3>
          Generate a Password
        </h3>

        <encrypter />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

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
