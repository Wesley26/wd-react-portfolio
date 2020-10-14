import React from 'react'
import emailjs from 'emailjs-com';
import {
        SERVICE_ID,
        TEMPLATE_ID,
        USER_ID } from './contentMaster/PageContents.js';

function ContactMe() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset(); //reset the form
    };
  
    return (
      <form onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />

        <label>Subject</label>
        <input type="text" name ="subject"/>

        <label>Name</label>
        <input type="text" name="name" />

        <label>Email</label>
        <input type="email" name="email" />

        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
};

export default ContactMe;