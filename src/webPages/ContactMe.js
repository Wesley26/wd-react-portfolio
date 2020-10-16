import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import {
        SERVICE_ID,
        TEMPLATE_ID,
        USER_ID,
        RECAPTCHA_CLIENT_SIDE_KEY, } from './contentMaster/PageContents.js';

function ContactMe() {

    /**
     * botCheck, setBotCheck hooks as a string to match the TailwindCSS className
     * to control making the form input JSX element be "visible" or "hidden"
     */
    const [botCheck, setBotCheck] = useState("hidden");

    let sendEmail = e => {
      e.preventDefault();
  
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset(); //reset the form
    };

    let onPass = () => {
        //Passed reCaptcha - legitamate pass
        //add tailwindCSS class 'visible'
        setBotCheck("visible");
    };

    let onFail = () => {
        //Failed reCaptcha - time-out or any fail reason
        //add tailwindCSS class 'hidden'
        setBotCheck("hidden");
    };
  
    return (
      <div>
      
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

          <ReCAPTCHA
              sitekey={RECAPTCHA_CLIENT_SIDE_KEY}
              onChange={onPass}
              onExpired={onFail}
              onErrored={onFail} 
          />

        <div>
            <input
                className={botCheck}
                type="submit" 
                value="Send"
            />
        </div>
        </form>
    </div>
    );
};

export default ContactMe;