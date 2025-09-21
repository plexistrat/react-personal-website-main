import React from "react";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="banner">
        <h2>Let's make something great together!</h2>
      </div>

      <form
        className="form"
        action="mailto:drosostaikos@yahoo.gr"
        method="POST"
        encType="text/plain"
      >
        <h1>Contact</h1>

        <button className="sendButton" type="submit">
          <MdEmail style={{ marginRight: "8px", fontSize: "20px" }} /> Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
