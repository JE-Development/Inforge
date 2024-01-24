<template>


</template>


<script>

import langDE from "../assets/langDE.json"
import langEN from "../assets/langEN.json"

export default {
    name: "MainPage",
    data() {
        return {
        };
    },

    created() {
    },

    mounted() {

    },

    methods: {

        getCookies(key){
            return this.$cookies.get(key);
        },
        setCookies(key, value){
            return this.$cookies.set(key, value, 2147483647);
        },
    }
}
</script>