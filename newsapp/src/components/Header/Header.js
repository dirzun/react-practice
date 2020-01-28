import React from "react";
import Logo from "./logo.svg";
import  "./Header.scss";
import "./BurgherMenu/BurgherMenu.js"
import BurgherMenu from "./BurgherMenu/BurgherMenu.js";



const Header = props => {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbarBurg'> 
        <BurgherMenu click={props.toggleClickHandler} />
        </div>
        <div className='navbarLogo'>
          <a href="/"><img className='logo' src={Logo} alt="logo"></img></a>
        </div>
        <div className='searchBox'>
                        <form name="search" action="/search" method="GET">
                        <input name="search"  type="text" placeholder="Search..." ></input>
                        <button className='searchIcon' type="submit">
                        <i className="fas fa-search"></i>
                        </button>
                        </form>
                    </div>
        <div className='navbarItems'>
          <ul>
            <li>
              <a href="/"> Login</a>
            </li>
            <li>
              <a href="/"> Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
