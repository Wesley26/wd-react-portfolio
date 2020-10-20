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
     * plus padding and button display style TailwindCSS classes
     */
    const [botCheck, setBotCheck] = useState("hidden p-3 rounded-full hover:bg-gray-600");

    /**
     * Each input field value is assigned a variable.
     * emailSubject - Email Subject input line
     * emailName - Email User's Name input line
     * emailEmail - Email User's Email input line
     * emailMessage - Email User's message of the email
     */
    //let emailSubject, emailName, emailEmail, emailMessage;

    let sendEmail = e => {
      e.preventDefault();

      //console.log(emailSubject, emailName, emailEmail, emailMessage);

      /**
      if (!emailSubject ||
        !emailName ||
        !emailEmail ||
        !emailMessage) {
        alert("ALL fields must be filled in to proceed.");
        return; //check to ensure all fields are filled in
      };
      */
      
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        //sends the form
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
        setBotCheck("visible p-3 rounded-full hover:bg-gray-600");
    };

    let onFail = () => {
        //Failed reCaptcha - time-out or any fail reason
        //add tailwindCSS class 'hidden'
        setBotCheck("hidden p-3 rounded-full hover:bg-gray-600");
    };
  
    return (
      <div className="bg-gray-100 m-6 pt-6 pl-6 pr-6 pb-16 overflow-auto">
          <div className="bg-header-blue p-6 flex justify-center place-items-center">
      
            <form
                className="bg-gray-300 grid grid-cols-1 items-center"
                onSubmit={sendEmail}
            >
                <div className="pl-64 pr-64 pt-3 pb-3">
                    <br>
                    </br>
                </div>
                <div className="p-3 grid justify-items-center">
                    <label className="p-3">Subject</label>
                    <input
                        type="text" 
                        name ="subject"
                        size="25"
                    />
                </div>
                <div className="p-3 grid justify-items-center">
                    <label className="p-3">Name</label>
                    <input 
                        type="text" 
                        name="name"
                        size="25"
                    />
                </div>
                <div className="p-3 grid justify-items-center">
                    <label className="p-3">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        size="25"
                    />
                </div>
                <div className="p-3 grid justify-items-center">
                    <label className="p-3 flex justify-center">Message</label>
                    <textarea 
                        name="message"
                        rows="8"
                        cols="25"
                    />
                </div>

                <div className="p-3 flex justify-center">
                    <ReCAPTCHA
                        sitekey={RECAPTCHA_CLIENT_SIDE_KEY}
                        onChange={onPass}
                        onExpired={onFail}
                        onErrored={onFail} 
                    />
                </div>

                <div className="p-3 flex justify-center">
                    <input
                        className={botCheck}
                        type="submit" 
                        value="Send"
                    />
                </div>
            </form>

          </div>
    </div>
    );
};

export default ContactMe;