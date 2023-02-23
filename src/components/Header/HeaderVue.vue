<template>
  <div>
    <section class="shortcut">
      <div class="w">
        <div class="fl">
          <ul>
            <li>品优购欢迎您！</li>
            <li v-if="!userName">
              <router-link to="/login">登录</router-link>
              <!-- <a href="#" class="red">免费注册</a> -->
              <router-link to="/register"> 免费注册</router-link>
            </li>
            <li v-else>
              <a>{{ userName }} |</a>
              <a @click="logout"> 退出登录</a>
            </li>
          </ul>
        </div>
        <div class="fr">
          <ul>
            <li>
            <router-link to="/center/myorder">我的订单</router-link> </li>
            <li></li>
            <li>
              <a href="#">我的品优购<img src="./images/下拉.png" alt="" /></a>
            </li>
            <li></li>
            <li><a href="#">品优购会员</a></li>
            <li></li>
            <li><a href="#">企业采购</a></li>
            <li></li>
            <li><a href="#">关注品代购</a></li>
            <li></li>
            <li>
              <a href="#">客户服务<img src="./images/下拉.png" alt="" /></a>
            </li>
            <li></li>
            <li>
              <a href="#">网站导航<img src="./images/下拉.png" alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <header class="w">
      <div class="logo">
        <h1>
          <router-link to="\home" title="品优购商城">品优购商城</router-link>
        </h1>
      </div>
      <div class="search">
        <input type="search" placeholder="语言开发" v-model="keyword" />
        <button @click="goSearch">搜索</button>
      </div>
      <div class="hotwords">
        <a href="#">优惠首发</a>
        <a href="#">亿万优惠</a>
        <a href="#">优惠首发</a>
        <a href="#">办公用品</a>
        <a href="#">优惠首发</a>
        <a href="#">优惠首发</a>
        <a href="#">通信</a>
      </div>
      <div class="car">
        我的购物车
        <i class="count">80</i>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderVue",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      //字符串形式传参
      // this.$router.push('/search/' + this.keywords +'?k='+this.keywords),
      //模板字符串传参
      // this.$router.push(`/search/${this.keywords}?k=${this.keywords}`)
      //对象写法（常用）

      this.$router.push({
        name: "search",
        params: { keyword: this.keyword },
        query: { k: this.keyword },
      });

      //测试
      //   this.$router.push(
      //     {path:'search',params:{keywords:this.keywords},query:{k:this.keywords}}
      //   )
      //   this.$router.push({
      //     name: "search",
      //     params: { keywords: ''|| undefined },
      //     query: { k: this.keywords },
      //   });
    },
    async logout() {
      try {
        await this.$store.dispatch("userlogout");
        this.$router.push("/home");
      } catch (error) {
        alert(error.message);
      }
    },
  },
  mounted() {
    this.$bus.$on("clear", () => {
      this.keyword = "";
    });
  },
  computed: {
    userName() {
      return this.$store.state.users.userInfo.name;
    },
  },
};
</script>

<style>
.shortcut {
  height: 31px;
  background-color: #f1f1f1;
}
.shortcut li {
  float: left;
  margin: 5px 5px 5px 5px;
}
.shortcut ul li a {
  font-size: 14px;
  color: #666;
}
.shortcut .fl ul li .red {
  color: #c81623;
}
.shortcut .fr ul li {
  margin-top: 5px;
}
/* .shortcut .fr ul li a {
    padding: 0 15px;
    border-right: 1.8px solid #666;
    font-size: 14px;
    color: #666;
} */
/* 选择所有偶数li */
.shortcut .fr ul li:nth-child(even) {
  width: 1px;
  height: 12px;
  background-color: #666;
  margin: 9px 10px 0;
}
.shortcut .fr ul li img {
  float: right;
  width: 20px;
  margin-top: 2px;
}

/* 头部制作 */
header {
  position: relative;
  height: 105px;
  /* background-color: pink; */
}
header .logo {
  position: absolute;
  top: 25px;
  width: 171px;
  height: 61px;
  /* background-color: skyblue; */
}
header .logo a {
  display: block;
  width: 171px;
  height: 61px;
  background: url(./images/logo.png) no-repeat;
  font-size: 0px;
  /* 淘宝的做法 */
  /* text-indent: -9999px;
    overflow: hidden; */
}
.search {
  position: absolute;
  top: 25px;
  left: 346px;
  width: 538px;
  height: 36px;
  border: 2px solid #b1191a;
}
.search input {
  float: left;
  width: 454px;
  height: 32px;
  padding-left: 10px;
}
.search button {
  float: left;
  width: 80px;
  height: 32px;
  border: 0;
  background-color: #b1191a;
  color: #f1f1f1;
}
.hotwords {
  position: absolute;
  top: 66px;
  left: 346px;
}
.hotwords a {
  margin: 0 10px;
  font-size: 12px;
  color: #666;
}
.hotwords a:hover {
  color: #b1191a;
}
.car {
  position: absolute;
  top: 25px;
  right: 40px;
  width: 140px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 15px;
  border: 1px solid #dfdfdf;
  background-color: #f1f1f1;
}
.car::before {
  content: "\e93a";
  font-family: "icomoon";
  margin-right: 5px;
  color: #b1191a;
}
.car::after {
  content: "\e920";
  font-family: "icomoon";
  margin-left: 10px;
}
.car .count {
  position: absolute;
  top: -5px;
  /* 最好用left左对齐这样数量多了之后，更符合习惯 */
  left: 105px;
  height: 14px;
  line-height: 14px;
  background-color: #b1191a;
  color: #fff;
  padding: 0 5px;
  border-radius: 7px 7px 7px 0;
}
</style>