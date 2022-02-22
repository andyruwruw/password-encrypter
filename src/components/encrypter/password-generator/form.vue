<template>
  <div :class="$style.component">
    <v-text-field
      v-model="base"
      autocomplete="off"
      color="black"
      placeholder="Base"
      prepend-inner-icon="mdi-magnify"
      dense
      filled
      rounded
      @input="validate" />

    <v-text-field
      v-model="secondary"
      autocomplete="off"
      color="black"
      placeholder="Home"
      prepend-inner-icon="mdi-home"
      dense
      filled
      rounded
      @input="validate" />

    <v-text-field
      v-model="integer"
      autocomplete="off"
      color="black"
      placeholder="Number"
      prepend-inner-icon="mdi-numeric-9-box-multiple-outline"
      type="number"
      dense
      filled
      rounded
      @input="validate" />

    <v-text-field
      v-model="key"
      autocomplete="off"
      color="black"
      placeholder="Skull Key"
      prepend-inner-icon="mdi-key-variant"
      type="password"
      dense
      filled
      rounded
      @input="validate" />
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import { generatePassword } from '@/helpers/encrypt';

export default Vue.extend({
  name: 'Encryter',

  data: () => ({
    /**
     * Base of password.
     */
    base: '',

    /**
     * Secondary of password.
     */
    secondary: '',

    /**
     * Integer of password.
     */
    integer: null,

    /**
     * Secret key.
     */
    key: '',
  }),

  methods: {
    /**
     * Checks whether all data is present and ready.
     */
    validate(): void {
      if (this.base
        && this.secondary
        && this.integer
        && this.key) {
        this.generate();
      } else {
        this.$emit(
          'results',
          '',
        );
      }
    },

    /**
     * Generates the password.
     */
    generate(): void {
      const result = generatePassword(
        this.base.toLowerCase(),
        this.secondary.toLowerCase(),
        this.integer || 0,
        this.key,
      );

      this.$emit(
        'results',
        result,
      );
    },
  },
});
</script>

<style lang="scss" module>
.component {
  width: calc(100vw - 4rem);
  max-width: 600px;
}
</style>
