import { FC, useEffect, useState } from 'react'
import Pagination from '../Components/Pagination';
import project_scr_1 from '../assets/images/projects/project-1-img.jpg';
import project_scr_2 from '../assets/images/projects/project-2-img.jpg';
import project_scr_3 from '../assets/images/projects/project-3-img.jpg';
import CircularButton from '../Components/Buttons/CircularButton';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { projects } from '../data/Data';

export interface IProject {
    _id: string,
    title: string,
    pic: string,
    subTitle: string,
    content: string,
    category: string,
    client: string,
    location: string,
    published: string,
}

const Project: FC = () => {
    const { id } = useParams();
    const [project, setProject] = useState<IProject>();
    useEffect(() => {
        projects.map((item) => item._id === id ? setProject(item) : null)
    }, [id])

    return (
        <>
            <div className="bg-bgBrown">
                <div className='container mx-auto'>
                    <div>
                        <Pagination maintitle={`${project?.title}`} title1="Home" title2="Project" />
                    </div>
                    <div>
                        <img src={project?.pic} alt="project1" className='h- w-full' />
                    </div>
                    {/* Project Details */}
                    <div className='grid md:grid-cols-6 grid-cols-1 gap-10 mt-10 p-5'>
                        <article className='md:col-span-4'>
                            <h1 className='text-3xl font-bold text-white'>{project?.title}</h1>
                            <p className='text-base text-[#cbcbcb] tracking-wide mt-5'>{project?.content}</p>
                        </article>
                        <div className="md:col-span-2">
                            <div className="bg-bgYellow p-10 rounded-md w-full h-auto flex flex-col gap-5">
                                <div>
                                    <h5 className='text-base text-[#2e311f]'>Category:</h5>
                                    <h5 className='text-xl font-semibold text-[#000]'>{project?.category}</h5>
                                </div>
                                <div>
                                    <h5 className='text-base text-[#2e311f]'>Clients:</h5>
                                    <h5 className='text-xl font-semibold text-[#000]'>{project?.client}</h5>
                                </div>
                                <div>
                                    <h5 className='text-base text-[#2e311f]'>Location:</h5>
                                    <h5 className='text-xl font-semibold text-[#000] whitespace-nowrap'>{project?.location}
                                    </h5>
                                </div>
                                <div>
                                    <h5 className='text-base text-[#2e311f]'>Published:</h5>
                                    <h5 className='text-xl font-semibold text-[#000]'>{project?.published}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Screen shots */}
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 p-5">
                        <img src={project_scr_1} alt="project_scr_1" />
                        <img src={project_scr_2} alt="project_scr_1" />
                        <img src={project_scr_3} alt="project_scr_1" />
                    </div>
                    {/* Related Projects */}
                    <div>
                        <h1 className='text-4xl font-bold text-white tracking-wide text-center pt-5'>Related <span className='text-yellow-300'>Projects</span></h1>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 p-5">
                        {
                            projects && projects.map((item, i) => (
                                item._id !== id ? (
                                    <div className='transition duration-300 cursor-pointer relative group' key={i}>
                                        <div className="group-hover:opacity-60">
                                            <img src={item.pic} alt="project_scr_1" loading='lazy' className='h-80 w-full' />
                                        </div>
                                        <CircularButton
                                            to={`/project/${item._id}`}
                                            icon={faShare}
                                            cls='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block group-hover:bg-yellow-300'
                                        />
                                        <div className='mt-5 space-y-5'>
                                            <p className='text-yellow-300 text-sm'>{item.title}</p>
                                            <p className='text-white text-xl font-semibold'>{item.subTitle}</p>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
