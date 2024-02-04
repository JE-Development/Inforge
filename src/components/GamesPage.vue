<template>

  <div>
    <Header/>

    <div class="games-module-left shadow-dicebluff dicebluff-background">
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
      <div class="games-module-right shadow-framegame framegame-background">
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
            <p class="center-text">Dieses Projekt befindet sich noch in der Entwicklung und wird in naher Zukuft veröffentlicht.</p>
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

    <div class="games-module-left shadow-amongus amongus-background">
      <div class="center-horizontal">
        <img src="../assets/raute-amongus.png" class="stats-raute">
        <div style="width: 10px"></div>
        <h1 class="prim-color stats-headline">AmongUsLive</h1>
      </div>
      <div class="center-horizontal">
        <div style="width: 95%; height: 95%">
          <p class="center-text">AmongUsLive ist eine Variante von AmongUs, die im echten Leben gespielt werden kann.</p>
          <p class="center-text">Das Spiel funktioniert so, dass in den Gebäuden, in denen AmongUsLive gespielt wird, QR-Codes
            angebracht werden müssen, die gescannt werden können, um die auf dem Handy angezeigten Aufgaben zu lösen. Jeder
            Spieler erhält auf seinem Handy die Aufgaben, die er erledigen muss. Auf diese Weise weiß er, welche QR-Codes er
            scannen muss. Es ist auch möglich, eine Karte des Spielfelds hochzuladen, damit jeder Spieler weiß, wo sich seine
            Aufgaben befinden.</p>
          <p class="center-text">Der Imposter kann Spieler eliminieren, indem er beispielsweise einen Spieler antippt. Die
            genaue Umsetzung bleibt der Spielergruppe überlassen, über die sie sich einigen müssen.</p>
          <p class="center-text">Sabotagen werden so umgesetzt, dass der Imposter über sein Handy eine Sabotage starten kann
            und die Spieler spezielle QR-Codes scannen müssen, um die Sabotage zu beheben.</p>
          <p class="center-text">Meetings werden so organisiert, dass, wenn ein Spieler ein Meeting einberuft, alle Spieler
            eine Benachrichtigung auf ihrem Handy erhalten, dass ein Meeting stattfindet, und dass sie sich an einem festgelegten
            Ort treffen müssen. Sobald sich alle Spieler getroffen haben, kann der Spieler, der das Meeting einberufen hat, das
            Meeting starten, sobald er feststellt, dass sich alle Spieler am festgelegten Treffpunkt befinden. Bei Meetings
            stimmen die Spieler auf ihren Handys ab und sehen dann das Ergebnis, nachdem alle Spieler abgestimmt haben.</p>
          <p class="center-text">Es gibt auch eine Zusatzfunktion, bei der eine Oberfläche dauerhaft auf einem Fernseher oder
            einer Leinwand angezeigt werden kann. Diese dient dazu, den Fortschritt bei den gelösten Aufgaben zu verfolgen oder
            in Echtzeit zu sehen, wo gerade eine Aufgabe gelöst wird. Außerdem können Meetings darüber organisiert werden, sodass
            das Votingergebnis auf der Leinwand oder dem Fernseher angezeigt werden kann.</p>
          <p class="center-text">Dieses Projekt befindet sich noch in der Entwicklung und wird in naher Zukunft noch nicht veröffentlicht.</p>
        </div>
      </div>
      <!--<div class="center-horizontal">
        <div class="games-display-button">
          <div class="center-horizontal">
            <UIButton :title="'Zu DiceBluff'" @click="onClickDiceBluff"/>
          </div>
          <div style="width: 20px"></div>
          <div class="center-horizontal">
            <UIButton :title="'Vollständige Spielanleitung'" @click="onClickDiceBluffInstructions" customClasses="wide-ui-button"/>
          </div>
        </div>
      </div>/!-->
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