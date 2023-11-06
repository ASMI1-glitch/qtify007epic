import Button from '../Button/Button';
import SearchBox from '../SearchBox/SearchBox';
import Logo from '../Logo/Logo';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <SearchBox />
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;
