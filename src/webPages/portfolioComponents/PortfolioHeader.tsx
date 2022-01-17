import { FC, useContext, useEffect, useState } from 'react';
import PortfolioPageContents from './PortfolioPageContents';
import PortfolioAnimations from './PortfolioAnimations';
import { motion } from 'framer-motion';

import { PortfolioDisplayContext } from '../../hooks/PortfolioDisplayContext';

const PortfolioHeader:FC = () => {

    const portfolioPageContents = PortfolioPageContents();
    const portfolioAnimations = PortfolioAnimations();
    const { portfolioSetter } = useContext(PortfolioDisplayContext);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {

        setVisible(false);
        setVisible(true);

    }, [portfolioSetter]);

    return (
        <>  { visible ? (
            <motion.div 
                initial={portfolioAnimations.initialStyle}
                animate={portfolioAnimations.animateStyle}
                transition={portfolioAnimations.transitionStyle}
                className="text-lg p-6 text-center"
            >
                <p>
                    {portfolioPageContents.portfolioRepoForThisSite.pRFTS1_1}
                    <a
                        href={portfolioPageContents.portfolioRepoForThisSiteLink}
                        rel="noreferrer"
                        target="_blank"
                        className="border-gray-700 border-2 p-3 rounded-full flex justify-center md:ml-48 md:mr-48 lg:ml-20long lg:mr-20long hover:bg-gray-200 active:bg-gray-400 shadow-md">
                        {portfolioPageContents.portfolioRepoForThisSite.pRFTS1_2}
                    </a>
                </p>
                <p className="pt-3">
                    {portfolioPageContents.portfolioRepoForThisSite.pRFTS1_3}
                </p>
                <p className="pb-3">
                    {portfolioPageContents.portfolioRepoForThisSite.pRFTS1_4}
                </p>
                <p className="pb-3">
                    {portfolioPageContents.portfolioRepoForThisSite.pRFTS1_5}
                </p>
            </motion.div>
            ) : null }
        </>
    );
};

export default PortfolioHeader;