<template>

  <div>
    <Header/>

    <div class="full-width center-horizontal">
      <div>
        <div>
          <div id="scroll-discordbot">
            <div class="center-horizontal">
              <div class="project-page-headline" style="transform: translateY(20px)">
                <h1 style="margin-top: 0px">DiscordBot</h1>
              </div>
            </div>
            <div class="project-page-box center">
              <div style="width: 80%; height: 95%" class="center">
                <div>
                  <div style="height: 20px"></div>
                  <p class="center-text">Auf meinem Discord Server befindet sich ein selbstprogrammierter Discord Bot den wir 'Ivan Rusakov' getauft haben.</p>
                  <div class="center-horizontal">
                    <img src="../assets/ivan_rusakov.png">
                  </div>
                  <p class="center-text">Durch ihn konnte man einen Spieler zum 'Schere Stein Papier' spielen herausfordern (momentan offline).</p>
                  <p class="center-text">Man kann mit ihm auch irgendwelche Unsplash Bilder anhand eines Suchwortes anzeigen lassen und Kopf oder Zahl spielen.</p>
                  <p class="center-text">Dieses Projekt läuft momentan auf einen Strato Server. Es ist in der Planung das Projekt auf einen VPS umzulegen. Unter anderem Deswegen ist das Projekt noch nicht für die Allgemeinheit verfügbar.</p>
                </div>
              </div>
            </div>
          </div>

          <div style="height: 50px"></div>

          <div id="scroll-raspiwindow">
            <div class="center-horizontal">
              <div class="project-page-headline" style="transform: translateY(20px)">
                <h1 style="margin-top: 0px">RaspiWindow</h1>
              </div>
            </div>
            <div class="project-page-box center">
              <div style="width: 80%; height: 95%" class="center">
                <div>
                  <div style="height: 20px"></div>
                  <p class="center-text">RaspiWindow ist eine Vollbildwebseite, die dir Verschiedene Informationen dauerhaft anzeigen lassen kann. Bis zu diesen Stand kann sie Aktien, das Wetter und die neusten Discord Nachrichten anzeigen. RaspiWindow hat auch alle 10 Minuten den Hintergrund geändert. Ich habe als Hintergrundthema 'Space' eingestellt</p>
                  <div class="center-horizontal">
                    <img src="../assets/raspiwindow.png" style="width: 80%">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="height: 50px"></div>


          <div id="scroll-intercra">
            <div class="center-horizontal">
              <div class="project-page-headline" style="transform: translateY(20px)">
                <h1 style="margin-top: 0px">Intercra</h1>
              </div>
            </div>
            <div class="project-page-box center">
              <div style="width: 80%; height: 95%" class="center">
                <div>
                  <div style="height: 20px"></div>
                  <p class="center-text">Intercra ist eine Suchmaschine, wo man selbst entscheiden kann, welche Webseite Suchergebnisse anzeigen kann und welche nicht. Dieses Projekt diente als besondere Lernleistung für meine Abiturprüfung im Fach Informatik.</p>
                  <p class="center-text">Für einen besseren Eindruck besucht gerne mal Intercra.</p>
                  <div class="center-horizontal">
                    <img src="../assets/intercra.png">
                  </div>
                  <div style="height: 30px"></div>
                  <div class="center-horizontal">
                    <UIButton :title="'Zu Intercra'" @click="onClickIntercra"/>
                  </div>
                  <div style="height: 10px"></div>
                </div>
              </div>
            </div>
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
import {nextTick} from "vue";

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

      onClickIntercra(){
        window.open('https://intercra.inforge.de', '_self');
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