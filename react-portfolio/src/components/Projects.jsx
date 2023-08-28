import React from 'react'

import secure from '../assets/triple (1).png'
import weather from '../assets/temperature.jpeg'
import money from '../assets/money.jpeg'

const Projects = () => {

    return (

        

        <div id = "projects" className='w-full py-[10rem] px-4 text-white'> 
        <div className='text-center text-8xl vertical-align: bottom '> 
            Projects
        </div>
        <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300' >
                <img className = 'w-d20 mx-auto mt-[-30] bg-white' src = {secure} alt = '/' />
                <h2 className='text-2xl font-bold text-center py-8'>
                    Password Manager
                </h2>
                <div className = 'text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'> Fullstack application for users to store their passwords and usernames on a MongoDB server on the cloud. Secured using BCrypt encyrption libraries for advanced security and authentication</p>
            
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> <a href = 'https://github.com/arjuns05/CRUD_App' target="_blank" rel="noopener noreferrer">Github Repository </a></button>


       </div>
       <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300' >
                <img className = 'w-d20 mx-auto mt-[-30] bg-white' src = {weather} alt = '/' />
                <h2 className='text-2xl font-bold text-center py-8'>
                    React Weather Display
                </h2>
                <div className = 'text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'> Fullstack application based in React.js to display instantaneous weather conditions across the world. Utilized the OpenWeatherAPI for access to real-time weather with frequent updates.</p>
            
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> <a href = 'https://github.com/arjuns05/' target="_blank" rel="noopener noreferrer">Github Repository </a></button>


       </div>
       <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300' >
                <img className = ' h-60 w-d20  mx-auto mt-[-30] bg-white' src = {money} alt = '/' />
                <h2 className='text-2xl font-bold text-center py-8'>
                    Android Studio Financial Management
                </h2>
                <div className = 'text-center font-medium'>
                <p className='py-2 border-b mx-8  text-base'>Ongoing project to develop an Android Studio application with SpringBoot to allow users to convert currency using real-time rates. Will include predictive features along with additional features with machine learning libraries. </p>
            
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> <a href = 'https://github.com/arjuns05/a_studio' target="_blank" rel="noopener noreferrer">Github Repository </a></button>


       </div>
       

        </div>
           
        </div>


    )
}

export default Projects