<script>
import axios from 'axios';
import { store } from '../src/store';

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      store,
    }
  },
}  
</script>

<template>
  <main>

  </main>
</template>

<style lang="scss">
@use './style/general.scss';
@use './style/partials/variables.scss';
</style>
