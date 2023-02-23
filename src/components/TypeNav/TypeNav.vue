<template>
  <div>
    <nav>
      <div class="w">
        <div class="dropdown" @mouseleave="leaveIndex" @click="gosearch" @mouseenter="enterShow">
          <dt>全部商品分类</dt>
          <transition name="sort">
            <dd v-show="show">
            <ul>
              <li
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                class="one"
                @mouseenter="changeIndex(index)"
                :class="{ cur: currentIndex == index }"
              >
                <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                <div
                  class="item_list"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dt>
                      <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                    </dt>
                    <dd v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <em
                        ><a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a></em
                      >
                    </dd>
                  </div>
                </div>
              </li>
            </ul>
          </dd>
          </transition>
        </div>
        <div class="navitems">
          <ul>
            <li><a href="#">服装城</a></li>
            <li><a href="#">美妆馆</a></li>
            <li><a href="#">传智超市</a></li>
            <li><a href="#">全球购</a></li>
            <li><a href="#">闪购</a></li>
            <li><a href="#">团购</a></li>
            <li><a href="#">服装城</a></li>
            <li><a href="#">有购</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from 'lodash/throttle';
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      show:true,
    };
  },
  mounted() {
    //this.$store.dispatch("categoryList");//为了减少发请求的次数可以在根组件发，因为根组件只执行一次
    if(this.$route.path!='/home'){
        this.show=false
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        return state.Home.categoryList;
      },
    }),
  },
  methods: {
    // changeIndex(index) {
    //   // console.log(index)
    //   this.currentIndex = index;
    // },
    //节流，最好不用箭头函数
    changeIndex : throttle(function(index){
       this.currentIndex = index;

    },50),

    leaveIndex() {
      this.currentIndex = -1;
      if(this.$route.path!='/home'){
        this.show=false
      }  
    },
    gosearch(event){
        // this.$router.push('/search')
        console.log(event.target)
        console.log(event.target.dataset)
        // let {categoryname}=element.dataset
        // console.log(categoryname)
        //解构，dataset可以获取当前节点的自定义属性
        let {categoryname,category1id,category2id,category3id} = event.target.dataset;
        if(categoryname){
            let location = {name:'search'}
            let query = {categoryName:categoryname}
           if(category1id){
            query.category1Id=category1id
           }else if(category2id){
            query.category2Id=category2id
           }else if(category3id){
            query.category3Id=category3id
           }
           console.log(location,query)
           //整理参数，将location和query合并
           location.query=query;
           this.$router.push(location)
        }
    },
    enterShow(){
        this.show=true;
    },
   
  },
};
</script>

<style>
nav {
  height: 47px;
  border-bottom: 2px solid #b1191a;
}
.cur {
  background-color: skyblue;
}
.dropdown {
  float: left;
  width: 210px;
  height: 45px;
  /* background-color: #b1191a; */
}
.dropdown > dt {
  width: 210px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #fff;
  background-color: #b1191a;
}
.dropdown > dd {
  /* display: none; */
  width: 210px;
  height: 465px;
  background-color: #fff;
  margin-top: 2px;
}
.dropdown:hover dd {
  display: block;
}
.dropdown dd li {
  position: relative;
  height: 31px;
  line-height: 31px;
  margin-left: 2px;
  padding-left: 10px;
}
.item_list {
  display: none;
  position: absolute;
  background-color: #fff;
  width: 400px;
  height: 400px;
  margin-left: 200px;
  margin-top: -30px;
}
.item_list .subitem {
  height: 80px;
}
.item_list .subitem dt {
  float: left;
}
.item_list .subitem dd {
  float: left;
  font-size: 12px;
  margin-left: 10px;
}
/* .one:hover .item_list{
  display: block;
} 用JS完成*/
.dropdown > dd li::after {
  /* 定位也可以 */
  float: right;
  margin-right: 5px;
  color: #fff;
  content: "\e920";
  font-family: "icomoon";
}
/* .dropdown > dd li:hover {
    background-color: #fff;
} */
.dropdown > dd li:hover a {
  color: #c81623;
}
.dropdown > dd li a {
  font-size: 14px;
  color: #c81623;
}
.navitems {
  float: left;
}
.navitems li {
  float: left;
  padding: 0 25px;
  line-height: 45px;
}
.navitems li a {
  color: #666;
}
.navitems li a:hover {
  color: #b1191a;
}


</style>