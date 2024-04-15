<template>

    <div class="round-corner center ideascard">
      <div>
        <div class="center-horizontal">
          <h1 style="margin-bottom: 0px"  class="infocard-headline">{{title}}</h1>
        </div>
        <p class="center-text infocard-text">{{teaser}}</p>
      </div>
    </div>

</template>


<script>

import UIButton from "@/components/views/UIButton.vue";

export default {
    name: "IdeasCard",
  components: {UIButton},
    data() {
        return {
        };
    },

    props:{
      title: String,
      teaser: String,
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