import React from 'react';
import "../styles/contact.css";

function Contact() {
    return (
      <section className="contact">
          <div className="title">
              <h2>Contact Me</h2>
          </div>

          <div className="content">
              Want to get into contact? Enter your details in this form and I'll get to you as soon as possible.

              <form>
                  <label for="name">Full Name</label>
                  <input id="name"/>
              </form>
          </div>
      </section>  
    );
}

export default Contact;