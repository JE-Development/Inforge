<template>

  <div>

    <div class="center-horizontal">
      <div class="header-size flex">
        <div class="absolute header-size center-vertical">
          <img src="../assets/inforge-icon-text.png" class="inforge-icon">
        </div>
        <div class="absolute header-size right center-vertical">
          <NavHeader/>
        </div>
      </div>
    </div>

    <div class="center-horizontal">
      <div class="main-field round-corner">
        <div class="absolute right max-width">
          <img src="../../raw/render.png" class="main-field-image">
        </div>
        <div class="absolute left max-height" style="width: 50%;">
          <div class="max-width center max-height">
            <div class="main-field-text center-vertical">
              <div>
                <img src="../assets/inforge-text.png" class="inforge-text">
                <h4>Inforge - Browser Games und Coding Projekte</h4>
                <p>Inforge ist eine Platform und Sammelstelle für Projekte von Jason Enns.<br>
                Inforge bietet dabei Projekte in Form von Browser Games und Open Source Coding Projekte.</p>
                <p>Inforge bietet auch eine Platform für den Austausch von Ideen, Vorschlägen und Bug Reports von Projekten.<br>
                Es ist für uns wichtig, Software und Webanwendung nach Communitywünschen zu entwickeln.</p>
                <p>Probiert gerne die Spiele aus und gibt uns Ideen und Verbesserungsvorschläge zu den Projekten.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 20px"></div>

    <div class="center-horizontal max-width">
      <div class="max-width">
        <div class="center-horizontal max-width">
          <div style="width: 5%"></div>
          <div style="width: 40%" class="center-horizontal main-card round-corner">
            <div>
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
              <div class="center-horizontal">
                <UIButton :title="'Zu DiceBluff'" @click="onClickDiceBluff"/>
              </div>
            </div>
          </div>
          <div style="width: 10%"></div>
          <div style="width: 40%" class="center-horizontal main-card round-corner">
            <div>
              <div class="center-horizontal">
                <img src="../assets/raute-frame.png" class="raute">
              </div>
              <div class="center-horizontal">
                <h3>FrameGame</h3>
              </div>
              <p class="center-text">FrameGame ist eine modifizierte Variante von "Gartic Phone". Anstatt Dinge zu zeichnen
                oder malen, kann man bei FrameGame sein Bild mit vielen verschiedenen Bilddateien zusammenstellen. Dabei stehen einem eine große Bibliothek an Bilder zur verfügung.</p>
              <div class="center-horizontal">
                <UIButton :title="'Zu FrameGame'" @click="onClickFrameGame"/>
              </div>
            </div>
          </div>
          <div style="width: 5%"></div>
        </div>
      </div>
    </div>

    <div style="height: 20px"></div>

    <div>
      <div class="grid">
        <InfoCard :title="'Info Card'" :button="'button'"/>
        <InfoCard :title="'Info Card'" :button="'button'"/>
        <InfoCard :title="'Info Card'" :button="'button'"/>
        <InfoCard :title="'Info Card'" :button="'button'"/>
      </div>
    </div>

  </div>

</template>


<script>

import langDE from "../assets/langDE.json"
import langEN from "../assets/langEN.json"
import NavHeader from "@/components/views/NavHeader.vue";
import UIButton from "@/components/views/UIButton.vue";
import InfoCard from "@/components/views/InfoCard.vue";

export default {
    name: "MainPage",
  components: {InfoCard, UIButton, NavHeader},
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