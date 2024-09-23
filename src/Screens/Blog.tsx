import { FC, useEffect, useState } from 'react'
import Pagination from '../Components/Pagination'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { blogs } from '../data/Data';

export interface IBlogs {
    _id: string,
    pic: string,
    title: string,
    date: string,
    subTitle: string,
    description: string,
    category: string[],
}

const Blog: FC = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<IBlogs>()
    useEffect(() => {
        blogs.map((item) => item._id === id ? setBlog(item) : null)
    }, [id])
    return (
        <>
            <div className=''>
                <div className='container mx-auto'>
                    <div className="">
                        <Pagination maintitle='Latest News' title1='Home' title2='Blog' />
                    </div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-5 mx-2 my-5">
                        <div className='lg:col-span-8 col-span-1'>
                            <div className="">
                                <img src={blog?.pic} alt="blog1" className='h-auto w-full' />
                            </div>
                            <div className="flex gap-5 text-xl mt-5">
                                <Link className='text-[#cbcbcb] hover:text-white' to={'/'}>{blog?.title}</Link>
                                <span>*</span>
                                <Link className='text-[#cbcbcb] hover:text-white' to={'/'}>{blog?.date}</Link>
                            </div>
                            <article className='mt-5'>
                                <h1 className='text-4xl text-[#fff] tracking-wide'>{blog?.subTitle}</h1>
                                <p className='text-[#cbcbcb] text-sm -tracking-tighter my-5'>{blog?.description}</p>
                            </article>
                        </div>
                        <div className='bg-bgBrown rounded-xl max-w-lg lg:col-span-4 col-span-1 md:p-10 p-5'>
                            <div className='inline-block space-y-5'>
                                <h3 className='text-3xl text-[#fff]'>Category</h3>
                                <div className='h-[0.5px] w-full bg-[#cbcbcb]'></div>
                            </div>
                            <div>
                                {
                                    blog && blog.category.map((item, i) => (
                                        <ul className='mt-5 flex gap-3' key={i}>
                                            <li className='text-lg font-semibold tex-[#cbcbcb] hover:text-yellow-300 inline-flex gap-2 items-center transition duration-300 hover:translate-x-5 cursor-pointer'>
                                                <FontAwesomeIcon icon={faArrowRight} className='text-lg' />
                                                {item}</li>
                                        </ul>
                                    ))
                                }
                            </div>

                            <div className='inline-block space-y-5 mt-10'>
                                <h3 className='text-3xl text-[#fff]'>Latest News</h3>
                                <div className='h-[0.5px] w-full bg-[#cbcbcb]'></div>
                            </div>
                            {
                                blogs && blogs.map((item, i) => (
                                    item._id !== id ? (
                                        <div className='my-5' key={i}>
                                            <div className="flex gap-5 mt-10">
                                                <div>
                                                    <img src={item.pic} alt="blog" className='rounded-2xl w-24 h-20 object-cover hover:opacity-35 cursor-pointer' loading='lazy' />
                                                </div>
                                                <div>
                                                    <div className='flex gap-5'>
                                                        <FontAwesomeIcon icon={faCalendar} />
                                                        <h5 className='text-[#cbcbcb]'>{item.date}</h5>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <Link to={`/blog/${item._id}`} className='text-[#fff] hover:text-yellow-300'>
                                                            <h6 className='text-lg font-semibold'>{item.subTitle}</h6>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-base text-white" key={i}></div>
                                    )
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Blog
