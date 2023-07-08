import React from "react";
import {Link} from 'react-router-dom';
import BannerImage from '../assets/pizza1.jpeg';
import '../Styles/Home.css';
function Home(){
    return(
        <div className="home"  style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Chithappa's Pizza</h1>
                <p>NAMMA OORU PIZZA</p>
                <Link to="/menu">
                <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    );
}
export default Home;