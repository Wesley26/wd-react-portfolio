import { createContext } from 'react';
import { IMPORTANT_NAV } from '../globalTypes/types/ImportantNav';

/**
 * @ImportantNavContext - create Context for navigation
 * important styles across the app with global scope.
 * 
 * @param importantNavStyle - sets the string value for
 * important nav style, default is 'None'.
 * @param setImportantNavStyle - sets importantNavStyle
 */

export let ImportantNavContext = createContext<IMPORTANT_NAV>({

    importantNavStyle: `None`,
    setImportantNavStyle: () => {},

});