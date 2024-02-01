<template>

  <button class="ui-button center-horizontal" @click="click" :class="customClasses">
    <p class="button-margin">{{title}}</p>
  </button>
  <button class="ui-button center-horizontal shadow absolute on-bottom" @click="click" :class="customClasses">

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
      color: String,
      customClasses: String
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