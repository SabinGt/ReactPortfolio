import React, { useState, useEffect } from "react";
import "./ContactForm.scss";
import RoomIcon from "@mui/icons-material/Room";
import Typewriter from "typewriter-effect";

function ContactForm() {
  const initialValues = { fullName: "", email: "", textarea: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues(initialValues);
  };
  //   if(Object.keys(formErrors).length===0 && isSubmit){
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullName = "Fullname is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.textarea) {
      errors.textarea = "textarea is required";
    }
    return errors;
  };

  return (
    <div>
      <div id="contact">
        <div className="content">
          <Typewriter
            options={{
              strings: ["My Contact Info", "You Can Contact Me Through"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="container">
          <div className="contactinfo">
            <div className="box">
              <div className="contact-icon">
                <span>
                  <RoomIcon />
                </span>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  SrijanaNagar, Bhaktapur <br />
                  Nepal
                </p>
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
            <form onSubmit={handleSubmit}>
              <h2>Send Message</h2>

              <div className="inputbox">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your fullname"
                  onChange={handleChange}
                  value={formValues.fullName}
                />
                <p>{formErrors.fullName}</p>
              </div>
              <div className="inputbox">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p>{formErrors.email}</p>
              </div>
              <div className="inputbox">
                <textarea
                  name="textarea"
                  id=""
                  cols="20"
                  rows="5"
                  placeholder="Enter messasge...."
                  value={formValues.textarea}
                  onChange={handleChange}
                ></textarea>
                <p>{formErrors.textarea}</p>
              </div>
              <div className="" bx bx-menu></div>
              <div className="inputbox">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
