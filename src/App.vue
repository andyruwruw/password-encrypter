<template>
  <v-app>
    <app-bar />

    <v-main>
      <encrypter />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import AppBar from './components/app-bar/app-bar.vue';
import Encrypter from './components/encrypter/encrypter.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
    Encrypter,
  },

  data: () => ({
    //
  }),
});
</script>
