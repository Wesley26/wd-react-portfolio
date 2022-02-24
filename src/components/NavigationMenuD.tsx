import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavContents from './navMaster/NavContents';
import { ImportantNavContext } from '../hooks/ImportantNavContext';

/**
 * @NavigationMenuD - Desktop component version of NavigationMenu.
 */

const NavigationMenuD:FC = () => {

    const { importantNavStyle, setImportantNavStyle } = useContext(ImportantNavContext);
    const navContentData = NavContents();

    return (
        <div className="flex h-20 md:w-34long sm:w-32long">

            <div className="flex flex-row font-title pb-12 justify-evenly">
                <div className="pt-3">
                    <Link
                        to="/"
                        className={`${importantNavStyle === `Home` ? `bg-important_blue` : `bg-transparent`} h-5.9long text-green-600 text-xl mt-0.10long pt-8 pb-3.5long px-4 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg`}
                        onClick={() => setImportantNavStyle(`Home`)}
                    >{navContentData.navItemOne}</Link>
                </div>
                <div className="px-1"/>
                <div className="pt-3">
                    <Link
                        to="/about"
                        className={`${importantNavStyle === `About` ? `bg-important_blue` : `bg-transparent`} h-22 text-green-600 text-xl pt-6 pb-3 px-2 mb-6 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg`}
                        onClick={() => setImportantNavStyle(`About`)}
                    >{navContentData.navItemTwo}</Link>
                </div>
                <div className="px-1"/>
                <div className="pt-3">
                    <Link
                        to="/portfolio"
                        className={`${importantNavStyle === `Portfolio` ? `bg-important_blue` : `bg-transparent`} h-22 text-green-600 text-xl pt-6 pb-3 px-2 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg`}
                        onClick={() => setImportantNavStyle(`Portfolio`)}
                    >{navContentData.navItemThree}</Link>
                </div>
                <div className="px-1"/>
                <div className="pt-3">
                    <Link
                        to="/resume"
                        className={`${importantNavStyle === `Resume` ? `bg-important_blue` : `bg-transparent`} h-5.9long text-green-600 text-xl mt-0.10long pt-8 pb-3.5long px-2 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg`}
                        onClick={() => setImportantNavStyle(`Resume`)}
                    >{navContentData.navItemFour}</Link>
                </div>
                <div className="px-1"/>
                <div className="pt-3">
                    <Link
                        to="/contactMe"
                        className={`${importantNavStyle === `ContactMe` ? `bg-important_blue` : `bg-transparent`} h-22 text-green-600 text-xl pt-6 pb-3 px-2 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg`}
                        onClick={() => setImportantNavStyle(`ContactMe`)}
                    >{navContentData.navItemFive}</Link>
                </div>
            </div>

        </div>
    );
};

export default NavigationMenuD;