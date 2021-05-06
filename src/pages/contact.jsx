import React from 'react';
import { useState } from "react";

import emailjs from 'emailjs-com';

import "../styles/contact.css";

// EmailJS info
const USER_ID = "user_pjyt6ORYCWpte5azw46QA";
const SERVICE_NAME = "contact_service";
const TEMPLATE_NAME = "contact_form";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [waitingForEmail, setWaitingForEmail] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Let the user know that the email is sending
        setWaitingForEmail(true);

        // Send request
        const emailPromise = emailjs.sendForm(SERVICE_NAME, TEMPLATE_NAME, event.target, USER_ID);

        // Handle result
        emailPromise.then(() => {
            // Let user know
            window.alert("The message has been submitted!");
            // setWaitingForEmail(false)
        }, (error) => {
            // Let user know
            window.alert("Sorry, your message couldn't be sent. Please try again.");
            console.error(error);
            // setWaitingForEmail(false);
        });
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
                    <input id="name" name="name" placeholder="John Smith" value={name} onChange={(event) => setName(event.target.value)} required />

                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" name="email" placeholder="someone@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>

                    {waitingForEmail &&
                        <>
                            <br/>
                            <div className="loading-email-progress">
                                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                                <p>Sending message...</p>
                            </div>
                        </>
                    }

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
}

export default Contact;