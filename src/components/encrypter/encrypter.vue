<template>
  <div :class="$style.component">
    <span :class="$style.title">
      {{ messages[messageIndex] }}
    </span>

    <span :class="$style.subtitle">
      click one of these
    </span>

    <div
      class="d-flex align-center"
      :class="$style['button-wrapper']">
      <v-btn
        color="#EE4540"
        :dark="method == 0 ? true : false"
        :outlined="method == 0 ? false : true"
        depressed
        x-small
        @click="changeMethod(0)">
        {{ buttons[buttonIndex][0] }}
      </v-btn>

      <v-btn
        color="#EE4540"
        :dark="method == 1 ? true : false"
        :outlined="method == 1 ? false : true"
        depressed
        x-small
        @click="changeMethod(1)">
        {{ buttons[buttonIndex][1] }}
      </v-btn>

      <v-btn
        color="#EE4540"
        :dark="method == 2 ? true : false"
        :outlined="method == 2 ? false : true"
        depressed
        x-small
        @click="changeMethod(2)">
        {{ buttons[buttonIndex][2] }}
      </v-btn>
    </div>

    <span :class="$style.subtitle">
      solve your own puzzle
    </span>

    <v-text-field
      v-model="base"
      color="#EE4540"
      autocomplete="off"
      aria-autocomplete="off"
      hide-details
      dense />

    <span :class="$style.subtitle">
      season generously
    </span>

    <v-text-field
      v-model="salt"
      color="#EE4540"
      autocomplete="off"
      aria-autocomplete="off"
      hide-details
      dense />

    <span :class="$style.subtitle">
      name a number
    </span>

    <v-text-field
      v-model="number"
      color="#EE4540"
      autocomplete="off"
      aria-autocomplete="off"
      hide-details
      dense />

    <span :class="$style.subtitle">
      how many is too many
    </span>

    <v-text-field
      v-model="additive"
      color="#EE4540"
      autocomplete="off"
      aria-autocomplete="off"
      hide-details
      dense />

    <span :class="$style.subtitle">
      say the magic word
    </span>

    <v-text-field
      v-model="key"
      color="#EE4540"
      autocomplete="off"
      aria-autocomplete="off"
      hide-details
      dense />

    <span :class="$style.result">
      {{ result }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import bcrypt from 'bcrypt';

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

    method: -1,

    buttons: [
      [
        'x',
        'y',
        'z',
      ],
      [
        'pie',
        'cake',
        'jello',
      ],
      [
        'jam',
        'jelly',
        'preserve',
      ],
    ],
    buttonIndex: 0,

    key: '',

    salt: '',

    base: '',

    number: '',

    additive: '',

    result: '',
  }),

  watch: {
    method() {
      this.generatePassword();
    },

    key() {
      this.generatePassword();
    },

    salt() {
      this.generatePassword();
    },

    base() {
      this.generatePassword();
    },

    number() {
      this.generatePassword();
    },

    additive() {
      this.generatePassword();
    },
  },

  created() {
    this.messageIndex = Math.floor(Math.random() * this.messages.length);
    this.buttonIndex = Math.floor(Math.random() * this.buttons.length);
  },

  methods: {
    changeMethod(num: number): void {
      this.method = num;
    },

    generatePassword(): void {
      if (this.method === -1
        || !this.key
        || !this.salt
        || !this.base
        || !this.number
        || !this.additive) {
        return;
      }

      if (this.method === 0) {
        this.methodOne(
          this.base,
          this.salt,
          this.key,
          parseInt(this.number, 10),
          parseInt(this.additive, 10),
        );
      } else if (this.method === 1) {
        this.methodTwo(
          this.base,
          this.salt,
          this.key,
          parseInt(this.number, 10),
          parseInt(this.additive, 10),
        );
      } else {
        this.methodThree(
          this.base,
          this.salt,
          this.key,
          parseInt(this.number, 10),
          parseInt(this.additive, 10),
        );
      }
    },

    async methodOne(
      base: string,
      salt: string,
      key: string,
      number: number,
      additive: number,
    ): Promise<void> {
      const hashedKey = await bcrypt.hash(key, salt);

      let alteredBase = '';

      let i = 0;
      while (i < base.length) {
        if (number.toString().includes(i.toString())) {
          alteredBase += base[i].toUpperCase();
          alteredBase += (i + additive).toString();
        } else {
          alteredBase += base[i];
        }
        i += 1;
      }
      const result = await bcrypt.hash(`${hashedKey}${alteredBase}`, salt);

      this.result = result;
    },

    async methodTwo(
      base: string,
      salt: string,
      key: string,
      number: number,
      additive: number,
    ): Promise<void> {
      const hashedKey = await bcrypt.hash(key, base);

      let alteredBase = '';

      let i = 0;
      while (i < base.length) {
        if (number.toString().includes(i.toString())) {
          alteredBase += (i - additive).toString();
          alteredBase += base[i].toUpperCase();
        } else {
          alteredBase += base[i];
        }
        i += 1;
      }
      const result = await bcrypt.hash(`${alteredBase}${hashedKey}`, salt);

      this.result = result;
    },

    async methodThree(
      base: string,
      salt: string,
      key: string,
      number: number,
      additive: number,
    ): Promise<void> {
      const hashedKey = await bcrypt.hash(base, key);

      let alteredBase = '';

      let i = 0;
      while (i < base.length) {
        if (number.toString().includes(i.toString())) {
          alteredBase += (i + additive * 2).toString();
        } else {
          alteredBase += base[i];
        }
        i += 1;
      }
      const result = await bcrypt.hash(`${alteredBase}${salt}`, hashedKey);

      this.result = result;
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
  color: black;
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
