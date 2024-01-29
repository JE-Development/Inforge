<template>

  <div class="relative">
    <div class="center-horizontal">
      <div class="header-size flex">
        <div class="absolute header-size center-vertical">
          <div class="flex">
            <img src="../../assets/inforge-icon.png" class="inforge-icon">
          </div>
        </div>
        <div class="header-size right center-vertical">
          <div class="menu-nav">
            <NavHeader/>
          </div>
          <div class="absolute">
            <img src="../../assets/menu.png" class="menu-image pointer" @click="mobileClicked">
          </div>
        </div>
      </div>
    </div>
    <div class="absolute on-top center-horizontal header-size" v-if="mobileShow">
      <NavMobile @outside="outside"/>
    </div>
  </div>

</template>


<script>

import NavHeader from "@/components/views/NavHeader.vue";
import NavMobile from "@/components/views/NavMobile.vue";

export default {
    name: "Header",
  components: {NavMobile, NavHeader},
    data() {
        return {
          mobileShow: false,
        };
    },

    created() {
    },

    mounted() {
    },



    methods: {
      outside(){
        this.mobileShow = false
      },

      mobileClicked(){
        this.mobileShow = !this.mobileShow
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