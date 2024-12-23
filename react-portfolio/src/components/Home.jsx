import React from 'react'
import {TypeAnimation} from 'react-type-animation';

const text = ['Backend', 'Databases', 'Distributed Systems', 'ML', 'Artificial Intelligence']

const Description = () => {
    return (
        <div id="home" className='text-white'>

            <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2 w-full text-5xl'>
                    Devam Mondal
                </p>
                <h1 className='md: text-7xl sm: text-6xl text-4xl font-bold md:py-6'>
                    Tech Portfolio
                </h1>
                <div>
                    <p className='md: text-5xl sm: text-4xl text-xl font-bold'>
                        Interested in...
                    </p>
                    {/* <TypingAnimator textArray = {text} typingSpeed={250} textColor = "#FFFFFF" fontsize = '70rem' delaySpeed={500}/>   */}
                    <TypeAnimation className='md: text-5xl sm: text-4xl text-xl font-bold'
                                   sequence={['Full-Stack Development', 1000, "Software Engineering", 1000, 'Machine Learning Engineering', 1000, "Natural Language Processing", 1000]}
                                   style={{fontSize: '2em'}} repeat={Infinity}/>
                    <div>

                    </div>

                    <button
                        className='bg-[#00df9a] w-[200px] text-black first-line:rounded-md font-medium my-6 mx-auto py-3'>
                        <a href='https://github.com/Dodesimo' target="_blank" rel="noopener noreferrer"> My GitHub! </a>
                    </button>

                    <div className='flex flex-wrap justify-center gap-4 mt-4'>
                        <img
                            src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
                            alt="Java"/>
                        <img
                            src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"
                            alt="Spring Boot"/>
                        <img
                            src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                            alt="Python"/>
                        <img
                            src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
                            alt="SQL"/>
                        <img
                            src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                            alt="JavaScript"/>
                        <img
                            src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                            alt="TypeScript"/>
                        <img
                            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                            alt="React"/>
                        <img
                            src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                            alt="Node.js"/>
                        <img
                            src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
                            alt="Flask"/>
                        <img
                            src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"
                            alt="HTML"/>
                        <img
                            src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
                            alt="CSS"/>
                        <img
                            src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
                            alt="TensorFlow"/>
                        <img
                            src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white"
                            alt="PyTorch"/>
                        <img
                            src="https://img.shields.io/badge/langchain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white"
                            alt="LangChain"/>
                        <img
                            src="https://img.shields.io/badge/-HuggingFace-FDEE21?style=for-the-badge&logo=HuggingFace&logoColor=black"
                            alt="HuggingFace"/>
                        <img
                            src="https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white"
                            alt="scikit-learn"/>
                        <img
                            src="https://img.shields.io/badge/OpenCV-27338e?style=for-the-badge&logo=OpenCV&logoColor=white"
                            alt="OpenCV"/>
                        <img
                            src="https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white"
                            alt="FastAPI"/>
                        <img
                            src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"
                            alt="Express.js"/>
                        <img
                            src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green"
                            alt="Django"/>
                        <img
                            src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
                            alt="Git"/>
                        <img
                            src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                            alt="MongoDB"/>
                        <img
                            src="https://img.shields.io/badge/Jupyter-F37626.svg?&style=for-the-badge&logo=Jupyter&logoColor=white"
                            alt="Jupyter"/>
                        <img
                            src="https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white"
                            alt="OpenAI API"/>
                        <img
                            src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
                            alt="Heroku"/>
                        <img
                            src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
                            alt="Vercel"/>
                        <img
                            src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"
                            alt="AWS"/>
                        <img
                            src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"
                            alt="Firebase"/>
                        <img
                            src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"
                            alt="Docker"/>
                        <img
                            src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white"
                            alt="Google Cloud"/>
                        <img
                            src="https://img.shields.io/badge/microsoft%20azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white"
                            alt="Azure"/>
                        <img
                            src="https://img.shields.io/badge/Kubernetes-3069DE?style=for-the-badge&logo=kubernetes&logoColor=white"
                            alt="Kubernetes"/>
                        <img
                            src="https://img.shields.io/badge/Pandas-2C2D72?style=for-the-badge&logo=pandas&logoColor=white"
                            alt="Pandas"/>
                        <img
                            src="https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white"
                            alt="Numpy"/>
                        <img
                            src="https://img.shields.io/badge/Kubernetes-3069DE?style=for-the-badge&logo=kubernetes&logoColor=white"
                            alt="Matplotlib"/>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Description