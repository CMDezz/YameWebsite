import React, { Component } from 'react';
import HotProductList from '../Components/HotProducts/HotProductList';

export class Aokhoac extends Component {
    render() {
        return (
            <div>
                <HotProductList hotProductData={this.props.AoData} ></HotProductList>
                <HotProductList hotProductData={this.props.AoData} ></HotProductList>
                <HotProductList hotProductData={this.props.AoData} ></HotProductList>
            </div>
        );
    }
}

export default Aokhoac;
