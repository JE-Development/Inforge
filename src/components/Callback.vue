<template>

  <h1>Redirecting...</h1>

</template>


<script>


import HttpRequest from "../components/code/HttpRequest.ts";
import axios from "axios";

export default {
    name: "Callback",
    data() {
        return {
          callback: ""
        };
    },

    created() {
    },

    mounted() {
      this.code = this.$route.query.code
      this.$cookies.set("code", this.code, 2147483647);

      let http = new HttpRequest()

      let body = {
        client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
        client_secret: import.meta.env.VITE_DISCORD_CLIENT_SECRET,
        code: this.code,
        grant_type: 'authorization_code',
        redirect_uri: document.baseURI.split("/callback")[0] + "/callback",
      }

      console.log(body)

      http.httpRequestPost("https://discord.com/api/oauth2/token", body).then((response) => {
        let access = response.access_token
        let expires = response.expires_in
        this.$cookies.set("access_token", access, expires);



        http.httpRequestHeader("https://discord.com/api/v10/users/@me", {
          Authorization: "Bearer " + access
        }).then((response) => {
          let id = response.id
          let username = response.username
          let email = response.email
          let avatar = response.avatar

          this.$cookies.set("id", id, 2147483647);
          this.$cookies.set("username", username, 2147483647);
          this.$cookies.set("email", email, 2147483647);
          this.$cookies.set("avatar", avatar, 2147483647);



          this.$router.push("/")
        })
      })
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