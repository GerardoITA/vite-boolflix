<script>
import { store } from '../store';

export default {
    name: "MovieCard",
    props: {
        titolo: String,
        titoloOriginale: String,
        lingua: String,
        voto: Number,
        immagine: String,
        poster: String,

    },
    data() {
        return {
            store,

        }
       
    },
    methods: {
        starFiller(icon, star){
            if (star <= this.voto ){
                return "fa-solid"
            } else {
                return icon
            } 
        } 
    }
}
</script>

<template>
    <div class="movie_card" >
        <h2>{{titolo}}</h2>
        <h3>{{titoloOriginale}}</h3>
        <h4>{{lingua}}</h4>
        <img class="flag" :src="immagine" :alt="lingua">
        <img class="poster" :src="poster">
        <div class="vote" v-for="star in 5" :key="star">
            <font-awesome-icon :icon='starFiller("fa-regular", star) + " fa-star"'></font-awesome-icon>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/variables.scss';

.movie_card {
    background-color: grey;
    height: 250px;
    width: 300px;
    display: flex;
}
.poster {
    height: 50px;
    width: auto;
}
.flag {
    height: 17px;
    width: 25px;
}
.vote {
    color: yellow;
}
</style>