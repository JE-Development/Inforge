<template>

  <div>
    <Header @lang="langClicked"/>

    <div class="games-module-left shadow-dicebluff dicebluff-background" id="scroll-dicebluff">
      <div class="center-horizontal">
        <img src="../assets/raute-dice.png" class="stats-raute">
        <div style="width: 10px"></div>
        <h1 class="prim-color stats-headline">{{lang.games.dbHeadline}}</h1>
      </div>
      <div class="center-horizontal">
        <div style="width: 95%; height: 95%">
          <p class="center-text">{{lang.games.dbLine1}}</p>
          <p class="center-text">{{lang.games.dbLine2}}</p>
          <p class="center-text">{{lang.games.dbLine3}}</p>
        </div>
      </div>
      <div class="center-horizontal">
        <div class="games-display-button">
          <div class="center-horizontal">
            <UIButton :title="lang.games.dbButton" @click="onClickDiceBluff"/>
          </div>
          <div style="width: 20px"></div>
          <div class="center-horizontal">
            <UIButton :title="lang.games.dbButtonFullIntro" @click="onClickDiceBluffInstructions" customClasses="wide-ui-button"/>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 50px"></div>

    <div class="right">
      <div class="games-module-right shadow-framegame framegame-background" id="scroll-framegame">
        <div class="center-horizontal">
          <img src="../assets/raute-frame.png" class="stats-raute">
          <div style="width: 10px"></div>
          <h1 class="prim-color stats-headline">{{lang.games.fgHeadline}}</h1>
        </div>
        <div class="center-horizontal">
          <div style="width: 95%; height: 95%">
            <p class="center-text">{{lang.games.fgLine1}}</p>
            <p class="center-text">{{lang.games.fgLine2}}</p>
            <p class="center-text">{{lang.games.fgLine3}}</p>
            <p class="center-text">{{lang.games.fgLine4}}</p>
            <p class="center-text">{{lang.games.fgLine5}}</p>
          </div>
        </div>
        <div class="center-horizontal">
          <div class="games-display-button">
            <div class="center-horizontal">
              <UIButton :title="lang.games.fgButton" @click="onClickFrameGame"/>
            </div>
            <div style="width: 20px"></div>
            <div class="center-horizontal">
              <UIButton :title="lang.games.fgButtonFullIntro" @click="onClickFrameGameInstructions" customClasses="wide-ui-button"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 50px"></div>

    <div class="games-module-left shadow-amongus amongus-background" id="scroll-amonguslive">
      <div class="center-horizontal">
        <img src="../assets/raute-amongus.png" class="stats-raute">
        <div style="width: 10px"></div>
        <h1 class="prim-color stats-headline">{{lang.games.aulHeadline}}</h1>
      </div>
      <div class="center-horizontal">
        <div style="width: 95%; height: 95%">
          <p class="center-text">{{lang.games.aulLine1}}</p>
          <p class="center-text">{{lang.games.aulLine2}}</p>
          <p class="center-text">{{lang.games.aulLine3}}</p>
          <p class="center-text">{{lang.games.aulLine4}}</p>
          <p class="center-text">{{lang.games.aulLine5}}</p>
          <p class="center-text">{{lang.games.aulLine6}}</p>
          <p class="center-text">{{lang.games.aulLine7}}</p>
        </div>
      </div>
    </div>

    <div style="height: 50px"></div>

  </div>

</template>


<script>

import NavHeader from "@/components/views/NavHeader.vue";
import NavMobile from "@/components/views/NavMobile.vue";
import Header from "@/components/views/Header.vue";
import UIButton from "@/components/views/UIButton.vue";
import {nextTick} from "vue";
import langDE from "../assets/langDE.json"
import langEN from "../assets/langEN.json"

export default {
    name: "GamesPage",
  components: {UIButton, Header},
    data() {
        return {
          lang: langDE,
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
      nextTick(() => {
        this.scrollToHash();
      });
    },



    methods: {

      scrollToHash() {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            nextTick(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            })
          }
        }
      },

      langClicked(){
        if(this.getCookies("lang") === null || this.getCookies("lang") === "en"){
          this.lang = langEN
        }else{
          this.lang = langDE
        }
      },

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
          this.$cookies.set(key, value, 2147483647);
        },
    }
}
</script>