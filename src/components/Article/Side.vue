<template>
  <div class="sideBox">
    <div class="sideBox__mask" :class="{ 'sideBox__mask--show': sideBoxOpen}" @click="closeSideBox"></div>
    <div class="sideBox__main" :class="{ 'sideBox__main--open': sideBoxOpen}">
      <ul class="sideBox__tagList" v-if="isInList">
        <li v-for="tag in tags" class="sideBox__tagItem" :class="{ 'sideBox__tagItem--active': (typeof selectTags.find(function(e){return e.id == tag.id}) !== 'undefined')}" @click="toggleSelectTags({id:tag.id, name:tag.name})">
          <span>{{tag.name}}</span>
        </li>
      </ul>
      <div class="categoryBox" v-if="!isInList" :class="{ 'categoryBox--fixed': (scrollTop > 270)}" ref="categoryBox">
        <p class="categoryBox__title">文章目录</p>
        <ul class="categoryBox__list">
          <li v-for="item in category" :class="'categoryBox__'+item.tagName">
            <a :href="item.href">{{item.text}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

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
    // if (!this.isInList) {
    //   window.onscroll = throttle(this.getScrollTop, 30);
    // }
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
      this.$router.push('/');
    },
    clearSelectTagArr() {
      this.setSelectTags([]);
    }
  },
  watch: {}
};
</script>

<style lang="scss">
@import '../../assets/scss/base.scss';

.sideBox {
  width: 250px;
  float: left;
  text-align: center;
}

.sideBox__img {
  width: 150px;
  border-radius: 50%;
  box-shadow: 0 0 2px black;
  margin-top: 10px;
  cursor: pointer;
}

.sideBox__name {
  color: $grey-dark;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.sideBox__motto {
  color: $grey;
  margin-bottom: 8px;
}

.sideBox__tagList {
  list-style: none;
  padding: 10px;
}

.sideBox__tagItem {
  display: inline-block;
  border: 1px solid $grey;
  border-radius: 4px;
  margin: 5px;
  padding: 10px;
  color: $grey;
  cursor: pointer;

  &:hover {
    color: $blue;
  }
}

.sideBox__tagItem--active {
  color: $blue;
  border: 1px solid $blue;
}

.categoryBox {
  padding-left: 20px;
  padding-right: 15px;
  will-change: transform;

  &__title {
    margin-top: 15px;
    margin-bottom: 10px;
    font-weight: 400;
    color: $grey-dark;
    font-size: 18px;
  }

  ul {
    list-style: none;
  }

  li {
    text-align: left;
    margin-bottom: 5px;
    padding-left: 20px;
    word-wrap: break-word;
    word-break: all;

    a {
      color: $grey;
      text-decoration: none;
      margin-left: -18px;
      word-wrap: break-word;
      word-break: break-all;

      &:hover {
        color: $blue;
        text-decoration: underline;
      }
    }
  }

  &__h1 {
    margin-left: 0;
  }

  &__h2 {
    margin-left: 20px;
  }

  &__h3 {
    margin-left: 40px;
  }

  &__h4 {
    margin-left: 60px;
  }

  &__h5 {
    margin-left: 80px;
  }

  &__h6 {
    margin-left: 100px;
  }
}

.sideBox__mask {
  display: none;
}

.categoryBox--fixed {
  position: fixed;
  top: 60px;
  bottom: 0;
  overflow-y: auto;
  width: 250px;
}

@media screen and (max-width: 850px) {
  .sideBox {
    position: absolute;
    top: 0;
    left: 0;

    &__main {
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

      &--open {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        z-index: 2;
        transform: translateX(0px);
        -webkit-transform: translateX(0px);
        transition: transform 0.3s;
        -webkit-transtion: transform 0.3s;
      }
    }

    &__mask {
      position: fixed;
      top: 60px;
      left: 250px;
      right: 0;
      bottom: 0;
      display: block;
      z-index: 1;
      display: none;
    }

    &__mask--show {
      display: block;
    }

    &__tagItem:hover {
      color: $grey;
    }

    &__tagItem--active:hover {
      color: $blue;
    }

    .categoryBox--fixed {
      position: static;
      width: auto;
    }
  }
}
</style>
