import { FC } from 'react';
import Navigation from './Navigation';
import NavContents from './navMaster/NavContents';
import PageContents from '../webPages/contentMaster/PageContents';

const Header:FC = () => {

    const navContentData = NavContents();
    const pageContents = PageContents()

    return (
        <header className="bg-header_blue mb-3 pl-3 pr-3 pt-1 pb-6 flex justify-between shadow-lg sm:pb-32">
            <h1>
                <span className="font-title pt-3 pl-3 font-bold float-left">
                    <div className="grid grid-cols-1 items-center md:text-2xl">
                        <img
                            src={navContentData.masterLogoAlt}
                            alt={pageContents.noImage}
                            className="h-12 w-24">
                        </img>
                        {navContentData.navTitleField1}
                    </div>
                </span>

                <Navigation />
            </h1>
        </header>
    );
};

export default Header;