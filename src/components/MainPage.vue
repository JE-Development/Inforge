<template>

  <div>

    <div class="center-horizontal">
      <div class="header-size flex">
        <div class="absolute">
          <img src="../assets/inforge-icon-text.png" class="inforge-icon">
        </div>
        <div class="absolute header-size right">
          <NavHeader/>
        </div>
      </div>
    </div>

  </div>

</template>


<script>

import langDE from "../assets/langDE.json"
import langEN from "../assets/langEN.json"
import NavHeader from "@/components/views/NavHeader.vue";

export default {
    name: "MainPage",
  components: {NavHeader},
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