<template>
  <div>
    <div class="position-static">
      <h2>BBBEE Document Builder</h2>
      <hr />
    </div>
    <document-form></document-form>
  </div>
</template>
<script>
import DocumentForm from "./DocumentForm";

export default {
  name: "DocumentList",
  components: {
    DocumentForm,
  },
};
</script>
