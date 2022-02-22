<template>
  <v-app-bar
    color="#FFFFFF"
    app
    dark
    flat>
    <div class="d-flex align-center">
      <span :class="$style.title">
        password-encrypter
      </span>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

export default Vue.extend({
  name: 'AppBar',
});
</script>

<style module>
.title {
  font-family: 'Karla', sans-serif;
  letter-spacing: .05rem;
  color: #020202;
}
</style>
