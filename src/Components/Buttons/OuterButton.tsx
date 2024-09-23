import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IOutlineProps {
    title: string;
    to: string;
    icon?: any;
}

const OuterButton: FC<IOutlineProps> = ({ title, to, icon }) => {
    return (
        <>
            <Link to={to} className='px-5 py-3 hover:bg-[#000] bg-bgYellow text-black hover:text-yellow-300 transition duration-300 rounded-lg hover:ring-2 hover:ring-yellow-300 text-center'>{title}
                <FontAwesomeIcon icon={icon} className='pl-3' />
            </Link>
        </>
    )
}

export default OuterButton
