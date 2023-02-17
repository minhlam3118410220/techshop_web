import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/iphone13pm.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">LinF Tech</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Giỏ Hàng
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Thông Tin
                    </Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Vận Chuyển
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Thanh Toán
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Thông Tin Liên Lạc</h4>
              <p className="user-details total">
                Tâm Trần(minhlam3118410220@gmail.com)
              </p>
              <h4 className="mb-3">Địa Chỉ Giao Hàng</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    
                    <option value="" selected >
                      Việt Nam
                    </option>
                    <option value="" selected >
                      Mỹ
                    </option>
                    <option value="" selected >
                      Pháp
                    </option>
                    <option value="" selected >
                      Anh
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Họ"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Tên"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Địa Chỉ"
                    className="form-control"
                  />
                </div>
                
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Thành Phố"
                    className="form-control"
                  />
                </div>
                
                
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Quay Lại Giỏ Hàng
                    </Link>
                    <Link to="/cart" className="button">
                      Tiếp Tục Mua Sắm
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src="images/prod-x4.jpg" alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">Điện thoại iPhone 14 Pro Max 512GB</h5>
                    <p className="total-price"> Apple / Tím</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">37.490.000đ</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Tổng</p>
                <p className="total-price">37.490.000đ</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Phí Vận Chuyển</p>
                <p className="mb-0 total-price">0đ</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Tổng Cộng</h4>
              <h5 className="total-price">37.490.000đ</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
