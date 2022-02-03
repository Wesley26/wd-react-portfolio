import { FC, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavContents from './navMaster/NavContents';
import { ImportantNavContext } from '../hooks/ImportantNavContext';

/**
 * @NavigationMenuD - Desktop component version of NavigationMenu.
 */

const NavigationMenuD:FC = () => {

    const { importantNavStyle, setImportantNavStyle } = useContext(ImportantNavContext);
    const navContentData = NavContents();

    const [ homeImportant, setHomeImportant ] = useState<string>(`bg-transparent`);
    const [ aboutImportant, setAboutImportant ] = useState<string>(`bg-transparent`);
    const [ portfolioImportant, setPortfolioImportant ] = useState<string>(`bg-transparent`);
    const [ resumeImportant, setResumeImportant ] = useState<string>(`bg-transparent`);
    const [ contactImportant, setContactImportant ] = useState<string>(`bg-transparent`);

    useEffect(() => {

        /**
         * useEffect hook method is required otherwise
         * button styles are altered
         */

        switch (importantNavStyle) {
            case `Home`:
                setHomeImportant(`bg-important_blue`);
                setAboutImportant(`bg-transparent`);
                setPortfolioImportant(`bg-transparent`);
                setResumeImportant(`bg-transparent`);
                setContactImportant(`bg-transparent`);
                break;

            case `About`:
                setHomeImportant(`bg-transparent`);
                setAboutImportant(`bg-important_blue`);
                setPortfolioImportant(`bg-transparent`);
                setResumeImportant(`bg-transparent`);
                setContactImportant(`bg-transparent`);
                break;

            case `Portfolio`:
                setHomeImportant(`bg-transparent`);
                setAboutImportant(`bg-transparent`);
                setPortfolioImportant(`bg-important_blue`);
                setResumeImportant(`bg-transparent`);
                setContactImportant(`bg-transparent`);
                break;

            case `Resume`:
                setHomeImportant(`bg-transparent`);
                setAboutImportant(`bg-transparent`);
                setPortfolioImportant(`bg-transparent`);
                setResumeImportant(`bg-important_blue`);
                setContactImportant(`bg-transparent`);
                break;

            case `ContactMe`:
                setHomeImportant(`bg-transparent`);
                setAboutImportant(`bg-transparent`);
                setPortfolioImportant(`bg-transparent`);
                setResumeImportant(`bg-transparent`);
                setContactImportant(`bg-important_blue`);
                break;
        
            default:
                setHomeImportant(`bg-transparent`);
                setAboutImportant(`bg-transparent`);
                setPortfolioImportant(`bg-transparent`);
                setResumeImportant(`bg-transparent`);
                setContactImportant(`bg-transparent`);
                break;
        };

    }, [importantNavStyle]);

    return (
        <div className="flex h-20 md:w-34long sm:w-32long">

            <div className="flex flex-row font-title pb-12 justify-evenly">
                <div className="pt-3">
                    <Link
                        to="/"
                        className={`${homeImportant} h-5.9long text-green-600 text-xl mt-0.10long pt-8 pb-3.5long px-4 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg`}
                        onClick={() => setImportantNavStyle(`Home`)}
                    >{navContentData.navItemOne}</Link>
                </div>
                <div className="px-1"/>
                <div className="pt-3">
                    <Link
                        to="/about"
                        className={`${aboutImportant} h-22 text-green-600 text-xl pt-6 pb-3 px-2 mb-6 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg`}
                        onClick={() => setImportantNavStyle(`About`)}
                    >{navContentData.navItemTwo}</Link>
                </div>
                <div className="px-1"/>
                <div className="pt-3">
                    <Link
                        to="/portfolio"
                        className={`${portfolioImportant} h-22 text-green-600 text-xl pt-6 pb-3 px-2 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg`}
                        onClick={() => setImportantNavStyle(`Portfolio`)}
                    >{navContentData.navItemThree}</Link>
                </div>
                <div className="px-1"/>
                <div className="pt-3">
                    <Link
                        to="/resume"
                        className={`${resumeImportant} h-5.9long text-green-600 text-xl mt-0.10long pt-8 pb-3.5long px-2 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg`}
                        onClick={() => setImportantNavStyle(`Resume`)}
                    >{navContentData.navItemFour}</Link>
                </div>
                <div className="px-1"/>
                <div className="pt-3">
                    <Link
                        to="/contactMe"
                        className={`${contactImportant} h-22 text-green-600 text-xl pt-6 pb-3 px-2 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg`}
                        onClick={() => setImportantNavStyle(`ContactMe`)}
                    >{navContentData.navItemFive}</Link>
                </div>
            </div>

        </div>
    );
};

export default NavigationMenuD;