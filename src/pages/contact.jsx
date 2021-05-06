import React from 'react';
import { useState } from "react";

import "../styles/contact.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, message);

        window.alert("The message has been submitted.");
    };

    return (
        <section className="contact">
            <div className="title">
                <div>
                    <h2>Contact Me</h2>
                    <p>Want to get into contact? Enter your details in this form and I'll get to you as soon as possible.</p>
                </div>
            </div>

            <div className="content">
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" placeholder="John Smith" value={name} onChange={(event) => setName(event.target.value)} required />

                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" placeholder="someone@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Message" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </section>
    );
}

export default Contact;