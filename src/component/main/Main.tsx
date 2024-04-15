import { useEffect } from "react"
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import { useAppContext } from "../../Context/useContexProvider"


function Main() {
  const {cartMenu,dispatch} = useAppContext()
  useEffect(()=>{
    function closeMenu(e:MouseEvent){
      console.log(typeof e)
      if((e.target as HTMLElement).id !== 'cart'){
        if(cartMenu){
          dispatch({type:'cartMenu'})
        }
      }
    }

    window.addEventListener('click', closeMenu)

    return ()=>{
      window.removeEventListener('click',closeMenu)
    }
  },[cartMenu,dispatch])
  return (

      <div className=" flex md:flex-row flex-col md:py-[4rem] max-w-[75rem] mx-auto min-h-[100%] ">
      <SectionOne/>
      <SectionTwo/>
    </div>
  )
}

export default Main
