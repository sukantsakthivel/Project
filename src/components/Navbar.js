import React, {useState} from "react";
import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom';
import "../Styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () =>
    {
        setOpenLinks(!openLinks);
    }
    return(
        <div className="navbar">
            <img src={Logo}/>
            <div className="leftside" id={openLinks?"open":"close"}>
                
                <div className="hiddenLinks">
                    <Link to="/project">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="rightside">
                <Link to="/project">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon/>
                </button>
            </div>                                                          
        </div>
    );
}
export default Navbar;
