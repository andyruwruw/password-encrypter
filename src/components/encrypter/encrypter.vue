<template>
  <div :class="$style.component">
    <v-text-field
      v-model="base"
      color="black"
      placeholder="Base"
      prepend-inner-icon="mdi-magnify"
      autocomplete="off"
      dense
      filled
      rounded />

    <v-text-field
      v-model="secondary"
      color="black"
      placeholder="Home"
      prepend-inner-icon="mdi-home"
      autocomplete="off"
      dense
      filled
      rounded />

    <v-text-field
      v-model="integer"
      color="black"
      placeholder="Number"
      prepend-inner-icon="mdi-numeric-9-box-multiple-outline"
      autocomplete="off"
      dense
      type="number"
      filled
      rounded />

    <v-text-field
      v-model="key"
      color="black"
      placeholder="Skull Key"
      prepend-inner-icon="mdi-key-variant"
      autocomplete="off"
      dense
      type="password"
      filled
      rounded />

    <v-card
      v-if="result"
      :class="$style['result-card']"
      dark
      outlined>
      <span>
        {{ result }}
      </span>

      <v-btn
        :color="color"
        dense
        outlined
        @click="copy">
        Copy
      </v-btn>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { encrypt } from '@/helpers/encrypt';

export default Vue.extend({
  name: 'Encryter',
  data: () => ({
    base: '',
    secondary: '',
    integer: null,
    key: '',
    result: '',
    color: 'white',
  }),
  watch: {
    base() {
      this.validate();
    },
    secondary() {
      this.validate();
    },
    integer() {
      this.validate();
    },
    key() {
      this.validate();
    },
  },
  methods: {
    validate() {
      if (this.base && this.secondary && this.integer && this.key) {
        this.generate();
      } else {
        this.result = '';
      }
    },
    generate() {
      this.result = encrypt(
        this.base.toLowerCase(),
        this.secondary.toLowerCase(),
        this.integer || 0,
        this.key,
      );
    },
    copy() {
      if (!navigator.clipboard) {
        return;
      }
      navigator.clipboard.writeText(this.result);
      this.color = 'green';
    },
  },
});
</script>

<style lang="scss" module>
.component {
  width: calc(100vw - 4rem);
  max-width: 600px;
}

.result-card {
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  span {
    color: rgb(255, 255, 255);
    font-weight: 500;
    letter-spacing: .05rem;
  }
}
</style>
