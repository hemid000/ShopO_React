import { React, useEffect } from "react";
import "../Products/Products.scss";
import { AiFillStar } from "react-icons/ai";
import { ProductMock } from "../../../Mock/Mock";
import { MdZoomOutMap } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { SlRefresh } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
const Products = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="products">
      <div className="container">
        <h2 id="selling">Top Selling Products</h2>
        <div className="row g-5">
          {ProductMock &&
            ProductMock.map((el) => {
              return (
                <div key={el.id} className="col-lg-6" data-aos="fade-left">
                  <div className="cart">
                    <div className="left_side">
                      <div className="img">
                        <img src={el.imgSrc} alt="" />
                      </div>
                    </div>
                    <div className="righ_side">
                      <div className="star">
                        <AiFillStar
                          style={{ fontSize: "20px", color: "gold" }}
                        />
                        <AiFillStar
                          style={{ fontSize: "20px", color: "gold" }}
                        />
                        <AiFillStar
                          style={{ fontSize: "20px", color: "gold" }}
                        />
                        <AiFillStar
                          style={{ fontSize: "20px", color: "gold" }}
                        />
                        <AiFillStar
                          style={{ fontSize: "20px", color: "gold" }}
                        />
                      </div>
                      <p>{el.dscrb}</p>
                      <div className="down">
                        <span id="del">
                          <del>{el.del_prize}</del>
                        </span>
                        <span id="real">{el.prize}</span>
                      </div>
                      <button id="btn_add">Add to cart</button>
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
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Products;
