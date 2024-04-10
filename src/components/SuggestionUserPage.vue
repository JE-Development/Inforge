<template>
    <div class="center-horizontal">
      <div>
        <Header/>
        <div>

            <div class="center-horizontal">
              <h2>
                <span class="suggestion-code-color-0 suggestion-font">abgelehnt</span> |
                <span class="suggestion-code-color-1 suggestion-font">wird bearbeitet</span> |
                <span class="suggestion-code-color-2 suggestion-font">genehmigt, kommt demnächst</span> |
                <span class="suggestion-code-color-3 suggestion-font">implementiert</span>
              </h2>
            </div>

          <div class="suggestion-page">
            <div class="suggestion-grid center-horizontal">


              <SuggestionView
                  v-for="(dat) in data"
                      :headline="dat.headline"
                      :teaser="dat.content"
                      :status="dat.status"
                      :username="dat.username"
                  :isUserView="true"
                  :id="dat.id"
                  :onDeleteCallback="startRequest"
              />




            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>


import SuggestionView from "./views/SuggestionView.vue";
import UIButton from "./views/UIButton.vue";
import {decodeCredential, googleOneTap} from "vue3-google-login";
import axios from "axios";
import {FirebaseController} from "./code/FirebaseController.ts";
import Header from "@/components/views/Header.vue";

export default {
  name: "suggestionPage",
    components: {Header, UIButton, SuggestionView},

    data(){
      return{

        data: [],
        username: ""
      }
    },

  created() {
    this.username = this.getCookies("google_username")

  },

  mounted() {
    this.startRequest()
  },

  methods: {
    getCookies(key){
      return this.$cookies.get(key);
    },
    setCookies(key, value){
      if(true){
        return this.$cookies.set(key, value, 2147483647);
      }
    },

    startRequest(){
      let fc = new FirebaseController()
      fc.getFeedback().then((data) =>{
        this.data = []
        let keys = [];
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            keys.push(key);
          }
        }

        for(let i = 0; i < keys.length; i++){
          if(this.username === data[keys[i]].username){
            let set = {
              headline: data[keys[i]].headline,
              content: data[keys[i]].content,
              username: data[keys[i]].username,
              status: data[keys[i]].status,
              id: keys[i]
            }
            this.data.push(set)
          }

        }
        this.data = this.data.reverse()
      })
    },

    formatEmail(email){
      email = email.replace(/\./g, "(dot)");
      email = email.replace("@", "(at)");
      return email
    },

  },

}
</script>

