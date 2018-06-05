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
                <a href="">首页</a>
                <a href="">课程安排</a>
                <a href="">学员作品</a>
                <a href="">视频教程</a>
                <a href="">关于我们</a>
                <a href="">在线留言</a>
                <a href="">常见问题</a>
            </nav>
        </div>
        <p className="footer-copy">京ICP备08102442号-1  2007-2016 MIAOOV.COM 版权所有</p>
    </footer>)
}
