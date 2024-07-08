<template>

    <div class="center-horizontal">
      <h2 class="prim-color nav-text" @click="onGames">Spiele</h2>
      <div style="width: 30px"></div>
      <h2 class="prim-color nav-text" @click="onProjects">Projekte</h2>
      <!--<div style="width: 30px"></div>
      <h2 class="prim-color nav-text" @click="onSuggestion">Vorschläge</h2>/!-->
      <div style="width: 30px"></div>
      <h2 class="prim-color nav-text" @click="onImpressum">Impressum</h2>
      <div style="width: 30px"></div>
      <div class="pointer center" @click="onClickIcon" v-if="!showLogin">
        <div>
          <img :src="image" class="discord-avatar">
          <div class="absolute on-top" v-if="showLogout" style="transform: translateX(-30px)">
            <UIButton title="Logout" customClasses="discord-logout-button" @clicked="onLogout"/>
          </div>
        </div>
      </div>
      <div v-else class="center">
        <button class="discord-button pointer" @click="onLogin">
          Login With Discord
          <span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
</svg>
  </span>
        </button>
      </div>

    </div>

</template>


<script>

import UIButton from "@/components/views/UIButton.vue";

export default {
    name: "NavHeader",
  components: {UIButton},
    data() {
        return {
          showLogout: false,
          image: "",
          showLogin: true
        };
    },

    created() {
      document.addEventListener('click', this.handleClickOutside);
    },

    mounted() {
      let avatar = this.getCookies("avatar")
      if(avatar !== null){
        this.image = "https://cdn.discordapp.com/avatars/" + this.getCookies("id") + "/" + avatar + ".png"
      }

      if(this.getCookies("access_token") !== null){
        this.showLogin = false
      }
      console.log(this.showLogin)
    },


    methods: {

      onMain(){
        this.$router.push("/")
      },
      onGames(){
        this.$router.push("/games")
      },
      onProjects(){
        this.$router.push("/projects")
      },
      onSuggestion(){
        this.$router.push("/suggestion")
      },
      onImpressum(){
        this.$router.push("/impressum")
      },

      onClickIcon(){
        this.showLogout = !this.showLogout
      },

      onLogin(){
        let callbackUrl = encodeURIComponent(document.documentURI + "callback")
        let discordUrl = import.meta.env.VITE_DISCORD_INFORGE_URL
        discordUrl = discordUrl.replace(";;;redirect;;;", callbackUrl)

        window.location.href = discordUrl
      },

      onLogout(){
        this.$cookies.remove("access_token")
        this.showLogin = true
        this.$router.push("/")
      },

      handleClickOutside(event){
        if (!this.$el.contains(event.target)) {
          this.showLogout = false;
        }
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