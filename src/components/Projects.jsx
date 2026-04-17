function Projects() {
    const projects = [
        {
            name: "FastX",
            desc: "A simple and minimal cross platform secured file-sharing app.",
            link: "https://fast2024.netlify.app/"
        },
        {
            name: "Monjima Portfolio",
            desc: "Portfolio of Monjima Lahiri. Built using only HTML, CSS & JS. It was fun!",
            link: "https://rohanbiswas.xyz/monjimalahiri.github.io/"
        },
        {
            name: "Drafts",
            desc: "Blogging website that also works as your personal notebook.",
            link: "https://draftx.netlify.app/"
        },
        {
            name: "UEM Redesign",
            desc: "Redesigned my college website to improve UI/UX.",
            link: "https://uemkolkata.netlify.app/"
        },
        {
            name: "Tools",
            desc: "Collection of tools like weather, tic tac toe, calculator, etc.",
            link: "https://rohantools.netlify.app/"
        },
        {
            name: "Dhruv",
            desc: "Platform for photographers to showcase their shots.",
            link: "https://dhruv08.netlify.app/"
        },
        {
            name: "NeighbourGoods",
            desc: "Buy, sell, trade goods or share rides with nearby people.",
            link: "https://neighbourgood.netlify.app/"
        },
        {
            name: "GitHub",
            desc: "Explore more of my projects and repositories.",
            link: "https://github.com/RohanPranto"
        }
    ];

    return (
        <div className="relative px-6 py-8 text-gray-300">

            <p className="text-gray-500">// projects.tsx</p>

            <h1 className="text-4xl font-bold mb-8">
                <span className="text-pink-400">Projects</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((proj, index) => (
                    <a
                        key={index}
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group cursor-none bg-[#1e1e1e] border border-gray-800 rounded 
                        overflow-hidden transition duration-300 
                        hover:border-pink-500 hover:-translate-y-1 
                        hover:shadow-[0_0_25px_rgba(255,0,150,0.2)]"
                    >

                        {/* Dummy Image */}
                        <div className="h-40 bg-[#252526] flex items-center justify-center">
                            <span className="text-xs text-gray-500 group-hover:text-gray-300">
                                preview.png
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="text-white font-semibold">
                                {proj.name}
                            </h3>

                            <p className="text-gray-400 text-sm mt-2 leading-6">
                                {proj.desc}
                            </p>

                            <p className="text-gray-600 text-xs mt-4">
                                // click to open project
                            </p>
                        </div>

                        {/* Glow overlay (same style as Experience) */}
                        <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 
                            transition pointer-events-none
                            bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur">
                        </div>

                    </a>
                ))}
            </div>

            {/* Background Glow (same vibe as Experience) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute w-72 h-72 bg-pink-500 opacity-10 blur-3xl top-10 left-10"></div>
                <div className="absolute w-72 h-72 bg-blue-500 opacity-10 blur-3xl bottom-10 right-10"></div>
            </div>

        </div>
    );
}

export default Projects;