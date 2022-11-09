import React from 'react'
import './Contact.css'
import { useState } from 'react';
import axios from 'axios'
import './Contact.css'
import { Link } from 'react-router-dom';
// import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
    err: "",
    success: "",
  };
  
function Contact() {
    const [formDataUser, setFormDataUser] = useState(initialState);
 

  const {
    name,
    email,
    phone,
    message,
   
  } = formDataUser;

  const handleChange = (e) => {
    //place of do that onChange={(e) => setEmail(e.target.value) for each field (input) we do that
    setFormDataUser({
      ...formDataUser,
      [e.target.name]: e.target.value,
      
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); //default action that belongs to the event will not occur.
    
    try {
          const res = await axios.post("/contact", {
          name,
          email,
          phone,
          message
        });
        setFormDataUser({ ...formDataUser});
      }
    catch (err) {
      err.response.data.msg &&
        setFormDataUser({
          ...formDataUser,
          
        });
    }
  };

  return (
    <>
    <div class="contain">
		<div class="contact-box">
			<div class="left"></div>
			<div class="right">
				<h2>Contact Us</h2>
				<input type="text"  placeholder="Name" name="name" className="field"
            onChange={handleChange} />
				
            <input type="text" name="email"  placeholder="Email" className="field"
            onChange={handleChange} />
				
            <input type="text" name="phone"  placeholder="Phone Number" className="field"
            onChange={handleChange} />
				 <textarea
                className="field"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
                onChange={handleChange}
              ></textarea>
				<button class="buttn" onClick={handleSubmit}>Send</button>
        <Link to="/" className="back"  >Home</Link>
			</div>
		</div>
	</div>
   
      </>
  );
}

export default Contact

