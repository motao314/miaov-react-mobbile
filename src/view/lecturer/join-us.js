import React from "react";
export default function JoinUs(){
    "use strict";
    return (<section className="join-us">
        <h2 className="join-us-title">加入我们</h2>
        <ul className="join-con">
            <li className="join-course">
                <div className="join-box">
                    <span className="join-tag">NEW</span>
                    <h3 className="join-title">web讲师</h3>
                    <p className="join-info">人数：人数不限，多多益善</p>
                    <p className="join-info">薪资：面议</p>
                </div>
            </li>
            <li className="join-adviser">
                <div className="join-box">
                    <h3 className="join-title">课程顾问</h3>
                    <p className="join-info">人数：3人</p>
                    <p className="join-info">薪资：底薪+提成</p>
                </div>
            </li>
            <li className="join-service">
                <div className="join-box">
                    <h3 className="join-title">客服</h3>
                    <p className="join-info">人数：3人</p>
                    <p className="join-info">薪资：面议</p>
                </div>
            </li>
            <li className="join-assistant">
                <div className="join-box">
                    <h3 className="join-title">行政前台助理</h3>
                    <p className="join-info">人数：3人</p>
                    <p className="join-info">薪资：底薪+提成</p>
                </div>
            </li>
        </ul>
    </section>);
}