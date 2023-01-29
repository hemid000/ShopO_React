import { React, useEffect } from "react";
import "../BestSeller/BestProducts.scss";
import seller1 from "../../../Assets/saller-1.png";
import seller2 from "../../../Assets/saller-2.png";
import seller3 from "../../../Assets/saller-3.png";
import seller4 from "../../../Assets/saller-4.png";
import seller5 from "../../../Assets/saller-5.png";
import seller6 from "../../../Assets/saller-6.png";
import ads1 from "../../../Assets/ads-1.png";
import ads2 from "../../../Assets/ads-2.png";
import AOS from "aos";
import "aos/dist/aos.css";
const BestProducts = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="bestproducts">
      <div className="container">
        <h3>Best Saller</h3>
      </div>
      <div className="container mt-5" data-aos="fade-right">
        <div className="row">
          <div className="col-lg-2">
            <div className="cart">
              <div className="box">
                <img src={seller1} alt="" />
              </div>
              <span>Shopno BD</span>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="cart">
              <div className="box">
                <img src={seller2} alt="" />
              </div>
              <span>Eecoms Shop</span>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="cart">
              <div className="box">
                <img src={seller3} alt="" />
              </div>
              <span>Fusion X</span>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="cart">
              <div className="box">
                <img src={seller4} alt="" />
              </div>
              <span>Rikayi Rox</span>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="cart">
              <div className="box">
                <img src={seller5} alt="" />
              </div>
              <span>Habbriyi</span>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="cart">
              <div className="box">
                <img src={seller6} alt="" />
              </div>
              <span>Rayhans</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="img" data-aos="fade-right">
              <img src={ads1} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img" data-aos="fade-left">
              <img src={ads2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
