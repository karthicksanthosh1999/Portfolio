import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { achivement, IAchivement } from '../data/Data';
import Pagination from '../Components/Pagination';

const Achivement: FC = () => {
    const { id } = useParams();
    const [achivements, setAchivements] = useState<IAchivement>();
    useEffect(() => {
        achivement.map((item) => item._id === id ? setAchivements(item) : null)
    }, [id])
    return (
        <div>
            <div className="bg-bgBrown">
                <div className='container mx-auto'>
                    <div>

                        <Pagination maintitle={`${achivements?.title}`} title1="Home" title2="Achivement" />
                    </div>
                    <figure className="flex items-center justify-center sm:m-0 m-5">
                        <img src={achivements?.pic} alt="achivements1" className='h-auto w-full max-w-2xl' />
                    </figure>
                    {/* achivements Details */}
                    <div className='grid md:grid-cols-6 grid-cols-1 gap-10 mt-10 p-5'>
                        <article className='md:col-span-4'>
                            <h1 className='text-3xl font-bold text-white'>{achivements?.title}</h1>
                            <p className='text-base text-[#cbcbcb] tracking-wide mt-5'>{achivements?.content}</p>
                        </article>
                        <div className="md:col-span-2">
                            <div className="bg-bgYellow p-10 rounded-md w-full h-auto flex flex-col gap-5">
                                <div>
                                    <h5 className='text-base text-[#2e311f]'>Category:</h5>
                                    <h5 className='text-xl font-semibold text-[#000]'>{achivements?.category}</h5>
                                </div>
                                <div>
                                    <h5 className='text-base text-[#2e311f]'>Clients:</h5>
                                    <h5 className='text-xl font-semibold text-[#000]'>{achivements?.client}</h5>
                                </div>
                                <div>
                                    <h5 className='text-base text-[#2e311f]'>Location:</h5>
                                    <h5 className='text-xl font-semibold text-[#000] whitespace-nowrap'>{achivements?.location}
                                    </h5>
                                </div>
                                <div>
                                    <h5 className='text-base text-[#2e311f]'>Published:</h5>
                                    <h5 className='text-xl font-semibold text-[#000]'>{achivements?.published}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achivement
