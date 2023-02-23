<template>
  <div>
    <div class="w">
      <main>
        <div class="focus">
          <!-- <div class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="carousel in bannerlist"
                :key="carousel.id"
              >
                <img :src="carousel.imgUrl" />
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
          <CarouselVue :list='bannerlist'></CarouselVue>
        </div>
        <div class="newsflash">
          <div class="news">
            <div class="new_hd">
              <h5>品优购快报</h5>
              <a href="#">更多</a>
            </div>
            <div class="new_bd">
              <ul>
                <li>
                  <a href="#"
                    ><strong>[特惠]</strong>备战开学季
                    全民半价购数码,全民半价购数码</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><strong>[公告]</strong>品优稳占家电网购六成份额</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><strong>[特惠]</strong>百元中秋全品类礼券限量领</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><strong>[公告]</strong>上等优生鲜 享阳澄湖大闸蟹</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><strong>[特惠]</strong>备战开学季 全民半价购数码</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="lifeservice">
            <ul>
              <li><a href="#"></a>话费</li>
              <li><a href="#"></a>话费</li>
              <li><a href="#"></a>话费</li>
              <li><a href="#"></a>话费</li>
              <li><a href="#"></a>话费</li>
              <li><a href="#"></a>话费</li>
              <li><a href="#"></a>话费</li>
              <li><a href="#"></a>话费</li>
              <li><a href="#"></a>话费</li>
              <li><a href="#"></a>话费</li>
              <li><a href="#"></a>话费</li>
              <li><a href="#"></a>话费</li>
            </ul>
          </div>
          <div class="bargain">
            <a href=""><img src="./images/bargain.png" alt="" /></a>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
//import  Swiper  from "swiper";
export default {
  name: "ListContainer",
  computed: {
    ...mapState({ bannerlist: (state) => state.Home.bannerList }),
  },
  mounted() {
    //通过store存储数据
    this.$store.dispatch("getBannerlist");
  },
//   watch: {
//     //监听bannerlist数据变化，有了结构才new实例
//     bannerlist: {
//       handler() {
//         this.$nextTick(()=>{
//          new Swiper(".swiper-container", {
//           loop: true, // 循环模式选项
//           // 如果需要分页器
//           pagination: {
//             el: ".swiper-pagination",
//           },
//           // 如果需要前进后退按钮
//           navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           },
//         });
        
//         })
//       },
//     },
//   },
};
</script>

<style>
main {
  position: relative;
  width: 980px;
  height: 455px;
  /* background-color: pink; */
  margin: 10px 0 0 220px;
}

.focus {
  position: absolute;
  width: 721px;
  height: 455px;
  /* background-color: aqua; */
}
.newsflash {
  float: right;
  width: 250px;
  height: 455px;
  /* background-color: aquamarine; */
}

.newsflash .news {
  height: 165px;
  border: 1px solid #ccc;
}

.newsflash .news .new_hd {
  height: 33px;
  border-bottom: 1px dotted #e4e4e4;
  /* 行高继承 */
  line-height: 33px;
  padding: 0 15px 0;
}

.newsflash .news .new_hd h5 {
  float: left;
  font-size: 16px;
}

.newsflash .news .new_hd a {
  float: right;
  font-size: 14px;
}

.newsflash .news .new_hd a::after {
  content: "\e920";
  font-family: "icomoon";
}

.newsflash .news .new_bd ul {
  margin-top: 8px;
}

.newsflash .news .new_bd ul li {
  font-size: 14px;
  margin: 5px 0px 0px 15px;
  /* 文字一行显示，溢出隐藏，溢出用省略号代替 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.newsflash .lifeservice {
  height: 209px;
  border: 1px solid #ccc;
  border-bottom: 0px;
  border-top: 0;
  margin-bottom: 5px;
}

.newsflash .lifeservice ul li {
  float: left;
  width: 62px;
  height: 70px;
  border: 1px solid #ccc;
  border-top: 0px;
  border-left: 0px;
}

.newsflash .lifeservice ul li:nth-child(4n) {
  border-right: 0px;
}

.newsflash .lifeservice ul li {
  display: block;
  font-size: 14px;
  /* background: url(../images/icons.png) no-repeat -50px -50px; */
  padding: 10px;
  text-align: center;
}

.newsflash .lifeservice ul li i {
  /* i一定要转化成行内块元素 */
  display: inline-block;
  width: 24px;
  height: 28px;
  background-color: pink;
  /* background: url(../images/icons.png) no-repeat -50px -50px; */
  text-align: center;
  padding: 10px;
}

.newsflash .lifeservice ul li a {
  display: block;
  width: 24px;
  height: 28px;
  background: url(./images/icons.png) no-repeat -19px -15px;
  margin: 0 10px 5px;
}
</style>