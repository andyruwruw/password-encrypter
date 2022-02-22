<template>
  <div :class="$style.component">
    <tab-changer
      :tab="tab"
      @changetab="changeTab" />

    <password-generator-form
      v-if="tab === 0"
      @results="setResults" />

    <data-decryptor-form
      v-if="tab === 1"
      @results="setResults"
      @error="setError" />

    <data-encryptor-form
      v-if="tab === 2"
      @results="setResults" />

    <results
      v-if="results || error"
      :error="error"
      :text="results" />
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import DataDecryptorForm from './data-decryptor/form.vue';
import DataEncryptorForm from './data-encryptor/form.vue';
import PasswordGeneratorForm from './password-generator/form.vue';
import Results from './shared/results.vue';
import TabChanger from './shared/tab-changer.vue';

export default Vue.extend({
  name: 'Encryter',

  components: {
    DataDecryptorForm,
    DataEncryptorForm,
    PasswordGeneratorForm,
    Results,
    TabChanger,
  },

  data: () => ({
    tab: 0,

    results: '',

    error: false,
  }),

  methods: {
    /**
     * Changes to a new function.
     */
    changeTab(direction: number) {
      this.tab += direction;
      this.tab %= 3;

      if (this.tab < 0) {
        this.tab = 3 + this.tab;
      }

      this.error = false;
      this.results = '';
    },

    /**
     * Sets emitted results.
     */
    setResults(results: string) {
      this.results = results;
    },

    /**
     * Sets emitted results.
     */
    setError(state: boolean) {
      this.error = state;
    },
  },
});
</script>

<style lang="scss" module>
.component {
  padding-bottom: 10rem;
}
</style>
