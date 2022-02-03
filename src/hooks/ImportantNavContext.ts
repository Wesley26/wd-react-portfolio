import { createContext } from 'react';

/**
 * @ImportantNavContext - create Context for navigation
 * important styles across the app with global scope.
 * 
 * @param importantNavStyle - sets the string value for
 * important nav style, default is 'Home'.
 * @param setImportantNavStyle - sets importantNavStyle
 */

export type IMPORTANT_NAV = {
    importantNavStyle: string,
    setImportantNavStyle: (sINS: string) => void,
};

export let ImportantNavContext = createContext<IMPORTANT_NAV>({

    importantNavStyle: `Home`,
    setImportantNavStyle: () => {},

});