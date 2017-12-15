<template>
  <div id="app">
    <div class="wrap">
      <Top/>
      <transition name="fade" mode="out-in">
        <!-- keep-alive排除article -->
        <keep-alive exclude="article"> 
          <router-view/>
        </keep-alive>
      </transition>
    </div>
    <footer class="footer">
      <p>Copyright &copy; 2017 <a href="https://github.com/AidenChen">Aiden Chen</a></p>
    </footer>
  </div>
</template>

<script>
import Top from './components/Top';

export default {
  name: 'app',
  components: {
    Top
  }
};
</script>

<style lang="scss">
@import './assets/scss/markdown.scss';

$footer-height: 60px;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  ul {
    padding: 0;
  }

  li {
    box-sizing: border-box;
  }

  .wrap {
    min-height: 100%;
    margin-bottom: -($footer-height);
  }

  .wrap:after {
    content: '';
    display: block;
    height: $footer-height;
  }

  .footer {
    height: $footer-height;
    text-align: center;
    color: #bfbfbf;
    line-height: 20px;

    a {
      text-decoration: none;
      color: #868686;

      &:hover {
        text-decoration: underline;
      }
    }
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
}
</style>
