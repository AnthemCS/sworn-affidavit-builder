<template>
  <div>
    <div v-if="!fileViewUrl" class="alert alert-warning" role="alert">
      <strong>No document to view here!</strong>
      <a href="/document-builder" class="alert-link">Create Document here</a>
    </div>
    <div v-else class="alert alert-primary" role="alert">
      <strong>View Documents here!</strong> |
      <a target="_blank" @click="linkExternal" class="alert-link ">Link</a>
      {{ fileViewUrl }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { api } from "../../config";

export default {
  name: "DocumentViewer",
  computed: {
    ...mapState("documentbuilder", ["fileViewUrl"]),
  },
  methods: {
    linkExternal(evt) {
      evt.preventDefault();
    },
  },
};
</script>
