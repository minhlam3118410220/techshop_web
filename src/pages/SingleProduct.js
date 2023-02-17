import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const SingleProduct = () => {
    const props = {
      width: 594,
      height: 600,
      zoomWidth: 600,

      img: "https://cdn.tgdd.vn/Products/Images/42/289670/iPhone-14-plus-thumb-den-600x600.jpg"
      };

    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
      console.log("text", text);
      var textField = document.createElement("textarea");
      textField.innerText = text;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
    };
    
    return (
    <>
      <Meta title={"Sản Phẩm"} />
      <BreadCrumb title="Sản Phẩm" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/289670/iphone-14-den-glr-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/289670/iphone-14-den-glr-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/289670/iphone-14-den-glr-7.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/289670/iphone-14-den-glr-9.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Điện thoại iPhone 14 512GB
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">26.990.000đ</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 3 Đánh Giá )</p>
                </div>
                <a className="review-btn" href="#review">
                  Viết Đánh Giá
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Loại Hàng :</h3>
                  <p className="product-data">Điện Thoại</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Thương Hiệu :</h3>
                  <p className="product-data">Apple</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Danh Mục :</h3>
                  <p className="product-data">Điện Thoại</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tình Trạng :</h3>
                  <p className="product-data">Còn Hàng</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Dung Lượng :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      128GB
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      256GB
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      512GB
                    </span>
                    
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Màu :</h3>
                  Đen
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Số Lượng :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      className="button border-0"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      type="button"
                    >
                      Thêm vào Giỏ Hàng
                    </button>
                    <button className="button signup">Mua Ngay</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/compare">
                      <TbGitCompare className="fs-5 me-2" /> Thêm vào So Sánh
                    </a>
                  </div>
                  <div>
                    <a href="/wishlist">
                      <AiOutlineHeart className="fs-5 me-2" /> Thêm vào Yêu Thích
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Vận Chuyển và Đổi Trả :</h3>
                  <p className="product-data">
                  Miễn phí vận chuyển và đổi trả áp dụng cho tất cả các đơn đặt hàng <br />
                  Thời gian vận chuyển trong vòng
                    <b> 5-10 ngày </b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Link Sản Phẩm:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://cdn.tgdd.vn/Products/Images/42/289670/iphone-14-den-glr-1.jpg"
                      );
                    }}
                  >
                    Copy Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Mô Tả Sản Phẩm</h4>
            <div className="bg-white p-3">
              <p>
                Màn hình : OLED6.1"Super Retina XDR <br/>
                Hệ điều hành : iOS 16 <br/>
                Camera sau : 2 camera 12 MP <br/>
                Camera trước : 12 MP <br/>
                Chip : Apple A15 Bionic <br/>
                RAM : 6 GB <br/>
                Dung lượng lưu trữ : 512 GB <br/>
                SIM : 1 Nano SIM & 1 eSIMHỗ trợ 5G <br/>
                Pin, Sạc : 3279 mAh20 W
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Đánh Giá</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Đánh Giá Sản Phẩm</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">2 Đánh Giá</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Viết Đánh Giá
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Viết Đánh Giá</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={0}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder=" "
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Gửi Đánh Giá</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Chị Thảo</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Điện thoại đẹp ,sản phẩm chất lượng hơn mong đợi.
                  
                  </p>
                </div>
                <div className="review">
                <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Hoàng</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Sản Phẩm ok ,dùng rất sang.
                  </p>
                </div>
              </div>      
            </div>
            </div>
          
        </div>
      </Container>

        
    </>
  );
};

export default SingleProduct;
