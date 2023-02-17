import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>DEAL HẤP DẪN</h4>
                <h5>Apple iPhone 12 Pro 5G</h5>
                <p>Giá chỉ từ 14.850.000đ</p>
                <Link className="button">Mua Ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Nổi Bật</h4>
                  <h5>Apple 2021 MacBook Pro </h5>
                  <p>
                    Giá chỉ từ 45.000.000đ 
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Nổi Bật</h4>
                  <h5>Apple Watch</h5>
                  <p>
                    Giảm 20%
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Hàng Mới Về</h4>
                  <h5>Apple 2021 iPad Mini</h5>
                  <p>
                    Giá chỉ từ 30.000.000đ
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Hàng Mới Về</h4>
                  <h5>Sony ZX Series</h5>
                  <p>
                    Giá chỉ từ 650.000đ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
                 {
                  services?.map((i,j) =>{
                    return (
                      <div className="d-flex align-items-center gap-15" key={j}>
                        <img src={i.image} alt="services" />
                        <div>
                          <h6>{i.title}</h6>
                          <p className="mb-0">{i.tagline}</p>
                        </div>
                    </div>
                    );
                  })
                }
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Laptop</h6>
                  
                </div>
                <img src="images/Laptop.jpg" alt="laptop" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Điện Thoại</h6>
                  
                </div>
                <img src="images/dienthoai.jpg" alt="phone" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  
                </div>
                <img src="images/Donghothongminh.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Đồng hồ</h6>
                  
                </div>
                <img src="images/Dongho.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Tai Nghe</h6>
                  
                </div>
                <img src="images/Tainghe.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Màn Hình</h6>
                  
                </div>
                <img src="images/Manhinhmaytinh.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Tablet</h6>
                  
                </div>
                <img src="images/Tablet.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Loa</h6>
                  
                </div>
                <img src="images/Loa.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Sản Phẩm Mới</h3>
          </div>
          <ProductCard />
          
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Màn Hình Lớn</h5>
                <h6>Smart Watch Series 7</h6>
                <p>Từ 3.000.000đ còn 2.500.000đ</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Màn hình </h5>
                <h6 className="text-dark">Độ sáng 600 nits</h6>
                <p className="text-dark">Màn hình Retina 5K 27 inch</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Điện Thoại</h5>
                <h6 className="text-dark">IPhone 13 Pro.</h6>
                <p className="text-dark">
                  Màu Trắng từ 22.000.000đ còn 20.500.000đ
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-4.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Loa</h5>
                <h6 className="text-dark">Âm Thanh Lấp Đầy Căn Phòng</h6>
                <p className="text-dark">
                  Giàm mạnh đến 25%
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Giảm Giá Mạnh</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />         
          
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Sản Phẩm Nổi Bật</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
         
        </div>
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Tin Tức</h3>
          </div>
        </div>
        <div className="row">
           <BlogCard />
           
        </div>
           

      </Container>
    </>
  );
};

export default Home;
