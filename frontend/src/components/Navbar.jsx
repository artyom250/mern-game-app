import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

import "./styles/Navbar.css";

function Navbar({ click }) {
  return (
    <div className='Navbar'>
      <Link to="/" className='logo'>Games</Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/best">Best Choice</Link></li>
        <li><Link to="/new">New Releases</Link></li>
      </ul>
      <div className="right">
        <img src="/user.jpg" alt="user" />
        <BiMenu className='menu' onClick={click} />
      </div>
    </div>
  )
}

export default Navbar