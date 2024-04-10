<template>

  <div>
    <Header/>

    <div class="full-width center-horizontal">
      <div>
        <div>
          <div class="center-horizontal">
            <div class="project-page-headline" style="transform: translateY(20px)">
              <h1 style="margin-top: 0px">DiscordBot</h1>
            </div>
          </div>
          <div class="project-page-box center">
            <div style="width: 80%; height: 95%" class="center">
              <div>
                <div style="height: 20px"></div>
                <p class="center-text">Auf meinem Discord Server befindet sich ein selbstprogrammierter Discord Bot den wir 'Ivan Rusakov' getauft haben</p>
                <p class="center-text">Durch ihn konnte man einen Spieler zum 'Schere Stein Papier' spielen herausfordern (Momentan offline).</p>
                <p class="center-text">Man kann mit ihm auch irgendwelche Unsplash Bilder anhand eines Suchwortes anzeigen lassen und Kopf oder Zahl spielen.</p>
              </div>
            </div>
          </div>


          <div class="center-horizontal">
            <h1>More Coming Soon</h1>
          </div>


        </div>
      </div>

    </div>

  </div>

</template>


<script>

import NavHeader from "@/components/views/NavHeader.vue";
import NavMobile from "@/components/views/NavMobile.vue";
import Header from "@/components/views/Header.vue";
import UIButton from "@/components/views/UIButton.vue";

export default {
    name: "ProjectsPage",
  components: {UIButton, Header},
    data() {
        return {
        };
    },

    created() {
    },

    mounted() {
    },



    methods: {

      onClickDiceBluff(){
        window.open('https://dicebluff.inforge.de', '_self');
      },

      onClickDiceBluffInstructions(){
        window.open('https://dicebluff.inforge.de/#/instruction', '_self');
      },

      onClickFrameGame(){
        window.open('https://framegame.inforge.de', '_self');
      },
      onClickFrameGameInstructions(){
        window.open('https://framegame.inforge.de/#/instruction', '_self');
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