import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BiCreditCard } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";

import "./styles/Page.css";

function Game() {
  const { id } = useParams();
  const [single, setSingle] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/home/${id}`)
      .then(res => res.json())
      .then(data => {
        setSingle(data);
        document.title = `Games | ${data.name}`;
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='Page'>
      <div className="game-flex">
        <div>
          <div className="banner">
            <img src={single.image} alt="banner" />
          </div>
          <p className='about'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus iste pariatur omnis nesciunt vel facilis sunt commodi doloribus, eligendi optio ipsam expedita repudiandae quis adipisci? Harum, blanditiis eaque optio magnam, tenetur repellendus quas unde nihil voluptates nobis exercitationem dolorem.</p>
        </div>
        <div className='data'>
          <center><p className="title">{single.name}</p></center>
          <div className="info">
            <div className='desc'>
              <p>Developer</p>
              <p>{single.devs}</p>
            </div>
            <div className='desc'>
              <p>Publisher</p>
              <p>{single.publisher}</p>
            </div>
            <div className='desc'>
              <p>Release Date</p>
              <p>{single.date}</p>
            </div>
            <div className='desc'>
              <p>Platform</p>
              <p>{single.platform}</p>
            </div>
          </div>
          <div className="pay">
            <button className='buy'>
              <BiCreditCard className='buy-icon' />
              <p>Purchase now</p>
            </button>
            <button className='buy cart'>
              <BiShoppingBag className='buy-icon' />
              <p>Add to bag</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game