<template>
  <div class="side">
    <div class="side__mask" :class="{ 'side__mask--show': sideBoxOpen}" @click="closeSideBox"></div>
    <div class="side__main" :class="{ 'side__main--open': sideBoxOpen}">
      <img src="http://p2kxp2xqg.bkt.clouddn.com/blog/avatar.png" alt="头像" class="side__avatar" @click="backToIndex">
      <p class="side__name">Aiden Chen</p>
      <p class="side__email">chenscrocker@hotmail.com</p>
      <ul class="side__tags" v-if="isInList">
        <li v-for="(tag, index) in tags" :key='index' class="side__tag" :class="{ 'side__tag--active': (typeof selectTags.find(function(e){return e.id == tag.id}) !== 'undefined')}" @click="toggleSelectTags({id:tag.id, name:tag.name})">
          <span>{{tag.name}}</span>
        </li>
      </ul>
      <div class="catalog" v-if="!isInList" :class="{ 'catalog--fixed': (scrollTop > 270)}" ref="catalog">
        <p class="catalog__title">文章目录</p>
        <ul class="catalog__main">
          <li v-for="(item, index) in category" :key='index' :class="'catalog__item catalog__'+item.tagName" @click="closeSideBox">
            <a class="catalog__link" :href="item.href">{{item.text}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import throttle from '../../assets/js/throttle';

export default {
  name: 'Side',
  data() {
    return {
      tagList: [],
      scrollTop: 0,
      iconList: []
    };
  },
  props: {
    isInList: {
      type: Boolean,
      required: true
    },
    category: {
      type: Array,
      required: false
    }
  },
  computed: {
    ...mapGetters(['tags', 'selectTags', 'sideBoxOpen'])
  },
  created() {
    if (!this.isInList) {
      window.onscroll = throttle(this.getScrollTop, 30);
    }
    if (this.isInList && this.tags.length === 0) {
      this.indexTag();
    }
  },
  beforeDestroy() {
    window.onscroll = null;
  },
  methods: {
    ...mapMutations({
      setSelectTags: 'SET_SELECT_TAGS',
      toggleSideBox: 'TOGGLE_SIDEBOX',
      closeSideBox: 'CLOSE_SIDEBOX',
      toggleSelectTags: 'TOGGLE_SELECT_TAGS'
    }),
    ...mapActions(['indexTag']),
    backToIndex() {
      this.$router.push('/articles');
    },
    clearSelectTagArr() {
      this.setSelectTags([]);
    },
    getScrollTop() {
      let bodyScrollTop = 0;
      let documentScrollTop = 0;
      if (document.body) {
        if (document.body.clientWidth < 850) {
          return;
        }
        bodyScrollTop = document.body.scrollTop;
      }
      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
      }
      this.scrollTop =
        bodyScrollTop - documentScrollTop > 0
          ? bodyScrollTop
          : documentScrollTop;
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/scss/base.scss';

.side {
  width: 250px;
  float: left;
  text-align: center;
}

.side__mask {
  display: none;
}

.side__avatar {
  width: 150px;
  border-radius: 50%;
  box-shadow: 0 0 2px black;
  margin-top: 10px;
  cursor: pointer;
}

.side__name {
  color: $grey-dark;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.side__email {
  color: $grey;
  margin-bottom: 8px;
}

.side__tags {
  list-style: none;
  padding: 10px;
}

.side__tag {
  display: inline-block;
  border: 1px solid $grey;
  border-radius: 4px;
  margin: 5px;
  padding: 10px;
  color: $grey;
  cursor: pointer;
}

.side__tag:hover {
  color: $blue;
}

.side__tag--active {
  color: $blue;
  border: 1px solid $blue;
}

.catalog {
  padding-left: 20px;
  padding-right: 15px;
  will-change: transform;
}

.catalog--fixed {
  position: fixed;
  top: 60px;
  bottom: 0;
  overflow-y: auto;
  width: 250px;
}

.catalog__title {
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: 400;
  color: $grey-dark;
  font-size: 18px;
}

.catalog__main {
  list-style: none;
}

.catalog__item {
  text-align: left;
  margin-bottom: 5px;
  padding-left: 20px;
  word-wrap: break-word;
  word-break: all;
}

.catalog__h1 {
  margin-left: 0;
}

.catalog__h2 {
  margin-left: 20px;
}

.catalog__h3 {
  margin-left: 40px;
}

.catalog__h4 {
  margin-left: 60px;
}

.catalog__h5 {
  margin-left: 80px;
}

.catalog__h6 {
  margin-left: 100px;
}

.catalog__link {
  color: $grey;
  text-decoration: none;
  margin-left: -18px;
  word-wrap: break-word;
  word-break: break-all;
}

.catalog__link:hover {
  color: $blue;
  text-decoration: underline;
}

@media screen and (max-width: 850px) {
  .side {
    position: absolute;
    top: 0;
    left: 0;
  }

  .side__mask {
    position: fixed;
    top: 60px;
    left: 250px;
    right: 0;
    bottom: 0;
    display: block;
    z-index: 1;
    display: none;
  }

  .side__mask--show {
    display: block;
  }

  .side__main {
    position: fixed;
    left: 0px;
    top: 60px;
    bottom: 0;
    width: 250px;
    transform: translateX(-250px);
    -webkit-transform: translateX(-250px);
    transition: transform 0.3s;
    -webkit-transtion: transform 0.3s;
    background-color: white;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .side__main--open {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 2;
    transform: translateX(0px);
    -webkit-transform: translateX(0px);
    transition: transform 0.3s;
    -webkit-transtion: transform 0.3s;
  }

  .side__tag:hover {
    color: $grey;
  }

  .side__tag--active:hover {
    color: $blue;
  }

  .catalog--fixed {
    position: static;
    width: auto;
  }
}
</style>
