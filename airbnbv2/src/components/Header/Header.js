import React from "react";

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


//import Home from "../Home/Box.js"
//<Route exact path="" component={Home}></Route>


const Header = ()=>{
    return (
       
        <div className="headBox">
            <header>
                <div className="headLeft">
                    <div className="logo">
                        <Link to="/"><svg enable-background="new 0 0 24 24" width="100%" height="100%" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="m12 20.628c-1.35 1.51-3.098 3.017-5.127 3.262l-.002-.009c-1.996.836-5.851-1.238-5.851-5.001 0-2.49 3.197-8.004 6.581-15.119.892-1.849 1.815-3.761 4.389-3.761 2.593 0 3.476 1.827 4.562 4.079 6.427 12.813 6.427 13.52 6.427 14.801.001 4.404-5.453 7.93-10.979 1.748zm9.48-1.748c0-1.962-6.379-14.365-6.432-14.468-.923-1.913-1.478-2.912-3.038-2.912-1.845 0-2.323 1.472-3.215 3.238-6.275 12.509-6.275 13.194-6.275 14.142 0 2.994 3.683 6.055 8.486.608-1.994-2.576-3.006-4.789-3.006-6.578 0-2.738 2.012-4.17 4-4.17s4 1.432 4 4.17c0 1.789-1.011 4.002-3.006 6.578 4.602 5.219 8.486 2.556 8.486-.608zm-9.48-8.64c-1.244 0-2.5.826-2.5 2.67 0 1.375.863 3.241 2.5 5.408 1.637-2.167 2.5-4.033 2.5-5.408 0-1.844-1.256-2.67-2.5-2.67z" fill="#fe5b5f"/></svg>
                        </Link></div>
                    <div className="searchBox">
                        <form name="search" action="/search" method="GET">
                        <input name="search" id="seach-input"  type="text" placeholder="Try Athens" ></input>
                        <button className="search-icon" type="submit">
                        <svg viewBox="654 -372 1664 1664" width="16" height="16"><path d="M1806,332c0-123.3-43.8-228.8-131.5-316.5C1586.8-72.2,1481.3-116,1358-116s-228.8,43.8-316.5,131.5  C953.8,103.2,910,208.7,910,332s43.8,228.8,131.5,316.5C1129.2,736.2,1234.7,780,1358,780s228.8-43.8,316.5-131.5  C1762.2,560.8,1806,455.3,1806,332z M2318,1164c0,34.7-12.7,64.7-38,90s-55.3,38-90,38c-36,0-66-12.7-90-38l-343-342  c-119.3,82.7-252.3,124-399,124c-95.3,0-186.5-18.5-273.5-55.5s-162-87-225-150s-113-138-150-225S654,427.3,654,332  s18.5-186.5,55.5-273.5s87-162,150-225s138-113,225-150S1262.7-372,1358-372s186.5,18.5,273.5,55.5s162,87,225,150s113,138,150,225  S2062,236.7,2062,332c0,146.7-41.3,279.7-124,399l343,343C2305.7,1098.7,2318,1128.7,2318,1164z"></path></svg>
                        </button>
                        </form>
                    </div>
                </div>
                <div className="headRight">
                   
        <nav>
            <ul>
                <li><Link to="/behost">Become a host</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            
        </nav>
        
        
        
        
                </div>
            </header>
        </div>
      
    );
}
export default Header;