import React from "react";
import "../CartInfo/Cart_info.scss";
const Cart_info = () => {
  return (
    <section id="cart_info">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 left_side">
            <div className="img">
              <img
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5 right_side">
            <div className="img">
              <img
                src="https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt=""
              />
            </div>
            <div className="img">
              <img
                src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart_info;
