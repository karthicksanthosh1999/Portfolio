import { useEffect, useState } from 'react'

const ScrollToTop = () => {

  const [ isVisible, isSetVisible ]= useState(false);

  const toggleVisibilyty = () => {
    if(window.scrollY > 300){
      isSetVisible(true)
    }
    isSetVisible(false)
  }

  const scroll2Top = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  useEffect(()=>{
    window.addEventListener('scroll', toggleVisibilyty);
    return ()=>{
      window.removeEventListener('scroll', toggleVisibilyty)
    }
  },[])


  return (
    <div className="fixed bottom-4 right-4">
    {isVisible && (
      <button
        onClick={scroll2Top}
        className="p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition transform hover:scale-105"
      >
        ⬆️
      </button>
    )}
  </div>
  )
}

export default ScrollToTop;