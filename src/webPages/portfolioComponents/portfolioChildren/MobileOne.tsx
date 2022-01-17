import { FC, useContext, useEffect, useState } from 'react';
import PageContents from '../../contentMaster/PageContents';
import PortfolioPageContents from '../PortfolioPageContents';
import PortfolioAnimations from '../PortfolioAnimations';
import { motion } from 'framer-motion';

import { PortfolioDisplayContext } from '../../../hooks/PortfolioDisplayContext';

const MobileOne:FC = () => {

    const pageContents = PageContents();
    const portfolioPageContents = PortfolioPageContents();
    const portfolioAnimations = PortfolioAnimations();
    const { portfolioSetter } = useContext(PortfolioDisplayContext);

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {

        if (portfolioSetter === 1) {
            setVisible(true);
        } else {
            setVisible(false);
        };

    }, [portfolioSetter]);

    return (
        <>  { visible ? (
            <motion.div 
                initial={portfolioAnimations.initialStyle}
                animate={portfolioAnimations.animateStyle}
                transition={portfolioAnimations.transitionStyle}
                className="mx-1 md:mx-16 flex flex-col lg:flex-row justify-center items-center w-max"
            >

                <div className="bg-mobile_one bg-contain bg-no-repeat border-2 rounded-md border-gray-600 h-30long md:h-51.6long w-56 md:w-96" />

                <div className="p-3 bg-transparent" />

                <div className="p-3 flex flex-col justify-center items-center border-2 rounded-md border-gray-600 bg-blue-100 shadow-xl">

                    <div className="p-3 flex rounded-full justify-center">
                        <img
                            src={portfolioPageContents.portfolioPageImages.reactJSLogo}
                            alt={pageContents.noImage}
                            className="focus:outline-none">
                        </img>
                    </div>

                    <div className="py-3 bg-transparent" />

                    <p className="p-1 font-title bg-gray-500 text-gray-200 text-center font-medium w-11long">
                        {portfolioPageContents.portfolioTextMobile1.titleP3}
                    </p>

                    <div className="py-3 bg-transparent" />

                    <p className="p-1 font-title bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-gray-200 text-center font-medium w-11long">
                        <a href={portfolioPageContents.m1Link} rel="noreferrer" target="_blank">
                            {portfolioPageContents.portfolioTextMobile1.subtitleP3_1}
                        </a>
                    </p>

                </div>
            </motion.div>
            ) : null }
        </>
    );
};

export default MobileOne;