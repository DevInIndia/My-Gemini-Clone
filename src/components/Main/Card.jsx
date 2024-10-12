import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
function Card(props) {
    const icons= [assets.compass_icon,assets.bulb_icon,assets.message_icon,assets.code_icon];
    return(
        <div className="card">
            <p>{props.para}</p>
            <img src={icons[props.num]} alt="" />
        </div>
    )
}
export default Card
