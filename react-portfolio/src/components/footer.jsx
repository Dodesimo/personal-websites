import React from 'react'
import{
    FaFacebook,
    FaGithubSquare
    


} from 'react-icons/fa'
import { SocialIcon } from 'react-social-icons'

const footer = () => {
    return(
        <div id = "footer" className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-white'> 
           <div>
            <h1 className='w-full text-2xl font-bold text-[#00df9a]'>
                Created with React.js

            </h1>
            <p className='py-4'>
            Thanks for viewing my work!
            </p>
            <div className='flex justify-between md:w=[75%] my-6'>

                <SocialIcon url = 'https://www.linkedin.com/in/arjun-sudhalkar-a569b5221' style = {{height:75, width:75}} />
                <SocialIcon url = 'https://www.github.com/arjuns05' bgcolor ='FFFAF0' style = {{height:75, width:75}} />
            </div>
           </div>
        </div>
    )
}

export default footer
