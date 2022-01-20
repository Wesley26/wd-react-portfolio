import { FC } from 'react';
import PortfolioPageContents from './PortfolioPageContents';

const PortfolioHeader:FC = () => {

    const portfolioPageContents = PortfolioPageContents();

    return (
        <>
            <div className="text-lg p-6 text-center">
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
            </div>
        </>
    );
};

export default PortfolioHeader;