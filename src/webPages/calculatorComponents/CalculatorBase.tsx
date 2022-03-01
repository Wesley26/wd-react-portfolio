import { FC, ReactElement, useState } from 'react';

interface CALCULATOR_BASE {
    addSign: string,
    deleteBTN: string,
    divideSign: string,
    multiplySign: string,
    subtractSign: string,
    zeroSign: number,
    periodSign: string,
    equalsSign: string,
};

/**
 * @param props:CALCULATOR_BASE
 * @returns CalculatorBase component
 * NOTE: TS source code includes using eval() function.
 * For most use cases, eval() is harmful. Eval() function
 * is only used on this web component to calculate basic math.
 */

const CalculatorBase:FC<CALCULATOR_BASE> = (props:CALCULATOR_BASE) => {

    const [calc, setCalc] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const [hasDecimal, setHasDecimal] = useState<boolean>(false);

    const ops: string[] = ['/', '*', '+', '-', '.'];

    const updateCalc = (value: string) => {

        if ((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
            return;
        };

        setCalc(calc + value);

        if (!ops.includes(value)) {

            if ((typeof calc === "string") && (typeof value === "string")) {
                // NOTE: do not normally use eval
                // eslint-disable-next-line no-eval
                setResult(eval(calc + value).toString());
                
            } else {

                throw new Error(`Unexpected error occurred with calculator app while updating calculation.`);

            };

        };

    };

    const createDigits = () => {

        const digitBTNs: ReactElement[] = [];
                
        for (let i = 1; i < 10; i++) {

            digitBTNs.push(
                <div 
                    key={i}
                    onClick={() => updateCalc(i.toString())}
                    className="flex-1And33percent p-4 border-none text-20e max-w-33percent bg-cal_dark hover:bg-cal_hover active:bg-cal_active"
                >{i}</div>
            );

        };

        return digitBTNs;

    };

    const calculate = () => {

        if (typeof calc === "string") {
            // NOTE: do not normally use eval
            // eslint-disable-next-line no-eval
            setCalc((eval(calc).toString()));
            
        } else {

            throw new Error(`Unexpected error occurred with calculator app during calculation.`);
            
        };

        if (result.includes('.')) {

            setHasDecimal(true);

        } else {

            setHasDecimal(false);

        };

    };

    const deleteLast = () => {

        if (calc === '') {

            return;

        };

        const value = calc.slice(0, -999);

        setCalc(value);

    };

    return (

        <div className="flex flex-col px-5 py-3 min-h-screen justify-center items-center font-calculator bg-cal_light border-black border-2 rounded-md shadow-lg">
            
            <div className="w-full max-w-400pix bg-cal_light_altOne rounded-16pix overflow-hidden shadow-md">

                <div className="p-16pix text-right bg-cal_tirshiary text-cal_light text-24e font-light">

                    { result ? 
                    <span className="text-cal_blue text-14e">
                        {`(${result})`}
                    </span> : null }&nbsp; { calc || "0" }

                </div>

                <div className="flex font-calculator text-cal_light">

                    <div 
                        onClick={() => deleteLast()}
                        className="flex-1 p-4 border-none text-20e bg-cal_primary font-bold hover:bg-cal_hover active:bg-cal_active"
                    >
                        {props.deleteBTN}
                    </div>

                </div>

                <div className="flex font-calculator text-cal_light">

                    <div 
                        onClick={() => { updateCalc('/'); setHasDecimal(false); }}
                        className="flex-1 p-4 border-none text-20e bg-cal_primary font-bold hover:bg-cal_hover active:bg-cal_active"
                    >
                        {props.divideSign}
                    </div>
                    <div 
                        onClick={() => { updateCalc('*'); setHasDecimal(false); }}
                        className="flex-1 p-4 border-none text-20e bg-cal_primary font-bold hover:bg-cal_hover active:bg-cal_active"
                    >
                        {props.multiplySign}
                    </div>
                    <div 
                        onClick={() => { updateCalc('+'); setHasDecimal(false); }}
                        className="flex-1 p-4 border-none text-20e bg-cal_primary font-bold hover:bg-cal_hover active:bg-cal_active"
                    >
                        {props.addSign}
                    </div>
                    <div 
                        onClick={() => { updateCalc('-'); setHasDecimal(false); }}
                        className="flex-1 p-4 border-none text-20e bg-cal_primary font-bold hover:bg-cal_hover active:bg-cal_active"
                    >
                        {props.subtractSign}
                    </div>

                </div>

                <div className="flex flex-wrap text-cal_light">

                    { createDigits() }
                    <div 
                        onClick={() => updateCalc('0')}
                        className="flex-1And33percent p-4 border-none text-20e max-w-33percent bg-cal_dark hover:bg-cal_hover active:bg-cal_active"
                    >
                        {props.zeroSign}
                    </div>
                    <div 
                        onClick={() => { 
                            if (hasDecimal === false) { 
                                updateCalc('.'); 
                                setHasDecimal(true); 
                            };
                        }}
                        className="flex-1And33percent p-4 border-none text-20e max-w-33percent bg-cal_dark hover:bg-cal_hover active:bg-cal_active"
                    >
                        {props.periodSign}
                    </div>
                    <div 
                        onClick={() => { calculate() }}
                        className="flex-1And33percent p-4 border-none text-20e max-w-33percent bg-cal_dark hover:bg-cal_hover active:bg-cal_active"
                    >
                        {props.equalsSign}
                    </div>

                </div>

            </div>
            
        </div>

    );

};

export default CalculatorBase;