import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/pd-1t.jpg";
import watch2 from "../images/pd-1c.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { prod } from "../utils/Prodata";
const ProductCard = (props) => {
  const { grid } = props;
  console.log(grid);
  let location = useLocation();

  return (
    <>
      <div className="row">
        {
          prod?.map((i,j) => {
            return (
              <div
                className={` ${
                  location.pathname == "/product" ? `gr-${grid}` : "col-3"
                } `}
                key={j}
              >
                <Link
                  to={`${
                    location.pathname == "/"
                      ? "/product/:id"
                      : location.pathname == "/product/:id"
                      ? "/product/:id"
                      : ":id"
                  }`}
                  className="product-card position-relative"
                >
                  <div className="wishlist-icon position-absolute">
                    <button className="border-0 bg-transparent">
                      <img src={wish} alt="wishlist" />
                    </button>
                  </div>
                  <div className="product-image">
                    <img src={i.image1} className="img-fluid" alt="product_image" />
                    <img src={i.image2} className="img-fluid" alt="product_image" />
                  </div>
                  <div className="product-details">
                    <h6 className="brand">{i.brand}</h6>
                    <h5 className="product-title">
                      {i.title}
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                      {i.des}
                    </p>
                    <p className="price">{i.price}</p>
                  </div>
                  <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                      <button className="border-0 bg-transparent">
                        <img src={prodcompare} alt="compare" />
                      </button>
                      <button className="border-0 bg-transparent">
                        <img src={view} alt="view" />
                      </button>
                      <button className="border-0 bg-transparent">
                        <img src={addcart} alt="addcart" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>

            );
          })
        }
        
      
      
      </div>
    </>
  );
};

export default ProductCard;
