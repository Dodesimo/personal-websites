import React from 'react'
const Projects = () => {
    return (
        <div id="projects" className='w-full py-[0rem] px-4 text-white'>
            <div className='text-center text-8xl vertical-align: bottom'>
                Projects
            </div>
            <div className="max-w-[1240px] grid mx-auto grid-cols-auto auto-fit gap-x-5 gap-y-5">
            {/* First Project Card */}
            <div className='w-full shadow-xl flex flex-col p-4 my-12 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-1'>
                        The Bioinformagician
                    </h2>
                    <div className='py-2 border-b mx-8 mt- text-center font-medium'>
                        <ul>
                            <li>
                                Engineered a chatbot that trains bioinformatics models given large datasets with natural
                                language using a Langchain RAG system + OpenAI API back-end and Django-routed front-end,
                                authenticated
                                using Firebase.
                            </li>
                            <li>
                                Created 5+ RESTful FastAPI endpoints that generate research papers from user queries and
                                store them in a MongoDB Atlas cluster, deployed using Docker and Heroku.
                            </li>
                        </ul>
                    </div>
                    <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                        <a href='https://github.com/Dodesimo' target="_blank" rel="noopener noreferrer">
                            Secret! 🤫🤫
                        </a>
                    </button>
                </div>

                {/* Second Project Card */}
                 <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                     <h2 className='text-2xl font-bold text-center '>
                         MuseMatch
                     </h2>
                     <div className='text-center font-medium'>
                         <p className='py-2 border-b mx-8 text-base'>
                             Built a MERN stack app with Spotify API to recommend indie songs using a custom
                            recommendation algorithm. Used MongoDB to store user credentials and passwords, and enabled
                            authentication with JWT, with 20+ users. Deployed Express.js API and front-end React
                            application using Vercel through a GitHub Actions pipeline.
                        </p>
                    </div>
                    <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                        <a href='https://github.com/Dodesimo/museMatch' target="_blank" rel="noopener noreferrer">
                            Github Repository
                        </a>
                    </button>
                </div>

                {/* Third Project Card */}
                <div className='w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-1'>
                        DataScribe
                    </h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 text-base'>
                            Deployed a Flask full-stack application automating dataset analysis, machine learning, and
                            graph generation
                            through a chatbot hosted on AWS Sagemaker. Created a RESTful API condensing million entry
                            datasets into summary paragraphs using HuggingFace models. Generated 50+ feature graphs
                            given text descriptions through matplotlib and LangChain, saved on AWS S3.
                        </p>
                    </div>
                    <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                        <a href='https://github.com/Dodesimo/DataScribe' target="_blank" rel="noopener noreferrer">
                            Github Repository
                        </a>
                    </button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-1'>
                        Invasive Ductal Carcinoma Detector
                    </h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 text-base'>
                        Deployed a Flask full-stack application automating dataset analysis, machine learning, and graph generation
through a chatbot hosted on AWS Sagemaker. Created a RESTful API condensing million entry datasets into summary paragraphs using HuggingFace models. Generated 50+ feature graphs given text descriptions through matplotlib and LangChain, saved on AWS S3.
                        </p>
                    </div>
                    <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                        <a href='https://github.com/Dodesimo/IDCApp' target="_blank" rel="noopener noreferrer">
                            Github Repository
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects