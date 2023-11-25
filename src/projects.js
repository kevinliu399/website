import React from 'react';

function Projects() {
    return (
        <div id="projects" className="h-screen flex flex-col items-center justify-center bg-mainC">
            <h1 className="text-4xl font-normal self-start bg-mainC relative group ml-60 mb-20"> projects
                <span className="absolute -bottom-1 left-0 w-0 transition-width duration-200 ease-in-out h-1 bg-neutral-400 group-hover:w-full"></span>
            </h1>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 grid-rows-2 gap-4" style={{ width: '1139px', height: '1043px' }}>

                    <div className="relative bg-stone-300 rounded-lg shadow-md flex items-center justify-center" style={{ width: '466px', height: '395px' }}>
                        <div className="window-bar absolute top-0 left-0 right-0 flex items-center bg-neutral-400 p-2 justify-end">
                            <div className="dots-container flex space-x-2">
                                <div className="dot w-3 h-3 bg-green-100 rounded-full"></div>
                                <div className="dot w-3 h-3 bg-yellow-100 rounded-full"></div>
                                <div className="dot w-3 h-3 bg-red-200 rounded-full"></div>
                            </div>
                        </div> 
                        <div className='text-black lowercase text-2xl'>Magic Chalk</div>

                        <div className="absolute bottom-0 left-0 mb-2 ml-2 flex space-x-1">
                            {/* Replace 'logo1.png', 'logo2.png', 'logo3.png' with your actual image paths */}
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200 "/>
                            <img src="https://seeklogo.com/images/S/streamlit-logo-1A3B208AE4-seeklogo.com.png" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                            <img src="https://viz.mediapipe.dev/logo.png" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                            
                        </div>

                        <svg onClick={() => window.open('https://github.com/kevinliu399/Magic-Chalk')} className="w-6 h-6 text-gray-800 dark:text-neutral-400 absolute bottom-0 right-0 mb-2 mr-2 hover:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </div>

                    
                    <div className="relative bg-stone-300 rounded-lg shadow-md flex items-center justify-center" style={{ width: '466px', height: '395px' }}>
                        <div className="window-bar absolute top-0 left-0 right-0 flex items-center bg-neutral-400 p-2 justify-end">
                            <div className="dots-container flex space-x-2">
                                <div className="dot w-3 h-3 bg-green-100 rounded-full"></div>
                                <div className="dot w-3 h-3 bg-yellow-100 rounded-full"></div>
                                <div className="dot w-3 h-3 bg-red-200 rounded-full"></div>
                            </div>
                        </div> 
                        <div className='text-black lowercase text-2xl'>Authentink</div>
                        
                        <div className="absolute bottom-0 left-0 mb-2 ml-2 flex space-x-1">
                            {/* Replace 'logo1.png', 'logo2.png', 'logo3.png' with your actual image paths */}
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                        </div>

                        <svg onClick={() => window.open('https://github.com/kevinliu399/authentink')} className="w-6 h-6 text-gray-800 dark:text-neutral-400 absolute bottom-0 right-0 mb-2 mr-2 hover:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </div>


                    <div className="relative bg-stone-300 rounded-lg shadow-md flex items-center justify-center" style={{ width: '466px', height: '395px' }}>
                        <div className="window-bar absolute top-0 left-0 right-0 flex items-center bg-neutral-400 p-2 justify-end">
                            <div className="dots-container flex space-x-2">
                                <div className="dot w-3 h-3 bg-green-100 rounded-full"></div>
                                <div className="dot w-3 h-3 bg-yellow-100 rounded-full"></div>
                                <div className="dot w-3 h-3 bg-red-200 rounded-full"></div>
                            </div>
                        </div> 
                        <div className='text-black lowercase text-2xl'>Chess bot</div>

                        <div className="absolute bottom-0 left-0 mb-2 ml-2 flex space-x-1">
                            {/* Replace 'logo1.png', 'logo2.png', 'logo3.png' with your actual image paths */}
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                        </div>

                        <svg onClick={() => window.open('https://github.com/kevinliu399/chess-game')} className="w-6 h-6 text-gray-800 dark:text-neutral-400 absolute bottom-0 right-0 mb-2 mr-2 hover:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </div>


                    <div className="relative bg-stone-300 rounded-lg shadow-md flex items-center justify-center" style={{ width: '466px', height: '395px' }}>
                        <div className="window-bar absolute top-0 left-0 right-0 flex items-center bg-neutral-400 p-2 justify-end">
                            <div className="dots-container flex space-x-2">
                                <div className="dot w-3 h-3 bg-green-100 rounded-full"></div>
                                <div className="dot w-3 h-3 bg-yellow-100 rounded-full"></div>
                                <div className="dot w-3 h-3 bg-red-200 rounded-full"></div>
                            </div>
                        </div> 
                        <div className='text-black lowercase text-2xl'>schedule maker</div>

                        <div className="absolute bottom-0 left-0 mb-2 ml-2 flex space-x-1">
                            {/* Replace 'logo1.png', 'logo2.png', 'logo3.png' with your actual image paths */}
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Technology 1" className="w-8 h-8 transform hover:scale-110 motion-reduce:transform-none duration-200" />
                        </div>


                        <svg onClick={() => window.open('https://github.com/kevinliu399/schedule-maker')} className="w-6 h-6 text-gray-800 dark:text-neutral-400 absolute bottom-0 right-0 mb-2 mr-2 hover:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;
