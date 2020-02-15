<template>
  <footer>
    <hr />
    <div class="container">
      &copy;
      <span v-once>{{ siteName }}</span>
      <span v-once>
        {{ currentYear }}, developed by
        <a href="http://anthemcs.co.za" target="_blank"
          >Anthem Creative Studios</a
        >
      </span>
    </div>
  </footer>
</template>

<script>
import { siteName } from "../../config";

export default {
  data() {
    return {
      siteName: siteName,
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
