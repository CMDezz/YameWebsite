import React, { Component } from 'react';
import HotProduct from './HotProduct';

import './HotProductList.css'

export class HotProductList extends Component {
    render() {

        let hamGiDo=(dulieu)=>{
            this.props.Culua2vn(dulieu);     // callBack đến root
        }
       
        let myCalbackFunction=(data)=>{  
            hamGiDo(data);
            return (data);                      // Đã nhận được data từ Comp3
        }

        let data = this.props.hotProductData.map(d=>{
            return <HotProduct callBackFromParent={myCalbackFunction} name={d.name} main={d.main} src={d.src} price={d.price} sale={d.sale} sPrice={d.sPrice} full={d}></HotProduct>
        })
        return (
                <div className=" hotProductList ">
                    {data}
                    
                </div>
           
        );
    }
}

export default HotProductList;
