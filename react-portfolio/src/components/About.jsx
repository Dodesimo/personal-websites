import React from 'react'

const About = () => {
    return (
        <div className='w-full py-0 px-4'>
            <div className='w-full py-[0rem] px-4 text-white max-w-[1240px] mx-auto flex flex-col items-center gap-8'>
                <div className='text-center text-8xl'>
                    About me!
                </div>
                <div className='flex flex-col'>
                    <div className='w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-1'>
                        Hey! 👋
                    </h2>
                        <p className='text-white leading-loose py-1'>
                            My name is Devam, and I'm a Computer Science student at the Georgia Institute of
                            Technology
                            interested in the intersection of machine learning and other disciplines. Throughout my past
                            experiences, whether be internships or research positions, I have developed strong technical
                            skills while forging an ability to communicate the business value of complex systems. This
                            drives me to the intersection of research engineering and entrepreneurship; I envision
                            myself
                            making research more practical. I am actively searching for Summer 2025 internships, so
                            please
                            feel free to reach out with any opportunities @ dmondal9@gatech.edu or
                            devammondal123@gmail.com!
                            <br/>
                            <br/>
                            Right now, I'm working on a bioinformatics startup while serving as a research assistant at
                            the
                            Georgia Tech Sustainable Urban Systems Lab with Dr. Patrick Kastner, the Lu Lab @ Hackensack
                            Meridian CDI under Dr. Binfeng Lu, and the Center for Systems and Enterprises @ Stevens
                            Institute of Technology under Dr. Carlo Lipizzi.
                            <br/>
                            <br/>
                            Google Scholar: <a href="https://scholar.google.com/citations?user=IYqjEm8AAAAJ&hl=en"
                                               className="text-[#00df9a]" target="_blank" rel="noopener noreferrer">Google
                            Scholar</a>
                            <br/>
                            GitHub: <a href="https://github.com/Dodesimo" className="text-[#00df9a]" target="_blank"
                                       rel="noopener noreferrer">GitHub</a>
                        </p>
                </div>
            </div>
            </div>
        </div>
);
};


export default About