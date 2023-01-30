import { React, useEffect } from "react";
import "../HeadphoneProducts/HeadProducts.scss";
import { AiFillStar } from "react-icons/ai";
import { MdZoomOutMap } from "react-icons/md";
import { BsSuitHeart, BsBasket3 } from "react-icons/bs";
import { SlRefresh } from "react-icons/sl";
import { AppMock } from "../../../Mock/Mock";
import AOS from "aos";
import "aos/dist/aos.css";
import headphone from "../../../Assets/ads-3.png";
const HeadProducts = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="headproducts">
      <div className="container" data-aos="fade-up">
        <h3>Popular Sales</h3>
      </div>
      <div className="container" data-aos="fade-up">
        <div className="row g-3">
          <div className="col-lg-3">
            <div className="cart">
              <p>Mobile & Tablet</p>
              <ul>
                <li>
                  <a href="#">Xioami</a>
                </li>
                <li>
                  <a href="#">Apple</a>
                </li>
                <li>
                  <a href="#">Google</a>
                </li>
                <li>
                  <a href="#">Samsung</a>
                </li>
              </ul>
            </div>
          </div>
          {AppMock &&
            AppMock.map((el) => {
              return (
                <div key={el.id} className="col-lg-3 col-md-6 col-sm-12">
                  <div className="cart2">
                    <div className="img">
                      <img src={el.imgSrc} alt="" />
                    </div>
                    <div className="middle_side">
                      <AiFillStar style={{ fontSize: "20px", color: "gold" }} />
                      <AiFillStar style={{ fontSize: "20px", color: "gold" }} />
                      <AiFillStar style={{ fontSize: "20px", color: "gold" }} />
                    </div>
                    <div className="downside">
                      <p>{el.dscrb}</p>

                      <span id="del">
                        <del>{el.del_prize}</del>
                      </span>
                      <span id="real">{el.prize}</span>
                    </div>
                    <div className="right_hover">
                      <div className="box1">
                        <MdZoomOutMap />
                      </div>
                      <div className="box1">
                        <BsSuitHeart />
                      </div>
                      <div className="box1">
                        <SlRefresh />
                      </div>
                    </div>
                    <div className="down_hover">
                      <button id="btn_add">
                        <BsBasket3 /> Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="container mt-5">
        <div className="row g-5">
          <div className="col-lg-12">
            <div className="img2" data-aos="fade-right">
              <img id="headphone" src={headphone} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadProducts;
