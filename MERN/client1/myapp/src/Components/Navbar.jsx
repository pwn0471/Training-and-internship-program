import {NavLink} from "react-router-dom";
import "../css/Navbar.css";

const Navbar = ()=>{
    return<>
    <div className="main-nav-div">
        <ul>
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "./about">About</NavLink></li>
        </ul>
    </div>
    </>
}

export default Navbar;