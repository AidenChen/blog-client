<template>
  <header class="top-header">
    <!-- <img src="" alt="" class="top-header__menu-button" @click.stop="toggleSideBox"> -->
    <router-link to="/" class="top-header__main-icon" @click.native='clearFilter'>Aiden's Blog</router-link>
  </header>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'Top',
  data() {
    return {};
  },
  created() {},
  methods: {
    ...mapActions(['indexArticle']),
    ...mapMutations({
      toggleSideBox: 'TOGGLE_SIDEBOX',
      setSelectTags: 'SET_SELECT_TAGS'
    }),
    clearFilter() {
      this.setSelectTags([]);
    }
  },
  computed: {}
};
</script>

<style lang="scss">
.top-header {
  position: fixed;
  top: 0;
  height: 60px;
  line-height: 60px;
  width: 100%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  padding: 0 40px 0 40px;
  background: white;
  z-index: 3;
}

.top-header__main-icon {
  text-decoration: none;
  color: #0288D1;
  font-weight: 600;
  font-size: 20px;
}

.top-header__menu-button {
  position: absolute;
  left: 10px;
  top: 50%;
  width: 32px;
  height: 32px;
  margin-top: -(32px / 2);
  display: none;
}

@media screen and (max-width: 850px) {
  .top-header {
    text-align: center;
    padding: 0;
  }

  .top-header__menu-button {
    display: block;
  }
}
</style>
