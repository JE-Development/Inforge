<template>

  <div class="relative">
    <div class="center-horizontal">
      <div class="header-size flex">
        <div class="absolute">
          <div style="height: 10px"></div>
          <div class="center">
            <img src="../../assets/inforge-icon.png" class="inforge-icon pointer" @click="onIconClicked">
            <div style="width: 10px"></div>
            <LangSelection @click="langClicked" :lang="lang.langVis"/>
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
import LangSelection from "@/components/views/LangSelection.vue";
import langDE from "../../assets/langDE.json"
import langEN from "../../assets/langEN.json"

export default {
    name: "Header",
  components: {LangSelection, NavMobile, NavHeader},
    data() {
        return {
          mobileShow: false,
          lang: langEN,
        };
    },

    created() {
    },

    mounted() {
      if(this.getCookies("lang") === null || this.getCookies("lang") === "en"){
        this.lang = langEN
      }else{
        this.lang = langDE
      }
    },



    methods: {
      outside(){
        this.mobileShow = false
      },

      mobileClicked(){
        this.mobileShow = !this.mobileShow
      },

      onIconClicked(){
        this.$router.push("/")
      },

      langClicked(){
        if(this.getCookies("lang") === null || this.getCookies("lang") === "en"){
          this.setCookies("lang", "de")
          this.lang = langDE
        }else{
          this.setCookies("lang", "en")
          this.lang = langEN
        }
        this.$emit("lang")
      },

        getCookies(key){
            return this.$cookies.get(key);
        },
        setCookies(key, value){
          this.$cookies.set(key, value, 2147483647);
        },
    }
}
</script>