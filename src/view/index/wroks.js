import React from "react";
import {Link} from "react-router-dom";
export default function Wroks(props) {
        let {data,loading,loadOver} = props;
        let Footer = ()=>{
            "use strict";
            if(loadOver){
                return <footer className="works-more"><span>没有更多数据了</span></footer>
            } else if(loading){
                return <footer className="works-more"><span>正在加载更多数据了</span></footer>
            }
            return "";
        };
        return (<section className="wroks">
            <h2 className="wroks-title">学员作品</h2>
            <ul className="wroks-list">
                {data.map((item)=>{
                    return (
                        <li key={item.id}>
                            <Link
                                onTouchStart={(e)=>{
                                    "use strict";
                                    e.currentTarget.Point = {
                                        x: e.changedTouches[0].pageX,
                                        y: e.changedTouches[0].pageY
                                    };
                                }}
                                onTouchEnd={(e)=>{
                                    "use strict";
                                    let _this = e.currentTarget;
                                    let nowPoint = {
                                        x: e.changedTouches[0].pageX,
                                        y: e.changedTouches[0].pageY
                                    }
                                    console.log(Math.abs(nowPoint.x - _this.Point.x),);
                                     if(Math.abs(nowPoint.x - _this.Point.x)+Math.abs(nowPoint.y - _this.Point.y) < 2){
                                        window.location.href = _this.href;

                                    }
                                }}
                                to={`/workdetails/${item.id}`}>
                                <img src={item.icon} />
                                <div className="wroks-info">
                                    <h4 className="works-title">{item.title}</h4>
                                    <span className="works-good  iconfont icon-zan">{item.good}</span>
                                    <span className="works-message iconfont icon-tubiao-">{item.message}</span>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            {Footer()}
        </section>);
}