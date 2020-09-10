import React from 'react'
import HeaderText from '../components/HeaderText'

function Home(){
    return (
        <div className="bg-gray-100 m-6">

            <HeaderText name="The New You!" />

            <h1 className="font-bold text-2x1">This is the home page</h1>
                <div className="text-left p-6">
                <div>
                    <h3>
                        This is demo text paragraph. Here, this paragraph of information describes your subject
                        at the home page in greater detail.
                    </h3>
                    <br>
                    </br>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>
                </div>
                </div>
        </div>
    );
};

export default Home