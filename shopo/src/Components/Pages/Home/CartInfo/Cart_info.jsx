import { React, useEffect } from "react";
import "../CartInfo/Cart_info.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner1 from "../../../Assets/banner-1.png";
import Banner2 from "../../../Assets/banner-2.png";
import Banner3 from "../../../Assets/banner-3.png";
const Cart_info = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="cart_info">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12 left_side" data-aos="fade-right">
            <div className="img">
              <img src={Banner1} alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-12 right_side" data-aos="fade-left">
            <div className="img">
              <img src={Banner2} alt="" />
            </div>
            <div className="img">
              <img src={Banner3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart_info;
