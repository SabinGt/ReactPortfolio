import React from 'react'
import './ContactForm.scss'

function ContactForm() {
  return (
    <div>
       <div id="contact">
      <div className="content">
  
        <p>You can contact me via following options</p>
      </div>
      <div className="container">
        <div className="contactinfo">
          <div className="box">
            <div className="contact-icon">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>SrijanaNagar, Bhaktapur <br />Nepal</p>
            </div>
          </div>
          <div className="box">
            <div className="contact-icon">
              <i className="fa fa-mobile" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <a href="tel:+977 9860673475">+977 9860673475</a>
            </div>
          </div>
          <div className="box">
            <div className="contact-icon">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <a href="mailto:sabingt0@gmail.com">sabingt0@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <h2>Send Message</h2>
            <div className="inputbox">
              <input type="text" required /><span>Full Name</span>
            </div>
            <div className="inputbox">
              <input type="text" required /><span>Email</span>
            </div>
            <div className="inputbox">
              <textarea name="" id="" cols="20" rows="5"></textarea>
              <span>Type yout Message....</span>
            </div>
            <div className=""bx bx-menu></div>
            <div className="inputbox">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactForm