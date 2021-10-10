import React from "react";
import { CartContext } from "../../context/Context";
import SingleProd from "../SingleProd/SingleProd";

const Home = () => {
  const {
    state: { products, searchQuery },
  } = CartContext();

  const transformProd = () => {
    let sortedProd = products;

    if (searchQuery) {
      sortedProd = sortedProd.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProd;
  };

  return (
    <>
      <div className="container my-4">
        <div className="row">
          {transformProd().map((prod) => {
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

export default Home;
