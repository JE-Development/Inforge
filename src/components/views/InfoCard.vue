<template>

    <div class="gradient-box round-corner center">
      <div style="width: 95%; height: 95%;">
        <div class="center-horizontal">
          <h1>{{title}}</h1>
        </div>
        <p class="center-text">InfoCard ist eine selbstprogrammiertes HTML Element. Es dient dazu schön auszusehen und so.</p>
        <p class="center-text">InfoCard ist eine selbstprogrammiertes HTML Element. Es dient dazu schön auszusehen und so.</p>
        <p class="center-text">InfoCard ist eine selbstprogrammiertes HTML Element. Es dient dazu schön auszusehen und so.</p>
        <p class="center-text">InfoCard ist eine selbstprogrammiertes HTML Element. Es dient dazu schön auszusehen und so.</p>
        <p class="center-text">InfoCard ist eine selbstprogrammiertes HTML Element. Es dient dazu schön auszusehen und so.</p>
        <p class="center-text">InfoCard ist eine selbstprogrammiertes HTML Element. Es dient dazu schön auszusehen und so.</p>
      </div>
    </div>

</template>


<script>

export default {
    name: "InfoCard",
    data() {
        return {
        };
    },

    props:{
      title: String,
      teaser: String,
      button: String,
    },

    created() {
    },

    mounted() {
    },


    methods: {

        click(){
          this.$emit("click")
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