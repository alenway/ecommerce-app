import React from "react";
import StarsRating from "stars-rating";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  //   const [rating, setRating] = useState(0);

  //   const ratingChanged = (newRating) => {
  //     setRating(newRating);
  //   };

  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/product" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/">
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/watch-1.jpg" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones buld 10 pack multi colored for students
            </h5>
            <StarsRating
              count={5}
              value={4}
              edit={false}
              size={24}
              color2={"#ffd700"}
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <div>
                <img src="images/prodcompare.svg" alt="compare" />
              </div>
              <div>
                <img src="images/view.svg" alt="view" />
              </div>
              <div>
                <img src="images/add-cart.svg" alt="addcart" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/">
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product " />
            <img
              src="images/watch-1.jpg"
              className="img-fluid"
              alt="product "
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones buld 10 pack multi colored for students
            </h5>
            <StarsRating
              count={5}
              value={4}
              edit={false}
              size={24}
              color2={"#ffd700"}
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <div>
                <img src="images/prodcompare.svg" alt="compare" />
              </div>
              <div>
                <img src="images/view.svg" alt="view" />
              </div>
              <div>
                <img src="images/add-cart.svg" alt="addcart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
