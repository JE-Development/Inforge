<template>

  <div class="relative max-width">

    <div class="absolute overflow-hidden max-width">
      <img src="../assets/background.jpeg" class="background-image">

      <div style="transform: translateY(-180px); height: 900px">


        <div class="project-box center-horizontal">
          <div class="project-box-left relative">
            <div class="absolute overflow-hidden max-width">
              <img src="../assets/content-background.jpeg" style="opacity: 0.3; width: 50vw">
            </div>
            <div class="absolute center" style="width: 35vw; height: 700px">
              <div style="width: 30vw">
                <h1 class="center-text">Weitere Projekte</h1>
                <p class="center-text">Hier sind weitere Projekte die in Arbeit sind. Die meisten sind erst am Anfang in der Entwicklung und noch sehr unausgereift.</p>
              </div>
            </div>
          </div>
          <div class="project-box-right">
            <img src="../assets/content-background-2.jpeg" style="opacity: 0.1; width: 50vw" class="absolute">
            <div class="absolute">
              <div class="project-grid max-height">
                <div class="max-width max-height center" style="transform: translate(100px, -100px)">
                  <InfoCard title="AmongUsLive" :button="'Weitere Infos'" teaser="AmongUsLive ist eine AmongUs Version die man im echten Leben spielen kann. Dieses Browsergame versucht das Spielerlebnis und die Spannung um echten Leben zu simulieren. Dabei ist dein Smartphone dein Wegbegleiter. Dieses Projekt liegt vorerst auf Eis, weil es in der Entwicklung zu komplikationen kam und andere Projekte vorrang hatten."/>
                </div>
                <div class="max-width max-height center" style="transform: translate(150px, 60px)">
                  <InfoCard title="DiceBluffAndroid" :button="'Weitere Infos'" teaser="DiceBluffAndroid ist die Android Version von DiceBluff. Dieses Projekt ist jetzt erst enstatnden und steht noch in den Startlöchern."/>
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

        <!--
        <div>
          <div class="grid">
            <InfoCard title="AmongUsLive" :button="'Weitere Infos'" teaser="AmongUsLive ist eine AmongUs Version die man im echten Leben spielen kann. Dieses Browsergame versucht das Spielerlebnis und die Spannung um echten Leben zu simulieren. Dabei ist dein Smartphone dein Wegbegleiter. Dieses Projekt liegt vorerst auf Eis, weil es in der Entwicklung zu komplikationen kam und andere Projekte vorrang hatten."/>
            <InfoCard title="DiceBluffAndroid" :button="'Weitere Infos'" teaser="DiceBluffAndroid ist die Android Version von DiceBluff. Dieses Projekt ist jetzt erst enstatnden und steht noch in den Startlöchern."/>
            <InfoCard title="RaspiWindow" :button="'Weitere Infos'" teaser="RaspiWindow ist ein Smart Window. Es zeigt dir verschidene Informationen zu verschiedene Dinge an. Das Projekt ist eine Weseite, die damals von meinem Raspberry Pi 3b+ angezeigt wurde. Das Projekt ist bis jetzt nur für meine private Anwendung konzipiert. Es folgt noch eine communitytaugliche Version."/>
            <InfoCard title="MinecraftPlugin" :button="'Weitere Infos'" teaser="Ich habe auch ein Minecraft Plugin für allgemeine Serverzwecke entwickelt. Das Plugin beinhaltet ein Chunkloadersystem, Titelsystem und eine creative Bauwelt. Dieses Projekt wurde nur für private zwecke entwickelt. Eine communitytaugliche Version wird noch folgen."/>
          </div>
        </div>
        /!-->
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
                <h3 class="main-field-content center-text">Inforge - Browser Games und Coding Projekte</h3>
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

      <div style="height: 20px"></div>

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

export default {
    name: "MainPage",
  components: {Header, InfoCard, UIButton, NavHeader},
    data() {
        return {
        };
    },

    created() {
    },

    mounted() {

    },

    methods: {

      onClickFrameGame(){
        window.open('https://framegame.inforge.de', '_self');
      },

      onClickDiceBluff(){
        window.open('https://dicebluff.inforge.de', '_self');
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