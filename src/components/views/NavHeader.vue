<template>

    <div class="center-horizontal">
      <button class="nav-button center-horizontal pointer on-top" @click="onGames">
        <p style="margin-top: 3px" class="black">Spiele</p>
      </button>
      <div style="width: 20px"></div>
      <button class="nav-button center-horizontal pointer on-top" @click="onProjects">
        <p style="margin-top: 3px" class="black">Projekte</p>
      </button>
      <div style="width: 20px"></div>
      <button class="nav-button center-horizontal pointer on-top" @click="onSuggestion">
        <p style="margin-top: 3px" class="black">Vorschläge</p>
      </button>
      <div style="width: 20px"></div>
      <button class="nav-button center-horizontal pointer on-top" @click="onAbout">
        <p style="margin-top: 3px" class="black">Über Inforge</p>
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