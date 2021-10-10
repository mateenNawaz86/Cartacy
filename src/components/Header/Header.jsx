import React, { useState } from "react";
import { Badge, Dropdown, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { CartContext } from "../../context/Context";
import { MdDeleteForever } from "react-icons/md";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => setShowMenu(!showMenu);

  const location = useLocation();

  const {
    state: { cart },
    dispatch,
  } = CartContext();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-success" to="/">
            Cartacy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              onClick={menuHandler}
              className={showMenu ? "fas fa-times" : "fas fa-bars"}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/cart" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/cart"
                >
                  Cart
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) =>
                  dispatch({
                    type: "SEARCH_BY_QUERY",
                    payload: event.target.value,
                  })
                }
              />
              <Nav>
                <Dropdown alignRight>
                  <Dropdown.Toggle variant="success">
                    <BiCartAlt fontSize="20px" />
                    <Badge>{cart.length}</Badge>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ minWidth: 350, marginTop: 10 }}>
                    {cart.length > 0 ? (
                      <>
                        {cart.map((prod) => {
                          return (
                            <div className="cart-item" key={prod.id}>
                              <img
                                src={prod.image}
                                alt={prod.name}
                                className="cart-img"
                              />
                              <div className="cart-detail">
                                <span className="prod-name">{prod.name}</span>
                                <span>Rs: {prod.price.split(".")[0]}</span>
                              </div>
                              <MdDeleteForever
                                fontSize="25px"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod,
                                  })
                                }
                              />
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <span style={{ padding: "10px" }}>Cart is empty</span>
                    )}
                    <Link to="/cart" className="btn btn-primary cartBtn">
                      Go to cart
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
