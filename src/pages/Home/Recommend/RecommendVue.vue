<template>
  <div>
    <div class="w recommend">
        <div class="recommend_hd"><img src="./images/recom.png" alt=""></div>
        <div class="recommend_bd">
            <ul>
                <li><a href="#"><img src="./images/recom_03.jpg" alt=""></a></li>
                <li><a href="#"><img src="./images/recom_03.jpg" alt=""></a></li>
                <li><a href="#"><img src="./images/recom_03.jpg" alt=""></a></li>
                <li><a href="#"><img src="./images/recom_03.jpg" alt=""></a></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'RecommendVue'
}
</script>

<style>
 /* 推荐模块 */
.recommend {
    height: 163px;
    margin-top: 12px;
    /* background-color: pink; */
}

.recommend .recommend_hd {
    float: left;
    width: 204px;
    height: 163px;
    background-color: #5c5251;
    text-align: center;
    padding-top: 30px;
}

.recommend .recommend_bd ul {
    position: relative;
}

.recommend .recommend_bd ul li {
    float: left;
}
.recommend .recommend_bd ul li img {
    width: 249px;
    height: 163px;
}
/* n+3是从第三个往后选，-n+3是选择前三个 */
.recommend .recommend_bd ul li:nth-child(-n+3):after {
    content: '';
    position: absolute;
    top: 10px;
    width: 1px;
    height: 145px;
    background-color: #ddd;
}
</style>