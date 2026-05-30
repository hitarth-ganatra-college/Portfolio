// function Project({toggle_ltr, project_id, image, project_name, project_description, tech_stack, outcomes, project_link}:{toggle_ltr: boolean, project_id: number, image: string, project_name: string, project_description: string, tech_stack: string[], outcomes: string[], project_link: string}) {
function Project({project_id, toggle_ltr}:{project_id: number, toggle_ltr: boolean}) {
    const project_name = "Project Name"
    const image = "https://dummyimage.com/600x400/000/fff&text=Project+Image"
    const project_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    const tech_stack = ["React", "Node.js", "MongoDB"]
    const outcomes = ["Outcome 1", "Outcome 2", "Outcome 3"]
    const project_link = "https://test.link"

    return (
        <>
            <div className="proj w-full p-10">

            {project_id == 0 && toggle_ltr && (
                // This is a sample project card, replace it with actual data and make sure to pass the correct props when using the Project component in Projects.tsx
                <div className="flex flex-col md:flex-row items-center gap-10 w-full">
                    <div className={`w-100 h-60 bg-[url(${image})] bg-cover rounded-lg`}></div>
                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        <h2 className="text-2xl font-bold">{project_name}</h2>
                        <p>{project_description}</p>
                        <div className="flex flex-wrap gap-2">
                            {tech_stack.map((tech, index) => (
                                <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">{tech}</span>
                            ))}
                        </div>
                        <ul className="list-disc list-inside">
                            {outcomes.map((outcome, index) => (
                                <li key={index}>{outcome}</li>
                            ))} 
                        </ul>
                        <a href={project_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="self-start px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                            >
                            View Project
                        </a>
                    </div>
                </div>
            )}
            {/* On toggle_ltr being false, keep the image to right and thus reverse the layout */}
            {project_id == 0 && !toggle_ltr && (
                <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full">
                    <div className={`w-100 h-60 bg-[url(${image})] bg-cover rounded-lg`}></div>
                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        <h2 className="text-2xl font-bold">{project_name}</h2>
                        <p>{project_description}</p>
                        <div className="flex flex-wrap gap-2">
                            {tech_stack.map((tech, index) => (
                                <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">{tech}</span>
                            ))}
                        </div>
                        <ul className="list-disc list-inside">
                            {outcomes.map((outcome, index) => (
                                <li key={index}>{outcome}</li>
                            ))} 
                        </ul>
                        <a href={project_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="self-start px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                            >
                            View Project
                        </a>
                    </div>
                </div>
            )}
            </div>
        </>
    )
}

export default Project