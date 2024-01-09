import React, { useEffect, useRef, useState } from 'react';
import Linkup from './pictures/Linkup.png'; 
import MagicChalk from './pictures/MagicChalk.png'; 
import AuthentInk from './pictures/AuthentInk.png'; 
import CourseSchedule from './pictures/CourseSchedule.png'; 


function Projects() {

    return (
        <div id="projects" className="h-full bg-neutral-200 flex flex-col items-center justify-center overflow-y-auto snap-y snap-mandatory">
            <h1 className="text-4xl font-bold text-center mb-8 uppercase">Projects</h1>
            <div className="flex items-center justify-center">

                <div className="flex flex-col gap-10 w-3/4 mb-14">

                
                    <div className="bg-white shadow-xl rounded-2xl p-6 snap-center">
                        <div className="flex flex-col md:flex-row gap-4">
                            <img src={Linkup} alt="Project Image" className="w-full md:w-1/3 object-cover rounded-lg m-3" />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-semibold mb-8">LinkUp</h2>
                                        <a onClick={() => window.open('https://github.com/kevinliu399/linkup')} className="text-blue-600 hover:underline cursor-pointer">Github Repo</a>
                                    </div>
                                    

                                    <p className="mb-2">
                                        - RESTful web-based event organization platform, utilizing React, TailwindCSS, and Django
                                        <br/> - MySQL database to handle data structures, enabling advanced features like personalized user accounts and event management
                                        <br/> - Developed an innovative reputation rating system and user profile management, enhancing community engagement and platform reliability
                                    </p>
                                </div>
                                <div>
                                    <div className="flex gap-2 mb-4">
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

                    <div className="bg-white shadow-xl rounded-2xl p-6 snap-center">
                        <div className="flex flex-col md:flex-row gap-4">
                            <img src={MagicChalk} alt="Project Image" className="w-full md:w-1/3 object-cover rounded-lg m-3" />
                            <div className="flex flex-col justify-between">
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
                                     - Engineered a responsive whiteboard system capable of recognizing custom finger gestures by leveraging the OpenCV library and MediaPipe framework on streamlit
                                    <br /> - Trained a CNN model with TensorFlow to predict on-screen handwriting with 96% accuracy and 15% loss
                                    <br /> - Translated mathematical expressions into LATEX and solved them using WolframAlpha API
                                    </p>
                                </div>
                                <div>
                                    <div className="flex gap-2 mb-4">

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

                    <div className="bg-white shadow-xl rounded-2xl p-6 snap-center">
                        <div className="flex flex-col md:flex-row gap-4">
                            <img src={AuthentInk} alt="Project Image" className="w-full md:w-1/3 object-cover rounded-lg m-3" />
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
                                        - Developed a signature forgery detector using a Siamese Neural Network with PyTorch for MAIS Hack 2023
                                        <br /> - Preprocessed data from Kaggle's open-source signature database and trained the model
                                        <br /> - Employed Contrastive Loss function for similarity learning between signature pairs
                                        <br /> - Designed UI with OpenCV and PyQt5 for live signature image capture and comparison
                                    </p>
                                </div>
                                <div className="flex gap-2 mb-4">
                                    {/* Tags */}
                                    <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Python</span>
                                    <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">PyTorch</span>
                                    <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">PyQt5</span>
                                    <span className="bg-stone-200 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">OpenCV</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white shadow-xl rounded-2xl p-6 snap-center">
                        <div className="flex flex-col md:flex-row gap-4">
                            <img src={CourseSchedule} alt="Project Image" className="w-full md:w-1/3 object-cover rounded-lg m-3" />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-semibold mb-8">Course Schedule Maker</h2>
                                        <a onClick={() => window.open('https://github.com/kevinliu399/schedule-maker')} className="text-blue-600 hover:underline cursor-pointer">Github Repo</a>
                                    </div>
                                    <p className="mb-4">
                                         - Developed a schedule customization website with real-time class visualization using HTML, CSS, and JavaScript
                                        <br /> - Scraped 700+ course data and sorted them by code number using Python and BeautifulSoup4
                                    </p>
                                </div>
                                <div>
                                    <div className="flex gap-2 mb-4">

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
