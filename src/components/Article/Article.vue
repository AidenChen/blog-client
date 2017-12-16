<template>
  <div class="home">
    <top/>
    <transition name="fade" mode="out-in">
      <keep-alive exclude="Detail">
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Top from './Top';

export default {
  name: 'Article',
  components: {
    Top
  }
};
</script>

<style lang="scss">
@import '../../assets/scss/base.scss';

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
