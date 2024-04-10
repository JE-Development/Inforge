<template>

  <button class="ui-button center-horizontal shadow" @click="click" :class="customClasses">
    <p class="button-margin">{{title}}</p>
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
            this.$emit("clicked")
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