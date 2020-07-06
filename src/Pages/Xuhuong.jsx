import React, { Component } from 'react';
import HotProductList from '../Components/HotProducts/HotProductList';

export class Xuhuong extends Component {
    render() {
        return (
            <div>
                <HotProductList hotProductData={this.props.QuanData}></HotProductList>
                <HotProductList hotProductData={this.props.PhukienData}></HotProductList>
                <HotProductList hotProductData={this.props.AoData}></HotProductList>

            </div>
        );
    }
}

export default Xuhuong;
