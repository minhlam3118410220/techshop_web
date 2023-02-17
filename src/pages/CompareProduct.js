import React from "react";
import BreadCrumb from "../components/BreadCrumb";

import Meta from "../components/Meta";

import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"So Sánh Sản Phẩm"} />
      <BreadCrumb title="So Sánh Sản Phẩm" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/prod-b1.jpg" className="img-fluid"
                alt="phone" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                Điện thoại Samsung Galaxy Z Flip4
                </h5>
                <h6 className="price mb-3 mt-3">18.990.000đ</h6>

                <div>
                  <div className="product-detail">
                    <h5>Thương Hiệu : </h5>
                    <p className="mt-2">Samsung</p>
                  </div>
                  <div className="product-detail">
                    <h5>Loại Hàng : </h5>
                    <p className="mt-2">Điện Thoại</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tình Trạng : </h5>
                    <p className="mt-2">Còn Hàng</p>
                  </div>
                  <div className="product-detail ">
                    <h5>Màu :</h5>
                    <div className="row ">
                    <div className="d-flex gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      Đen
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      Trắng
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      Hồng
                    </span>
                    </div>
                    </div>
                  </div>
                  <div className="product-detail ">
                    <h5>Dung Lượng:</h5>
                    <div className="row">
                    <div className="d-flex gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      128GB
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      256GB
                    </span>
                    </div>

                  </div>
                  </div>
                </div>
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
                <img src="images/prod-x1.jpg" className="img-fluid"
                alt="phone" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                Điện thoại iPhone 11 128GB
                </h5>
                <h6 className="price mb-3 mt-3">14.490.000đ</h6>

                <div>
                  <div className="product-detail">
                    <h5>Thương Hiệu : </h5>
                    <p className="mt-2">Apple</p>
                  </div>
                  <div className="product-detail">
                    <h5>Loại Hàng : </h5>
                    <p className="mt-2">Điện Thoại</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tình Trạng : </h5>
                    <p className="mt-2">Còn Hàng</p>
                  </div>
                  <div className="product-detail ">
                    <h5>Màu :</h5>
                    <div className="row ">
                    <div className="d-flex gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      Đen
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      Trắng
                    </span>
                    
                    </div>
                    </div>
                  </div>
                  <div className="product-detail ">
                    <h5>Dung Lượng:</h5>
                    <div className="row">
                    <div className="d-flex gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      64GB
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      128GB
                    </span>
                                      
                    </div>

                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
