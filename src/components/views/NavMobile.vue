<template>

    <div class="relative">
      <div class="center-horizontal" @click="outsideClicked">
        <div class="mobile-nav round-corner">
          <div class="mobile-nav-module center-horizontal pointer round-corner" @click="onGames">
            <h1>Spiele</h1>
          </div>
          <div class="mobile-nav-module center-horizontal pointer round-corner" @click="onProjects">
            <h1>Projekte</h1>
          </div>
          <!--<div class="mobile-nav-module center-horizontal pointer round-corner" @click="onSuggestion">
            <h1>Vorschläge</h1>
          </div>/!-->
          <div class="mobile-nav-module center-horizontal pointer round-corner" @click="onImpressum">
            <h1>Impressum</h1>
          </div>
        </div>
      </div>
      <div class="relative full-size absolute" style="transform: translateY(-600px); z-index: -1" @click="outsideClicked">

      </div>
    </div>

</template>


<script>

export default {
    name: "NavMobile",
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
        this.$router.push("/impressum")
      },

      outsideClicked(){
        this.$emit("outside")
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