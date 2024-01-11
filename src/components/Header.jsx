import Logo from '../assets/images/logo.svg'
import Navbar from './Navbar';
const Header = () => {
  return (
    <header className='flex items-center justify-between mb-8'>
      <img src={Logo} alt="logo-img" />

      <Navbar/>
    </header>
  );
};

export default Header;
