<template>
    <div class="center-horizontal">
      <div>
        <Header/>
        <PostSuggestionPopup :show="postShow" @close="closePostPopup"/>
        <CreateUsernamePopup :show="usernameShow" @close="closeUsernamePopup" @created="createdUsername"/>
        <div>

            <div class="center-horizontal">
                <h2>
                    <span class="suggestion-code-color-0 suggestion-font">abgelehnt</span> |
                    <span class="suggestion-code-color-1 suggestion-font">wird bearbeitet</span> |
                    <span class="suggestion-code-color-2 suggestion-font">genehmigt, kommt demnächst</span> |
                    <span class="suggestion-code-color-3 suggestion-font">implementiert</span>
                </h2>
            </div>

            <div class="center-horizontal">
                <div>
                    <p class="decent-color">Du kannst neue Funktionen vorschlagen oder Bugs und Fehler melden</p>
                    <div class="center-horizontal" v-if="isLogin">
                        <div>
                          <UIButton @clicked="suggestionClicked" title="Ein Vorschlag erstellen" customClasses="wider-ui-button"/>
                          <UIButton @clicked="seePostsClicked" title="Meine Vorschläge sehen sehen" customClasses="wider-ui-button"/>
                        </div>
                    </div>

                  <div class="center-horizontal" v-else>
                    <div>
                      <div style="height: 30px"></div>
                      <GoogleLogin :callback="handleResponse" auto-login/>
                      <div style="height: 30px"></div>
                    </div>
                  </div>
                </div>
            </div>

          <div class="suggestion-page">
            <div class="suggestion-grid center-horizontal">


              <SuggestionView
                  v-for="(dat) in data"
                      :headline="dat.headline"
                      :teaser="dat.content"
                      :status="dat.status"
                      :username="dat.username"
              />




            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>


import {decodeCredential, googleLogout, googleOneTap} from "vue3-google-login";
import axios from "axios";
import {FirebaseController} from "./code/FirebaseController.ts";
import CreateUsernamePopup from "@/components/views/CreateUsernamePopup.vue";
import PostSuggestionPopup from "@/components/views/PostSuggestionPopup.vue";
import SuggestionView from "@/components/views/SuggestionView.vue";
import UIButton from "@/components/views/UIButton.vue";
import Header from "@/components/views/Header.vue";

export default {
  name: "SuggestionPage",
    components: {Header, CreateUsernamePopup, PostSuggestionPopup, SuggestionView, UIButton},

    data(){
      return{
        postShow: false,
        isLogin: false,
        data: [],
        usernameShow: false
      }
    },

  created() {
  },

  mounted(){
    if(this.getCookies("google_email") === null){
      this.isLogin = false
    }else{
      this.isLogin = true
      this.checkBlocked()
    }
    this.startRequest()
  },


  methods: {
    getCookies(key){
      return this.$cookies.get(key);
    },
    setCookies(key, value){
      if(true){
        this.$cookies.set(key, value, 2147483647);
      }
    },

    closePostPopup(){
      this.postShow = false
      this.startRequest()
    },

    checkBlocked(){
      this.email = this.getCookies("google_email")
      this.email = this.formatEmail(this.email)
      let fc = new FirebaseController()
      fc.getUser(this.email).then((data) => {
        if(data.blocked === undefined){
          this.$notify("This account is blocked")
          this.logout()
        }
      })
    },

    logout(){
      googleLogout()
      this.$cookies.remove("google_email")
      this.$cookies.remove("google_username")
      this.isLogin = false
    },

    handleResponse(response){
      const userData = decodeCredential(response.credential)
      this.email = userData.email
      let fc = new FirebaseController()
      fc.getUsers().then((data) =>{
        if(data === null){
          this.usernameShow = true
        }else{
          if(this.formatEmail(this.email) in data){
            this.getUsername()
            this.saveLogin()
          }else{
            this.usernameShow = true
          }
        }
      })
    },

    closeUsernamePopup(){
      this.usernameShow = false
    },

    createdUsername(username){
      //console.log("callback: ", userData)
      this.saveLogin()

      this.usernameShow = false
      let fc = new FirebaseController()

      fc.createUser(this.formatEmail(this.email), username, "false")

      this.setCookies("google_username", username)

    },

    formatEmail(email){
      email = email.replace(/\./g, "(dot)");
      email = email.replace("@", "(at)");
      return email
    },
    getUsername(){
      let fc = new FirebaseController()
      fc.getUser(this.formatEmail(this.email)).then((data) => {
        this.setCookies("google_username", data.username)
      })
    },

    saveLogin(){
      this.setCookies("google_email", this.email)
      this.isLogin = true
      this.checkBlocked()
    },

    suggestionClicked(){
      this.postShow = true
    },

    seePostsClicked(){
      if(this.getCookies("google_email") === null){
        this.$notify("You are not logged in")
      }else{
        this.$router.push('/suggestion/posts');
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
          let set = {
            headline: data[keys[i]].headline,
            content: data[keys[i]].content,
            username: data[keys[i]].username,
            status: data[keys[i]].status,
          }
          this.data.push(set)
        }
        this.data = this.data.reverse()
      })
    },

  },

}
</script>

