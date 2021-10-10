import React from "react";
import { CartContext } from "../../context/Context";
import Rating from "./Rating";

const SingleProd = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartContext();

  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={prod.image} alt={prod.name} />
          <div className="card-body">
            <div className="card-title">{prod.name}</div>
            <div className="card-text">
              <div className="custom-style">
                <p>Rs: {prod.price.split(".")[0]}</p>
                {prod.fastDelivery ? (
                  <div>Fast Delivery</div>
                ) : (
                  <div>2 day's delivery</div>
                )}
              </div>
              <Rating rating={prod.rating} />
            </div>
            <div className="buttons my-2">
              {cart.some((x) => x.id === prod.id) ? (
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                  }
                  className="btn btn-danger "
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: prod })
                  }
                  className="btn btn-success "
                  disabled={!prod.inStock}
                >
                  {!prod.inStock ? "Out of stock" : " Add to cart"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProd;
