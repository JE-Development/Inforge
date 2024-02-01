<template>

  <div>
    <Header/>

    <div class="games-module-left">
      <div class="center-horizontal">
        <img src="../assets/raute-dice.png" class="stats-raute">
        <div style="width: 10px"></div>
        <h1 class="prim-color stats-headline">DiceBluff</h1>
      </div>
      <div class="center-horizontal">
        <div style="width: 95%; height: 95%">
          <p class="center-text">DiceBluff ist eine Browser-Game-Adaption des Würfelspiels namens "Mäxchen" oder "Mia". Ziel ist es,
            nicht beim Lügen erwischt zu werden und auch etwas Glück zu haben.</p>
          <p class="center-text">Aber wie funktioniert das Spiel? Ich erkläre es mal ganz grob. Unter einem Würfelbecher befinden sich
            2 Würfel. Diese ergeben eine Zahl. Die Zahl setzt sich so zusammen, dass die größere Zahl der Würfel
            die Zehnerstelle ist und die kleinere Zahl die Einerstelle. Also ergibt beispielsweise "2" und "5" die
            Zahl 52 und "6" und "1" die Zahl 61. Wenn wir nun alle Pasche weglassen, haben wir folgende Zahlen:
            31-32, 41-43, 51-54, 61, 65. Die nächsthöhere Zahl nach der "65" wäre der 1er-Pasch ("11"). Danach folgt
            der 2er-Pasch ("22") usw. bis zum 6er-Pasch ("66"). Die allerhöchste Zahl ist die "21".</p>
          <p class="center-text">Nachdem ich gewürfelt habe, sehe nur ich die Würfel. Nehmen wir an, ich habe eine 43 gewürfelt.
            Nun schiebe ich den Würfelbecher zum nächsten Spieler und behaupte, dass ich eine "43" habe. Jetzt kann
            der nächste Spieler entscheiden, ob ich gelogen habe oder nicht. Nehmen wir an, er glaubt mir. Jetzt
            muss er würfeln und er würfelt einen 2er-Pasch. Anschließend schiebt er den Becher zum nächsten Spieler
            und behauptet, dass er einen 2er-Pasch hat. Der nächste Spieler glaubt ihm und würfelt ebenfalls.
            Er erhält eine 63. Jetzt muss er lügen, da er immer eine höhere Zahl als die zuvor genannte sagen muss.
            Also gibt er an, dass er einen 4er-Pasch hat. Der nächste Spieler glaubt ihm nicht, deckt den
            Würfelbecher auf und hat ihn beim Lügen erwischt. Nun verliert er ein Leben. Dieses Spielprinzip setzt
            sich fort, bis ein Spieler gewonnen hat.</p>
        </div>
      </div>
      <div class="center-horizontal">
        <div class="games-display-button">
          <div class="center-horizontal">
            <UIButton :title="'Zu DiceBluff'" @click="onClickDiceBluff"/>
          </div>
          <div style="width: 20px"></div>
          <div class="center-horizontal">
            <UIButton :title="'Vollständige Spielanleitung'" @click="onClickDiceBluffInstructions" customClasses="wide-ui-button"/>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 50px"></div>

    <div class="right">
      <div class="games-module-right">
        <div class="center-horizontal">
          <img src="../assets/raute-frame.png" class="stats-raute">
          <div style="width: 10px"></div>
          <h1 class="prim-color stats-headline">FrameGame</h1>
        </div>
        <div class="center-horizontal">
          <div style="width: 95%; height: 95%">
            <p class="center-text">FrameGame ist eine modifizierte Variante des Browsergames "Gartic Phone". Das
              Ziel ist es, eine lustige und unterhaltsame Kette aus Bildern zu erstellen.</p>
            <p class="center-text">Aber wie funktioniert das Spiel? Das Spiel ist in Runden aufgeteilt, wobei es
              so viele Runden gibt, wie es Spieler gibt. In der ersten Runde denkt sich jeder eine lustige oder
              unterhaltsame Situation aus, zum Beispiel "Ein Elefant auf dem Mond, der einen Hut trägt". In der
              nächsten Runde erhält dann jemand den Satz von einem anderen Spieler und muss ihn nachbauen. Als
              Mittel stehen Textfelder und Bilder aus dem Internet zur Verfügung. FrameGame enthält eine integrierte
              Bildersuche, die Bilder aus dem Internet anbietet. So kann man nun in der Bildersuche nach einem Mond,
              einem Elefanten und einem Hut suchen und sie in seine Leinwand einbauen.</p>
            <p class="center-text">Sobald jeder damit fertig ist, geht es in die nächste Runde, in der die
              erstellten Bilder der anderen erraten werden müssen, was sie darstellen sollen. Zum Beispiel
              könnte jemand denken, dass ein Bild einen Elefanten auf einem Planeten zeigt, der eine Kappe trägt
              und umherschwebt. In der nächsten Runde muss nun jemand anderes diese neue Beschreibung zum Bild
              nachbauen.</p>
            <p class="center-text">So kommt es oft zu Missverständnissen und es entsteht eine unterhaltsame Kette
              von Bildern, ähnlich wie bei "Stille Post".</p>
          </div>
        </div>
        <div class="center-horizontal">
          <div class="games-display-button">
            <div class="center-horizontal">
              <UIButton :title="'Zu FrameGame'" @click="onClickFrameGame"/>
            </div>
            <div style="width: 20px"></div>
            <div class="center-horizontal">
              <UIButton :title="'Vollständige Spielanleitung'" @click="onClickFrameGameInstructions" customClasses="wide-ui-button"/>
            </div>
          </div>
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

export default {
    name: "GamesPage",
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