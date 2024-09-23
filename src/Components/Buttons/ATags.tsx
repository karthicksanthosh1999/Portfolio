import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IAtagprops {
  title: string;
  to: string;
  textSize?: string;
  icon?: any;
}

const ATags: FC<IAtagprops> = ({ title, to, textSize, icon }) => {
  return (
    <>
      <Link className={`text-[#cbcbcb] hover:text-yellow-300 transition duration-500 ${textSize ? textSize : "text-base"}`} target='_blank' to={to}>{title}
        <FontAwesomeIcon icon={icon} className='pl-2' />
      </Link>
    </>
  )
}

export default ATags