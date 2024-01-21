import React, { useEffect, useRef, useState } from 'react';
import Linkup from './pictures/Linkup.png'; 
import MagicChalk from './pictures/MagicChalk.png'; 
import AuthentInk from './pictures/AuthentInk.png'; 
import CourseSchedule from './pictures/CourseSchedule.png'; 
import JPNHandwriting from './pictures/JPN-Handwriting.png';


function Projects() {

    return (
        <div id="projects" className="h-full bg-neutral-200 flex flex-col items-center justify-center overflow-y-auto snap-y snap-mandatory py-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 uppercase">Projects</h1>
            <div className="flex items-center justify-center w-full px-4">

                <div className="flex flex-col gap-6 md:gap-10 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mb-14">

                    <div className="bg-white shadow-xl rounded-2xl p-4 md:p-6 lg:p-8 snap-center">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-1/2 lg:w-1/3 items-center justify-center flex">
                                    <img src={JPNHandwriting} alt="Project Image" className="w-full h-auto object-contain rounded-lg" />
                                </div>
                                <div className="flex flex-col justify-between w-full">
                                    <div>

                                        <div className="flex justify-between items-center">
                                            <h2 className="text-2xl font-semibold mb-8">JPN Handwriting - IN PROGRESS</h2>
                                            <div>
                                                <a onClick={() => window.open('https://github.com/Rampex1/JapaneseWriting')} className="text-blue-600 hover:underline cursor-pointer">GitHub Repo</a>
                                            </div>
                                        </div>

                                        <p className="mb-4">
                                        - Website that allows users to practice their Japanese handwriting skills by providing feedback with a CNN model
                                        <br /> - Custom user accounts, with friend system and leaderboard
                                        <br /> - Personalized tracking of user progress and statistics 
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-4">

                                            {/* Tags */}
                                            <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Python</span>
                                            <span className="bg-green-200 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">React.js</span>
                                            <span className="bg-purple-200 text-purple-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Spring</span>
                                            <span className="bg-red-200 text-red-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">PostgreSQL</span>
                                            <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Cloud</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                
                    <div className="bg-white shadow-xl rounded-2xl p-4 md:p-6 lg:p-8 snap-center">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full md:w-1/2 lg:w-1/3 items-center justify-center flex">
                                <img src={Linkup} alt="Project Image" className="w-full h-auto object-contain rounded-lg" />
                            </div>
                            <div className="flex flex-col justify-between w-full">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-semibold mb-8">LinkUp</h2>
                                        <a onClick={() => window.open('https://github.com/kevinliu399/linkup')} className="text-blue-600 hover:underline cursor-pointer">Github Repo</a>
                                    </div>
                                    <p className="mb-2">
                                        - RESTful web-based event organization platform designed for efficient event organization and planning
                                        <br/> -  Users can create, manage, and participate in various activities, ensuring a seamless event planning experience
                                        <br/> - Developed a reputation rating system and user profile management, enhancing community engagement and platform reliability
                                    </p>
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {/* Tags */}
                                        <span className="bg-blue-200 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Django</span>
                                        <span className="bg-green-200 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">React.js</span>
                                        <span className="bg-rose-200 text-rose-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">MySQL</span>
                                        <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">TailwindCSS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-xl rounded-2xl p-4 md:p-6 lg:p-8 snap-center">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full md:w-1/2 lg:w-1/3 items-center justify-center flex">
                                <img src={MagicChalk} alt="Project Image" className="w-full h-auto object-contain rounded-lg" />
                            </div>
                            <div className="flex flex-col justify-between w-full">
                                <div>

                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-semibold mb-8">Magic Chalk</h2>
                                        <div>
                                            <a onClick={() => window.open('https://github.com/kevinliu399/Magic-Chalk')} className="text-blue-600 hover:underline cursor-pointer">GitHub Repo</a>
                                            <span className="mx-2">|</span>
                                            <a onClick={() => window.open('https://youtu.be/Cy3BYuwWMK0?feature=shared')} className="text-blue-600 hover:underline cursor-pointer">Video Demo</a>
                                        </div>
                                    </div>

                                    <p className="mb-4">
                                     - Engineered a responsive whiteboard system capable of recognizing custom finger gestures for real-time drawing and erasing
                                    <br /> - Trained a CNN ML model with TensorFlow to predict on-screen handwriting with 96% accuracy and 15% loss
                                    <br /> - 5 available tools: draw, erase, clear, save, and solve arithmetic equations
                                    </p>
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-4">

                                        {/* Tags */}
                                        <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Python</span>
                                        <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Streamlit</span>
                                        <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">TensorFlow</span>
                                        <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">MediaPipe</span>
                                        <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">OpenCV</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-xl rounded-2xl p-4 md:p-6 lg:p-8 snap-center">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full md:w-1/2 lg:w-1/3 items-center justify-center flex">
                                <img src={AuthentInk} alt="Project Image" className="w-full h-auto object-contain rounded-lg" />
                            </div>
                            <div className="flex flex-col justify-between w-full">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-semibold mb-12">AuthentInk</h2>
                                        <div>
                                            <a onClick={() => window.open('https://github.com/kevinliu399/authentink')} className="text-blue-600 hover:underline cursor-pointer">GitHub Repo</a>
                                            <span className="mx-2">|</span>
                                            <a onClick={() => window.open('https://youtu.be/kDKPo8GOFMc')} className="text-blue-600 hover:underline cursor-pointer">Video Demo</a>
                                        </div>
                                    </div>

                                    <p className="mb-4">
                                        - Signature forgery detector using a Siamese Neural Network with PyTorch for MAIS Hack 2023 with Kaggle Data
                                        <br /> - Able to distinguish if two signatures are from the same person to ensure authenticity
                                        <br /> - User captures image of signature with any camera and the app will measure the similarity 
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {/* Tags */}
                                    <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Python</span>
                                    <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">PyTorch</span>
                                    <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">PyQt5</span>
                                    <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">OpenCV</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white shadow-xl rounded-2xl p-4 md:p-6 lg:p-8 snap-center">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full md:w-1/2 lg:w-1/3 items-center justify-center flex">
                                <img src={CourseSchedule} alt="Project Image" className="w-full h-auto object-contain rounded-lg" />
                            </div>
                            <div className="flex flex-col justify-between w-full">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-semibold mb-8">Course Schedule Maker</h2>
                                        <a onClick={() => window.open('https://github.com/kevinliu399/schedule-maker')} className="text-blue-600 hover:underline cursor-pointer">Github Repo</a>
                                    </div>
                                    <p className="mb-4">
                                         - Developed a schedule customization website with real-time class visualization for students to plan their schedules
                                        <br /> - Scraped all 700+ course data at Marianopolis College and sorted them by code number and time
                                    </p>
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-4">

                                        {/* Tags */}
                                        <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Python</span>
                                        <span className="bg-violet-200 text-violet-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">JavaScript</span>
                                        <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">HTML5</span>
                                        <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">CSS3</span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default Projects;
