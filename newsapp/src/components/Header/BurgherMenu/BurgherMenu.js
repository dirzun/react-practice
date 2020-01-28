import React from "react";
import Stil from "./burgherStyle.module.scss"

const BurgherMenu = props =>(
    <button className={Stil.burgherMenu} onClick={props.click}>
        <div className={Stil.menuLine}></div>
        <div className={Stil.menuLine}></div>
        <div className={Stil.menuLine}></div>
    </button>
);

export default BurgherMenu;