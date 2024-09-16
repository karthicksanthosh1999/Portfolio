import {FC} from 'react'


interface Ibtnprops {
    icon : any;
    onClick? : ()=>void;

}

const CircularButton:FC<Ibtnprops> = ({icon, onClick}) => {
  return (
    <>
    <button onClick={onClick} className="btn-circle h-10 w-10 bg-[#cbcbcb] hover:bg-bgYellow transition duration-300">{icon}</button>
    </>
  )
}

export default CircularButton