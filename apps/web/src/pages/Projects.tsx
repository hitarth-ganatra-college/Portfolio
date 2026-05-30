import Project from "../components/Project"

function Projects() {
  return (
    <>
        <div className="container flex max-h-[87vh] h-[92vh]  w-full max-w-full justify-start items-center flex-col overflow-hidden">
            <div className="header flex w-full justify-center items-center py-10 gap-4 flex-col">
                <div className="title text-4xl underline font-extrabold">My Best Projects</div>
                <div className="subtitle text-xl">I've done many projects during my colleges and in my worklife, but these are the ones that stand out!</div>
            </div>
            <div className="projects flex flex-wrap w-full justify-center items-start gap-10 p-10 px-20 overflow-auto flex-1">
                <Project project_id={0} toggle_ltr={true}/>
                <Project project_id={0} toggle_ltr={false} />
                <Project project_id={0} toggle_ltr={true} />
                <Project project_id={0} toggle_ltr={false} />
                <Project project_id={0} toggle_ltr={true} />
                <Project project_id={0} toggle_ltr={false} />
            </div>
        </div>
    </>
  )
}

export default Projects 