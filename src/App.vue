<script>
import axios from 'axios'
import Search from './components/Search.vue'
import MovieList from './components/MovieList.vue'
import TVList from './components/TVList.vue'
import AppHeader from './components/AppHeader.vue'
import { store } from '../src/store';

export default {
  name: "App",
  components: {
    Search,
    MovieList,
    AppHeader,
    TVList,
},
  data() {
    return {
      store,
    }
  },
}  
</script>

<template>
  <div id="big">
    <AppHeader id="appheader"></AppHeader>
    <!-- <Search @cerca="searchFilm"></Search> -->
    <main>
      <MovieList></MovieList>
      <TVList></TVList>  
    </main>
  </div>
  
</template>

<style lang="scss">
@use "./style/general.scss";
@use "./style/partials/variables.scss";
#big {
  background-color: rgb(27, 27, 27);
  height: 100vh;
}
#appheader {
  position: fixed;
}
main {
  position: relative;
  top: 100px;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
