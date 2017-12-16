<template>
  <header class="top">
    <img class="top__menu" @click.stop="toggleSideBox" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUWMPt08ERACAIBDEomvqxBh18EQogn9us+HsJAAAAt0BPfQU8A2YKULKSdQAQmpIBAMBm4AAtdCIhmRB8RAAAAABJRU5ErkJggg==" alt="">
    <router-link class="top__title" to="/articles" @click.native='clearFilter'>Aiden's Blog</router-link>
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
@import '../../assets/scss/base.scss';

.top {
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

.top__title {
  text-decoration: none;
  color: $blue;
  font-weight: 600;
  font-size: 20px;
}

.top__menu {
  position: absolute;
  left: 10px;
  top: 50%;
  width: 32px;
  height: 32px;
  margin-top: -(32px / 2);
  display: none;
}

@media screen and (max-width: 850px) {
  .top {
    text-align: center;
    padding: 0;
  }

  .top__menu {
    display: block;
  }
}
</style>
