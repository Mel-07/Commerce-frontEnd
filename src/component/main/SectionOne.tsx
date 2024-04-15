
import ImageThumbnailOne from"../../assets/images/image-product-1-thumbnail.jpg"
import ImageThumbnailTwo from"../../assets/images/image-product-2-thumbnail.jpg"
import ImageThumbnailThree from"../../assets/images/image-product-3-thumbnail.jpg"
import ImageThumbnailFour from"../../assets/images/image-product-4-thumbnail.jpg"
import { ArrayOfThumbnail,Thumbnail } from './type'
import {useAppContext} from "../../Context/useContexProvider"
import { productImage } from "../../Context/ProductImage"

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


function SectionOne() {
  const {dispatch,homePageProductImage} = useAppContext()


  return (
    <div className=' basis-[35%] grid gap-4'>
    <div className='md:max-w-[40rem] relative min-w-[100%]'>
    <div onClick={()=>{
      dispatch({type :'previous home'})
}} className=' md:hidden grid p-[1.2rem] group place-content-center h-[2rem] w-[2rem] cursor-pointer rounded-[50%]  absolute bg-white left-[4%]    top-[50%]' ><svg className=' stroke-[#1D2026] group-hover:stroke-[#ff7d1a]'   width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8"  stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
</div>
<div onClick={()=>{ 
  dispatch({type:'next home'}) 
}} className=' md:hidden grid p-[1.2rem] group place-content-center h-[2rem] w-[2rem] cursor-pointer rounded-[50%] absolute right-[4%] bg-white    top-[50%]' ><svg className='stroke-[#1D2026] group-hover:stroke-[#ff7d1a]'  width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8"  stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
</div>
      <img onClick={()=>dispatch({type:'lightBox'})} src={productImage[homePageProductImage.checkingProduct]} alt="Product" className=' object-cover w-[100%] h-[100%] md:rounded-md ' />
    </div>
    <div className='  hidden md:flex gap-4 items-center justify-between'>
        {
            thumbnail.map((value,i)=>(
               <div 
                onClick={()=>{
                dispatch({type:'home page image',payload:{productNumber:i}})
               }}  className={`rounded-md ${homePageProductImage.checkingProduct === i && 'outline outline-[#ff7d1a] outline-[.1rem]' } transition-[outline]  overflow-hidden group max-w-[5rem] relative`} key={value.id}>
                <div className={`absolute min-h-[100%] top-0 right-0 left-0 bottom-0 w-100% rounded-md ${homePageProductImage.checkingProduct === i ? ' translate-y-0': 'translate-y-[100%]' }  transition-transform group-hover:translate-y-0 bg-[#ffffff92]`}></div>
                 <img className=' object-cover cursor-pointer  rounded-md  w-fit h-fit'  src={value.image} alt="" />
               </div>
            ))
        }
    </div>
  </div>
  )
}

export default SectionOne
