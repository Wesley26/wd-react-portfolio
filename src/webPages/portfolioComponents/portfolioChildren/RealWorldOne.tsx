import { FC, useContext, useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import PageContents from '../../contentMaster/PageContents';
import PortfolioPageContents from '../PortfolioPageContents';

import { PortfolioDisplayContext } from '../../../hooks/PortfolioDisplayContext';

const RealWorldOne:FC = () => {

    const pageContents = PageContents();
    const portfolioPageContents = PortfolioPageContents();
    const { portfolioSetter } = useContext(PortfolioDisplayContext);

    const [visible, setVisible] = useState<boolean>(false);

    const visibleTransitions = useTransition(visible, null, {
        from: { opacity: 0.1 },
        enter: { opacity: 1 },
        leave: { opacity: 0.1 },
    });

    useEffect(() => {

        if (portfolioSetter === 0) {
            setVisible(true);
        } else {
            setVisible(false);
        };

    }, [portfolioSetter]);

    const backgroundItems: Array<{
        index: number,
        imageClassName: string,
        imageCaptionText: string,
    }> = [

        {
            index: 0,
            imageClassName: "bg-realWorld-oneA",
            imageCaptionText: portfolioPageContents.portfolioTextMobile1.realWorldProjectText2,
        },
        {
            index: 1,
            imageClassName: "bg-realWorld-oneB",
            imageCaptionText: portfolioPageContents.portfolioTextMobile1.realWorldProjectText3,
        },
        {
            index: 2,
            imageClassName: "bg-realWorld-oneC",
            imageCaptionText: portfolioPageContents.portfolioTextMobile1.realWorldProjectText4,
        },
        {
            index: 3,
            imageClassName: "bg-realWorld-oneD",
            imageCaptionText: portfolioPageContents.portfolioTextMobile1.realWorldProjectText5,
        },
        {
            index: 4,
            imageClassName: "bg-realWorld-oneE",
            imageCaptionText: portfolioPageContents.portfolioTextMobile1.realWorldProjectText6,
        },
        {
            index: 5,
            imageClassName: "bg-realWorld-oneF",
            imageCaptionText: portfolioPageContents.portfolioTextMobile1.realWorldProjectText7,
        },

    ];

    return (
        <> {
            visible && visibleTransitions.map(({ item, key, props }) => 
            item && 
            <animated.div
                key={key}
                style={props}
                className="mx-1 flex flex-col justify-center items-center w-max"
            >
                <div className="p-3 flex flex-col justify-center items-center border-2 rounded-md border-gray-600 bg-blue-100 shadow-xl">

                    <div className="p-3 flex rounded-full justify-center">
                        <img
                            src={portfolioPageContents.portfolioPageImages.reactJSLogo}
                            alt={pageContents.noImage}
                            className="focus:outline-none">
                        </img>
                    </div>

                    <p className="p-1 font-title bg-gray-500 text-gray-200 text-center font-medium w-11long md:w-96">
                        {portfolioPageContents.portfolioTextMobile1.titleP4}
                    </p>

                    <p className="p-1 font-title bg-gray-500 text-gray-200 text-center font-medium w-11long md:w-96">
                        {portfolioPageContents.portfolioTextMobile1.realWorldProjectText1A1}
                    </p>

                    <p className="p-1 font-title bg-gray-500 text-gray-200 text-center font-medium w-11long md:w-96">
                        {portfolioPageContents.portfolioTextMobile1.realWorldProjectText1A2}
                    </p>

                </div>

                <div className="py-3 bg-transparent" />

                { backgroundItems.map(backgroundItems => (
                    <>
                        <div className="p-3 flex flex-col justify-center items-center border-2 rounded-md border-gray-600 bg-blue-100 shadow-xl">

                            <div
                                key={backgroundItems.index}
                                className={`${backgroundItems.imageClassName} bg-cover bg-no-repeat border-2 rounded-md border-gray-600 h-30long md:h-51.6long w-56 md:w-96`} 
                            />

                            <div className="py-3 bg-transparent" />

                            <p
                                key={backgroundItems.index} 
                                className="p-1 font-title bg-gray-500 text-gray-200 text-center font-medium w-11long"
                            >
                                {backgroundItems.imageCaptionText}
                            </p>

                        </div>

                        <div className="pt-3 pb-6 bg-transparent" />
                    </>
                ))}
                
            </animated.div>
            )}
        </>
    );
};

export default RealWorldOne;