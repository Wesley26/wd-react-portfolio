import { FC, useEffect, useState } from 'react';
import PageContents from './contentMaster/PageContents';
import MainPageAnimations from './contentMaster/MainPageAnimations';
import { motion } from 'framer-motion';

const Home:FC = () => {

    const pageContents = PageContents();
    const mainPageAnimations = MainPageAnimations();

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {

        setVisible(false);
        setVisible(true);

    }, []);

    return (
        <div className="font-body bg-body_lightGray m-6 shadow-xl">

            <> { visible ? (
                <motion.div
                    initial={mainPageAnimations.initialStyle}
                    animate={mainPageAnimations.animateStyle}
                    transition={mainPageAnimations.transitionStyle}
                    className="p-6"
                >
                    <div className="pb-10">
                        <div className="flex justify-center items-center">
                            <img
                            src={pageContents.allImages.masterLogo}
                            alt={pageContents.noImage}
                            className="focus:outline-none">
                            </img>
                        </div>
                        <h3 className="font-title text-xl text-center font-bold">
                            {pageContents.homeText.subHeaderH}
                        </h3>
                        <br>
                        </br>
                        <p className="text-lg">
                            {pageContents.homeText.mainParagraphH}
                        </p>

                        <br>
                        </br>

                        <div>
                            <figure>
                                <img 
                                    src={pageContents.allImages.phillyPort} 
                                    alt={pageContents.noImage}
                                    className="lg:hidden focus:outline-none shadow-lg">
                                </img>
                                <img 
                                    src={pageContents.allImages.phillyLand} 
                                    alt={pageContents.noImage}
                                    className="invisible h-1 w-1 lg:visible lg:h-full lg:w-full focus:outline-none shadow-lg">
                                </img>
                                <figcaption className="pt-2 text-left">
                                    {pageContents.homeText.captionH}
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </motion.div>
                ) : null }
            </>

        </div>
    );
};

export default Home