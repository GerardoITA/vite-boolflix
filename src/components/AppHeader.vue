<script>
import Search from './Search.vue'
import axios from 'axios';
import { store } from '../store'
export default {
    name: "AppHeader",
    components: {
        Search
    },
    data() {
        return {
            store
        }
    },
    methods: {
        searchFilm() {
            let filteredApiURL = store.apiURL;
            console.log(store.searchText);
            filteredApiURL += store.searchText;
            axios
                .get(filteredApiURL)
                .then(res => {
                    store.filmList = res.data.results;
                })
        }
    }
}
</script>
<template>
    <header>
        <div class="nav">
            <a href="#"><img src="../../src/assets/img/NetflixLogo.png" alt=""></a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Serie TV</a></li>
                <li><a href="#">Film</a></li>
                <li><a href="#">Originali</a></li>
                <li><a href="#">Aggiunti di recente</a></li>
                <li><a href="#">La mia lista</a></li>
            </ul>
        </div>
        <div class="side_bar">
            <Search @cerca="searchFilm"></Search>
            <div class="notifications">
                <font-awesome-icon icon='fa-solid fa-bell'></font-awesome-icon>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/variables.scss';

header {
    background-color: rgb(27, 27, 27);
    height: 100px;
    width: 100%;
    padding-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 20px;
    .nav {
        display: flex;
        img {
                height: 80px;
                width: auto;
            }
    }
    .notifications {
        color: white;
        font-size: 20px;
        cursor: pointer;
    }
    ul {
        list-style-type: none;
        display: flex;
        gap: 1rem;
        line-height: 40px;

        a:hover {
            color: white;
        }

    }
    .side_bar {
        margin-top: 1rem;
        margin-right: 2rem;
        display: flex;
        gap: 1rem;
    }
}
a {
    color: rgb(180, 180, 180);
    text-decoration: none;
}
</style>