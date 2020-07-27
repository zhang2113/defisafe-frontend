<template>
  <div class="home">
    <div class="head clear">
      <div class="fl logo">
        <img src="../../imgs/logo.png" alt />
        <span class="text">DefiSafe</span>
      </div>
      <div class="fr menu">
        <ul>
          <li class="m-item">
            <a href="/DEFISAFE_Chinese1.0.pdf" target="_blank">{{$t('home.head.list.doc')}}</a>
          </li>
          <li class="language m-item">
            <el-dropdown trigger='click' @command='changeLanguage'>
              <span class="el-dropdown-title">
                {{$i18n.locale == 'zh' ? "中文简体" : "Englist"}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="zh">中文简体</el-dropdown-item>
                <el-dropdown-item command="en">English</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="m-item">
            <img @click='goGithub' class="git-icon" src="../../imgs/github.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="nav">
      <div class="nav-outer">
        <div class="desc">
          <h3>Defisafe</h3>
          <p>{{$t('home.nav.desc')}}</p>
        </div>
        <div class="menu">
          <button @click="login">{{$t('home.nav.button')}}</button>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- advantage -->
      <div class="advantage clear">
        <div class="feature-center">
          <img src="../../imgs/simple-icon.png" alt="">
          <h3>{{$tc('home.features.title', 0)}}</h3>
          <p>{{$tc('home.features.desc', 0)}}</p>
        </div>

        <div class="feature-center">
          <img src="../../imgs/safe-icon.png" alt="">

          <h3>{{$tc('home.features.title', 1)}}</h3>
          <p>{{$tc('home.features.desc', 1)}}</p>
        </div>

        <div class="feature-center">
          <img src="../../imgs/flow-icon.png" alt="">

          <h3>{{$tc('home.features.title', 2)}}</h3>
          <p>{{$tc('home.features.desc', 2)}}</p>
        </div>
      </div>

      <!-- introduce -->
      <div class="introduce bg">
        <div class="i_outer">
          <div class="i_item i_desc">
            <div class="title">{{$tc('home.advantage.title', 1)}}</div>
            <div class="desc">{{$tc('home.advantage.desc_1', 1)}}</div>
            <div class="desc">{{$t('home.advantage.desc_2')}}</div>
          </div>
          <div class="i_item i_item_img">
            <img width="100%" src="../../imgs/home-intor.png" alt="">
          </div>
        </div>
      </div>
      <div class="introduce">
        <div class="i_outer">
          <div class="i_item i_item_img">
            <img width="100%" src="../../imgs/home-intro2.png" alt="">
          </div>
          <div class="i_item i_desc1">
            <div class="title">{{$tc('home.advantage.title', 2)}}</div>
            <div class="desc">{{$tc('home.advantage.desc_1', 2)}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="tc f-logo">
        <img src="../../imgs/common/logo-white.png" alt="">
      </div>
      <!-- <ul class="f-menu">
        <li>关于DefiSafe</li>
        <li>白皮书</li>
        <li>FAQ</li>
        <li>隐私政策</li>
        <li>币圈快讯</li>
      </ul> -->
      <div class="f-support">
        <div @click='jumpUrl("https://github.com/defisafe")'>
          <img src="../../imgs/common/foot-icon1.png" alt="">
        </div>
        <!-- <div @click='jumpUrl("https://discord.gg/PKVE6s9")'>
          <img src="../../imgs/common/foot-icon2.png" alt="">
        </div> -->
        <!-- <div @click='jumpUrl("https://discord.gg/PKVE6s9")'>
          <img src="../../imgs/common/foot-icon3.png" alt="">
        </div> -->
        <div @click='jumpUrl("https://mobile.twitter.com/defisafe")'>
          <img src="../../imgs/common/foot-icon4.png" alt="">
        </div>
        <div @click='jumpUrl("https://discord.gg/PKVE6s9")'>
          <img src="../../imgs/common/foot-icon5.png" alt="">
        </div>
        <div @click='jumpUrl("https://www.facebook.com/profile.php?id=100053264643426")'>
          <img src="../../imgs/common/foot-icon6.png" alt="">
        </div>
      </div>

      <div class="f-contact tc">
        <div class="title">{{$t('home.foot.contact')}}</div>
        <div class="email">{{$t('home.foot.email')}}：defisafe@163.com</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      changeLanguage(val) {
        sessionStorage.setItem('language', val);
        this.$i18n.locale = val;
      },
      jumpUrl(url) {
        window.location.href = url;
      },
      login() {
        if (this.$util.isLogin()) {
          this.$router.push('/insure');
        } else {
          this.$router.push('/login');
        }
      },
      goGithub() {
        window.location.href = 'https://github.com/defisafe';
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import './index.scss';
  @import './mobile.scss';
</style>