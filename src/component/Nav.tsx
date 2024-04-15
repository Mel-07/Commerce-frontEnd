import { useRef } from "react"
import { useAppContext } from "../Context/useContexProvider"

type Path<T> = T[]

type PathObj = {
    id:number,
    path:string
}

const path:Path<PathObj> = [
    {
        id:1,
        path:'Collection'
    },
    {
        id:2,
        path:'Men'
    },
    {
        id:3,
        path:'Women'
    },
    {
        id:4,
        path:'About'
    },
    {
        id:5,
        path:'Contact'
    },
]
function Nav(){
    const {menu,dispatch} = useAppContext()
    const lightBoxRef = useRef<HTMLDivElement>(null)

    return(
        <div onClick={(e)=>{
            if (e.target === lightBoxRef.current) dispatch({type:'menu'})
        }} ref={lightBoxRef} className={`w-full z-[20] md:z-[0] ${menu ? 'visible duration-100 ease-in': 'invisible delay-150  duration-150 ease-out'}  transition-[visibility] delay-75  md:visible top-0 left-0 right-0 bottom-0 h-[100dvh] md:h-fit absolute md:static md:bg-[#0000] bg-[#00000063]`}>

            <nav className = {` ${menu ? 'translate-x-0 delay-100':' delay-75 translate-x-[-100%]'} md:translate-x-0 transition-transform  duration-300 ease-in-out md:bg-[#0000] h-[100dvh] md:h-fit bg-[#f7f8fd] md:max-w-[100%] max-w-[15rem] md:p-0 p-[2rem]`}>
            <svg onClick={()=>dispatch({type:'menu'})} className=" rounded-[50%] hover:fill-[#ff7d1a] fill-[#69707D] cursor-pointer inline mb-[2rem] md:hidden" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"  fill-rule="evenodd"/></svg>
                <ul className='flex flex-col md:flex-row  md:gap-[4rem] md:items-center'>
                    {
                        path.map(({id,path})=>(
                            <li className=" mb-[1.5rem] md:mb-0 font-bold md:font-normal cursor-pointer text-[#000] md:hover:text-[#000] md:text-[#b6bcc8] md:py-[1rem] md:border-b-[.25rem] md:hover:border-b-[#ff7d1a] md:border-b-[#0000]" key={id}>{path}</li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}
export default Nav