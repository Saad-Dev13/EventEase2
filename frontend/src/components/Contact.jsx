import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="contact container">
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>COMSATS</p>
          <p>Islamabad Campus</p>
        </div>
        <div className="item">
          <h4>Call Us</h4>
          <p>+92-302-0934003</p>
          <p>+92-304-7480064</p>
        </div>
        <div className="item">
          <h4>Mail Us</h4>
          <p>saad.dev13@gmail.com</p>
          <p>huzaifa09001@gmail.com</p>
        </div>
      </div>
      <div className="banner">
        <h4>Our Location & Contact Form</h4>
        <div className="location-form-container">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.560676204874!2d73.15479931521048!3d33.65240808071057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfea4aee5bdf8f%3A0xe6b55e05d462beb1!2sCOMSATS%20University%20Islamabad%20(CUI)!5e0!3m2!1sen!2s!4v1698765432100!5m2!1sen!2s"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT US</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                rows={8}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;