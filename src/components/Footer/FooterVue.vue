<template>
  <div>
     <footer>
        <div class="w">
            <div class="mod-servers">
                <ul>
                    <li>
                        <h5></h5>
                        <div>
                            <h4>正品保障</h4>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div>
                            <h4>极速物流</h4>
                            <p>极速物流，急速直达</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div>
                            <h4>无忧售后</h4>
                            <p>七天无理由退换货</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div>
                            <h4>特色服务</h4>
                            <p>私人定值家电套餐</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div>
                            <h4>帮助中心</h4>
                            <p>您的购物指南</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mod_help">
                <dl>
                    <dt>服务指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>服务指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>服务指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>服务指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>服务指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>帮助中心</dt>
                    <img src="./images/wx_cz.jpg" alt="">
                    <p>品优购客户端</p>
                </dl>
            </div>
            <div class="mod_copyright">
                <div class="links">
                    <a href="#">关于我们</a> | <a href="#">联系我们</a> | <a href="#">联系客服</a>
                </div>
                <div class="copyright">
                    地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：
                    400-618-4000 传真：010-82935100 邮箱:zhangj+huebcud.cn <br>
                    景ICP备08001421号京公网安备110108007702
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
 name:'FooterVue'
}
</script>

<style>
footer {
    height: 415px;
    background-color: #f5f5f5;
    padding-top: 30px;
}
.mod-servers {
    height: 80px;
    border-bottom: 1px solid #ccc;
}
.mod-servers ul li {
    float: left;
    width: 240px;
    height: 50px;
    /* background-color: pink; */
    padding-left: 35px;
}
.mod-servers ul li h5 {
    float: left;
    /* 加浮动后面的字体会围绕浮动显示 */
    width: 50px;
    height: 50px;
    /* background-color: #666; */
    background: url(./images/icons.png) no-repeat -252px -2px;
    margin-right: 8px;
}
.mod-servers ul li div h4 {
    font-size: 14px;
    margin-top: 8px;
}
.mod-servers ul li div p {
    font-size: 12px;
}
.mod-servers ul li:nth-child(2) h5{
    background: url(./images/icons.png) no-repeat -255px -53px;
}
.mod-servers ul li:nth-child(3) h5 {
    background: url(./images/icons.png) no-repeat -256px -106px; 
}
.mod-servers ul li:nth-child(4) h5 {
    background: url(./images/icons.png) no-repeat -258px -156px; 
}
.mod-servers ul li:nth-child(5) h5 {
    background: url(./images/icons.png) no-repeat -256px -208px; 
}
.mod_help {
    height: 185px;
    border-bottom: 1px solid #ccc;
    padding: 20px 0 0 50px;
}
/* .mod_help dl {
    margin-top: 20px;
    padding-left: 50px;
} */
.mod_help dl {
    float: left;
    margin-right: 100px;
}
.mod_help dl dt {
    font-size: 16px;
    margin-bottom: 10px;
}
.mod_help dl dd {
    font-size: 14px;
}
.mod_help dl:last-child  {
    font-size: 12px;
    text-align: center;
    margin: 0 30px 0 40px;
}
.mod_copyright {
    text-align: center;
    padding-top: 20px;
    font-size: 14px;
    color: #666;
}
.mod_copyright .links {
    margin-bottom: 10px;
}
.mod_copyright .copyright {
    line-height: 20px;
}
</style>