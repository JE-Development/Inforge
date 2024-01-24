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
          <div style="width: 50%" class="center-horizontal">
            <div>
              <div class="center-horizontal">
                <img src="../assets/raute-dice.png" class="raute">
              </div>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
            </div>
          </div>
          <div style="width: 50%" class="center-horizontal">
            <div>
              <div class="center-horizontal">
                <img src="../assets/raute-frame.png" class="raute">
              </div>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
              <p>Dies ist ein Paragraph mit viel text</p>
            </div>
          </div>
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