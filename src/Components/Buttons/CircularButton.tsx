import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



interface Ibtnprops {
  icon: any;
  onClick?: () => void;
  to: string,
  cls?: string;
}

const CircularButton: FC<Ibtnprops> = ({ icon, onClick, cls, to }) => {
  return (
    <>
      <Link to={to} onClick={onClick} className={`btn-circle h-10 w-10 bg-[#000] hover:text-black text-white hover:bg-bgYellow transition duration-300   ${cls ? cls : ""}`}>
        <motion.div whileHover={{ scale: 1 }} className="flex justify-center items-center pt-3">
          <FontAwesomeIcon icon={icon} className='group-hover:' />
        </motion.div>
      </Link>
    </>
  )
}

export default CircularButton