<template>

    <div class="round-corner center infocard">
      <div>
        <div style="width: 95%; height: 280px;">
          <div class="center-horizontal">
            <h1 class="infocard-headline">{{title}}</h1>
          </div>
          <p class="center-text infocard-text">{{teaser}}</p>
        </div>
        <div class="center-horizontal">
          <button class="infocard-button center-horizontal" @click="click">
            <p class="button-margin">{{button}}</p>
          </button>
        </div>
        <div style="height: 10px"></div>
      </div>
    </div>

</template>


<script>

import UIButton from "@/components/views/UIButton.vue";

export default {
    name: "InfoCard",
  components: {UIButton},
    data() {
        return {
        };
    },

    props:{
      title: String,
      teaser: String,
      button: String,
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