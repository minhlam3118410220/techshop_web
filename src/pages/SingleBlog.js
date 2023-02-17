import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Bảng Tin"} />
      <BreadCrumb title="Bảng Tin" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Trở Về Tin Tức
              </Link>
              <h3 className="title">Rộ tin đồn Apple tìm ra cách lách luật dù bị buộc sử dụng cổng USB-C</h3>
              <img src="/images/new-1.jpg" className="img-fluid w-100 my-4" alt="blog" />
              <p>


              Luật mới của EU, và mới đây là Ấn Độ, về tiêu chuẩn cổng sạc USB-C được đưa ra nhằm mục đích làm cho tất cả các loại cáp sạc có thể hoán đổi cho nhau. Nhưng một tin đồn mới về iPhone 15 cho biết Apple đã tìm ra cách để thay đổi khái niệm này theo hướng có lợi cho mình.
              <br/>
              Về cơ bản, các quy định mới yêu cầu một tiêu chuẩn sạc chung, cụ thể là USB-C, đã được Liên minh Châu Âu hoàn thiện vào tháng 10 năm 2022. Ngày luật có hiệu lực, cộng với những thiết bị được áp dụng, có nghĩa là iPhone 15 “có thể” có USB-C, nhưng iPhone 17 chắc chắn sẽ phải có cổng sạc này.
              <br/>
              Nhưng tin đồn chưa được kiểm chứng đăng trên mạng xã hội Weibo của Trung Quốc nói rằng Apple có thể sẽ tuân thủ nội dung của luật, nhưng sẽ lách luật để vẫn giữ nguyên phong cách kinh doanh của mình.
              <br/>
              "Apple đã tạo ra một loại tiêu chuẩn IC tương tự trên cáp lightning cho cáp Type-C của riêng mình, sẽ được sử dụng trên iPhone mới trong năm nay và chứng nhận MFi cho các thiết bị ngoại vi", một người dùng tự xưng là chuyên gia chip điện thoại di động đã chia sẻ.
              <br/>
              "MFi" trong trường hợp này là viết tắt của chương trình chứng nhận "Made for iPhone" của Apple. Trong chương trình, Apple sẽ phê duyệt các phụ kiện, bán các bộ phận như đầu nối và cung cấp chip cho mục đích xác thực. Từ năm 2014, Apple đã cắt giảm phí áp dụng cho hệ thống cấp phép này và giờ đây nó ít được biết đến, nhưng vẫn còn hiệu lực.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
