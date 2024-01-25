<template>

  <button class="ui-button center-horizontal" @click="click">
    <p style="margin-top: 3px" class="black">{{title}}</p>
  </button>
  <button class="ui-button center-horizontal shadow absolute on-bottom" @click="click">

  </button>

</template>


<script>

export default {
    name: "UIButton",
    data() {
        return {
        };
    },

    props:{
        title: String,
      color: String
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