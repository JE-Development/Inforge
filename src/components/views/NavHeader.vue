<template>

    <div class="center-horizontal">
      <button class="nav-button center-horizontal">
        <p style="margin-top: 5px">{{title}}</p>
      </button>
    </div>

</template>


<script>

export default {
    name: "NavHeader",
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