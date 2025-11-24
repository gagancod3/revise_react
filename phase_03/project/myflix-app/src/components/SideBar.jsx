import React from 'react';
 
function SideBar() {
    let menuItems=["Home","Trending in Flix","TV Shows","Movies","Web Series"]
    let menus=menuItems.map(item=><li key={item}>{item}</li>)
    return (
        <div style={{display:'inline-block'}}>
            <nav>
                <ul>{menus}</ul>
                
            </nav>
        </div>
    );
}
 
export default SideBar;