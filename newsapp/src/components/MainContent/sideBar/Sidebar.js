import React from 'react'
import "./siderbar.scss"

const Sidebar = () => {
return ( <>
    
    <div className="sidebar">
    <div className="upBar"> <p>Widgets</p>
    <div className="upBarFilter"><i className="fas fa-cog"></i></div>
    </div>
    <div className="sidebarContent">
        <div className="sidebarItem item1"> 
            <div className="item1Icon"><i class="fas fa-ruble-sign"></i></div>
            <div className="item1Description">
                <h2>Curs Valutar</h2>
            <p> ron=usd</p></div>
        </div>
        <div className="sidebarItem item2">
            <div>Categori:</div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div className="sidebarItem item3">
            <div>twitter</div>
            <div>traffic</div>
        </div>
        </div>
    </div>
    </>
);
}

export default Sidebar;