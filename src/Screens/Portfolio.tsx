import { FC } from 'react';
import Pagination from '../Components/Pagination';
import { projects } from '../data/Data';

const Portfolio: FC = () => {
    return (
        <>
            <Pagination maintitle="Portfolio" title1="Home" title2="Porfolio" />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 p-5">
                {
                    projects && projects.map((item, i) => (
                        <a href={`/project/${item._id}`} className=" shadow-md relative" key={i}>
                            <div className="md:h-96 h-full relative shadow-md shadow-yellow-300 overflow-hidden group ">
                                <div className=" absolute -bottom-5 group-hover:top-0 left-0 w-full h-full group-hover:bg-yellow-300 transition ease-in-out duration-600 group-hover:bg-gradient-to-t group-hover:from-yellow-300 to-transparent">
                                    <div className="w-full h-full p-5 relative">
                                        <div className="absolute bottom-0 group-hover:bottom-10 text-white text-left transition-all ease-in-out duration-500 ">
                                            <h2 className="text-2xl font-bold  text-[#131313] mb-0 pb-1">{item.title}</h2>
                                            <p className="text-lg font-light text-white">{item.subTitle}</p>
                                        </div>
                                    </div>
                                </div>
                                <img src={item.pic} className="w-full z-0 h-full object-fill" />
                            </div>
                        </a>
                    )
                    )
                }
            </div>
        </>
    )
}

export default Portfolio
