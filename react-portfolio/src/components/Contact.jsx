import React from 'react'
import {SocialIcon} from "react-social-icons";

const Contact = () => {
    return (
        <div className='w-full py-0 px-4'>
            <div className='w-full py-[0rem] px-4 text-white max-w-[1240px] mx-auto flex flex-col items-center gap-8'>
                <div className='text-center text-8xl'>
                    Contact
                </div>
                <div className='flex flex-col'>
                    <div className='w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300'>
                        <h2 className='text-2xl font-bold text-center py-1'>
                            Feel free to reach out! 👋
                        </h2>
                        <p className='text-white leading-loose py-1'>
                            I'm always exploring new opportunities, and always down for a chat!
                            <br/>
                            <br/>
                        </p>
                        <div className='flex justify-between md:w=[75%] my-6'>

                            <SocialIcon url='https://www.linkedin.com/in/devammondal/'
                                        style={{height: 75, width: 75}}/>
                            <SocialIcon url='https://www.github.com/Dodesimo' bgcolor='FFFFFF'
                                        style={{height: 75, width: 75}}/>
                            <SocialIcon url='https://scholar.google.com/citations?user=IYqjEm8AAAAJ&hl=en' bgcolor='FFFFFF'
                                        style={{height: 75, width: 75}}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contact