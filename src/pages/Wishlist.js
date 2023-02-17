import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Danh Sách Yêu Thích"} />
      <BreadCrumb title="Danh Sách Yêu Thích" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">

        <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/prod-c1.jpg" className="img-fluid"
                alt="phone" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                Máy tính bảng Samsung Galaxy Tab S7 FE
                </h5>
                <h6 className="price mb-3 mt-3">12.990.000đ</h6>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/prod-x2.jpg" className="img-fluid"
                alt="phone" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                Máy tính bảng Samsung Galaxy Tab S8 5G
                </h5>
                <h6 className="price mb-3 mt-3">17.990.000đ</h6>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/prod-x3.jpg" className="img-fluid"
                alt="phone" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                Điện thoại Samsung Galaxy S22 Ultra 5G 128GB
                </h5>
                <h6 className="price mb-3 mt-3">23.990.000đ</h6>
              </div>
            </div>
          </div>

          
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
