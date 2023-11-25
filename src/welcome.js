import React from 'react';
import parkImage from './park.jpg';

function Welcome() {
    return (
        <div id="welcome" className="h-screen bg-mainC mb-40">
            <div className='flex flex-wrap justify-center items-center h-full'>

                {/* Text Container */}
                <div className="text-container flex-1 flex justify-center items-center">
                    <div className="w-[45rem]">
                        <p className="text-2xl text-black lowercase">
                            Hey i'm kevin! Welcome to my website, where you will find bits and pieces of myself and some of the projects I've done so far
                        </p>

                        {/* Custom Styled Button */}
                        <button 
                            type="button" 
                            className="btn shadow-[0_6px_0_rgb(161,161,170)] hover:shadow-[0_2px_0px_rgb(161,161,170)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded mt-10 px-4 py-2"
                            onClick={() => window.open('https://drive.google.com/file/d/1oJ2OxW9J7V2sBh2-sjF11xBkdqKqmHOL/view?usp=sharing')}>
                            resume
                        </button>

                    </div>
                </div>

                {/* Image Container with Window-bar */}
                <div className='image-container relative flex-1 flex justify-center items-center'>
                    <div className="flex flex-col items-center relative">
                        {/* Window-bar and Dots */}
                        <div className="window-bar absolute top-0 w-[500px] flex items-center bg-neutral-400 p-2 justify-end">
                            <div className="dots-container flex space-x-2">
                                <div className="dot w-3 h-3 bg-green-100 rounded-full"></div>
                                <div className="dot w-3 h-3 bg-yellow-100 rounded-full"></div>
                                <div className="dot w-3 h-3 bg-red-200 rounded-full"></div>
                            </div>
                        </div>

                        <img src={parkImage} alt="Park" className="w-[500px] h-[500px] object-cover rounded-lg shadow-md" />
                        <p className="text-xs font-normal font-source-code-pro lowercase mt-2 align-left self-start">
                            Kokyo gaien national garden, 2023
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Welcome;
