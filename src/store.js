import { reactive } from 'vue';

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/search/tv?api_key=f2dd65c246c2c5025da163d72094519d&query=',
    searchText: "",
}); 