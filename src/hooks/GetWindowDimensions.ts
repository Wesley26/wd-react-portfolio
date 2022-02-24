import { useEffect, useMemo, useState } from 'react';

/**
 * @returns GetWindowDimensions custom hook - dynamic screen width
 * and height measurements for components that require this info.
 */

const GetWindowDimensions = () => {

    const [ screenSize, getDimensions ] = useState<{dynamicWidth: number, dynamicHeight: number}>({

        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight,

    });

    const setDimensionsMemo = useMemo(() => {

        const setDimensions = () => {

            getDimensions({
    
                dynamicWidth: window.innerWidth,
                dynamicHeight: window.innerHeight,
    
            });
    
        };

        return setDimensions;

    }, []);

    useEffect(() => {

        window.addEventListener('resize', setDimensionsMemo);

        return(() => {
            window.removeEventListener('resize', setDimensionsMemo);
        });

    }, [screenSize, setDimensionsMemo]);

    return screenSize;
};

export default GetWindowDimensions;