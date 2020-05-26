<template>
  <div class="sidebar">
    <div class="sidebar__head">
      <button @click="toggle">TOGGLE</button>
    </div>
    <overlay-scrollbars class="sidebar__content">
      <div v-for="n in 1000" :key="n">sidebar</div>
    </overlay-scrollbars>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "sidebar",
  computed: {
    ...mapGetters({
      strictSidebar: "dashboard/strictSidebar"
    })
  },
  methods: {
    toggle() {
      this.$store.dispatch("dashboard/setSidebarStrict", !this.strictSidebar);
    }
  }
};
</script>
