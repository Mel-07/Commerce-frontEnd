import { useAppContext } from '../../Context/useContexProvider';
import deleteIcon from '../../assets/images/icon-delete.svg';
import thumbNailOne from '../../assets/images/image-product-1-thumbnail.jpg'

function CartMenu() {
  const {cartMenu,dispatch,trackItem,valueOfPrice,trackedItemNumber} = useAppContext()
  return (
    <div className={` ${cartMenu ? 'visible': 'invisible'} z-[2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] absolute left-0 right-[0%] md:left-[-275%] md:right-[75px] top-[4.5rem] md:top-[2.5rem] bg-white rounded-md  md:mx-0 min-w-[100%] md:min-w-[20rem]`}>
    <div className='border-b-[.001rem] border-[#00000041] '>
      <p className=' px-[1rem] py-[.7rem] text-[.8rem] font-bold'>Cart</p>
    </div>
    <div>
      <div className='px-[1rem] flex flex-col justify-around  h-[12rem] md:h-fit  py-[.7rem]'>
        {
          trackItem ? <div>
            <div className=' flex mb-[2rem] md:mb-[1rem]  items-center'>
          <img className='h-[2.3rem] w-[2.3rem] rounded-md' src={thumbNailOne} alt="image" />
          <div className=' mx-auto text-[.9rem] text-[#b6bcc8] whitespace-nowrap text-nowrap'>
            <p >Fall Limited Edition Sneakers</p>
            <p>$125.00 x {trackedItemNumber} <span className=' text-[#000] font-semibold'>${valueOfPrice}.00</span></p>
          </div>
          <img onClick={()=> dispatch({type:'delete'})} src={deleteIcon} alt="delete" className=' cursor-pointer' />
        </div>
        <button onClick={()=> dispatch({type:'cartMenu'})} className='min-w-[100%] cursor-pointer rounded-md p-2 hover:bg-[#f99f5b] bg-[#ff7d1a]' type="button">
          Checkout
        </button>
          </div> :
        (
          <div className='h-[7rem] grid place-content-center '><span className=' text-[.7rem] text-[#b6bcc8] font-semibold'>Your cart is empty.</span></div>
        )
        }
      </div>
    </div>

  </div>
  )
}

export default CartMenu
