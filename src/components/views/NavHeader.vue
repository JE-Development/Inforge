<template>

    <div class="center-horizontal">
      <button class="nav-button center-horizontal">
        <p style="margin-top: 3px" class="black">Spiele</p>
      </button>
      <div style="width: 20px"></div>
      <button class="nav-button center-horizontal">
        <p style="margin-top: 3px" class="black">Projekte</p>
      </button>
      <div style="width: 20px"></div>
      <button class="nav-button center-horizontal">
        <p style="margin-top: 3px" class="black">Vorschläge</p>
      </button>
      <div style="width: 20px"></div>
      <button class="nav-button center-horizontal">
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