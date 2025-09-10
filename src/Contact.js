// filepath: c:\Users\Admin\OneDrive\Desktop\my-portfolio\src\Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-section"> {/* Added id="contact" */}
      <h1 className="contact-heading">CONTACT</h1> {/* Centered heading */}
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-form">
            <h2 className="contact-title">Get in touch</h2>
            <p className="contact-subtitle">
              I would love to hear from you.
            </p>
            <form>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">First name</label>
                  <input type="text" id="name" placeholder="Name *" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" placeholder="Email *" required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Subject *" required />
              </div>
              <div className="form-field">
                <label htmlFor="message">Your message</label>
                <textarea id="message" placeholder="Your message *" required></textarea>
              </div>
              <button type="submit" className="send-message-button">
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon phone-icon"></div>
              <div>
                <h4>PHONE</h4>
                <p>+91 9063877457 </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon mail-icon"></div>
              <div>
                <h4>MAIL</h4>
                <p>sreekarreddydalli@gmail.com </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon location-icon"></div>
              <div>
                <h4>ADDRESS</h4>
                <p>Karimnagar, Telangana, India.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;