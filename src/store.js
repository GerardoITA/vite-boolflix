import { reactive } from 'vue';

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=',
    apiTVURL: 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&query=',
    flagsURL: 'https://countryflagsapi.com/png/',
    imgURL: 'https://image.tmdb.org/t/p/w342',
    filmAPIgenerated: false,
    TVAPIgenerated: false,
    backupPoster: '../src/assets/img/noposter.png',
    filmList: [],
    tvList: [],
    searchText: "",
}); 
