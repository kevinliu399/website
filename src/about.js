import React from 'react';

function TechStack() {
    const techs = [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'react', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'html5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'css3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'javascript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'R', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
    ];

    return (
        <div className="tech-stack-section py-10 bg-neutral-200">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-8 text-center uppercase">Current Tech Stack</h2>
            <div className="flex items-center justify-center px-4 lg:px-0">
                <div className="bg-mainC py-6 md:py-8 lg:py-10 rounded-2xl w-full md:w-3/4 lg:w-1/2">
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-16 m-5">
                        {techs.map((tech, index) => (
                            <div key={index} className="relative group">
                                <img src={tech.logo} alt={tech.name} className="h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12 transform hover:scale-110 motion-reduce:transform-none duration-100" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStack;
