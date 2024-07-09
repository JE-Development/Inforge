<template>

  <div>
    <Header @lang="langClicked"/>

    <div class="full-width center-horizontal">
      <div>
        <div>
          <div id="scroll-discordbot">
            <div class="center-horizontal">
              <div class="project-page-headline" style="transform: translateY(20px)">
                <h1 style="margin-top: 0px">{{lang.projects.dcHeadline}}</h1>
              </div>
            </div>
            <div class="project-page-box center">
              <div style="width: 80%; height: 95%" class="center">
                <div>
                  <div style="height: 20px"></div>
                  <p class="center-text">{{lang.projects.dcLine1}}</p>
                  <div class="center-horizontal">
                    <img src="../assets/ivan_rusakov.png" style="max-width: 100%">
                  </div>
                  <p class="center-text">{{lang.projects.dcLine2}}</p>
                  <p class="center-text">{{lang.projects.dcLine3}}</p>
                  <p class="center-text">{{lang.projects.dcLine4}}</p>
                </div>
              </div>
            </div>
          </div>

          <div style="height: 50px"></div>

          <div id="scroll-raspiwindow">
            <div class="center-horizontal">
              <div class="project-page-headline" style="transform: translateY(20px)">
                <h1 style="margin-top: 0px">{{lang.projects.rwHeadline}}</h1>
              </div>
            </div>
            <div class="project-page-box center">
              <div style="width: 80%; height: 95%" class="center">
                <div>
                  <div style="height: 20px"></div>
                  <p class="center-text">{{lang.projects.rwLine1}}</p>
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
                <h1 style="margin-top: 0px">{{lang.projects.icHeadline}}</h1>
              </div>
            </div>
            <div class="project-page-box center">
              <div style="width: 80%; height: 95%" class="center">
                <div>
                  <div style="height: 20px"></div>
                  <p class="center-text">{{lang.projects.icLine1}}</p>
                  <p class="center-text">{{lang.projects.icLine2}}</p>
                  <div class="center-horizontal">
                    <img src="../assets/intercra.png" style="max-width: 100%">
                  </div>
                  <div style="height: 30px"></div>
                  <div class="center-horizontal">
                    <UIButton :title="lang.projects.icButton" @click="onClickIntercra"/>
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

import EventBus from "./code/EventBusEvent";
import NavHeader from "@/components/views/NavHeader.vue";
import NavMobile from "@/components/views/NavMobile.vue";
import Header from "@/components/views/Header.vue";
import UIButton from "@/components/views/UIButton.vue";
import {nextTick} from "vue";
import langDE from "../assets/langDE.json"
import langEN from "../assets/langEN.json"

export default {
    name: "ProjectsPage",
  components: {UIButton, Header},
    data() {
        return {
          lang: langDE,
        };
    },

    created() {
    },

    mounted() {
      nextTick(() => {
        this.scrollToHash();
      });

      if(this.getCookies("lang") === null || this.getCookies("lang") === "en"){
        this.lang = langEN
      }else{
        this.lang = langDE
      }

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
          EventBus.emit("lang", "en")
        }else{
          this.lang = langDE
          EventBus.emit("lang", "de")
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