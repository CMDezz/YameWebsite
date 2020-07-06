import React, { Component } from 'react';
//import components
import Navbar from '.././Components/Navbar/Navbar';
import Slider from '.././Components/Slider/Slider';
import Album from '.././Components/Album/Album';
import HotProductList from '.././Components/HotProducts/HotProductList'
import Sale from '.././Components/Sale/Sale';
import Footer from '.././Components/Footer/Footer';
import ChiTietSanPham from '.././Pages/ChiTietSanPham'


import Data from '.././Data/Data';
import AoData from '.././Data/AoData';
import QuanData from '.././Data/QuanData';
import PhukienData from '.././Data/PhukienData';
import saleData from '.././Data/SaleData';


export class HomePage extends Component {
    render() {
        let cover1 = ['./img/cover.jpg','./img/newCover.jpg','./img/newCover2.jpg'];
        let cover2 = ['./img/cover2.jpg','./img/newCover3.jpg','./img/newCover2.jpg']
        let caiGiDo=(duLieu)=>{
            this.props.getDulieu(duLieu);
        }
      let   hamTaoGoi = (dataa) => {
            caiGiDo(dataa);
            return (dataa);   //đã nhận được dataa
        }
        return (
            <div>

                <Slider img ={cover1}></Slider>
                <Album data={this.props.data} ></Album>
                <div className="hotProductAo zoom">
                    <div className="titlee">
                        <h1>Top sản phẩm HOT</h1>
                        <p>Nhưng sản phẩm thời trang hot nhất/mới nhất</p>
                    </div>
                    <HotProductList  Culua2vn={hamTaoGoi} hotProductData={this.props.AoData} ></HotProductList>
                </div>
                <Slider img={cover2}></Slider>
                <div className="hotProductQuan zoom">
                    <HotProductList hotProductData={this.props.QuanData}></HotProductList>
                </div>
                <div className="hotProductPhukien zoom">
                    <HotProductList hotProductData={this.props.PhukienData}></HotProductList>
                </div>
                <Sale saleData={this.props.saleData}></Sale>
            </div>
        );
    }
}

export default HomePage;
