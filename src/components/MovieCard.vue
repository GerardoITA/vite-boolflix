<script>
import { store } from '../store';

export default {
    name: "MovieCard",
    props: {
        titolo: String,
        titoloOriginale: String,
        lingua: String,
        voto: Number,

    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="card" >
        <h2>{{titolo}}</h2>
        <h3>{{titoloOriginale}}</h3>
        <h4>{{lingua}}</h4>
        <h5>{{voto}}</h5>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/variables.scss';

.card {
    min-height: 300px;
    min-width: 150px;
}
</style>