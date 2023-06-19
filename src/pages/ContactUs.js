import React from 'react';
import "./contactUs.css";


function ContactUs() {
  return (
    <>
      <hr/>
    <h1 className='text-center bg-dark-subtle form-notch-leading p-3' >Contact Us</h1>
    <div className='ms-4'>
     
      <p>
        We would love to hear from you! If you have any questions, feedback, or inquiries, please feel
        free to reach out to us using the contact details provided below.
      </p>
      <div className="contact-info">
        <p>Email: info@chiefchef.com</p>
        <p>Phone: +1 123-456-7890</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
      <p>
        You can also fill out the form below to send us a message directly. We'll get back to you as soon
        as possible.
      </p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </>
  )
}

export default ContactUs
