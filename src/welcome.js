import React, { useState, useEffect } from 'react';
import parkImage from './park.jpg';
import './welcome.css'; // Import the CSS file

function Welcome() {
    const [title, setTitle] = useState("McGill Student");
    const [fade, setFade] = useState(true);
    const titles = ["McGill Student 🍁", "Computer Science 👨🏻‍💻", "Tech Enthusiast 🤖"];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setTitle((prevTitle) => {
                    const nextIndex = (titles.indexOf(prevTitle) + 1) % titles.length;
                    return titles[nextIndex];
                });
                setFade(true);
            }, 200); // Fade out and in with a delay of 500ms
        }, 2500); // Change title every 3 seconds

        return () => clearInterval(interval);

    }, []);

    return (
        <div id="Welcome" className="h-screen">
            <div className='flex flex-wrap justify-center items-center h-full'>
                <div className="text-container flex-1 flex justify-center items-center">
                    <div className="w-1/2">
                        <p className="text-8xl text-black uppercase font-bold">
                            Kevin Liu
                        </p>

                        {/* Title Transition */}
                        <p className={`text-4xl text-gray-700 font-medium transition-opacity duration-200 mt-8 uppercase ${fade ? 'opacity-100' : 'opacity-0'}`}>
                            {title}
                        </p>
                    
                    <div className='media-container flex items-center gap-6'>

                        <button 
                            type="button" 
                            className="btn flex items-center justify-center shadow-[0_6px_0_rgb(161,161,170)] hover:shadow-[0_2px_0px_rgb(161,161,170)] text-white bg-[#0077b5] ease-out hover:translate-y-1 transition-all rounded-full h-12 w-12 mt-10"
                            onClick={() => window.open('https://www.linkedin.com/in/kevinliu399/')}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-6 w-6" />
                        </button>

                        <button 
                            type="button" 
                            className="btn flex items-center justify-center shadow-[0_6px_0_rgb(161,161,170)] hover:shadow-[0_2px_0px_rgb(161,161,170)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded-full h-12 w-12 mt-10"
                            onClick={() => window.open('https://github.com/kevinliu399')}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-6 w-6" />
                        </button>

                        <button 
                            type="button" 
                            className="btn flex items-center justify-center shadow-[0_6px_0_rgb(161,161,170)] hover:shadow-[0_2px_0px_rgb(161,161,170)] text-black bg-red-400 ease-out hover:translate-y-1 transition-all rounded-full h-12 w-12 mt-10"
                            onClick={function() { window.location.href = 'mailto:kevinliu399@gmail.com' }}>
                            <img src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" alt="GitHub" className="h-6 w-6" />
                        </button>
                        
                        <button 
                            type="button" 
                            className="btn shadow-[0_6px_0_rgb(161,161,170)] hover:shadow-[0_2px_0px_rgb(161,161,170)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded-lg mt-10 px-4 py-2"
                            onClick={() => window.open('https://drive.google.com/file/d/1oJ2OxW9J7V2sBh2-sjF11xBkdqKqmHOL/view?usp=sharing')}>
                            My Resume
                        </button>
                        
                    </div>
                    
                        
                    </div>
                </div>

                <div className='image-container relative flex-1 flex justify-center items-center'>
                    <div className="flex flex-col items-center relative">

                        <img src={parkImage} alt="Park" className="w-[500px] h-[500px] object-cover rounded-2xl shadow-2xl" />
                        <p className="text-xl font-normal font-source-code-pro lowercase mt-2 align-left self-start cursor-default">
                            Kokyo gaien national garden, 2023
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Welcome;
