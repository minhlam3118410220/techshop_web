import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Đăng Ký Nhận Thông Báo</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Email"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Đăng Ký
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <h4 className="text-white mb-4">Liên Hệ</h4>
              <div>
                <address className="text-white fs-6">
                  ĐC : 123 Lê Văn Sĩ, <br /> Tân Bình , Hồ Chí Minh <br />
                  Việt Nam
                </address>
                <a
                  href="tel:+84 931321813"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +84 931321813
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  minhlam3118410220@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="L">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="I">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="G">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="Y">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Thông Tin</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                Chính Sách Bảo Mật
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                Chính Sách Đổi Trả
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                Chính Sách Vận Chuyển
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                Điều Khoản và Điều Kiện
                </Link>
                <Link className="text-white py-2 mb-1">Chính Sách Bảo Hành</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Chăm Sóc Khách Hàng</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Trung Tâm Trợ Giúp</Link>
                <Link className="text-white py-2 mb-1">Thanh Toán</Link>
                <Link className="text-white py-2 mb-1">Vận Chuyển</Link>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}: LinF
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
