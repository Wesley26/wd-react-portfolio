import { FC, useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import PageContents from './contentMaster/PageContents';
import MainPageAnimations from './contentMaster/MainPageAnimations';
import { motion } from 'framer-motion';

import { GitHubLinkedInURL } from './reusableComponents/reusableIndex';

const ContactMe:FC = () => {

    const pageContents = PageContents();
    const mainPageAnimations = MainPageAnimations();

    const [visible, setVisible] = useState<boolean>(false);
    const [ botCheck, setBotCheck ] = useState<boolean>(false);

    useEffect(() => {

        setVisible(false);
        setVisible(true);

    }, []);

    const onPass = () => {
        //Passed reCaptcha - legitamate pass
        setBotCheck(true);
    };

    const onFail = () => {
        //Failed reCaptcha - time-out or any fail reason
        setBotCheck(false);
    };
  
    return (
      <div className="font_body bg-body_lightGray m-6 pt-6 pl-6 pr-6 pb-16 overflow-auto shadow-xl">

        <>
            { visible ? (
                <motion.div
                    initial={mainPageAnimations.initialStyle}
                    animate={mainPageAnimations.animateStyle}
                    transition={mainPageAnimations.transitionStyle}
                >
                    <GitHubLinkedInURL />
                    <div className="flex flex-col justify-center items-center">

                        <h3 className="font-title text-xl p-3 font-bold bg-transparent">
                            {pageContents.contactMeHeaderText}
                        </h3>

                        { !botCheck ? (
                            <div className="flex justify-center items-center">
                                <p className="text-lg text-center p-3">
                                    {pageContents.contactMeInstructionsA}
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-lg text-center p-3">
                                    {pageContents.contactMeInstructionsB}
                                </p>
                                <p className="text-lg text-center p-3">
                                    {pageContents.contactMeEmail}
                                </p>
                                <p className="text-lg text-center p-3">
                                    {pageContents.contactMePhone}
                                </p>
                                <p className="text-lg text-center p-3">
                                    {pageContents.contactMeInstructionsC}
                                </p>
                            </div>
                        )}
                        <div className="p-3 flex justify-center">
                            <ReCAPTCHA
                                sitekey={pageContents.apiContent.recaptchaClientKey}
                                onChange={onPass}
                                onExpired={onFail}
                                onErrored={onFail} 
                            />
                        </div>

                    </div>
                </motion.div>
            ) : null }
        </>

    </div>
    );
};

export default ContactMe;