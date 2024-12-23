import React from 'react';

const Timeline = () => {
    const experiences = [
        {
            title: "Intern",
            organization: "Hackensack Meridian Health",
            time: "May 2024 - PRESENT",
            description: "Reduced single-cell RNA sequencing workflow time by 85% with a React web application backed with Mistral\n" +
                "LLMs hosted on an Google Compute Engine instance, boosting research productivity. Developed RAG-based full-stack Flask app automating Gene Enrichment Analysis, quickening workflows by 15%.",
            link: "https://hmh-cdi.org/en/research/faculty/binfeng-lu",
        },
        {
            title: "Intern",
            organization: "Stevens Institute of Technology",
            time: "Jan 2024 - May 2024",
            description: "Automated workflows and built machine learning models for healthcare applications using TensorFlow and PyTorch.",
            link: "https://www.stevens.edu/center-for-complex-systems-and-enterprises",
        },
        {
            title: "Intern",
            organization: "whiz.ai",
            time: "May 2023 - September 2023",
            description: "Cut exploratory data analysis time by 25% using HuggingFace custom models through a RESTful API that automated algorithm selection. Reduced company LLM hallucination rates through fine-tuned Mistral models using PyTorch, TensorFlow, CUDA quantization, resulting in more accurate responses.",
            link: "https://whiz.ai",
        },
    ];

    return (
        <div id="timeline" className="w-full py-[0rem] px-4 text-white max-w-[1240px] mx-auto flex flex-col items-center gap-8">
            <div className="max-w-[1240px] mx-auto">
                <h2 className="w-full py-[0rem] px-4 text-white max-w-[1240px] mx-auto flex flex-col items-center gap-8 text-center text-4xl mb-10 text-center text-8xl">Work Experience</h2>
                <div className="relative border-l-4 border-[#00df9a]">
                    {experiences.map((exp, index) => (
                        <div key={index} className="w-full shadow-xl flex flex-col p-4 my-12 rounded-lg hover:scale-105 duration-300 mb-10 ml-6">
                            <div className="absolute w-4 h-4 bg-[#00df9a] rounded-full -left-2 top-0"></div>
                            <h3 className="text-2xl font-semibold">{exp.title}</h3>
                            <p className="text-gray-400 italic">{exp.organization}</p>
                            <p className="text-sm text-gray-300">{exp.time}</p>
                            <p className="mt-2">{exp.description}</p>
                            <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#00df9a] hover:underline mt-2 inline-block"
                            >
                                Learn more
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
