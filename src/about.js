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
            <h2 className="text-4xl font-bold mb-8 text-center uppercase">Current Tech Stack</h2>
            <div className="flex items-center justify-center">
                <div className="bg-mainC py-10 rounded-full w-1/2">
                    <div className="flex items-center justify-center gap-16 mt-5">
                        {techs.map((tech, index) => (
                            <div key={index} className="relative group">
                                    <img src={tech.logo} className="h-12 w-12 transform hover:scale-110 motion-reduce:transform-none duration-100" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStack;
