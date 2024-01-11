import BurguerMenu from '../assets/images/icon-menu.svg'
import closeBtn from '../assets/images/icon-menu-close.svg'
import { useState } from 'react';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true)

  const handleMenu = () => {
    setToggleMenu(prevState => !prevState)
  }

  return (
    <nav>
      <ul className={`${toggleMenu ? 'hidden' : ''} absolute bg-white shadow-xl sm:shadow-none top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-4`}>
        <li className={`${toggleMenu ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
        <img className='w-8 h-8 mb-[87px]' src={closeBtn} onClick={handleMenu} alt="close-menu" />
        </li>
        <li className='mb-8 sm:mb-0'>
          <a href="#" className='hover:text-SoftRed sm:text-4'>Home</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a href="#" className='hover:text-SoftRed sm:text-4'>New</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a href="#" className='hover:text-SoftRed sm:text-4'>Popular</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a href="#" className='hover:text-SoftRed sm:text-4'>Trending</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a href="#" className='hover:text-SoftRed sm:text-4'>Categories</a>
        </li>
      </ul>
      <img src={BurguerMenu} alt="burguer-menu" className={`${toggleMenu ? '' : 'hidden'} w-10 h-4 cursor-pointer sm:hidden`} onClick={handleMenu}/>
    </nav>
  );
};

export default Navbar;
