<template>

  <div class="relative max-width">

    <div class="absolute overflow-hidden max-width">
      <img src="../assets/background.png" class="background-image on-top">

      <div class="center-horizontal relative on-bottom">
        <!--<img src="../assets/chain.png" class="chain-image absolute" style="transform: translate(500px, -350px)">
        <img src="../assets/chain.png" class="chain-image absolute" style="transform: translate(-500px, -350px)">/!-->
      </div>
    </div>

    <div class="absolute">

      <div class="relative">

        <div>
          <Header @lang="langClicked"/>

          <div class="center-horizontal">
            <div class="main-field round-corner center">
              <div>
                <div class="main-field-logo center-horizontal">
                  <img src="../assets/inforge-icon-text.png" class="inforge-text">
                </div>
                <h2 class="main-field-content center-text">{{}}</h2>
                <p class="main-field-content center-text">{{lang.main.subText}}<br>
                  {{lang.main.line1}}</p>
                <p class="main-field-content center-text">{{lang.main.line2}}<br>
                  {{lang.main.line3}}</p>
                <p class="main-field-content center-text">{{lang.main.line4}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="height: 20px"></div>

      <div class="center-horizontal max-width">
        <div class="max-width">
          <div class="card-align max-width">
            <div style="width: 5%"></div>
            <div class="main-card round-corner">
              <div class="main-card-button-pos">
                <div class="center-horizontal">
                  <img src="../assets/raute-dice.png" class="raute">
                </div>
                <div class="center-horizontal">
                  <h3>{{lang.main.diceBluffHeadline}}</h3>
                </div>
                <p class="center-text">{{lang.main.diceBluffLine1}}</p>
                <p class="center-text">{{lang.main.diceBluffLine2}}</p>
              </div>
              <div class="center-horizontal">
                <UIButton :title="lang.main.diceBluffButton" @click="onClickDiceBluff" customClasses="wide-ui-button"/>
              </div>
              <div class="center-horizontal">
                <UIButton :title="lang.ui.moreInformationButton" @click="onProjectDiceBluff" customClasses="wide-ui-button"/>
              </div>
            </div>
            <div style="width: 10%"></div>
            <div class="main-card round-corner relative">
              <div class="main-card-button-pos">
                <div class="center-horizontal">
                  <img src="../assets/raute-frame.png" class="raute">
                </div>
                <div class="center-horizontal">
                  <h3>{{lang.main.frameGameHeadline}}</h3>
                </div>
                <p class="center-text">{{lang.main.frameGameLine1}}</p>
              </div>
              <div class="center-horizontal">
                <UIButton :title="lang.main.frameGameButton" @click="onClickFrameGame" customClasses="wide-ui-button"/>
              </div>
              <div class="center-horizontal">
                <UIButton :title="lang.ui.moreInformationButton" @click="onProjectFrameGame" customClasses="wide-ui-button"/>
              </div>
            </div>
            <div style="width: 5%"></div>
          </div>
        </div>
      </div>

      <div class="project-space"></div>
      <div class="center-horizontal">
        <div class="project-box center-horizontal absolute on-top">
          <div class="project-box-left relative">
            <div class="absolute overflow-hidden max-width max-height" style="background: #000000">
              <img src="../assets/content-background.jpeg" style="opacity: 0.5;" class="project-headline-image">
            </div>
            <div class="absolute center" style="width: 35vw; height: 700px">
              <div style="width: 30vw">
                <h1 class="center-text">{{lang.main.projectsHeadline}}</h1>
                <p class="center-text">{{lang.main.projectsSub}}</p>
              </div>
            </div>
          </div>
          <div class="project-box-right relative">
            <div class="absolute overflow-hidden max-height" style="width: 55vw; background: #000000">
              <img src="../assets/content-background-2.jpeg" style="opacity: 0.5; object-fit: contain" class="project-content-image">
            </div>
            <div class="absolute max-width">
              <div class="project-grid max-height">
                <div class="max-width max-height center" style="transform: translate(100px, -100px)">
                  <InfoCard :title="lang.main.projectsAUL" :button="lang.ui.moreInfosButton" :teaser="lang.main.projectsAULText" @clicked="onProjectAmongUsLive"/>
                </div>
                <div class="max-width max-height center" style="transform: translate(0px, 60px)">
                  <InfoCard :title="lang.main.projectsDC" :button="lang.ui.moreInfosButton" :teaser="lang.main.projectsDCText" @clicked="onProjectDiscordBot"/>
                </div>
                <div class="max-width max-height center" style="transform: translate(50px, -100px)">
                  <InfoCard :title="lang.main.projectsRW" :button="lang.ui.moreInfosButton" :teaser="lang.main.projectsRWText" @clicked="onProjectRaspiWindow"/>
                </div>
                <div class="max-width max-height center" style="transform: translate(-100px, 80px)">
                  <InfoCard :title="lang.main.projectsIC" :button="lang.ui.moreInfosButton" :teaser="lang.main.projectsICText" @clicked="onProjectIntercra"/>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="full-size center-horizontal">

          <div class="project-box-mobile">
            <div class="project-box-up">
              <div>
                <h1 class="center-text">{{lang.main.projectsHeadline}}</h1>
                <p class="center-text">{{lang.main.projectsSub}}</p>
              </div>
            </div>
            <div class="project-box-mobile center-horizontal" style="width: 95vw">
              <div class="project-box-down">
                <div class="project-grid max-height max-width">
                  <div class="max-width max-height center">
                    <InfoCard :title="lang.main.projectsAUL" :button="lang.ui.moreInfosButton" :teaser="lang.main.projectsAULText" @clicked="onProjectAmongUsLive"/>
                  </div>
                  <div class="max-width max-height center">
                    <InfoCard :title="lang.main.projectsDC" :button="lang.ui.moreInfosButton" :teaser="lang.main.projectsDCText" @clicked="onProjectDiscordBot"/>
                  </div>
                  <div class="max-width max-height center">
                    <InfoCard :title="lang.main.projectsRW" :button="lang.ui.moreInfosButton" :teaser="lang.main.projectsRWText" @clicked="onProjectRaspiWindow"/>
                  </div>
                  <div class="max-width max-height center">
                    <InfoCard :title="lang.main.projectsIC" :button="lang.ui.moreInfosButton" :teaser="lang.main.projectsICText" @clicked="onProjectIntercra"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="project-space-under"></div>


      <!--<div class="center-horizontal on-bottom">
        <img src="../assets/chain.png" class="chain-image absolute" style="transform: translate(-500px, -200px)">
        <img src="../assets/chain.png" class="chain-image absolute" style="transform: translate(500px, -200px)">
      </div>/!-->

      <div>
        <div class="center-horizontal suggest absolute max-width">
          <div class="project-box-half relative">
            <div class="absolute overflow-hidden max-width max-height" style="background: #000000">
              <img src="../assets/content-background-3.jpeg" style="opacity: 0.4; object-fit: contain" class="suggest-image">
            </div>
            <div class="absolute center" style="width: 45vw; height: 700px">
              <div class="max-width">
                <!--
                <h1 class="center-text">Das Vorschlägesystem von Inforge</h1>
                <p class="center-text">Hier findest du eine kurze Einführung zum Vorschlägesystem</p>/!-->
                <h1 class="center-text">{{lang.main.ideasHeadline}}</h1>
                <p class="center-text">{{lang.main.ideasSub}}</p>
              </div>
            </div>
          </div>
          <div class="project-box-half center" style="background: #000000">
            <div style="width: 80%; height: 95%" class="center">
              <div>
                <IdeasCard :title="lang.main.ideasProject1Headline" :teaser="lang.main.ideasProject1Text"/>
                <IdeasCard :title="lang.main.ideasProject2Headline" :teaser="lang.main.ideasProject2Text"/>
                <IdeasCard :title="lang.main.ideasProject3Headline" :teaser="lang.main.ideasProject3Text"/>
                <IdeasCard :title="lang.main.ideasProject4Headline" :teaser="lang.main.ideasProject4Text"/>
              </div>
            </div>
          </div>
        </div>

        <div class="center-horizontal suggest-mobile">
          <div>
            <div class="project-box-half-mobile relative">
              <div class="center">
                <div>
                  <!--<h1 class="center-text">Das Vorschlägesystem von Inforge</h1>/!-->
                  <h1 class="center-text">{{lang.main.ideasHeadline}}</h1>
                  <p class="center-text">H{{lang.main.ideasSub}}</p>
                </div>
              </div>
            </div>
            <div class="project-box-half-mobile center">
              <div style="width: 80%; height: 95%" class="center">
                <div>
                  <IdeasCard :title="lang.main.ideasProject1Headline" :teaser="lang.main.ideasProject1Text"/>
                  <IdeasCard :title="lang.main.ideasProject2Headline" :teaser="lang.main.ideasProject2Text"/>
                  <IdeasCard :title="lang.main.ideasProject3Headline" :teaser="lang.main.ideasProject3Text"/>
                  <IdeasCard :title="lang.main.ideasProject4Headline" :teaser="lang.main.ideasProject4Text"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="stats-space"></div>

      <div class="center-horizontal">
        <img src="../assets/raute-dice.png" class="stats-raute">
        <div style="width: 10px"></div>
        <h1 class="prim-color stats-headline">{{lang.main.statsDBHeadline}}</h1>
      </div>
      <div class="center-horizontal">
        <div class="white" v-if="diceBluffStatus">{{lang.main.statsStatus}}: <span class="green">online</span></div>
        <div class="white" v-else>{{lang.main.statsStatus}}: <span class="red">offline</span></div>
      </div>

      <div class="center-horizontal">
        <!-- DiceBluff    /!-->
        <!-- Sitzungen Online, Spieler Online, Sitzungen jemals eröffnet, Sieger, Verlierer    /!-->

        <!-- FrameGame    /!-->
        <!-- Sitzungen Online, Spieler Online, Sitzungen jemals eröffnet, Bilder kreiert    /!-->

        <div class="stats round-corner center">
          <div class="stats-grid-dicebluff" v-if="diceBluffRender">
            <StatsModule :title="lang.main.statsDBSessionOnline" :data="diceBluffStats.sessionOnline"/>
            <StatsModule :title="lang.main.statsDBPlayersOnline" :data="diceBluffStats.playerOnline"/>
            <StatsModule :title="lang.main.statsDBSessionTotal" :data="diceBluffStats.sessionTotal"/>
            <StatsModule :title="lang.main.statsDBWinner" :data="diceBluffStats.winner"/>
            <StatsModule :title="lang.main.statsDBLooser" :data="diceBluffStats.looser"/>
          </div>
        </div>

      </div>

      <div style="height: 50px"></div>

      <div class="center-horizontal">
        <img src="../assets/raute-frame.png" class="stats-raute">
        <div style="width: 10px"></div>
        <h1 class="prim-color stats-headline">{{lang.main.statsFGHeadline}}</h1>
      </div>
      <div class="center-horizontal">
        <div class="white" v-if="FrameGameStatus">{{lang.main.statsStatus}}: <span class="green">online</span></div>
        <div class="white" v-else>{{lang.main.statsStatus}}: <span class="red">offline</span></div>
      </div>

      <div class="center-horizontal">

        <div class="stats round-corner center">
          <div class="stats-grid-framegame" v-if="frameGameRender">
            <StatsModule :title="lang.main.statsFGSessionOnline" :data="frameGameStats.sessionOnline"/>
            <StatsModule :title="lang.main.statsFGPlayersOnline" :data="frameGameStats.playerOnline"/>
            <StatsModule :title="lang.main.statsFGSessionTotal" :data="frameGameStats.sessionTotal"/>
            <StatsModule :title="lang.main.statsFGImage" :data="frameGameStats.created"/>
          </div>
        </div>

      </div>

      <div style="height: 100px"></div>

    </div>
  </div>

</template>


<script>

import EventBus from "./code/EventBusEvent";
import langDE from "../assets/langDE.json"
import langEN from "../assets/langEN.json"
import NavHeader from "@/components/views/NavHeader.vue";
import UIButton from "@/components/views/UIButton.vue";
import InfoCard from "@/components/views/InfoCard.vue";
import Header from "@/components/views/Header.vue";
import StatsModule from "@/components/views/StatsModule.vue";
import {nextTick} from "vue";
import IdeasCard from "@/components/views/IdeasCard.vue";
import HttpRequest from "@/components/code/HttpRequest.ts";

export default {
    name: "MainPage",
  components: {IdeasCard, StatsModule, Header, InfoCard, UIButton, NavHeader},
    data() {
        return {
          socket: null,
          serverId: "",
          diceBluffStatus: false,
          FrameGameStatus: false,
          diceBluffStats: {},
          frameGameStats: {},
          diceBluffRender: true,
          frameGameRender: true,
          lang: langDE,
        };
    },

    created() {
      this.diceBluffStats = {
        sessionOnline: "-",
        playerOnline: "-",
        sessionTotal: "-",
        winner: "-",
        looser: "-"
      }
      this.frameGameStats = {
        sessionOnline: "-",
        playerOnline: "-",
        sessionTotal: "-",
        created: "-",
      }
    },

  mounted() {

    if(this.getCookies("lang") === null || this.getCookies("lang") === "en"){
      this.lang = langEN
    }else{
      this.lang = langDE
    }

    window.addEventListener('beforeunload', this.eventClose);

    this.socket = new WebSocket(import.meta.env.VITE_SERVER_URL);

    this.socket.addEventListener('open', (event) => {
      console.log('WebSocket-Verbindung geöffnet');
      this.diceBluffStatus = true

      this.serverId = this.generateRandomString()

      let dat = {
        type: "stats",
        func: "register",
        args: [this.serverId]
      };
      this.send(dat);

    });

    this.socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data)
      //console.log(message)
      if(message.func === "stats"){

        this.diceBluffRender = false
        this.diceBluffStats = {
          sessionOnline: message.sessionOnline,
          playerOnline: message.playerOnline,
          sessionTotal: message.sessionTotal,
          winner: message.winner,
          looser: message.looser
        }
        nextTick(() =>{
          this.diceBluffRender = true
        })

      }
    });

  },

    methods: {

      onProjectIntercra(){
        this.$router.push({ path: '/projects', hash: '#scroll-intercra' });
      },

      onProjectRaspiWindow(){
        this.$router.push({ path: '/projects', hash: '#scroll-raspiwindow' });
      },

      onProjectDiscordBot(){
        this.$router.push({ path: '/projects', hash: '#scroll-discordbot' });
      },

      onProjectAmongUsLive(){
        this.$router.push({ path: '/games', hash: '#scroll-amonguslive' });
      },

      onProjectFrameGame(){
        this.$router.push({ path: '/games', hash: '#scroll-framegame' });
      },

      onProjectDiceBluff(){
        this.$router.push({ path: '/games', hash: '#scroll-dicebluff' });
      },

      onClickFrameGame(){
        window.open('https://framegame.inforge.de', '_self');
      },

      onClickDiceBluff(){
        window.open('https://dicebluff.inforge.de', '_self');
      },

      langClicked(){
        if(this.getCookies("lang") === null || this.getCookies("lang") === "en"){
          this.lang = langEN
          EventBus.emit("lang", "en")
        }else{
          this.lang = langDE
          EventBus.emit("lang", "de")
        }
      },

      send(data){
        this.socket.send(JSON.stringify(data))
      },

      generateRandomString() {
        let length = 8
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomIndex);
        }
        return result;
      },

      eventClose(){
        let dat = {
          type: "register",
          func: "remove",
          args: [this.serverId]
        }
        this.send(dat)
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