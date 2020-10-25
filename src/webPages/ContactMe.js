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
    const [botCheck, setBotCheck] = useState("hidden bg-transparent font-semibold");

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
        setBotCheck("visible bg-transparent font-semibold");
    };

    const onFail = () => {
        //Failed reCaptcha - time-out or any fail reason
        //add tailwindCSS class 'hidden'
        setBotCheck("hidden bg-transparent font-semibold");
    };
  
    return (
      <div className="bg-gray-100 m-6 pt-6 pl-6 pr-6 pb-16 overflow-auto shadow-xl">
          <div className="md:ml-12 md:mr-12 lg:ml-40 lg:mr-40 p-3 grid grid-cols-1 items-center text-center">
              <h3 className="p-3 font-bold bg-transparent">
                {contactMeHeaderText}
              </h3>
              <p className="p-3">
                {contactMeInstructionsA}
              </p>
              <div className="pl-3 pr-3 pt-3 md:flex md:justify-start text-left">
                    <p className="p-3 border-b-4 md:border-b-0 md:border-r-4 border-gray-400">
                        <b>{commonContactFormText.subjectText}</b>{contactMeInstructionsB}
                    </p>
                    <p className="p-3 border-b-4 md:border-b-0 md:border-r-4 border-gray-400">
                        <b>{commonContactFormText.nameText}</b>{contactMeInstructionsC}
                    </p>
                    <p className="p-3 border-b-4 md:border-b-0 md:border-r-4 border-gray-400">
                        <b>{commonContactFormText.emailText}</b>{contactMeInstructionsD}
                    </p>
                    <p className="p-3 border-b-4 md:border-b-0 border-gray-400">
                        <b>{commonContactFormText.messageText}</b>{contactMeInstructionsE}
                    </p>
              </div>
              <p className="pt-3">
                {contactMeInstructionsF}<b>{contactMeInstructionsG}</b>{contactMeInstructionsH}
              </p>
          </div>
          <br>
          </br>
          <div className="bg-body-gray p-6 flex justify-center place-items-center shadow-lg">
      
            <form
                className="bg-gray-300 md:pl-16 md:pr-16 lg:pl-64 lg:pr-64 grid grid-cols-1 items-center shadow-md"
                onSubmit={sendEmail}
            >
                <div className="pl-64 pr-64 pt-3 pb-3">
                    <br>
                    </br>
                </div>
                <div className="p-3 grid justify-items-center">
                    <label className="p-3"><b>{commonContactFormText.subjectText}</b></label>
                    <input
                        className="shadow-lg"
                        type="text" 
                        name ="subject"
                        size="25"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="p-3 grid justify-items-center">
                    <label className="p-3"><b>{commonContactFormText.nameText}</b></label>
                    <input
                        className="shadow-lg"
                        type="text" 
                        name="name"
                        size="25"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="p-3 grid justify-items-center">
                    <label className="p-3"><b>{commonContactFormText.emailText}</b></label>
                    <input
                        className="shadow-lg"
                        type="email" 
                        name="email"
                        size="25"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="p-3 grid justify-items-center">
                    <label className="p-3 flex justify-center"><b>{commonContactFormText.messageText}</b></label>
                    <textarea
                        className="shadow-lg"
                        name="message"
                        rows="8"
                        cols="25"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="p-3 flex justify-center">
                    <ReCAPTCHA
                        className="shadow-lg"
                        sitekey={RECAPTCHA_CLIENT_SIDE_KEY}
                        onChange={onPass}
                        onExpired={onFail}
                        onErrored={onFail} 
                    />
                </div>

                <div className="p-3 flex justify-center">
                    <div className="p-3 border-solid border-l-4 border-r-4 border-gray-400 rounded-full hover:bg-gray-500 active:bg-gray-600">
                        <input
                            className={botCheck}
                            onClick={submitValue}
                            type="submit" 
                            value="Send Information"
                        />
                    </div>
                </div>
            </form>

          </div>
    </div>
    );
};

export default ContactMe;