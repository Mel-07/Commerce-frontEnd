import pluse from '../../assets/images/icon-plus.svg'
import minus from '../../assets/images/icon-minus.svg'
import { useAppContext } from '../../Context/useContexProvider'

function SectionTwo() {
  const {shoeNumber,dispatch} = useAppContext()

  const handleAdd = () => {
    dispatch({type:'add to cart'})
  }

  return (
    <div className="grid basis-[50%] place-content-center p-[2rem]  md:p-[4rem]">
    <div className=" flex flex-col gap-[1.2rem] ">
      <h1 className=" font-semibold text-[#ff7d1a]">Sneaker Company </h1>
      <h2 className="text-[#1d2025] font-bold text-[2.5rem] ">Fall Limited Edition Sneakers</h2>
      <p className="text-[#68707d]" >These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. </p>
      <div>
        <div className=" flex items-center gap-[1rem]">
            <span className=" font-bold text-[1.2rem]">$125.00 </span>
            <span className=" font-bold px-2 rounded bg-[#ffede0] text-[.8rem] text-[#ff7d1a]">50%</span>
        </div>
        <p className=" mt-2 font-bold text-[.8rem] text-[#b6bcc8] line-through">$250.00</p>
      </div>
      <div className='grid md:items-center md:grid-cols-[30%,1fr] gap-3 '>
        <div className=' h-fit flex basis-[10rem] p-2 items-center justify-between bg-[#f7f8fd] rounded-md'>
            <button type='button' onClick={()=>{dispatch({type:'minus'})}} className=' cursor-pointer'><img src={minus}  alt="minus" /></button>
            <span>{shoeNumber}</span>
            <button type='button' onClick={()=>{dispatch({type:'pluse'})}}  className=' cursor-pointer'><img src={pluse} alt="pluse" /></button>
        </div>
        <button onClick={handleAdd} className='h-fit text-[#fff] basis-[100%] rounded-md text-[.6rem] p-[.8rem] flex gap-1 items-center justify-center  bg-[#ff7d1a]  md:p-2' type="button"><div><svg   width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg></div><span className='text-[#fff] ml-[1rem]'>Add to cart</span></button>
      </div>
    </div>
    </div>
  )
}

export default SectionTwo
