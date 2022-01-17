import { FC } from 'react'
import useCurrentTime from '../hooks/useCurrentTime';

const Footer:FC = () => {

    const date = useCurrentTime();

    const copyrightText = `Copyright 2020 - ` as string;
    const currentDateText = `The current date of server is: ` as string;
    const currentTimeText = `The current time of server is: ` as string;

    return (
        <div>
            <footer className="font-body bg-footer_blue border-solid border-gray-300 border-b-4 border-l-4 border-r-4 text-center text-s p-3 fixed bottom-0 w-full shadow-lg">

                &copy; {`${copyrightText} ${date.getFullYear()}`}
                <br>
                </br>
                {`${currentDateText} ${date.toLocaleDateString("en-us", { timeZone: "America/New_York" })}`}
                <br>
                </br>
                {`${currentTimeText}${date.toLocaleTimeString("en-us", { timeZone: "America/New_York" })}`}

            </footer>
        </div>
    );
};

export default Footer;