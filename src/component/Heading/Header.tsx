import Logo from '../../assets/images/logo.svg' 
import './heading.css'
import Nav from '../Nav'
import CartProfile from './CartProfile'
import menu from "../../assets/images/icon-menu.svg"
import { useAppContext } from '../../Context/useContexProvider'

function Header() {
  const {dispatch} = useAppContext()
  return (
    <header className=' fixed z-[2] md:static top-0 left-0 right-0 header md:p-0 p-[1rem]'>
      <div className='flex items-center gap-[4rem] '>
        <div className='flex  gap-4 items-center '>
        <img onClick={()=> dispatch({type:'menu'})} src={menu} alt="menu" loading='lazy' className=' cursor-pointer block md:hidden' />
        <img src={Logo} alt="logo" loading='lazy' className='' />
        </div>
        <Nav/>
      </div>
      <div>
      <CartProfile/>
      </div>
    </header>
  )
}

export default Header
