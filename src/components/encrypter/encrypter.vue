<template>
  <div :class="$style.component">
    <span :class="$style.title">
      {{ messages[messageIndex] }}
    </span>

    <v-text-field
      v-model="key"
      color="#EE4540"
      autocomplete="off"
      aria-autocomplete="off"
      dense
      dark
      hide-details />

    <v-text-field
      v-model="origin"
      color="#EE4540"
      autocomplete="off"
      aria-autocomplete="off"
      dense
      dark
      hide-details />

    <v-text-field
      v-model="number"
      color="#EE4540"
      autocomplete="off"
      aria-autocomplete="off"
      type="number"
      dense
      dark
      hide-details />

    <v-text-field
      v-model="skeletonKey"
      color="#EE4540"
      autocomplete="off"
      aria-autocomplete="off"
      dark
      dense
      hide-details />

    <span :class="$style.result">
      {{ result }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'Encrypter',

  data: () => ({
    messages: [
      'de-anatomization procedure',
      'devise countersign string',
      'behold password',
      'befuddle gobbledegook',
      'garble and confuse',
      'irreversible hocus-pocus',
      'let me in',
      'initiate bff secret handshake',
    ],
    messageIndex: 0,

    key: '',

    origin: '',

    number: -1,

    skeletonKey: '',

    result: '',
  }),

  watch: {
    key() {
      this.generatePassword();
    },

    origin() {
      this.generatePassword();
    },

    number() {
      this.generatePassword();
    },

    skeletonKey() {
      this.generatePassword();
    },
  },

  created() {
    this.messageIndex = Math.floor(Math.random() * this.messages.length);
  },

  methods: {
    async generatePassword(): Promise<void> {
      if (this.key.length
        && this.origin.length
        && this.number !== -1
        && this.skeletonKey.length) {
        const response = await axios.put('/api/generate', {
          key: this.key,
          origin: this.origin,
          number: this.number,
          skeletonKey: this.skeletonKey,
        });

        this.result = response.data;
      }
    },
  },
});
</script>

<style module>
.component {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  text-align: center;
  font-family: 'Karla', sans-serif;
  letter-spacing: .05rem;
  color: #C3073F;
  animation: slide-up .3s ease 0s;
  font-size: 1.2rem;
}

.subtitle {
  text-align: center;
  font-family: 'Karla', sans-serif;
  letter-spacing: .05rem;
  color: #ee464091;
  animation: slide-up .3s ease 0s;
  margin: 2.5rem 0 0;
}

.button-wrapper {
  margin-top: 1rem;
}

.button-wrapper button {
  margin: 0 .8rem;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
