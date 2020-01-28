import React from "react";

import "./toogle.scss";

const toggleBtn = props => {
    let toggleClasses = 'toggleBtn';
    if (props.show){
        toggleClasses = 'toggleBtn open';
    };
  return (
    <nav className={toggleClasses} >
      <ul>
        <li>
          <a href="/"> Login</a>
        </li>
        <li>
          <a href="/"> Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};
export default toggleBtn;
