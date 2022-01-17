import { FC, useContext, useEffect, useState } from 'react';
import PageContents from '../../contentMaster/PageContents';
import PortfolioPageContents from '../PortfolioPageContents';
import PortfolioAnimations from '../PortfolioAnimations';
import { motion } from 'framer-motion';

import { PortfolioDisplayContext } from '../../../hooks/PortfolioDisplayContext';

const WebsiteThree:FC = () => {

    const pageContents = PageContents();
    const portfolioPageContents = PortfolioPageContents();
    const portfolioAnimations = PortfolioAnimations();
    const { portfolioSetter } = useContext(PortfolioDisplayContext);

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {

        if (portfolioSetter === 5) {
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
                className="mx-1 flex flex-col justify-center items-center w-max"
            >

                <div className="bg-website_three bg-cover bg-no-repeat border-2 rounded-md border-gray-600 h-11.2long md:h-23.5long lg:h-26.9long w-18long md:w-38long lg:w-43.5long" />

                <div className="p-3 bg-transparent" />

                <div className="p-3 flex flex-col justify-center items-center border-2 rounded-md border-gray-600 bg-blue-100 shadow-xl">

                    <div className="p-3 flex rounded-full justify-center">
                        <img
                            src={portfolioPageContents.portfolioPageImages.tSLogo}
                            alt={pageContents.noImage}
                            className="focus:outline-none">
                        </img>
                    </div>

                    <div className="py-3 bg-transparent" />

                    <p className="p-1 font-title bg-gray-500 text-gray-200 text-center font-medium w-11long">
                        {portfolioPageContents.portfolioTextWeb1.titleP3}
                    </p>

                    <div className="py-3 bg-transparent" />

                    <p className="p-1 font-title bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-gray-200 text-center font-medium w-11long">
                        <a href={portfolioPageContents.w3Link} rel="noreferrer" target="_blank">
                            {portfolioPageContents.portfolioTextWeb1.subtitleP1_3}
                        </a>
                    </p>

                </div>
                
            </motion.div>
            ) : null }
        </>
    );
};

export default WebsiteThree;