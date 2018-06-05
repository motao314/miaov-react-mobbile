import React,{Component} from "react";
import {Link} from "react-router-dom";
export default function Wroks(props) {
        return (<section className="wroks">
            <h2 className="wroks-title">学员作品</h2>
            <ul className="wroks-list">
                {props.data.map((item)=>{
                    return (
                        <li key={item.id}>
                            <Link to={`/workdetails/${item.id}`}>
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
        </section>);
}