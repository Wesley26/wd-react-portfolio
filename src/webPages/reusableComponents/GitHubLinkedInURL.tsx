import { FC } from 'react';
import PageContents from '../contentMaster/PageContents';

const GitHubLinkedInURL:FC = () => {

    const pageContents = PageContents();

    return (
        <>
            <div className="flex flex-row justify-between items-center ml-12 mr-12 md:ml-36 md:mr-36 lg:ml-72 lg:mr-72">
                <div className="border-gray-700 border-2 p-3 flex rounded-full justify-center shadow-md hover:bg-gray-200 active:bg-gray-400">
                    <a href={pageContents.githubLink} rel="noreferrer" target="_blank">
                        <img
                            src={pageContents.allImages.githubLogo}
                            alt={pageContents.noImage}
                            className="focus:outline-none">
                        </img>
                    </a>
                </div>
                <div className="border-gray-700 border-2 p-3 flex rounded-full justify-center shadow-md hover:bg-gray-200 active:bg-gray-400">
                    <a href={pageContents.linkedInLink} rel="noreferrer" target="_blank">
                        <img
                            src={pageContents.allImages.linkedInLogo}
                            alt={pageContents.noImage}
                            className="focus:outline-none">
                        </img>
                    </a>
                </div>
            </div>
        </>
    );

};

export default GitHubLinkedInURL;