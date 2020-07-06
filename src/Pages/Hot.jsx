import React, { Component } from 'react';
import HotProductList from './../Components/HotProducts/HotProductList'

export class Hot extends Component {
    render() {
        return (
            <div>
                <HotProductList hotProductData={this.props.PhukienData}>></HotProductList>
                <HotProductList hotProductData={this.props.AoData}>></HotProductList>
                <HotProductList hotProductData={this.props.QuanData}>></HotProductList>
            </div>
        );
    }
}

export default Hot;
