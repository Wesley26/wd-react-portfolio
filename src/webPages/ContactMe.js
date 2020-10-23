import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { commonContactFormText, contactMeHeaderText, contactMeInstructionsA, contactMeInstructionsB, 
        contactMeInstructionsC, contactMeInstructionsD, contactMeInstructionsE, contactMeInstructionsF,
        contactMeInstructionsG, contactMeInstructionsH,
        SERVICE_ID, TEMPLATE_ID, USER_ID,
        RECAPTCHA_CLIENT_SIDE_KEY, } from './contentMaster/PageContents.js';

function ContactMe() {

    /**
     * botCheck, setBotCheck hooks as a string to match the TailwindCSS className
     * to control making the type send form input JSX element be "visible" or "hidden"
     */
    const [botCheck, setBotCheck] = useState("hidden bg-transparent");

    /**
     * formInput, setFormInput - Hook recieves user input for input name: 
     * subject, name, email, and message
     */
    const [formInput, setFormInput] = useState({subject: '', name: '', email: '', message: ''});
    let allowSend = true; //boolean to check if user input is filled out legitamately

    const handleInputChange = e => setFormInput({
        /**
        *  On event (e), looks for the current target input JSX element on entire form,
        *  pushes the current target value into formInput as it spreads over entire 
        *  JSX input current target element
        */
        ...formInput, 
        [e.currentTarget.name]: e.currentTarget.value
    });

    const submitValue = () => {
        const formDetails = {
            "The Subject" : formInput.subject,
            "The Name" : formInput.name,
            "The Email" : formInput.email,
            "The Message" : formInput.message,
        };
        //console.dir(formDetails); //Uncomment to see the object contents

        if (!formDetails) {
            alert("An error has occurred with the form, please email me for further assistance.");
            allowSend = false;
            return; //check to ensure the formDetails object exists, if not - do not send email
        };
        
        if (!formInput.subject ||
            !formInput.name ||
            !formInput.email ||
            !formInput.message ) {
            alert("ALL fields must be filled in to proceed.");
            allowSend = false;
            return; //check to ensure all fields are filled in, if not - do not send email
        };
    };

    let sendEmail = e => {
        e.preventDefault();

        if (allowSend === true) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID) //sends the form

            .then((result) => {
                console.log(result.text);
                alert("Your email has been successfully sent! You will hear back from me very soon.");
            }, (error) => {
                console.log(error.text);
                alert("An error has occurred with the form, please email me for further assistance.");
            });

            e.target.reset(); //reset the form
        };
    };

    const onPass = () => {
        //Passed reCaptcha - legitamate pass
        //add tailwindCSS class 'visible'
        setBotCheck("visible bg-transparent");
    };

    const onFail = () => {
        //Failed reCaptcha - time-out or any fail reason
        //add tailwindCSS class 'hidden'
        setBotCheck("hidden bg-transparent");
    };
  
    return (
      <div className="bg-gray-100 m-6 pt-6 pl-6 pr-6 pb-16 overflow-auto">
          <div className="md:ml-32 md:mr-32 lg:ml-64 lg:mr-64 p-3 grid grid-cols-1 items-center text-center">
              <h3 className="p-3 font-bold bg-transparent">
                {contactMeHeaderText}
              </h3>
              <p className="p-3">
                {contactMeInstructionsA}
              </p>
              <div className="pl-3 pr-3 pt-3 md:flex md:justify-start text-left">
                    <p className="p-3">
                        <b>{commonContactFormText.subjectText}</b>{contactMeInstructionsB}
                    </p>
                    <p className="p-3">
                        <b>{commonContactFormText.nameText}</b>{contactMeInstructionsC}
                    </p>
                    <p className="p-3">
                        <b>{commonContactFormText.emailText}</b>{contactMeInstructionsD}
                    </p>
                    <p className="p-3">
                        <b>{commonContactFormText.messageText}</b>{contactMeInstructionsE}
                    </p>
              </div>
              <p className="pt-3">
                {contactMeInstructionsF}<b>{contactMeInstructionsG}</b>{contactMeInstructionsH}
              </p>
          </div>
          <br>
          </br>
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
                    <label className="p-3"><b>{commonContactFormText.subjectText}</b></label>
                    <input
                        type="text" 
                        name ="subject"
                        size="25"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="p-3 grid justify-items-center">
                    <label className="p-3"><b>{commonContactFormText.nameText}</b></label>
                    <input 
                        type="text" 
                        name="name"
                        size="25"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="p-3 grid justify-items-center">
                    <label className="p-3"><b>{commonContactFormText.emailText}</b></label>
                    <input 
                        type="email" 
                        name="email"
                        size="25"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="p-3 grid justify-items-center">
                    <label className="p-3 flex justify-center"><b>{commonContactFormText.messageText}</b></label>
                    <textarea
                        name="message"
                        rows="8"
                        cols="25"
                        onChange={handleInputChange}
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
                    <p className="p-3 rounded-full hover:bg-gray-500">
                    <input
                        className={botCheck}
                        onClick={submitValue}
                        type="submit" 
                        value="Send"
                    />
                    </p>
                </div>
            </form>

          </div>
    </div>
    );
};

export default ContactMe;