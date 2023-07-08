import React from 'react';
import Banner from '../assets/pizza123.jpg';
import '../Styles/About.css';
function About()
{
    return(
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${Banner})`}}>
                
            </div>
            <div className="aboutBottom">
                <h1 style={{fontFamily:'cursive'}}>About Us</h1>
                <p>Welcome to our delicious world of pizza! Our website is your ultimate destination for pizza lovers. We are passionate about creating mouthwatering pizzas that satisfy your cravings and leave you wanting more.
                Ordering from our website is a breeze. With just a few clicks, you can add your favorite items to your cart, specify delivery or pickup options, and securely complete your transaction. We offer various payment methods, ensuring a hassle-free checkout process.
                Whether you're a pizza enthusiast or a casual diner, our website is the perfect platform to explore and satisfy your cravings. So, dive into the world of tantalizing flavors and order your favorite pizza today!
                </p>
            </div>
        </div>
    );
}
export default About;