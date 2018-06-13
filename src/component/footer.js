import React,{Component} from "react";

export default function Footer(){
    "use strict";
    return (<footer>
        <div className="footer-nav">
            <p className="miaov-contact clear">
                <a className="iconfont icon-youxiang" href="maillto:hr_recruit@miaov.com">hr_recruit@miaov.com</a>
                <a className="iconfont icon-phone" href="tel:010-57269690">010-57269690</a>
            </p>
            <nav className="clear">
                <a href="https://www.miaov.com/">首页</a>
                <a href="https://study.miaov.com/study/classes/index">课程安排</a>
                <a href="https://miaov.com/index.php/example/exampleList">学员作品</a>
                <a href="https://study.miaov.com/study">视频教程</a>
                <a href="https://miaov.com/index.php/about/index">关于我们</a>
                <a href="https://miaov.com/index.php/Message/index">在线留言</a>
                <a href="https://miaov.com/index.php/Question/index">常见问题</a>
            </nav>
        </div>
        <p className="footer-copy">京ICP备08102442号 2012.MIAOOV.COM 版权所有</p>
    </footer>)
}
