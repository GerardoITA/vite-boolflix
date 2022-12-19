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
        trama: String,

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
        <img class="poster" :src="poster">
        <div class="mockup_show">
            <div class="mockup">
                <h2>{{titolo}}</h2>
                <h4>{{titoloOriginale}}</h4>
                <p>{{trama}}</p>
                <img class="flag" :src="immagine" :alt="lingua">
                <div class="vote">
                    <div v-for="star in 5" :key="star">
                        <font-awesome-icon :icon='starFiller("fa-regular", star) + " fa-star"'></font-awesome-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/variables.scss';

::-webkit-scrollbar {
    width: 1px;
}
.movie_card {
    background-color: grey;
    height: 500px;
    width: 333px;
    display: flex;
    position: relative;
    .mockup {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        gap: 1rem;
        text-align: center;
        align-items: center;
        p {
            overflow-y:auto;
            margin-bottom: 2rem;
        }
    }
    .mockup_show {
        width: 100%;
        height: 100%;
        display: none;
        position: absolute;
    }
    &:hover .poster {
        transition: 0.5s;
        filter: grayscale(0.5);
        opacity: 0.2; 
    }
    &:hover .mockup_show {
        display: inline-block;
    } 
    
}
.poster {
    height: 100%;
    width: 100%;

}
.flag {
    height: 17px;
    width: 25px;
    position: absolute;
    top: 0;
    right: 0;
}
.vote {
    color: yellow;
    display: flex;
    flex-direction: row;
    gap: 0px;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
}
</style>