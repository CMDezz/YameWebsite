import React, { Component } from 'react';

import './ChiTietSanPham.css'

import AoData from '../Data/AoData';


export class ChiTietSanPham extends Component {
    componentDidMount() {
        let arr=[...this.props.data]
        let command =``;
        arr[0][0].chiTiet.map(d=>{
            command += `<tr>
                            <th scope="row">${d.ma}</th>
                            <td>${d.ten}</td>
                            <td>${d.size}</td>
                            <td>${d.soLuong}</td>
                        </tr>`;

        })

        let content = ``;
        arr[0][0].src.map(x=>{
            content+= `<img src=../${x}></img>`
        })

        this.im.innerHTML =`${content}`

        this.tab.innerHTML = `${command}`; 
        
         }

    render() {
        let arr= [...this.props.data]
        
        let price =arr[0][0].sale?arr[0][0].sPrice:arr[0][0].price
       
        
        return (
            <div>
                <h1 className="detail">Chi tiết sản phẩm</h1>
                <div className="chiTietSP">
                    <div className="anhSP">
                        <img src={"../"+arr[0][0].main}></img>
                    </div>
                    <div className="thongTinSP">
                        <p><span>Tên Sản Phẩm :</span> {arr[0][0].name}</p>
                        <p className="text-danger"> <span>Giá Sản Phẩm : </span>{price}</p>
                        <div classname="tinhTrangSP">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã sản phẩm</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Số lượng </th>
                                    </tr>
                                </thead>
                                <tbody ref={tab => this.tab = tab}  className="bodyTable" >
                                  
                                </tbody>
                            </table>
                        </div>
                        <div ref={im=>this.im=im} className="hinhAnhPhu">
                         
                
                        </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default ChiTietSanPham;
