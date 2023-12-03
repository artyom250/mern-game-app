import { BiBuildingHouse } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

import "./styles/Sidebar.css";

function Sidebar({ click, effect }) {
  return (
    <div className='Sidebar'>
      <div className={effect ? "overlay show" : "overlay"} onClick={click}></div>
      <div className={effect ? "sidenav show" : "sidenav"}> 
        <ul>
          <li>
            <Link to="/" onClick={click}>
              <BiBuildingHouse className='icn' />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/best" onClick={click}>
              <BiCheckCircle className='icn' />
              <p>Best Choice</p>
            </Link>
          </li>
          <li>
            <Link to="/new" onClick={click}>
              <BiGridAlt className='icn' />
              <p>New Releases</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar