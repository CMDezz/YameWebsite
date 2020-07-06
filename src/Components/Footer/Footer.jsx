import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer1">
                    <div className="col1">
                        <img src="./img/newLogo.png"></img>
                        <h1>Thông tin</h1>
                        <a href='#'>Giới thiệu về YaMe.vn</a>
                        <a href="#">Tuyển dụng</a>
                        <a href="#">.</a>
                        <a href="#">Quy chế hoạt động</a>
                        <a href="#">Điều khoản mua bán</a>
                        <a href="#">.</a>
                        <a href="#">Mã Voucher giảm giá</a>
                    </div>
                    <div className="col2">
                        <h5>Đặt hàng và thu tiền tận nơi toàn quốc</h5>
                        <h1>(028) 7307 1441</h1>
                        <h1>CSKH</h1>
                        <a href="#">Than phiền/Chăm sóc khách hàng</a>
                        <h1>FAQ</h1>
                        <a href="#">Vận chuyển</a>
                        <a href="#">Chính sách đổi trả</a>
                        <a href="#">Chính sách bảo hành</a>
                        <a href="#">Khách hàng VIP</a>
                        <a href="#">Đối tác cung cấp</a>
                       
                    </div>
                    <div className="col3">
                        <h5>Hệ thống cửa hàng YaMe.vn</h5>
                        <a href="#">TP.HỒ CHÍ MINH</a>
                        <a href="#">TÂY NAM BỘ</a>
                        <a href="#">ĐÔNG NAM BỘ & TÂY NGUYÊN</a>
                    </div>
                </div>
                <div className="footer2">
                    <div>
                        <h5>© 2019 - CÔNG TY TNHH YAME VN</h5>
                        <h6>Giấy CNĐKDN: 0310874914 – Ngày cấp: 25/11/2011 - Cơ quan cấp: Phòng Đăng Ký Kinh Doanh – Sở Kế Hoạch và Đầu Tư TP.HCM</h6>
                        <h6>Địa chỉ đăng ký kinh doanh: 766/3B-3C Sư Vạn Hạnh (Nối dài), Phường 12, Quận 10, TP.HCM - Điện thoại: 028 3868 4857 - Email: cskh@yame.vn</h6>
                    </div>
                    <div>
                    <img src="./img/dathongbao.png"></img>
                    </div>
                      </div>

            </div>
        );
    }
}

export default Footer;
