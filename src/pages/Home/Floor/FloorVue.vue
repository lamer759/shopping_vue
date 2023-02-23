<template>
  <div>
   <div class="floor">
        <div class="w jiadian">
            <div class="box_hd">
                <h3>家用电器</h3>
                <div class="tab_list">
                    <ul>
                        <li><a href="#">热门</a>|</li>
                        <li><a href="#">大家电</a>|</li>
                        <li><a href="#">生活电器</a>|</li>
                        <li><a href="#">厨房电器</a>|</li>
                        <li><a href="#">生活电器</a>|</li>
                        <li><a href="#">个护健康</a>|</li>
                        <li><a href="#">应季电器</a>|</li>
                        <li><a href="#">空气/净水</a>|</li>
                        <li><a href="#">新奇特</a>|</li>
                        <li><a href="#">高端电器</a></li>
                    </ul>
                </div>
            </div>
            <div class="box_bd">
                <div class="tab_content">
                    <!-- tab_list_item1对应上面第一个Li -->
                    <div class="tab_list_item1">
                        <div class="col_210">
                            <ul>
                                <li><a href="#">节能补贴</a></li>
                                <li><a href="#">4K电视</a></li>
                                <li><a href="#">空气净化器</a></li>
                                <li><a href="#">电饭煲</a></li>
                                <li><a href="#">滚筒洗衣机</a></li>
                                <li><a href="#">电热水器</a></li>
                            </ul>
                            <a href="#"><img src="./images/floor-1-1.png" alt=""></a>
                        </div>
                        <div class="col_329">
                            <a href="#"><img src="./images/floor-1-b01.png" alt=""></a>
                        </div>
                        <div class="col_221">
                            <a href="#" class="bb"><img src="./images/floor-1-2.png" alt=""></a>
                            <a href="#"><img src="./images/floor-1-3.png" alt=""></a>
                        </div>
                        <div class="col_221">
                            <a href="#"><img src="./images/floor-1-4.png" alt=""></a>
                        </div>
                        <div class="col_219">
                            <a href="#" class="bb"><img src="./images/floor-1-5.png" alt=""></a>
                            <a href="#"><img src="./images/floor-1-6.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w shouji">
            <div class="box_hd">
                <h3>家用电器</h3>
                <div class="tab_list">
                    <ul>
                        <li><a href="#">热门</a>|</li>
                        <li><a href="#">大家电</a>|</li>
                        <li><a href="#">生活电器</a>|</li>
                        <li><a href="#">厨房电器</a>|</li>
                        <li><a href="#">生活电器</a>|</li>
                        <li><a href="#">个护健康</a>|</li>
                        <li><a href="#">应季电器</a>|</li>
                        <li><a href="#">空气/净水</a>|</li>
                        <li><a href="#">新奇特</a>|</li>
                        <li><a href="#">高端电器</a></li>
                    </ul>
                </div>
            </div>
            <div class="box_bd">
                <div class="tab_content">
                    <!-- tab_list_item1对应上面第一个Li -->
                    <div class="tab_list_item1">
                        <div class="col_210">
                            <ul>
                                <li><a href="#">节能补贴</a></li>
                                <li><a href="#">4K电视</a></li>
                                <li><a href="#">空气净化器</a></li>
                                <li><a href="#">电饭煲</a></li>
                                <li><a href="#">滚筒洗衣机</a></li>
                                <li><a href="#">电热水器</a></li>
                            </ul>
                            <a href="#"><img src="./images/floor-1-1.png" alt=""></a>
                        </div>
                        <div class="col_329">
                            <a href="#"><img src="./images/floor-1-b01.png" alt=""></a>
                        </div>
                        <div class="col_221">
                            <a href="#" class="bb"><img src="./images/floor-1-2.png" alt=""></a>
                            <a href="#"><img src="./images/floor-1-3.png" alt=""></a>
                        </div>
                        <div class="col_221">
                            <a href="#"><img src="./images/floor-1-4.png" alt=""></a>
                        </div>
                        <div class="col_219">
                            <a href="#" class="bb"><img src="./images/floor-1-5.png" alt=""></a>
                            <a href="#"><img src="./images/floor-1-6.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'FloorVue'
}
</script>

<style>
 .box_hd {
    height: 30px;
    border-bottom: 2px solid #c81623;
    margin-top: 30px;
}
.box_hd h3 {
  float: left;
  font-size: 18px;
  color: #c81623;
}
.box_hd .tab_list {
    float: right;
}
.box_hd .tab_list li{
    float: left;
}
.box_hd .tab_list li a {
    padding: 0 15px 0;
    font-size: 14px;
}
.box_bd {
    height: 361px;
    /* background-color: pink; */
}
.box_bd .tab_content .tab_list_item1 >div{
  float: left;
  height: 361px;
}
.col_210 {
    width: 210px;
    background-color: #f9f9f9;
    text-align: center;
}
.col_210 ul {
    padding-left: 12px;
}
.col_210 ul li {
    float: left;
    width: 85px;
    height: 34px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    line-height: 34px;
    font-size: 14px;
    margin-right: 10px;
}
.col_210 a img {
    margin-top: 25px;
}
.col_329 {
    width: 329px;
}
.col_221 {
    width: 221px;
    border-right: 1px solid #ccc;
}
.col_219 {
    width: 219px;
}
.bb {
    /* 一般情况下，a如果包含有宽度的盒子，a需要转为块级元素 */
    display: block;
    border-bottom: 1px solid #ccc ;
}
</style>