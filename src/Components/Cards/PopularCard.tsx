import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface IPopularCardProps {
    no: string,
    title: string,
    subTitle: string,
    icon: any
}

const PopularCard: FC<IPopularCardProps> = ({ icon, no, subTitle, title }) => {
    return (
        <>
            <div className="grid md:grid-cols-5 gap-10 max-w-2xl h-auto bg-bgBrown p-5 rounded-xl border border-[#cbcbcb] cursor-pointer hover:border-yellow-300 group">
                <div className='col-span-1'>
                    <h1 className='text-3xl text-[#cbcbcb] group-hover:text-yellow-300'>{no}</h1>
                </div>
                <div className='col-span-3'>
                    <h3 className='text-2xl text-white group-hover:text-yellow-300'>{title}</h3>
                    <h3 className='text-lx text-[#cbcbcb] py-3'>{subTitle}</h3>
                </div>
                <div className='col-span-1'>
                    <button className='rounded-btn bg-bgPrimary hover:bg-bgYellow p-3 hover:text-black text-white transition duration-300'><FontAwesomeIcon icon={icon} /></button>
                </div>
            </div>
        </>
    )
}

export default PopularCard
