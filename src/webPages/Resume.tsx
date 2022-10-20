import { FC, useEffect, useState } from 'react';
import PageContents from './contentMaster/PageContents';
import MainPageAnimations from './contentMaster/MainPageAnimations';
import { isMobile } from 'react-device-detect';
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
        <div className="font-body bg-body_lightGray m-6 sm:pb-6 shadow-xl h-full">

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
                    <div className="flex flex-1 justify-center items-center h-30long md:h-51.6long lg:h-85.6long">
                        { isMobile ? ( //Resume
                            <img 
                                src={pageContents.allImages.resumePdf}
                                alt={pageContents.noImage}
                                className="focus:outline-none shadow-lg"
                            /> 
                        ) : (
                            <iframe 
                                src={`${pageContents.allImages.resumePdf}#view=fitH#zoom=scale`}
                                title={pageContents.resumeText.resumeTitle}
                                className="focus:outline-none shadow-lg h-full w-full"
                                height="100%"
                                width="100%"
                            />
                        )}
                    </div>
                    <>
                        <div className="pt-3 pb-12 lg:ml-64 lg:mr-64 grid grid-flow-col">
                            <div className="text-xl p-3 flex rounded-full justify-center hover:bg-gray-300 active:bg-gray-500">
                                <a href={pageContents.resumeLink} rel="noreferrer" target="_blank">
                                    {pageContents.resumeText.downloadR}
                                </a>
                            </div>
                        </div>
                        <div className="sm:visible sm:mb-32long md:hidden">
                            <br></br>
                        </div>
                    </>
                    <div className="flex flex-1 justify-center items-center h-30long md:h-51.6long lg:h-85.6long">
                        { isMobile ? ( //ICM Letter of Recommendation
                            <img 
                                src={pageContents.allImages.letterBImg}
                                alt={pageContents.noImage}
                                className="focus:outline-none shadow-lg h-93percent"
                            /> 
                        ) : (
                            <iframe 
                                src={`${pageContents.allImages.letterBPdf}#view=fitH#zoom=scale`}
                                title={pageContents.resumeText.letterOfRecommendationTitleB}
                                className="focus:outline-none shadow-lg h-full w-full"
                                height="100%"
                                width="100%"
                            />
                        )}
                    </div>
                    <div className="flex flex-1 justify-center items-center h-30long md:h-51.6long lg:h-85.6long">
                        { isMobile ? ( //CHOYCES Letter of Recommendation
                            <img 
                                src={pageContents.allImages.letterAImg}
                                alt={pageContents.noImage}
                                className="focus:outline-none shadow-lg h-93percent"
                            /> 
                        ) : (
                            <iframe 
                                src={`${pageContents.allImages.letterAPdf}#view=fitH#zoom=scale`}
                                title={pageContents.resumeText.letterOfRecommendationTitleA}
                                className="focus:outline-none shadow-lg h-full w-full"
                                height="100%"
                                width="100%"
                            />
                        )}
                    </div>
                    <>
                        <div className="sm:visible sm:mb-32long md:hidden">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </>
                    </motion.div>
                ) : null }
            </>

        </div>
    )
};

export default Resume;