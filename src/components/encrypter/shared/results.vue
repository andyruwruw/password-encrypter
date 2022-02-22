<template>
  <v-card
    :color="error ? '#CE0C1D' : '#000000'"
    :class="$style.component"
    dark
    outlined>
    <span>
      {{ error ? 'Decryption failed, credentials incorrect.' : text }}
    </span>

    <v-btn
      v-if="!error"
      :color="color"
      dense
      outlined
      @click="copy">
      Copy
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Results',

  props: {
    /**
     * Contents of the results component.
     */
    text: {
      type: String,
      default: '',
    },

    /**
     * Whether the results are an error.
     */
    error: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    /**
     * The color of the button.
     */
    color: 'white',
  }),

  methods: {
    /**
     * Copies the contents of the span to the clipboard.
     */
    copy() {
      if (!navigator.clipboard) {
        return;
      }

      navigator.clipboard.writeText(this.text);
      this.color = 'green';
    },
  },
});
</script>

<style lang="scss" module>
.component {
  align-items: center;
  display: flex !important;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1rem;

  span {
    color: rgb(255, 255, 255);
    font-weight: 500;
    letter-spacing: .05rem;
    max-width: calc(600px - 72px - 32px - 12px);
  }
}
</style>
