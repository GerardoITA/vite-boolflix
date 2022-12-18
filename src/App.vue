<script>
import axios from 'axios';
import Search from './components/Search.vue'
import MovieList from './components/MovieList.vue'
import { store } from '../src/store';

export default {
  name: "App",
  components: {
    Search,
    MovieList,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    searchFilm(){
      let filteredApiURL = store.apiURL;

      console.log(store.searchText);

      filteredApiURL += store.searchText;
      axios
        .get(filteredApiURL)
        .then(res => {
          store.filmList = res.data.results;
        })
      console.log(store.filmList)  
    }
  }
}  
</script>

<template>
  <Search @cerca="searchFilm"></Search>
  <main>
    <MovieList></MovieList>
  </main>
</template>

<style lang="scss">
@use "./style/general.scss";
@use "./style/partials/variables.scss";
</style>
