<template>
  <ul class="paginator">
    <li class="paginator__button" @click="prevPage">
      <
    </li>
    <li class="paginator__item" v-for="page in pageArr" @click="switchPage(page)" :class="{'paginator__item--active':page==curPage}">
      {{page}}
    </li>
    <li class="paginator__button" @click="nextPage">
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Paginator',
  data() {
    return {};
  },
  computed: {
    pageArr() {
      const arr = [];
      if (this.total <= 7) {
        // 1 2 3 4 5 6 7
        for (let i = 1; i <= this.total; i++) {
          arr.push(i);
        }
      } else {
        if (this.curPage - 1 < 3) {
          // 1 2 3 4 ... total
          for (let i = 1; i <= this.curPage + 1; i++) {
            arr.push(i);
          }
          arr.push('...');
          arr.push(this.total);
        } else if (this.total - this.curPage < 3) {
          // 1 ... 34 35 36 37
          arr.push(1);
          arr.push('...');
          for (let i = this.curPage - 1; i <= this.total; i++) {
            arr.push(i);
          }
        } else {
          // 1 ... 3 4 5 ... 37
          arr.push(1);
          arr.push('...');
          arr.push(this.curPage - 1);
          arr.push(this.curPage);
          arr.push(this.curPage + 1);
          arr.push('...');
          arr.push(this.total);
        }
      }
      return arr;
    }
  },
  props: {
    curPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  methods: {
    prevPage() {
      if (this.curPage <= 1) {
        return;
      }
      this.$emit('changePage', this.curPage - 1);
    },
    nextPage() {
      if (this.curPage >= this.total) {
        return;
      }
      this.$emit('changePage', this.curPage + 1);
    },
    switchPage(page) {
      if (page === '...') {
        return;
      }
      console.log(page);
      // 触发父组件的changePage方法，实现从父组件再修改props,单向数据流
      this.$emit('changePage', page);
    }
  },
  watch: {}
};
</script>

<style lang="scss">
.paginator {
  display: flex;
  max-width: 300px;
  list-style: none;
  margin: 25px auto;
}

.paginator__button {
  flex: 1;
  text-align: center;
  color: #0288d1;
  cursor: pointer;
}

.paginator__item {
  flex: 1;
  text-align: center;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    background-color: #efefef;
  }
}

.paginator__item--active {
  background-color: #efefef;
}
</style>
