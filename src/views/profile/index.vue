<template>
  <div>
    <topbar/>
    <div class="profile">
      <div class="profile-inner">
        <div class="profile-abstract">
          <img src="http://cdn.aiden-chen.com/blog/avatar.png" alt="头像" class="profile-avatar">
          <p class="profile-name">Aiden Chen</p>
          <p class="profile-slogan">会当出岫拿苍冥</p>
          <ul class="profile-tags">
            <li class="profile-tag" v-for="(tag, index) in tags" :key="index">
              <span>{{tag}}</span>
            </li>
          </ul>
        </div>
        <div class="profile-detail">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from '../../components/topbar';

export default {
  name: 'profile',
  components: {
    Topbar,
  },
  data() {
    return {
      tags: ['JavaScript', 'Node.js', 'PHP'],
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
.profile {
  padding-top: 85px;
}

.profile-inner {
  margin: 0 auto;
  padding: 0 30px;
  max-width: calc(1000px - (30px * 2));
}

.profile-abstract {
  width: 250px;
  text-align: center;
}

.profile-avatar {
  width: 150px;
  border-radius: 50%;
  margin-top: 10px;
}

.profile-name {
  color: #999;
  margin: 5px 0;
}

.profile-slogan {
  color: #999;
  margin: 5px 0;
}

.profile-tags {
  list-style: none;
  margin: 10px 0;
  padding: 10px;
}

.profile-tag {
  display: inline-block;
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  color: #999;
}

.profile-detail {
  margin-left: 260px;
  min-height: 100%;
  border-bottom: 1px solid #eee;
  padding-bottom: 80px;
  margin-bottom: 30px;
}

@media screen and (max-width: 850px) {
  .profile {
    position: relative;
    padding-top: 80px;
  }

  .profile-abstract {
    display: none;
  }

  .profile-detail {
    margin-left: 0;
  }
}
</style>
