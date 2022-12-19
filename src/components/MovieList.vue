<script>
import { store } from '../store';
import MovieCard from '../components/MovieCard.vue';

export default {
    name: "MovieList",
    components: {
        MovieCard,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        convertLang(lang) {
            if (lang == "en") {
                return "gb"
            }else {
                return lang
            }
        },
        convertVote(vote){
            let convVote = (vote / 2);

            let roundVote = Math.round(convVote)
            return roundVote
        }
    }
}
</script>

<template>
    <div class="list">
        <div v-for="film in store.filmList" :key="film">
            <MovieCard 
            :titolo="film.title" 
            :titoloOriginale="film.original_title" 
            :lingua="film.original_language"
            :immagine="store.flagsURL + convertLang(film.original_language)" 
            :voto="convertVote(film.vote_average)"
            :poster="store.imgURL + film.poster_path"
            :trama="film.overview"
            >

            </MovieCard>
        </div>
    </div>
   
    
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/variables.scss';

.list {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    flex-wrap: wrap;
}

</style>