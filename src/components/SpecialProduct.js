import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = () => {
  return (
    <>
        <div className="col-6 mb-3">
          <div className="special-product-card">
            <div className="d-flex justify-content-between">
              <div>
                <img src="images/prod-x5.jpg" className="img-fluid rounded-start " alt="watch" />
              </div>
              <div className="special-product-content col-6 ">
                <h5 className="brand">Apple</h5>
                <h6 className="title">
                iPhone 13 Pro Max, 256GB,Than Chì
                </h6>
                <ReactStars
                  count={5}
                  size={24}
                  value={5}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="price">
                  <span className="red-p">25.000.000đ</span> &nbsp; <strike>27.300.000đ</strike>
                </p>
                <div className="discount-till d-flex align-items-center gap-10">
                  <p className="mb-0">
                    <b>10 </b>Ngày
                  </p>
                  <div className="d-flex gap-10 align-items-center">
                    <span className="badge rounded-circle p-3 bg-danger">12</span>:
                    <span className="badge rounded-circle p-3 bg-danger">35</span>:
                    <span className="badge rounded-circle p-3 bg-danger">23</span>
                  </div>
                </div>
                <div className="prod-count my-3">
                  <p>Sản Phẩm: 15</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <Link className="button">Thêm Vào Giỏ Hàng</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src="images/prod-x6.jpg" className="img-fluid " alt="watch" />
            </div>
            <div className="special-product-content col-6">
              <h5 className="brand">Sony</h5>
              <h6 className="title">
              Tai Nghe Sony MDRXB400IP/AP EX cho iPod/iPhone/iPad
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">1.850.000đ</span> &nbsp; <strike>2.350.000đ</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>4 </b>Ngày
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-3 bg-danger">16</span>:
                  <span className="badge rounded-circle p-3 bg-danger">23</span>:
                  <span className="badge rounded-circle p-3 bg-danger">10</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Sản Phẩm: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Thêm Vào Giỏ Hàng</Link>
            </div>
          </div>
        </div>
        </div>

        <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src="images/prod-x7.jpg" className="img-fluid " alt="watch" />
            </div>
            <div className="special-product-content col-6">
              <h5 className="brand">SamSung</h5>
              <h6 className="title">
              Máy Tính Bảng SAMSUNG Galaxy A7 Lite 8.7" 32GB
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">3.955.000đ</span> &nbsp; <strike>4.735.00đ</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>7 </b>Ngày
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-3 bg-danger">21</span>:
                  <span className="badge rounded-circle p-3 bg-danger">42</span>:
                  <span className="badge rounded-circle p-3 bg-danger">15</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Sản Phẩm: 20</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Thêm Vào Giỏ Hàng</Link>
            </div>
          </div>
        </div>
        </div>

        <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src="images/sale-4.jpg" className="img-fluid  " alt="watch" />
            </div>
            <div className="special-product-content col-6">
              <h5 className="brand">Dell</h5>
              <h6 className="title">
              Laptop Dell Newest Inspiron 15 3511, 15.6" FHD Touchscreen, Intel Core i5-1035G1, 32GB RAM,
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">13.350.000đ</span> &nbsp; <strike>14.870.000đ</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>3 </b>Ngày
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-3 bg-danger">10</span>:
                  <span className="badge rounded-circle p-3 bg-danger">37</span>:
                  <span className="badge rounded-circle p-3 bg-danger">40</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Sản Phẩm: 3</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Thêm Vào Giỏ Hàng</Link>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default SpecialProduct;
