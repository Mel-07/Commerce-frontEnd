
import ImageThumbnailOne from"../../assets/images/image-product-1-thumbnail.jpg"
import ImageThumbnailTwo from"../../assets/images/image-product-2-thumbnail.jpg"
import ImageThumbnailThree from"../../assets/images/image-product-3-thumbnail.jpg"
import ImageThumbnailFour from"../../assets/images/image-product-4-thumbnail.jpg"
import { ArrayOfThumbnail,Thumbnail } from '../main/type'
import { useRef } from 'react'
import { useAppContext } from '../../Context/useContexProvider'
import { productImage } from '../../Context/ProductImage'

const thumbnail:ArrayOfThumbnail<Thumbnail> = [{
    id:1,
    image:ImageThumbnailOne
},
{
    id:2,
    image:ImageThumbnailTwo
},
{
    id:3,
    image:ImageThumbnailThree
},
{
    id:4,
    image:ImageThumbnailFour
},

] 
function Carousel() {
    const lightBoxRef = useRef<HTMLDivElement>(null)
    const {dispatch,lightBoxImage} = useAppContext()
  return (
    <div ref={lightBoxRef} onClick={(e)=>{
        if(lightBoxRef.current === e.target){
            dispatch({type:'lightBox'})
        }
    }} className="w-screen hidden z-10 md:grid place-content-center absolute h-screen bg-[#0000006c] ">
        <div className="  grid gap-4 ">
            <div>
            <svg onClick={()=>{
                dispatch({type:'lightBox'})
            }} className=' fill-[#fff] cursor-pointer transition-colors ml-auto hover:fill-[#ff7d1a]' width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"  fill-rule="evenodd"/></svg>
            </div>
            <div className=' max-w-[26rem] relative max-h-[26rem]'>
                <div onClick={()=>{
                    dispatch({type:'previous'})

                }} className=' grid p-[1.2rem] group place-content-center h-[2rem] w-[2rem] cursor-pointer rounded-[50%]  absolute bg-white left-[-4%]    top-[50%]' ><svg className=' stroke-[#1D2026] group-hover:stroke-[#ff7d1a]'   width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8"  stroke-width="3" fill="none" fill-rule="evenodd"/></svg></div>
                <div onClick={()=>{
                    dispatch({type:'next'})
                    
                }} className=' grid p-[1.2rem] group place-content-center h-[2rem] w-[2rem] cursor-pointer rounded-[50%] absolute right-[-4%] bg-white    top-[50%]' ><svg className='stroke-[#1D2026] group-hover:stroke-[#ff7d1a]'  width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8"  stroke-width="3" fill="none" fill-rule="evenodd"/></svg></div>
                <img src={productImage[lightBoxImage]} className=' w-full rounded-lg h-full object-cover' alt="" />
            </div>
            <div className='flex justify-around'>
                {
                    thumbnail.map((value,i)=>(
                        // hover:outline outline-[#ff7d1a] outline-[.1rem]
                        <div onClick={()=>{
                            dispatch({type:'light box image',payload:i})
                        }} className={` ${lightBoxImage === i && 'outline outline-[#ff7d1a] outline-[.1rem]'} max-w-[5rem] group  rounded-md overflow-hidden max-h-[5rem] relative`} key={value.id}>
                            <div className={`absolute cursor-pointer transition-transform group-hover:translate-y-[0] ${lightBoxImage === i ? 'translate-y-[0]' : "translate-y-[100%]"}  bg-[#ffffff92] min-w-[100%] min-h-[100%] rounded-md`}></div>
                        <img className=' object-cover  cursor-pointer  rounded-md  w-fit h-fit'  src={value.image} alt="" />
                      </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Carousel
