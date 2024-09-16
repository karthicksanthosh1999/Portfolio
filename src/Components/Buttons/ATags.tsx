import {FC} from 'react';
import {Link} from 'react-router-dom';

interface IAtagprops {
    title : string;
    to : string;
    textSize? :string;
}

const ATags:FC<IAtagprops> = ({title,to, textSize }) => {
  return (
    <>
        <Link className={`text-[#cbcbcb] hover:text-yellow-300 transition duration-500 ${textSize ? textSize : "text-base"}`} to={to}>{title}</Link>
    </>
  )
}

export default ATags