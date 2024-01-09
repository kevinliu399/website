import React from 'react';

function NavigationBar() {
    const handleScrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id '${elementId}' not found`);
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed top-1/2 right-10 -translate-y-1/2 z-10">
            <div className="flex flex-col items-center gap-8">
                <div className="nav-dot" onMouseEnter={() => handleScrollToTop()}>
                    <span className="nav-label hidden">Home</span>
                    <div className="h-6 w-6 bg-neutral-500 rounded-full flex items-center justify-center text-white">H</div>
                </div>

                <div className="nav-dot" onMouseEnter={() => handleScrollToElement('projects')}>
                    <span className="nav-label hidden">Projects</span>
                    <div className="h-6 w-6 bg-neutral-500 rounded-full flex items-center justify-center text-white">P</div>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
