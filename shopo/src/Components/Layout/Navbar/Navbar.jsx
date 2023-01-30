import "../Navbar/Navbar.scss";
import { SlRefresh, SlHeart } from "react-icons/sl";
import { BsBasket3, BsChevronRight } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

import Offcanvas from "react-bootstrap/Offcanvas";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav id="nav1">
      <div className="nav">
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
                      <option value="ctgry">All Categories</option>
                      <option value="ctgry">All Categories</option>
                      <option value="ctgry">All Categories</option>
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
      </div>

      <div className="nav_mobile">
        <div className="container pt-3">
          <div className="row">
            <div className="col-8">
              <div className="left_Side">
                <img
                  id="home_img"
                  src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                  alt=""
                />

                <InputGroup className="mb-3">
                  <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Search item"
                  />
                  <Button variant="outline-secondary" id="button-addon1">
                    <AiOutlineSearch />
                  </Button>
                </InputGroup>
              </div>
            </div>
            <div className="col-4">
              <div className="right_side">
                <ul id="create">
                  <li>Create</li>
                  <AiOutlineMenu
                    variant="primary"
                    onClick={handleShow}
                    style={{ fontSize: "22px", cursor: "pointer" }}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {" "}
              <img
                id="home_img"
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="body_canvas">
              {" "}
              <div className="upside">
                <span>
                  Discover the most outstanding articles on all topics of life.
                  Write your stories and share them
                </span>
              </div>
              <ul>
                <li>
                  Discover <BiChevronDown />
                </li>
                <li>Help Center</li>

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
              <a id="create" href="#">
                Create
              </a>
              <a id="connect" href="#">
                Connect
              </a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  );
};

export default Navbar;
