import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={"Sản Phẩm"} />
      <BreadCrumb title="Sản Phẩm" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Danh Mục</h3>
              <div>
                <ul className="ps-0">
                <li>Điện thoại</li>
                  <li>Laptop</li>
                  <li>Máy Tính Bảng</li>
                  <li>Tai Nghe</li>
                  <li>Đồng Hồ</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Sắp Xếp Theo</h3>
              <div>
                <h5 className="sub-title">Tình Trạng</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                     Còn Hàng (7)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Hết Hàng (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Khoảng Giá</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">Từ</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">Đến</label>
                  </div>
                </div>
                <h5 className="sub-title">Màu</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Thương Hiệu</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      Apple 
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      Sam Sung
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      LG
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      Sony 
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      Dell
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Dịch Vụ và Khuyến Mãi</h3>
              <div className="row align-items-center">
                <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                     Giảm Giá
                    </label>
                 </div>
                 <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      Miễn Phí Vận Chuyển
                    </label>
                 </div>
                 
                 
                </div>
              
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Đánh giá</h3>
              
                <div className="random-products mb-2 d-flex ">
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />                  
                  </div>
                  <div className="random-products mb-2 d-flex ">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mt-2 col-4">trở lên</p>
                  </div>

                  <div className="random-products mb-2 d-flex ">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mt-2 col-4">trở lên</p>
                  </div>
                  <div className="random-products mb-2 d-flex ">
                    <ReactStars
                      count={5}
                      size={24}
                      value={2}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mt-2 col-4">trở lên</p>
                  </div>
                  <div className="random-products mb-2 d-flex ">
                    <ReactStars
                      count={5}
                      size={24}
                      value={1}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mt-2 col-4">trở lên</p>
                  </div>
              </div>                   
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sắp Xếp:
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Nổi Bật</option>
                    <option value="best-selling">Bán Chạy</option>
                    <option value="best-selling">Mới Nhất</option>
                    <option value="title-ascending">Từ A-Z</option>
                    <option value="title-descending">
                      Từ Z-A
                    </option>
                    <option value="price-ascending">Giá: Thấp đến Cao</option>
                    <option value="price-descending">Giá: Cao đến Thấp</option>
                 
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">30 Sản Phẩm</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
