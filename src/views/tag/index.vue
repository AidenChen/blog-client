<template>
  <div>
    <topbar/>
    <div class="tag">
      <ul class="tag-items">
        <li class="tag-item" v-for="(tag, index) in tags" :key="index"
          @click="goToPost(tag.id)"
        >
          <span>{{tag.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Topbar from '../../components/topbar';

export default {
  name: 'tag',
  components: {
    Topbar,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'tags',
    ]),
  },
  mounted() {
    this.indexTag().then(() => {
    });
  },
  methods: {
    ...mapActions([
      'indexTag',
    ]),
    goToPost(tag) {
      this.$router.push({
        name: 'post-list',
        query: { tags: tag },
      });
    },
  },
};
</script>

<style lang="scss">
.tag {
  padding-top: 85px;
}

.tag-items {
  list-style: none;
  margin: 0 auto;
  padding: 0 30px;
  max-width: calc(1000px - (30px * 2));
}

.tag-item {
  display: inline-block;
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  color: #999;
  cursor: pointer;
}

@media screen and (max-width: 850px) {
  .tag {
    position: relative;
    padding-top: 80px;
  }
}
</style>
