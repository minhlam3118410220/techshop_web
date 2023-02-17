import React from "react";
import { Link ,useLocation } from "react-router-dom";

const BlogCard = () => {
  
  let location = useLocation();
  return (
    <>
        
        <div
            className={` ${
            location.pathname === "/blogs" ? "col-6" : "col-3"
              } `}
          >
          <div className="blog-card">
            <div className="card-image">
              <img src="images/new-1.jpg" className="img-fluid w-100" alt="blog" />
            </div>
            <div className="blog-content">
              <p className="date">12/02/2023</p>
              <h5 className="title">Rộ tin đồn Apple tìm ra cách lách luật dù bị buộc sử dụng cổng USB-C</h5>
              <p className="desc">
              Sẽ không ngạc nhiên nếu Apple quay trở lại sử dụng chứng nhận MFi như một quân bài chiến lược.
              </p>
              <Link to="/blog/:id" className="button">
                Đọc Thêm
              </Link>
            </div>
            </div>
          </div> 
       
          <div
            className={` ${
            location.pathname === "/blogs" ? "col-6" : "col-3"
              } `}
          >
          <div className="blog-card">
            <div className="card-image">
              <img src="images/new-2.jpg" className="img-fluid w-100" alt="blog" />
            </div>
            <div className="blog-content">
              <p className="date">9/02/2023</p>
              <h5 className="title">Galaxy S23 Ultra - smartphone chụp ảnh đẹp nhất của Samsung</h5>
              <p className="desc">
              Samsung lần đầu trang bị cho thế hệ flagship mới camera 200 megapixel cùng tính năng chụp chuyên nghiệp, cho chất lượng ảnh và video mang tính nghệ thuật.
              </p>
              <Link to="/blog/:id" className="button">
                Đọc Thêm
              </Link>
            </div>
            </div>
          </div> 

          <div
            className={` ${
            location.pathname === "/blogs" ? "col-6" : "col-3"
              } `}
          >
          <div className="blog-card">
            <div className="card-image">
              <img src="images/new-3.jpg" className="img-fluid w-100" alt="blog" />
            </div>
            <div className="blog-content">
              <p className="date">17/02/2023</p>
              <h5 className="title">Sản phẩm lớn tiếp theo của Apple ra mắt tháng 6</h5>
              <p className="desc">
              Kính thực tế ảo đầu tiên của Apple được cho là sẽ trình làng tại sự kiện dành cho nhà phát triển WWDC 2023.
              </p>
              <Link to="/blog/:id" className="button">
                Đọc Thêm
              </Link>
            </div>
            </div>
          </div> 

          <div
            className={` ${
            location.pathname === "/blogs" ? "col-6" : "col-3"
              } `}
          >
          <div className="blog-card">
            <div className="card-image">
              <img src="images/new-4.jpg" className="img-fluid w-100" alt="blog" />
            </div>
            <div className="blog-content">
              <p className="date">18/02/2023</p>
              <h5 className="title">TikTok - cơn ác mộng của phụ huynh</h5>
              <p className="desc">
              Người đàn ông 42 tuổi ở Alabama đăng video hát nhép lên TikTok, sau đó nhận được bình luận từ cô bé 14 tuổi ở Texas.
              </p>
              <Link to="/blog/:id" className="button">
                Đọc Thêm
              </Link>
            </div>
            </div>
          </div> 


      
    </>
  );
};

export default BlogCard;
