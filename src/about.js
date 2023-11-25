// Importing React and an image for use in the component
import React from 'react';
import mcgillLogo from './mcgill_logo_resized.png';

// Defining the About component
function About() {
    return (
        // Main container for the About section
        <div id="about" className="h-screen flex items-center justify-center bg-mainC mb-40">
            <h1 className="text-4xl font-normal self-start bg-mainC relative group">about
                <span className="absolute -bottom-1 left-0 w-0 transition-width duration-200 ease-in-out h-1 bg-neutral-400 group-hover:w-full"></span>
            </h1>


            <div className="About w-[1250px] h-[550px] relative bg-mainC">

                {/* Container for the McGill section*/}

                <div className="Mcgill w-[322px] h-[131px] left-[771px] top-[113px] absolute rounded-lg shadow-md">

                    <div className="Rectangle11 w-[322px] h-[104px] left-0 top-[27px] absolute bg-stone-300" />
                    <div className="Rectangle12 w-[322px] h-[27px] left-0 top-0 absolute bg-neutral-400" />
                    <div className="Ellipse10 w-3 h-3 left-[296px] top-[8px] absolute bg-red-200 rounded-full" />
                    <div className="Ellipse11 w-3 h-3 left-[274px] top-[8px] absolute bg-yellow-100 rounded-full" />
                    <div className="Ellipse12 w-3 h-3 left-[252px] top-[8px] absolute bg-green-100 rounded-full" />

                    <div className="LogoContainer absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[77%] w-[222px] h-[77px]">
                        <img src={mcgillLogo} alt="McGill Logo" />
                    </div>

                </div>
                
                {/* Container for the skills section*/}
                <div className="Skills w-[725px] h-[261px] left-[481px] top-[273px] absolute rounded-lg shadow-md">

                    
                    <div className="window-bar absolute top-0 w-[725px] flex items-center bg-neutral-400 p-2 justify-end">
                        <div className="dots-container flex space-x-2">
                            <div className="dot w-3 h-3 bg-green-100 rounded-full"></div>
                            <div className="dot w-3 h-3 bg-yellow-100 rounded-full"></div>
                            <div className="dot w-3 h-3 bg-red-200 rounded-full"></div>
                        </div>
                    </div>

                    <div className="IconBox w-[725px] h-[234px] left-0 top-[27px] absolute bg-stone-300">
                        <div className = 'Icons flex flex-wrap justify-center'>
                        <div className='flex flex-col items-center justify-center p-5 transform hover:scale-110 motion-reduce:transform-none duration-200'>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' style={{ height: '60px' }} />
                            </div>
                            <div className='flex flex-col items-center justify-center p-5 transform hover:scale-110 motion-reduce:transform-none duration-200'>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' style={{ height: '60px' }} />
                            </div>
                            <div className='flex flex-col items-center justify-center p-5 transform hover:scale-110 motion-reduce:transform-none duration-200'>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' style={{ height: '60px' }} />
                            </div>
                            <div className='flex flex-col items-center justify-center p-5 transform hover:scale-110 motion-reduce:transform-none duration-200'>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' style={{ height: '60px' }} />
                            </div>
                            <div className='flex flex-col items-center justify-center p-5 transform hover:scale-110 motion-reduce:transform-none duration-200'>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' style={{ height: '60px' }} />
                            </div>
                            <div className='flex flex-col items-center justify-center p-5 transform hover:scale-110 motion-reduce:transform-none duration-200'>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg' style={{ height: '60px' }} />
                            </div>
                        </div>
                        <hr className="my-4" style={{ width: '50%', border: '1px solid #a3a3a3', marginLeft: 'auto', marginRight: 'auto', color: 'orange' }} />
                        <div className = 'SpokenLanguages flex flex-wrap justify-center'>
                            <div className='flex flex-col items-center justify-center p-5 font-bold '>
                                <p>French</p>
                            </div>
                            <div className='flex flex-col items-center justify-center p-5 font-bold'>
                                <p>English</p>
                            </div>
                            <div className='flex flex-col items-center justify-center p-5 font-bold'>
                                <p>Chinese</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Container for the about me section*/}
                <div className="AboutMe w-[404px] h-[434px] top-[10px] absolute rounded-lg shadow-md bg-stone-300">
                    <div className="Rectangle5 w-[404px] h-[352px] left-0 top-[32px] absolute bg-stone-300" />
                        <div className="about w-[380px] h-[400px] left-[23px] top-[65px] absolute text-black text-base font-normal">
                            I am a first-year Computer Science student at McGill University in Montreal, Canada. 
                            Over the last three years, I've developed a strong coding foundation, focusing on projects that spark 
                            my curiosity and introduce me to new technologies like Machine Learning and Blockchain. 
                            Beyond technical skills, I possess considerable experience in sales, customer service, and marketing, 
                            cultivated through diverse internships and professional positions. 
                        <span className="cursor-blink">|</span><br/>
                    </div>
    
                    <div className="Rectangle6 w-[404px] h-8 left-0 top-0 absolute bg-neutral-400" />
                    <div className="Ellipse4 w-3.5 h-[15px] left-[374px] top-[8px] absolute bg-red-200 rounded-full" />
                    <div className="Ellipse5 w-3.5 h-[15px] left-[322px] top-[8px] absolute bg-yellow-100 rounded-full" />
                    <div className="Ellipse6 w-3.5 h-[15px] left-[348px] top-[8px] absolute bg-green-100 rounded-full" />
                </div>
            </div>
        </div>
    );
}

// Exporting the About component
export default About;
