import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import "./styles/Main.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';

function Main() {
  const [mongodb, setMongodb] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/home")
      .then(res => res.json())
      .then(data => {
        setMongodb(data);
      })
      .catch(err => console.log(err));
  }, []);

  const filter = mongodb.filter((banner) => {
    return banner.type === "banner";
  });

  return (
    <div className='Main'>
      <div className="center">
        <Swiper
          effect={'coverflow'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={25}
          grabCursor={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow]}
          className="mySwiper"
        >
          {filter.map((object) => (
            <SwiperSlide key={object._id}>
              <Link to={`/game/${object._id}`}>
                <div className="image">
                  <img src={object.image} alt="image" />
                </div>
                <p className='name'>{object.name}</p>
                <p className='devs'>{object.devs}</p>
                <div className="price">
                  <p className="sale">{object.price.sale}</p>
                  <p className="old">{object.price.old}</p>
                  <p className="new">{object.price.new}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Main