import React from "react";
import "../Navbar/Navbar.scss";
import { SlRefresh, SlHeart } from "react-icons/sl";
import { BsBasket3, BsChevronRight } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav id="nav1">
      <div className="upside">
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-3">
              <div className="left_side">
                <img
                  src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="middle_side">
                <form action="">
                  <input type="text" placeholder="Search Product ..." />
                  <select id="product_categories">
                    <option value="volvo">All Categories</option>
                    <option value="volvo">All Categories</option>
                    <option value="volvo">All Categories</option>
                  </select>
                  <button id="btn_search">Search</button>
                </form>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="right_side">
                <div className="item1">
                  <SlRefresh style={{ fontSize: "22px" }} />
                  <div className="box">2</div>
                </div>
                <div className="item1">
                  <SlHeart style={{ fontSize: "22px" }} />
                  <div className="box">1</div>
                </div>
                <div className="item1">
                  <BsBasket3 style={{ fontSize: "22px" }} />
                  <div className="box">1</div>
                </div>

                <div className="item1">
                  <RxPerson style={{ fontSize: "22px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="downside">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <select id="product_categories">
                <option value="volvo">All Categories</option>
                <option value="volvo">All Categories</option>
                <option value="volvo">All Categories</option>
              </select>
            </div>
            <div className="col-lg-6 list_middle">
              <ul>
                <li>
                  Homepage <BiChevronDown />
                </li>
                <li>
                  Shop <BiChevronDown />
                </li>
                <li>
                  Pages <BiChevronDown />
                </li>
                <li>About</li>
                <li>Blog </li>
                <li>Contact </li>
              </ul>
            </div>
            <div className="col-lg-3 right_link">
              <a href="#">
                Become a Seller <BsChevronRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
