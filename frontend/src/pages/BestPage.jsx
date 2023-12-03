import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import "./styles/Grid.css";

function BestPage() {
  const [mongodb, setMongodb] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/home")
      .then(res => res.json())
      .then(data => {
        setMongodb(data);
        document.title = 'Games | Best Choice';
      })
      .catch(err => console.log(err));
  }, []);

  const filter = mongodb.filter((banner) => {
    return banner.type === "best";
  });

  return (
    <div className='Page'>
      <div className="center">
        <div className="Grid">
          {filter.map((object) => (
            <Link to={`/game/${object._id}`} key={object._id}>
              <div className="grid-b">
                <img src={object.image} alt="best" />
                <div className="grid-b-text">
                  <p>{object.name}</p>
                  <p>{object.devs}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestPage