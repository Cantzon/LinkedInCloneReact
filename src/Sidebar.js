import React from 'react';
import {Avatar} from "@material-ui/core";
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://cdn.wallpapersafari.com/43/29/xCP4O8.jpg" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2> Hari Krishna </h2>
                <h4> harikrishna98@gmail.com </h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed You </p>
                    <p className="sidebar__statNumber"> 1000 </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Posts </p>
                    <p className="sidebar__statNumber"> 1500 </p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("react")}
                {recentItem("programming")}
                {recentItem("networking")}
                {recentItem("cloning")}
                {recentItem("dev")}
            </div>
        </div>
    );
}

export default Sidebar;