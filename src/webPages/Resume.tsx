import { FC, useEffect, useState } from 'react';
import PageContents from './contentMaster/PageContents';
import MainPageAnimations from './contentMaster/MainPageAnimations';
import { motion } from 'framer-motion';

const Resume:FC = () => {

    const pageContents = PageContents();
    const mainPageAnimations = MainPageAnimations();

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {

        setVisible(false);
        setVisible(true);

    }, []);
    
    return(
        <div className="font-body bg-body_lightGray m-6 sm:pb-6 shadow-xl">

            <> { visible ? (
                <motion.div
                    initial={mainPageAnimations.initialStyle}
                    animate={mainPageAnimations.animateStyle}
                    transition={mainPageAnimations.transitionStyle}
                    className="px-5 py-3"
                >
                    <div className="text-xl p-3 text-center">
                        <p>
                            {pageContents.resumeText.infoR}
                        </p>
                    </div>
                    <div>
                        <img
                            src={pageContents.allImages.resumeImg}
                            alt={pageContents.noImage}
                            className="focus:outline-none shadow-lg">
                        </img>
                    </div>
                        <div className="pt-3 pb-12 md:ml-64 md:mr-64 lg:ml-64 lg:mr-64 xl:ml-32long xl:mr-32long grid grid-flow-col">
                            <div className="text-xl p-3 flex rounded-full justify-center hover:bg-gray-300 active:bg-gray-500">
                                <a href={pageContents.resumeLink} rel="noreferrer" target="_blank">
                                    {pageContents.resumeText.downloadR}
                                </a>
                            </div>

                            <div className="sm:visible sm:mb-32long md:hidden">
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                    </motion.div>
                ) : null }
            </>

        </div>
    )
};

export default Resume;