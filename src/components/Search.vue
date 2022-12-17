<script>
import { store } from "../store";

export default {
    name: "Search",
    props: {
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div>
        <input v-model="store.searchText" placeholder="Search..." type="text">
        <button @click="$emit( 'cerca' )">Search</button>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/variables.scss';


</style>