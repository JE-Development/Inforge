<template>

    <div class="center-horizontal">
      <h2 class="prim-color nav-text" @click="onGames">Spiele</h2>
      <div style="width: 30px"></div>
      <h2 class="prim-color nav-text" @click="onProjects">Projekte</h2>
      <div style="width: 30px"></div>
      <h2 class="prim-color nav-text" @click="onSuggestion">Vorschläge</h2>
      <div style="width: 30px"></div>
      <h2 class="prim-color nav-text" @click="onAbout">Über Inforge</h2>
    </div>

</template>


<script>

export default {
    name: "NavHeader",
    data() {
        return {
        };
    },

    created() {
    },

    mounted() {
    },


    methods: {

      onMain(){
        this.$router.push("/")
      },
      onGames(){
        this.$router.push("/games")
      },
      onProjects(){
        this.$router.push("/projects")
      },
      onSuggestion(){
        this.$router.push("/suggestion")
      },
      onAbout(){
        this.$router.push("/about")
      },

        getCookies(key){
            return this.$cookies.get(key);
        },
        setCookies(key, value){
          if(this.getCookies("allowedCookies") === "true"){
            this.$cookies.set(key, value, 2147483647);
          }
        },
    }
}
</script>