import { Link, useLocation } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';

const Navbar = () => {
  const location = useLocation();
  const detailPage = location.pathname.includes('/detail/');
  return (
    <nav>
      <p className="year">
        {detailPage ? (
          <Link to="/"><IoIosArrowBack /></Link>
        ) : null}
        2023
      </p>
      {detailPage ? (
        <p className="title">Town/City Views</p>
      ) : <p className="title">most Views</p>}

      <p className="icon">
        <span><FaMicrophone /></span>
        <span><AiFillSetting /></span>
      </p>
    </nav>
  );
};

export default Navbar;
