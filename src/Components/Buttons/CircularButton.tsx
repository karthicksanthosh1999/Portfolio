import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react'
import { Link } from 'react-router-dom';



interface Ibtnprops {
  icon: any;
  onClick?: () => void;
  to: string,
  cls?: string;
}

const CircularButton: FC<Ibtnprops> = ({ icon, onClick, cls, to }) => {
  return (
    <>
      <Link to={to} onClick={onClick} className={`btn-circle h-10 w-10 bg-[#000] hover:text-black hover:bg-bgYellow transition duration-300   ${cls ? cls : ""}`}>
        <div className="flex justify-center items-center pt-3">
          <FontAwesomeIcon icon={icon} />
        </div>
      </Link>
    </>
  )
}

export default CircularButton