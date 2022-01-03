import { FC } from 'react';
import { Link } from 'react-router-dom'
import NavContents from './navMaster/NavContents'

/**
 * @NavigationMenuD - Desktop component version of NavigationMenu.
 */

const NavigationMenuD:FC = () => {

    const navContentData = NavContents();

    return (
        <div className="flex h-20 md:w-34long sm:w-32long">

            <div className="flex flex-row font-title pb-12 justify-evenly">
                <div className="pt-3">
                    <Link
                        to="/"
                        className="h-20 text-green-600 text-xl mt-1 pt-8 pb-14 px-4 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                    >{navContentData.navItemOne}</Link>
                </div>
                <div className="px-1"/>
                <div className="pt-3">
                    <Link
                        to="/about"
                        className="h-22 text-green-600 text-xl pt-6 pb-3 px-2 mb-6 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                    >{navContentData.navItemTwo}</Link>
                </div>
                <div className="px-1"/>
                <div className="pt-3">
                    <Link
                        to="/portfolio"
                        className="h-22 text-green-600 text-xl pt-6 pb-3 px-2 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                    >{navContentData.navItemThree}</Link>
                </div>
                <div className="px-1"/>
                <div className="pt-3">
                    <Link
                        to="/resume"
                        className="h-20 text-green-600 text-xl mt-1 pt-8 pb-14 px-2 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                    >{navContentData.navItemFour}</Link>
                </div>
                <div className="px-1"/>
                <div className="pt-3">
                    <Link
                        to="/contactMe"
                        className="h-22 text-green-600 text-xl pt-6 pb-3 px-2 flex border-black border-solid border-2 rounded-md hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                    >{navContentData.navItemFive}</Link>
                </div>
            </div>

        </div>
    );
};

export default NavigationMenuD;