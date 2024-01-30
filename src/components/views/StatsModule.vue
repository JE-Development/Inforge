<template>

  <div>
    <div class="center-horizontal">
      <div style="font-weight: bold" class="prim-color stats-text">{{data}}</div>
    </div>
    <div class="center-horizontal">
      <div style="opacity: 0.5; color: #81bfff">{{title}}</div>
    </div>
  </div>

</template>


<script>

export default {
    name: "StatsModule",
    data() {
        return {
        };
    },

    props:{
      title: String,
      data: String
    },

    created() {
    },
    mounted() {
    },



    methods: {

        click(){
            this.$emit("click")
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