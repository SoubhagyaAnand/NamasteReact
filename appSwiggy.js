
import React from "react";
import ReactDOM from "react-dom/client";

/** UI Mock / Planning
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 * Footer
 * - Copyright
 * - links
 * - Address
 * - Contact
 */

const Header = () => {
    <div classname="header">
    <div classname="logo-container"> 
        <img src="https://th.bing.com/th/id/OIP.6kpp9vAwvHPsNyIplZRNmwHaHa?r=0&rs=1&pid=ImgDetMain"/>
    </div>
    <div classname="nav-items">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>contact us</li>
            <li>cart</li>
        </ul>
        </div>
    </div>
}

const AppLayout = () => {
    <div className="app">
    <Header />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
