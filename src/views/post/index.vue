<template>
  <div class="post">
    <topbar/>
    <transition name="fade" mode="out-in">
      <!-- <keep-alive exclude="post-detail"> -->
        <router-view/>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
import Topbar from '../../components/topbar';

export default {
  name: 'post',
  components: {
    Topbar,
  },
};
</script>

<style lang="scss">
.post {
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter {
  transform: translateX(50px);
}

.fade-leave-active {
  transform: translateX(-50px);
}
</style>
