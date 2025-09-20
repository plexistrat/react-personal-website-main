import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k2gvkni",
        "template_fryyr36",
        formRef.current,
        "t075-YkzlwWcohHST"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="banner">
        <h2>Let's make something great together!</h2>
      </div>
      <form className="form" ref={formRef} onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <div className="name-email">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
        </div>
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea
          name="message"
          placeholder="Write your message here..."
          required
        />
        <button className="sendButton" type="submit">
          <MdEmail style={{ marginRight: "8px", fontSize: "20px" }} /> Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
