import React from "react";
import Banner from "../assets/pizza5.jpg";
import "../Styles/Contact.css";
function Contact()
{
    return(
        <div className="contact">
            <div className="leftSide" style={{backgroundImage :`url(${Banner})`}}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter Your Full Name.." type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter Your Email.." type="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea
                    rows="6"
                    placeholder="Enter Message.."
                    name="message"
                    required>
                    </textarea>
                    <button type="s ubmit">Send Message</button>
                </form>
            </div>
        </div>
    );
}
export default Contact;