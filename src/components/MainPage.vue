<template>

  <div class="relative max-width">

    <div class="absolute overflow-hidden max-width">
      <img src="../assets/background.png" class="background-image on-top">

      <div class="center-horizontal relative on-bottom">
        <img src="../assets/chain.png" class="chain-image absolute" style="transform: translate(500px, -350px)">
        <img src="../assets/chain.png" class="chain-image absolute" style="transform: translate(-500px, -350px)">
      </div>
    </div>

    <div class="absolute">

      <div class="relative">

        <div>
          <Header/>

          <div class="center-horizontal">
            <div class="main-field round-corner center">
              <div>
                <div class="main-field-logo center-horizontal">
                  <img src="../assets/inforge-icon-text.png" class="inforge-text">
                </div>
                <h2 class="main-field-content center-text">Browser Games und Coding Projekte</h2>
                <p class="main-field-content center-text">Inforge ist eine Platform und Sammelstelle für Projekte von Jason Enns.<br>
                  Inforge bietet dabei Projekte in Form von Browser Games und Open Source Coding Projekte.</p>
                <p class="main-field-content center-text">Inforge bietet auch eine Platform für den Austausch von Ideen, Vorschlägen und Bug Reports von Projekten.<br>
                  Es ist für uns wichtig, Software und Webanwendung nach Communitywünschen zu entwickeln.</p>
                <p class="main-field-content center-text">Probiert gerne die Spiele aus und gibt uns Ideen und Verbesserungsvorschläge zu den Projekten.</p>
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
                  <h3>DiceBluff</h3>
                </div>
                <p class="center-text">DiceBluff ist eine Browser Game Adaption von dem Würfelspiel namens "Mäxchen" oder "Mia".</p>
                <p class="center-text">DiceBluff ist ein geselliges Würfelspiel, bei dem Spieler abwechselnd würfeln und versuchen,
                  beim Lügen nicht erwischt zu werden. Spieler geben ihre Würfelergebnisse an und der nächste Spieler muss entscheiden,
                  ob er ihnen glaubt oder nicht. Ziel ist es, als Letzter übrig zu bleiben. Es ist ein einfaches, aber unterhaltsames
                  Spiel, das für jede Art von Zusammenkunft geeignet ist und für viel Spaß und Lachen sorgt.</p>
              </div>
              <div class="center-horizontal">
                <UIButton :title="'Zu DiceBluff'" @click="onClickDiceBluff"/>
              </div>
            </div>
            <div style="width: 10%"></div>
            <div class="main-card round-corner relative">
              <div class="main-card-button-pos">
                <div class="center-horizontal">
                  <img src="../assets/raute-frame.png" class="raute">
                </div>
                <div class="center-horizontal">
                  <h3>FrameGame</h3>
                </div>
                <p class="center-text">FrameGame ist eine modifizierte Variante von "Gartic Phone". Anstatt Dinge zu zeichnen
                  oder malen, kann man bei FrameGame sein Bild mit vielen verschiedenen Bilddateien zusammenstellen. Dabei stehen einem eine große Bibliothek an Bilder zur verfügung.</p>
              </div>
              <div class="center-horizontal">
                <UIButton :title="'Zu FrameGame'" @click="onClickFrameGame"/>
              </div>
            </div>
            <div style="width: 5%"></div>
          </div>
        </div>
      </div>

      <div class="project-space"></div>
      <div class="center-horizontal">
        <div class="project-box center-horizontal absolute">
          <div class="project-box-left relative">
            <div class="absolute overflow-hidden max-width max-height" style="background: #000000">
              <img src="../assets/content-background.jpeg" style="opacity: 0.5;" class="project-headline-image">
            </div>
            <div class="absolute center" style="width: 35vw; height: 700px">
              <div style="width: 30vw">
                <h1 class="center-text">Weitere Projekte</h1>
                <p class="center-text">Hier sind weitere Projekte die in Arbeit sind. Die meisten sind erst am Anfang in der Entwicklung und noch sehr unausgereift.</p>
              </div>
            </div>
          </div>
          <div class="project-box-right relative">
            <div class="absolute overflow-hidden max-height" style="width: 55vw; background: #000000">
              <img src="../assets/content-background-2.jpeg" style="opacity: 0.5; object-fit: contain" class="project-content-image">
            </div>
            <div class="absolute">
              <div class="project-grid max-height">
                <div class="max-width max-height center" style="transform: translate(100px, -100px)">
                  <InfoCard title="AmongUsLive" :button="'Weitere Infos'" teaser="AmongUsLive ist eine AmongUs Version die man im echten Leben spielen kann. Dieses Browsergame versucht das Spielerlebnis und die Spannung um echten Leben zu simulieren. Dabei ist dein Smartphone dein Wegbegleiter. Dieses Projekt liegt vorerst auf Eis, weil es in der Entwicklung zu komplikationen kam und andere Projekte vorrang hatten."/>
                </div>
                <div class="max-width max-height center" style="transform: translate(150px, 60px)">
                  <InfoCard title="DiscordBot" :button="'Weitere Infos'" teaser="DiscordBot ist ein selbstprogrammierter Discord Bot. Dieses Projekt steht noch in den Startlöchern und wartet darauf mit Features der Community gefüllt zu werden."/>
                </div>
                <div class="max-width max-height center" style="transform: translate(50px, -100px)">
                  <InfoCard title="RaspiWindow" :button="'Weitere Infos'" teaser="RaspiWindow ist ein Smart Window. Es zeigt dir verschidene Informationen zu verschiedene Dinge an. Das Projekt ist eine Weseite, die damals von meinem Raspberry Pi 3b+ angezeigt wurde. Das Projekt ist bis jetzt nur für meine private Anwendung konzipiert. Es folgt noch eine communitytaugliche Version."/>
                </div>
                <div class="max-width max-height center" style="transform: translate(100px, 80px)">
                  <InfoCard title="MinecraftPlugin" :button="'Weitere Infos'" teaser="Ich habe auch ein Minecraft Plugin für allgemeine Serverzwecke entwickelt. Das Plugin beinhaltet ein Chunkloadersystem, Titelsystem und eine creative Bauwelt. Dieses Projekt wurde nur für private zwecke entwickelt. Eine communitytaugliche Version wird noch folgen."/>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="full-size center-horizontal">

          <div class="project-box-mobile center-horizontal" style="width: 95vw">
            <div class="project-box-right">
              <div class="project-grid max-height max-width">
                <div class="max-width max-height center">
                  <InfoCard title="AmongUsLive" :button="'Weitere Infos'" teaser="AmongUsLive ist eine AmongUs Version die man im echten Leben spielen kann. Dieses Browsergame versucht das Spielerlebnis und die Spannung um echten Leben zu simulieren. Dabei ist dein Smartphone dein Wegbegleiter. Dieses Projekt liegt vorerst auf Eis, weil es in der Entwicklung zu komplikationen kam und andere Projekte vorrang hatten."/>
                </div>
                <div class="max-width max-height center">
                  <InfoCard title="DiceBluffAndroid" :button="'Weitere Infos'" teaser="DiceBluffAndroid ist die Android Version von DiceBluff. Dieses Projekt ist jetzt erst enstatnden und steht noch in den Startlöchern."/>
                </div>
                <div class="max-width max-height center">
                  <InfoCard title="RaspiWindow" :button="'Weitere Infos'" teaser="RaspiWindow ist ein Smart Window. Es zeigt dir verschidene Informationen zu verschiedene Dinge an. Das Projekt ist eine Weseite, die damals von meinem Raspberry Pi 3b+ angezeigt wurde. Das Projekt ist bis jetzt nur für meine private Anwendung konzipiert. Es folgt noch eine communitytaugliche Version."/>
                </div>
                <div class="max-width max-height center">
                  <InfoCard title="MinecraftPlugin" :button="'Weitere Infos'" teaser="Ich habe auch ein Minecraft Plugin für allgemeine Serverzwecke entwickelt. Das Plugin beinhaltet ein Chunkloadersystem, Titelsystem und eine creative Bauwelt. Dieses Projekt wurde nur für private zwecke entwickelt. Eine communitytaugliche Version wird noch folgen."/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="project-space-under"></div>

      <div>
        <div class="center-horizontal suggest absolute max-width">
          <div class="project-box-half relative">
            <div class="absolute overflow-hidden max-width max-height">
              <img src="../assets/content-background-3.jpeg" style="opacity: 0.3; object-fit: contain" class="suggest-image">
            </div>
            <div class="absolute center" style="width: 45vw; height: 700px">
              <div class="max-width">
                <h1 class="center-text">Das Vorschlägesystem von Inforge</h1>
                <p class="center-text">Hier findest du eine kurze Einführung zum Vorschlägesystem</p>
              </div>
            </div>
          </div>
          <div class="project-box-half center">
            <div style="width: 80%; height: 95%" class="center">
              <div>
                <p class="center-text">Inforge bietet ein Vorschlägesystem, welches ermöglicht, Projekte mit Communitywünschen zu entwickeln oder zu verbessern.</p>
                <p class="center-text">Du kannst ganz einfach ein Vorschlag schreiben bei dem jeweiligen Projekt, bei welchem
                  du deine Ideen einbringen möchtest. Dabei kann man auch die Vorschläge der anderen sehen. Man kann auch die
                  Vorschläge der anderen upvoten oder downvoten. Man sollte verhindern Vorschläge doppelt aufzuschreiben.
                  Wenn du ein Vorschlag hast, welches bereits von jemand anderem vorgeschlagen worden ist, gebe ein upvote,
                  damit wir sehen, dass dieser Vprschlag beliebt ist</p>
                <p class="center-text">Deine Vorschläge werden in einer Google Cloud Datenbank gelagert und mit deinem Google Konto verknüpft.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="center-horizontal suggest-mobile">
          <div>
            <div class="project-box-half-mobile relative">
              <div class="center">
                <div>
                  <h1 class="center-text">Das Vorschlägesystem von Inforge</h1>
                </div>
              </div>
            </div>
            <div class="project-box-half-mobile center">
              <div style="width: 80%; height: 95%" class="center">
                <div>
                  <p class="center-text">Inforge bietet ein Vorschlägesystem, welches ermöglicht, Projekte mit Communitywünschen zu entwickeln oder zu verbessern.</p>
                  <p class="center-text">Du kannst ganz einfach ein Vorschlag schreiben bei dem jeweiligen Projekt, bei welchem
                    du deine Ideen einbringen möchtest. Dabei kann man auch die Vorschläge der anderen sehen. Man kann auch die
                    Vorschläge der anderen upvoten oder downvoten. Man sollte verhindern Vorschläge doppelt aufzuschreiben.
                    Wenn du ein Vorschlag hast, welches bereits von jemand anderem vorgeschlagen worden ist, gebe ein upvote,
                    damit wir sehen, dass dieser Vprschlag beliebt ist</p>
                  <p class="center-text">Deine Vorschläge werden in einer Google Cloud Datenbank gelagert und mit deinem Google Konto verknüpft.</p>
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
        <h1 class="prim-color stats-headline">DiceBluff</h1>
      </div>
      <div class="center-horizontal">
        <div class="white" v-if="diceBluffStatus">Serverstatus: <span class="green">online</span></div>
        <div class="white" v-else>Serverstatus: <span class="red">offline</span></div>
      </div>

      <div class="center-horizontal">
        <!-- DiceBluff    /!-->
        <!-- Sitzungen Online, Spieler Online, Sitzungen jemals eröffnet, Sieger, Verlierer    /!-->

        <!-- FrameGame    /!-->
        <!-- Sitzungen Online, Spieler Online, Sitzungen jemals eröffnet, Bilder kreiert    /!-->

        <div class="stats round-corner center">
          <div class="stats-grid-dicebluff" v-if="diceBluffRender">
            <StatsModule title="Sitzungen online" :data="diceBluffStats.sessionOnline"/>
            <StatsModule title="Spieler online" :data="diceBluffStats.playerOnline"/>
            <StatsModule title="Sitzungen insgesamt" :data="diceBluffStats.sessionTotal"/>
            <StatsModule title="Sieger insgesamt" :data="diceBluffStats.winner"/>
            <StatsModule title="Verlierer insgesamt" :data="diceBluffStats.looser"/>
          </div>
        </div>

      </div>

      <div style="height: 50px"></div>

      <div class="center-horizontal">
        <img src="../assets/raute-frame.png" class="stats-raute">
        <div style="width: 10px"></div>
        <h1 class="prim-color stats-headline">FrameGame</h1>
      </div>
      <div class="center-horizontal">
        <div class="white" v-if="FrameGameStatus">Serverstatus: <span class="green">online</span></div>
        <div class="white" v-else>Serverstatus: <span class="red">offline</span></div>
      </div>

      <div class="center-horizontal">

        <div class="stats round-corner center">
          <div class="stats-grid-framegame" v-if="frameGameRender">
            <StatsModule title="Sitzungen online" :data="frameGameStats.sessionOnline"/>
            <StatsModule title="Spieler online" :data="frameGameStats.playerOnline"/>
            <StatsModule title="Sitzungen insgesamt" :data="frameGameStats.sessionTotal"/>
            <StatsModule title="Bilder kreiert" :data="frameGameStats.created"/>
          </div>
        </div>

      </div>

      <div style="height: 100px"></div>

    </div>
  </div>

</template>


<script>

import langDE from "../assets/langDE.json"
import langEN from "../assets/langEN.json"
import NavHeader from "@/components/views/NavHeader.vue";
import UIButton from "@/components/views/UIButton.vue";
import InfoCard from "@/components/views/InfoCard.vue";
import Header from "@/components/views/Header.vue";
import StatsModule from "@/components/views/StatsModule.vue";
import {nextTick} from "vue";

export default {
    name: "MainPage",
  components: {StatsModule, Header, InfoCard, UIButton, NavHeader},
    data() {
        return {
          socket: null,
          serverId: "",
          diceBluffStatus: false,
          FrameGameStatus: false,
          diceBluffStats: {},
          frameGameStats: {},
          diceBluffRender: true,
          frameGameRender: true
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

      onClickFrameGame(){
        window.open('https://framegame.inforge.de', '_self');
      },

      onClickDiceBluff(){
        window.open('https://dicebluff.inforge.de', '_self');
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
        if(this.getCookies("allowedCookies") === "true"){
          this.$cookies.set(key, value, 2147483647);
        }
      },
    }
}
</script>