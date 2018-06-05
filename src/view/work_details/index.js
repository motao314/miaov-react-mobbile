import React,{Component} from "react";
import Header from "../../component/header";
require('../../css/work_details.css');

export default class WorkDetails extends Component {
    render(){
        return (
            <div>
                <nav id="nav">
                    <a href="index.html" className="iconfont icon-home">首页</a>
                    <a href="course.html" className="iconfont icon-kecheng">课程安排</a>
                    <a href="lecturer.html" className="iconfont icon-peixunjiangshi">讲师团队</a>
                </nav>
                <div id="page" className="work-page">
                    <Header isMenu={true}/>
                    <div id="banner">
                        <ul className="picList">
                            <li>
                                <a href="#">
                                    <img src={require("../../img/banner/img.png")} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={require("../../img/banner/img2.png")} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={require("../../img/banner/img3.png")} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={require("../../img/banner/img4.png")} />
                                </a>
                            </li>
                        </ul>
                        <nav className="nav">
                            <a href="javascript:;" className="active"></a>
                            <a href="javascript:;"></a>
                            <a href="javascript:;"></a>
                            <a href="javascript:;"></a>
                        </nav>
                    </div>
                    <h1 className="work-title">学员作品：90后的童年记忆 - 皮卡丘之《z 酷噜镇》</h1>
                    <article className="wrok-details">
                        <p>当今社会的快速发展，【效率】二字贯穿人们的生活！前端攻城狮在工作中更是要求要高效的完成每一个项目；目前流行的三大框架承担了此项工作，Vue 的学习使用更是将 <strong>简单、快速、高效</strong> 完美的展现了出来~</p>
                        <p>妙味北京 JS 实体班学员 <strong>* 松</strong> 正是跟随技术的潮流，紧紧的抓住了 Vue 的优势，熟练掌握了该框架，并主流使用 Vue 搭建了此项目：美图移动端商城；</p>
                        <p><img src="http://att.miaov.com/pic/000/024/14" alt=""/></p>
                        <h3 id="h3--"><a name="项目名称： 美图移动端商城" className="reference-link"></a><span className="header-link octicon octicon-link"></span>项目名称： 美图移动端商城</h3><h3 id="h3--http-m-microbu-com-170613-shensong-"><a name="项目地址：   http://m.microbu.com/170613/shensong/#/" className="reference-link"></a><span className="header-link octicon octicon-link"></span>项目地址： <a href="http://m.microbu.com/170613/shensong/#/" target="_blank">http://m.microbu.com/170613/shensong/#/</a></h3><h3 id="h3--14-"><a name="开发周期： 14 天" className="reference-link"></a><span className="header-link octicon octicon-link"></span>开发周期： 14 天</h3><h3 id="h3--"><a name="开发技术栈：" className="reference-link"></a><span className="header-link octicon octicon-link"></span>开发技术栈：</h3><ul>
                        <li>Vue-cli 快速搭建单页应用</li><li>Vue 核心框架</li><li>Vue-Router 单页面路由跳转</li><li>Axios 基于 Promise 对象，实现 Ajax 请求</li><li>Vuex 集中式状态管理</li><li>Stylus CSS 预处理</li><li>IconFont 矢量图标</li><li>Easy-Mock 模拟数据，实现前后端数据分离</li><li>Better-Scroll 实现页面滚动</li><li>Vue-Infinite-Scroll 实现上拉加载</li><li>Vue-Lazyloay 实现图片懒加载</li></ul>
                        <hr/>
                            <h3 id="h3--"><a name="设计思路与功能：" className="reference-link"></a><span className="header-link octicon octicon-link"></span>设计思路与功能：</h3><p><strong>数据获取</strong></p>
                            <p><img src="http://att.miaov.com/pic/000/024/15" alt=""/></p>
                            <ul>
                                <li><p>采用 Easy-Mock 模拟数据，实现前后端数据分离。</p>
                                </li><li><p>在 Vue-cli 中使用 proxyTable 代理解决开发环境的跨域问题。</p>
                            </li><li><p>同一文件目录下封装 Axios 请求，实现 Ajax 集中式管理。</p>
                            </li></ul>
                            <p><strong>页面优化</strong></p>
                            <ul>
                                <li><p>引入 fastclick 插件，解决移动端 click 事件的 300ms 延迟。</p>
                                </li><li><p>使用 Vue 内置组件 keep-alive，将匹配的组件进行缓存，减少 ajax 请求。</p>
                            </li><li><p>使用媒体查询(<a href="https://github.com/media" title="@media" className="at-link"></a><a href="https://github.com/media" title="@media" className="at-link">@media</a>)，针对不同的设备像素比(device-pixel-ratio)进行缩放，实现移动端1px边框。</p>
                            </li><li><p>引入 Vue-Lazyloay 插件，实现图片懒加载。</p>
                            </li><li><p>通过媒体查询(<a href="https://github.com/media" title="@media" className="at-link"></a><a href="https://github.com/media" title="@media" className="at-link">@media</a>)，配合不同的设备像素比(device-pixel-ratio)，分别切出<a href="https://github.com/2x" title="@2x" className="at-link"></a><a href="https://github.com/2x" title="@2x" className="at-link">@2x</a>和<a href="https://github.com/3x" title="@3x" className="at-link"></a><a href="https://github.com/3x" title="@3x" className="at-link">@3x</a>的图片，来实现移动端 Retina 屏幕图片的适配。</p>
                            </li></ul>
                            <p><strong>轮播图组件</strong></p>
                            <p><img src="http://att.miaov.com/pic/000/024/12" alt=""/></p>
                            <ul>
                                <li>引入 Better-Scroll 插件，实现轮播图组件的高效复用。</li></ul>
                            <p><strong>定位查找体验店</strong></p>
                            <p><img src="http://att.miaov.com/pic/000/024/16" alt=""/></p>
                            <ul>
                                <li>首先获取所属 IP 网络的省份信息，然后从所有省份中选择定位的省份，最后根据省份的省会城市查找到当前体验店的信息。</li></ul>
                            <p><strong>复杂配件页的路由实现</strong></p>
                            <ul>
                                <li>将不同配件通过动态路由:id 都匹配到 GoodsLists 组件，然后根据不同配件下是否有机型数据通过动态路由:model同样都匹配到 GoodsLists 组件。这样 GoodsLists 组件与 Goods 组件形成了路由嵌套关系，GoodsLists 组件共享了 MHeader 和 Category 组件。</li></ul>
                            <p><strong>登录跳转</strong></p>
                            <p><img src="http://att.miaov.com/pic/000/024/17" alt=""/></p>
                            <ul>
                                <li>通过在路由配置中添加 meta 字段，然后配合 vue-router 的导航钩子函数 beforeEach，拦截导航，实现登录跳转。使用 localstorage 保存登录信息，实现登录持久化。</li></ul>
                            <p><strong>加入购车小球动画</strong></p>
                            <ul>
                                <li>通过过渡动画的三个钩子函数进入前 beforeEnter、进入中 enter、进入后afterEnter，实现加入购物车的小球动画效果。</li></ul>
                            <p><img src="http://att.miaov.com/pic/000/024/13" alt=""/></p>
                            <p><strong>购物车</strong></p>
                            <p><img src="http://att.miaov.com/pic/000/024/18" alt=""/></p>
                            <ul>
                                <li>使用 Vuex 集中式管理购物车数据，实现购物车的单选、全选、价格合计、增减、删除、全部删除等。用 localstorage 保存已购商品信息，实现数据持久化。</li></ul>
                            <hr/>
                                <h3 id="h3--"><a name="遇到的难点及解决方法：" className="reference-link"></a><span className="header-link octicon octicon-link"></span>遇到的难点及解决方法：</h3><ul>
                                <li><p>当使用 Vue 内置组件 keep-alive 缓存页面时，返回首页轮播图出现不轮播的现象。解决方法是利用声明周期的两个钩子函数 activated 和 deactivated，让轮播图重新计算宽度，利用 BetterScroll 的 refresh 方法，重新刷新，实现轮播的效果；同样，当屏幕宽度发生变化，轮播图出现宽度不适应的现象。解决方法是当组件渲染时，在钩子函数 mounted 绑定 resize 事件，监听窗口改变，重新计算刷新。</p>
                                </li><li><p>登录页面如何判断某个路由是否需要登录。在路由配置的时候添加 meta 字段，表示进入此路由是需要登录的。然后利用 vue-router 的全局钩子函数 beforeEach 拦截导航，判断是否需要登录。登录成功后将登录信息保存在 localstrage 中，下次就可以跳过登录。</p>
                            </li><li><p>多个动态路由匹配同一个详情页 Detail 组件，如何实现首次进入数据通过 Ajax 获取，再次进入不发送 Ajax 请求。解决方法是利用 Vuex 储存数据。结合 keep-alive 的两个钩子函数 activated 和 deactivated 实现。每个商品详情页首次加载数据都储存到 Vuex，再次进入数据直接通过 Vuex 获取。</p>
                            </li><li><p>配件页点击切换速度过快，会出现内容串页的现象。解决方法是利用 Axios 的取消请求实现。预先在 Axios 请求中添加一个 cancelToken 字段。每次点击切换时，先 cancel 取消本次请求。然后发送新的请求。</p>
                            </li></ul>
                                <hr/>
                                    <font color="red"><strong>该同学目前已顺利供职于 360 公司。并祝福学弟学妹们顺利完成毕业作品、进入心仪的公司。</strong></font>

                                    <p>查看更多学员作品：<a href="http://miaov.com/index.php/example/exampleList" target="_blank">http://miaov.com/index.php/example/exampleList</a></p>
                                    <hr/>
                                        <h3 id="h3--"><a name="相关课程推荐：" className="reference-link"></a><span className="header-link octicon octicon-link"></span>相关课程推荐：</h3><p><strong>妙味 Vue 系统修炼与精彩实战（周末班）</strong></p>
                                        <p><a href="http://miaov.com/index.php/news/newsDetail/nid/284" target="_blank"><img src="http://att.miaov.com/pic/000/023/99" alt=""/></a></p>
                                        <h3 id="h3--2018-1-6-"><a name="开班时间：2018 年 1 月 6 日" className="reference-link"></a><span className="header-link octicon octicon-link"></span>开班时间：2018 年 1 月 6 日</h3><h3 id="h3--font-color-red-1888-font-"><a name="<font color=red>课程总费用：1888 元/位 </font>" className="reference-link"></a><span className="header-link octicon octicon-link"></span><font color="red">课程总费用：1888 元/位 </font></h3><p>课程优惠信息：</p>
                                        <p>☩ 凡 12 月 29 日之前报名者，每人减免 88 元，即：1800 元/位；<br/>☩ 凡 2 人组团报名，每人减免 158 元，即：1730 元/位；<br/>☩ 凡 3 人组团报名，每人减免 188 元，即：1700 元/位；</p>
                                        <h3 id="h3--http-miaov-com-index-php-news-newsdetail-nid-284"><a name="详情介绍：  http://miaov.com/index.php/news/newsDetail/nid/284" className="reference-link"></a><span className="header-link octicon octicon-link"></span>详情介绍：<a href="http://miaov.com/index.php/news/newsDetail/nid/284" target="_blank">http://miaov.com/index.php/news/newsDetail/nid/284</a></h3><hr/>
                                        <h3 id="h3-js-"><a name="JS 课程目录：" className="reference-link"></a><span className="header-link octicon octicon-link"></span>JS 课程目录：</h3><p><a href="http://miaov.com/index.php/course/coursedetail/cid/34" target="_blank"><img src="http://att.miaov.com/pic/000/024/11" alt=""/></a></p>
                                        <h3 id="h3--http-miaov-com-index-php-course-coursedetail-cid-36"><a name="报名地址：  http://miaov.com/index.php/course/coursedetail/cid/36" className="reference-link"></a><span className="header-link octicon octicon-link"></span>报名地址：<a href="http://miaov.com/index.php/course/coursedetail/cid/36" target="_blank">http://miaov.com/index.php/course/coursedetail/cid/36</a></h3><hr/>
                                        <h3 id="h3--"><a name="课程咨询：" className="reference-link"></a><span className="header-link octicon octicon-link"></span>课程咨询：</h3><h4 id="h4--font-color-red-qq-2852509866-font-"><a name="<font color=red>咨询QQ：2852509866</font>" className="reference-link"></a><span className="header-link octicon octicon-link"></span><font color="red">咨询QQ：2852509866</font></h4><h4 id="h4--font-color-red-miaov-class-font-"><a name="<font color=red>微信咨询：miaov-class</font>" className="reference-link"></a><span className="header-link octicon octicon-link"></span><font color="red">微信咨询：miaov-class</font></h4><p><img src="http://att.miaov.com/pic/000/023/10" alt=""/></p>
                                        <h4 id="h4--font-color-red-010-57269690-font-"><a name="<font color=red>电话咨询：010-57269690</font>" className="reference-link"></a><span className="header-link octicon octicon-link"></span><font color="red">电话咨询：010-57269690</font></h4>
                    </article>
                    <div className="work-aside">
                        <span className="good">有0人觉得很赞</span>
                        <span className="iconfont icon-zan"></span>
                    </div>
                    <div className="work-message">
                        <aside>
                            <div className="message-info">
                                <span>Leo</span> 回复:
                            </div>
                            <div className="message-con">
                                <p>嘿嘿！来看看我第一个项目的评论</p>
                                <p>暂时还没有评论哦～抢个沙发吧！</p>
                            </div>
                        </aside>
                        <aside>
                            <div className="message-info">
                                <span>Leo</span> 回复:
                            </div>
                            <div className="message-con">
                                <p>嘿嘿！来看看我第一个项目的评论</p>
                                <p>暂时还没有评论哦～抢个沙发吧！</p>
                            </div>
                        </aside>
                        <aside>
                            <div className="message-info">
                                <span>Leo</span> 回复:
                            </div>
                            <div className="message-con">
                                <p>嘿嘿！来看看我第一个项目的评论</p>
                                <p>暂时还没有评论哦～抢个沙发吧！</p>
                                <p>暂时还没有评论哦～抢个沙发吧！</p>
                            </div>
                        </aside>
                    </div>
                </div>
                <div className="post-message">
                    <a href="javascript:;" id="message-btn" className="iconfont icon-tubiao-">回复本帖</a>
                </div>
            </div>
        );
    }
}
