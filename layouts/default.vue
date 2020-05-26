<template>
  <div id="app">
    <div class="app" :class="{
          'app_sidebar_strict': strictSidebar
      }">
      <side-bar/>
      <div class="content">
        <overlay-scrollbars class="content__body">
          <div class="app__navbar">
            <div class="navbar">navbar</div>
          </div>
          <nuxt/>
          <div v-for="n in 1000" :key="n">content placeholder</div>
        </overlay-scrollbars>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "~/components/SideBar";
import { mapGetters } from "vuex";

export default {
  components: {
    SideBar
  },
  data() {
    return {
      strict: false
    };
  },
  computed: {
    ...mapGetters({
      strictSidebar: "dashboard/strictSidebar"
    })
  }
};
</script>


<style>
@import "normalize.css";
@import "overlayscrollbars/css/OverlayScrollbars.min.css";

html,
body {
  min-height: 100%;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

.app {
  display: flex;
  min-height: 100%;
  background-color: #F8F8F8;
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}

.app_sidebar_strict .sidebar {
  width: 100px;
}
.app_sidebar_strict .content {
  width: calc(100% - 100px);
}

.app_sidebar_strict .app__navbar {
  max-width: calc(100% - 100px);
}

.sidebar {
  min-height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 260px;
  background-color: grey;
  transition: width 0.1s ease 0s;
  height: 100%;
}
.sidebar_strict {
  width: 100px;
}
.sidebar__head {
  height: 50px;
  padding: 1rem;
}
.sidebar__content {
  height: calc(100% - 50px);
  overflow-y: auto;
}

.content {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: calc(100% - 260px);
  max-width: 100%;
  background-color: yellow;
  transition: width 0.1s ease 0s;
}
.content__body {
  height: 100%;
  padding: 116px 16px 16px;
  overflow-y: auto;
}

.app__navbar {
  position: fixed;
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 16px;
  max-width: calc(100% - 260px);
  transition: max-width 0.1s ease 0s;
  top: 0;
  right: 0;
  z-index: 10;
}
.navbar {
  background-color: #FFFFFF;
  width: 100%;
  height: 100%;
}
</style>
