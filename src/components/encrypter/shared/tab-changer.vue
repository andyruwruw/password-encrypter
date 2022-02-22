<template>
  <div :class="$style.component">
    <v-btn
      icon
      @click="changeTab(-1)">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>

    <h3>
      {{ title[tab] }}
    </h3>

    <v-btn
      icon
      @click="changeTab(1)">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TabChanger',

  props: {
    /**
     * Current tab.
     */
    tab: {
      type: Number,
      default: 0,
    },
  },

  data: () => ({
    /**
     * Titles for each tab.
     */
    title: [
      'Generate a Password',
      'Decrypt Secret',
      'Encrypt Secret',
    ],
  }),

  methods: {
    /**
     * Changes to a new function.
     */
    changeTab(direction: number) {
      this.$emit(
        'changetab',
        direction,
      );
    },
  },
});
</script>

<style lang="scss" module>
.component {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  h3 {
    margin: 0 2rem;
    min-width: 228px;
    text-align: center;
  }
}
</style>
