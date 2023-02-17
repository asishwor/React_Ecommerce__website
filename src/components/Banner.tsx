import "../assets/css/_banner.scss";
// import swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner__content">
            <Swiper
              className="mySwiper"
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
            >
              <SwiperSlide>
                <div className="slider">
                  <div className="banner__title">
                    <h1>
                      Upgrade your tech game with our unbeatable laptop deals -
                      Shop Now!
                    </h1>
                    <Link to={"/catagory/laptops"}>
                      <button className="btn-primary">Buy Now</button>
                    </Link>
                  </div>
                  <div className="image">
                    <img src="/images/laptopbanner.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider">
                  <div className="banner__title">
                    <h1>
                      Stay connected in style with our latest smartphone
                      collection - Shop Now!
                    </h1>
                    <Link to={"/catagory/smartphones"}>
                      <button className="btn-primary">Buy Now</button>
                    </Link>
                  </div>
                  <div className="image">
                    <img src="/images/s1.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider">
                  <div className="banner__title">
                    <h1>
                      Shop for Fresh and High-Quality Groceries Online -
                      Delivered to Your Doorstep!
                    </h1>
                    <Link to={"/catagory/groceries"}>
                      <button className="btn-primary">Buy Now</button>
                    </Link>
                  </div>
                  <div className="image">
                    <img src="/images/groccery.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slider">
                  <div className="banner__title">
                    <h1>
                      Indulge your senses and leave a lasting impression with
                      our exquisite fragrances
                    </h1>
                    <Link to={"/catagory/fragrances"}>
                      <button className="btn-primary">Buy Now</button>
                    </Link>
                  </div>
                  <div className="image">
                    <img src="/images/fragrances.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
