import Avatar from '../../assets/images/image-avatar.png';
import Cart from '../../assets/images/icon-cart.svg';
import {useAppContext} from '../../Context/useContexProvider';
import { useRef, useEffect } from 'react';
import CartMenu from './CartMenu';



function CartProfile() {
  const {trackedItemNumber,dispatch} = useAppContext()
  const cartRef = useRef<HTMLImageElement>(null)
useEffect(()=>{
function resizeFn(){
  dispatch({type:'resize', payload:{
    x:cartRef.current?.getBoundingClientRect().x,
    y:cartRef.current?.getBoundingClientRect().y
  }})
}
window.addEventListener('load',resizeFn)
window.addEventListener('resize', resizeFn)

return ()=>{
  window.removeEventListener('load',resizeFn)
  window.removeEventListener('resize',resizeFn)
}
},[dispatch])

  return (
    <div className='flex md:relative items-center gap-[2rem] '>
      <div data-topic={trackedItemNumber} className={`relative after:bg-[#ff7d1a] after:text-center after:rounded-[.5rem] after:h-[.8rem] after:font-medium after:text-[#fff] after:w-[1rem] after:text-[.6rem] after:top-[-30%] after:right-[-40%] after:absolute after:content-[attr(data-topic)]`}>
      <img ref={cartRef} id='cart'  onClick={()=>dispatch({type:'cartMenu'})} src={Cart} alt="cart" className=" cursor-pointer"/>
      </div>
      {/* after:z-[1] after:w-[3rem] after:h-[3rem] */}
      <img src={Avatar} alt="Avatar" className=' hover:outline rounded-[50%] outline-[.15rem] transition-[outline] cursor-pointer outline-[#ff7d1a] w-[2rem] h-[2rem] md:w-[2.6rem] md:h-[2.6rem]' />
      <CartMenu/>
    </div>
  )
}

export default CartProfile
