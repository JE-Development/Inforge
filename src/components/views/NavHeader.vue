<template>

    <div class="center-horizontal">
      <button class="nav-button center-horizontal pointer on-top" @click="onGames">
        <p class="white nav-text">Spiele</p>
      </button>
      <div style="width: 20px"></div>
      <button class="nav-button center-horizontal pointer on-top" @click="onProjects">
        <p class="white nav-text">Projekte</p>
      </button>
      <div style="width: 20px"></div>
      <button class="nav-button center-horizontal pointer on-top" @click="onSuggestion">
        <p class="white nav-text">Vorschläge</p>
      </button>
      <div style="width: 20px"></div>
      <button class="nav-button center-horizontal pointer on-top" @click="onAbout">
        <p class="white nav-text">Über Inforge</p>
      </button>
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