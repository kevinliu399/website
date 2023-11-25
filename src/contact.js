import React from 'react';

function Contact() {
    return (
        <div id="contact" className="h-screen flex items-center justify-center bg-background relative mb-0">

            <div className="absolute top-80 left-0 ml-60">

                <h1 className="text-4xl font-normal self-start bg-mainC relative group mb-4">contact
                    <span className="absolute -bottom-1 left-0 w-0 transition-width duration-200 ease-in-out h-1 bg-neutral-400 group-hover:w-full"></span>
                </h1>
            </div>

            
            <div className="contactbox w-[1088px] h-[350px] absolute">

                 {/* Container for the contact section*/}
                <div className="Contact w-[466px] h-[152px] left-[621px] top-[182px] absolute rounded-lg shadow-md">
                    <div className="Rectangle25 w-[466px] h-[127px] left-0 top-[25px] absolute bg-stone-300" />
                    <div className="Rectangle26 w-[466px] h-[25px] left-0 top-0 absolute bg-neutral-400" />
                    <div className="Ellipse28 w-3 h-3 left-[440px] top-[7px] absolute bg-red-200 rounded-full" />
                    <div className="Ellipse29 w-3 h-3 left-[418px] top-[7px] absolute bg-yellow-100 rounded-full" />
                    <div className="Ellipse30 w-3 h-3 left-[396px] top-[7px] absolute bg-green-100 rounded-full" />

                    <div className="contact-logos absolute bottom-0 left-0 right-0 flex justify-center items-center p-8 space-x-10">
                        <div className="logo transform hover:scale-110 motion-reduce:transform-none duration-200">
                            <img onClick={() => window.open('https://www.instagram.com/kkevinliu_/')} src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' className = 'cursor-pointer' alt="Instagram Logo" style={{ height: '60px' }} />
                        </div>
                        <div className="logo transform hover:scale-110 motion-reduce:transform-none duration-200">
                            <img onClick={() => window.open('https://github.com/kevinliu399')} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' className = 'cursor-pointer' alt="GitHub Logo" style={{ height: '60px' }} />
                        </div>
                        <div className="logo transform hover:scale-110 motion-reduce:transform-none duration-200">
                            <img onClick={() => window.open('https://www.linkedin.com/in/kevinliu399')} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' className = 'cursor-pointer' alt="LinkedIn Logo" style={{ height: '60px' }} />
                        </div>
                        <div className="logo transform hover:scale-110 motion-reduce:transform-none duration-200">
                            <img onClick={() => window.open('https://devpost.com/kevinliu399')} src='https://seeklogo.com/images/D/devpost-logo-95FF685C5D-seeklogo.com.png' className = 'cursor-pointer' alt="Devpost Logo" style={{ height: '60px' }} />
                        </div>
                    </div>
                </div>
                
                {/* Container for the email section*/}
                <div className="emailbox w-[466px] h-[122px] left-0 top-[108px] absolute rounded-lg shadow-md">
                    <div className="Rectangle23 w-[466px] h-[97px] left-0 top-[25px] absolute bg-stone-300" />
                    <div className="Rectangle24 w-[466px] h-[25px] left-0 top-0 absolute bg-neutral-400" />
                    <div className="Ellipse25 w-3 h-3 left-[440px] top-[7px] absolute bg-red-200 rounded-full" />
                    <div className="Ellipse26 w-3 h-3 left-[418px] top-[7px] absolute bg-yellow-100 rounded-full" />
                    <div className="Ellipse27 w-3 h-3 left-[396px] top-[7px] absolute bg-green-100 rounded-full" />

                    <div className="email left-[45px] top-[55px] absolute text-black text-2xl font-normal lowercase">kevin.liu4@mail.mcgill.ca</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
