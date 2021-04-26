<template>
  <v-app-bar
    app
    color="white"
    dark
    flat>
    <div class="d-flex align-center">
      <span :class="$style.title">
        password-encrypter
      </span>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppBar',
});
</script>

<style module>
.title {
  font-family: 'Karla', sans-serif;
  letter-spacing: .05rem;
  color: #EE4540;
}
</style>
