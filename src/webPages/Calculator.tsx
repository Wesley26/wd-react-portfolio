import { FC, useEffect, useState } from 'react';
import PageContents from './contentMaster/PageContents';
import MainPageAnimations from './contentMaster/MainPageAnimations';
import { motion } from 'framer-motion';

import CalculatorBase from './calculatorComponents/CalculatorBase';

const Calculator:FC = () => {

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
                    className="px-5 md:px-40 py-3"
                >

                    <CalculatorBase 
                        addSign={pageContents.calculatorContent.addSign}
                        deleteBTN={pageContents.calculatorContent.deleteBTN}
                        divideSign={pageContents.calculatorContent.divideSign}
                        equalsSign={pageContents.calculatorContent.equalsSign}
                        multiplySign={pageContents.calculatorContent.multiplySign}
                        periodSign={pageContents.calculatorContent.periodSign}
                        subtractSign={pageContents.calculatorContent.subtractSign}
                        zeroSign={pageContents.calculatorContent.zeroSign}
                    />

                </motion.div>
            ) : null }
            </>

            <div className="py-6" />

            <>
                { visible === true ? (
                <div 
                    className="text-xl p-3 mx-3 md:mx-12 lg:mx-48 my-12 border-2 border-black flex rounded-full justify-center hover:bg-gray-300 active:bg-gray-500"
                    onClick={() => { setVisible(false); }}
                >
                    {pageContents.calculatorContent.closeCal}
                </div> ) : (
                <div 
                    className="text-xl p-3 mx-3 md:mx-12 lg:mx-48 my-12 border-2 border-black flex rounded-full justify-center hover:bg-gray-300 active:bg-gray-500"
                    onClick={() => { setVisible(true); }}
                >
                    {pageContents.calculatorContent.openCal}
                </div> )}
            </>

            <div className="py-6" />

        </div>

    );

};

export default Calculator;