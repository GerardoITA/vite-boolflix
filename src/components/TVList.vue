<script>
import { store } from '../store';
import MovieCard from './MovieCard.vue';

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
        },
        scrollLeft() {
            let thing = document.getElementById("menuTV");
            thing.scrollLeft -= 400;
        },
        scrollRight() {
            let thing = document.getElementById("menuTV");
            thing.scrollLeft += 400;
        },

    }
}
</script>

<template>
    <div class="list">
        <div  class="carousel" id="menuTV">
            <div v-for="(film, index) in store.tvList" :key="index">
                <MovieCard 
                :titolo="film.name" 
                :titoloOriginale="film.original_name" 
                :lingua="film.original_language"
                :immagine="store.flagsURL + convertLang(film.original_language)" 
                :voto="convertVote(film.vote_average)"
                :poster="film.poster_path !== null ? store.imgURL + film.poster_path : store.backupPoster"
                :trama="film.overview"
                >

                </MovieCard>
            </div>
            <div :class="store.TVAPIgenerated ? 'show' : 'noshow'">
                <div id="left" @click="scrollLeft()"><font-awesome-icon icon='fa-solid fa-angles-left'></font-awesome-icon></div>
                <div id="right" @click="scrollRight()"><font-awesome-icon icon='fa-solid fa-angles-right'></font-awesome-icon></div>
            </div>
           
        </div>
        
    </div>
   
    
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/variables.scss';

.list {
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
}
.carousel {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
    overflow-x: hidden;
    overflow-y: hidden;
    scroll-behavior: smooth;
}

.show {
    display: inline-block;
}

.noshow {
    display: none;
}

#left {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
    border-radius: 1rem;
    background-color: white;
    font-size: 30px;
    padding: 6px 3px;
    cursor: pointer;
    border: 1px solid black;
}
#right {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
    border-radius: 1rem;
    background-color: white;
    font-size: 30px;
    padding: 6px 3px;
    cursor: pointer;
    border: 1px solid black;
}
</style>