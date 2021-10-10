import React from "react";
import { CartContext } from "../../context/Context";
import SingleProd from "../SingleProd/SingleProd";

const Cart = ({ prod }) => {
  const {
    state: { cart },
  } = CartContext();
  return (
    <>
      <div className="container my-3">
        <div className="row">
          {cart.map((prod) => {
            return (
              <div className="col-md-4 my-2" key={prod.id}>
                <SingleProd prod={prod} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
