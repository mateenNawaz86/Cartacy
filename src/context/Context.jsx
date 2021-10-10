import React, { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { CartReducer } from "./CartReducer";

const Cart = createContext();

const Context = (props) => {
  const product = [...Array(40)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    rating: faker.random.arrayElement([0, 2, 3, 5, 7]),
    fastDelivery: faker.datatype.boolean(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 2, 4, 6]),
    byStock: false,
    searchQuery: "",
  }));

  faker.seed(99);

  const [state, dispatch] = useReducer(CartReducer, {
    products: product,
    cart: [],
  });
  return (
    <Cart.Provider value={{ state, dispatch }}>{props.children}</Cart.Provider>
  );
};

export default Context;

export const CartContext = () => {
  return useContext(Cart);
};
