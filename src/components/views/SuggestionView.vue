<template>
  <div class="suggestion-view-border content-layout-color">
    <div style="overflow: hidden">
      <a class="error-color pointer" v-if="isUserView" style="overflow: hidden" @click="deleteClicked">delete</a>
      <p class="visible-link-color" style="overflow: hidden">{{username}}</p>
      <h2 :class="'suggestion-code-color-' + status">{{headline}}</h2>
      <p class="white">{{teaser}}</p>
    </div>
  </div>
</template>

<script>

import EventBus from "../code/EventBusEvent.ts";
import SavedIconView from "../views/SavedIconView.vue";
import {FirebaseController} from "../code/FirebaseController.ts";

export default {
  name: "suggestionView",
    components: {SavedIconView},

    /*
    status code:
    0: denied
    1: pending approval
    2: approved, coming soon
    3: implemented
     */

  props: {
    username: String,
    headline: String,
    teaser: String,
      status: String,
    isUserView: Boolean,
    id: String,
    onDeleteCallback: {
      type: Function,
    },
  },


    methods: {

    deleteClicked(){
      let fc = new FirebaseController()
      fc.deletePost(this.id)
      this.onDeleteCallback()
    }

  }
}
</script>

<style scoped>

</style>