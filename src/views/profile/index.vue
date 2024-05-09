<template>
  <div class="profile">
    <div class="profile-inner">
      <div class="profile-abstract">
        <img src="https://static.aiden-chen.com/blog/guitar.jpg" alt="头像" class="profile-avatar" />
        <p class="profile-name">Aiden Chen</p>
        <p class="profile-slogan">会当出岫拿苍冥</p>
        <ul class="profile-tags">
          <li class="profile-tag" v-for="(tag, index) in tags" :key="index">
            <span>{{ tag }}</span>
          </li>
        </ul>
      </div>
      <div class="profile-detail">
        <h2 style="margin-top: 0;">基本信息</h2>
        <h3>92年/男/本科/福州</h3>
        <div>我从2014年开始自学前端开发，曾参与过车联网、应急指挥、校园安全、内河船运、智能门诊、特殊教育、数据分析等多种行业应用的开发，并在多家公司担任过前端开发负责人或架构师。</div>
        <h2>技术能力</h2>
        <div>1）熟悉流行的MVVM框架及常用库，当前主要技术栈是Vue3。接触过Angular（早期版本）及React（管理系统开发），小程序（原生、uni-app）及混合开发均有涉猎。使用Electron开发过桌面应用（门诊系统）；</div>
        <div>2）3年兼任后端开发经验，熟悉PHP及Node.js后端开发，有MySQL及MongoDB数据库经验，熟悉使用Linux系统；</div>
        <div>3）开发过多个内部使用的通用类库、脚手架工具、工程模板，解决过多平台兼容问题，有全流程实现项目SEO优化的操作经验；</div>
        <div>4）主导过前端团队的工程化建设，具有架构设计、技术选型、性能优化、规范制定等方面的经验。</div>
        <h2>管理经验</h2>
        <div>1）超过5年的团队管理经验，带领过10人以上的团队；</div>
        <div>2）组织并开展了多次团队内的培训；</div>
        <div>3）拥有丰富的前端开发团队建设经验；</div>
        <div>4）根据业务特性及人才梯队优化过工作流程。</div>
        <h2>联系方式</h2>
        <div>邮箱：aidenchen@126.com</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Profile'
});

const tags = ['JavaScript', 'Node.js', 'PHP'];
</script>

<style lang="scss" scoped>
.profile {
  padding-top: 24px;
  padding-bottom: 24px;
}

.profile-inner {
  margin: 0 auto;
  @extend %maxWidth;
}

.profile-abstract {
  width: 250px;
  text-align: center;
  float: left;
}

.profile-avatar {
  width: 150px;
  border-radius: 50%;
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
  padding-bottom: 24px;
  line-height: 24px;
}

@media screen and (max-width: 1000px) {
  .profile-abstract {
    display: none;
  }

  .profile-detail {
    margin-left: 0;
  }
}
</style>
