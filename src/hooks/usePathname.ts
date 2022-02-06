import { useEffect, useState } from 'react';

/**
 * @returns usePathname hook - set the string name
 * of important nav pathname in App.tsx
 */

const usePathname = () => {

    const [ importantNavName, setImportantNavName ] = useState<string>(`None`);
    const currentURL = window.location.pathname as string;

    useEffect(() => {

        /**
         * Each route must have its own case
         */
    
        switch (currentURL) {
          case '/about':
            setImportantNavName(`About`);
            break;
    
          case '/portfolio':
            setImportantNavName(`Portfolio`);
            break;
    
          case '/resume':
            setImportantNavName(`Resume`);
            break;
    
          case '/contactMe':
            setImportantNavName(`ContactMe`);
            break;
    
          case '/todoList':
            setImportantNavName(`TodoList`);
            break;
        
          default:
            setImportantNavName(`Home`);
            break;
        };
    
    }, [currentURL]);

    return importantNavName;
};

export default usePathname;