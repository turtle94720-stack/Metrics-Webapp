import { FaMicrophone } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';

const Navbar = () => (
  <nav>
    <p className="year">2023</p>
    <p className="title">most views</p>
    <p className="icon">
      <FaMicrophone />
      <AiFillSetting />
    </p>
  </nav>
);

export default Navbar;
