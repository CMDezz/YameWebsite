import React, { Component } from 'react';

import ChiTietSanPham from '../../Pages/ChiTietSanPham'

export class Modal extends Component {
    render() {
        return (
            <div>

                <div className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            {/* <ChiTietSanPham name={this.props.name} main={this.props.main} src={this.props.src} price={this.props.price} sale={this.props.sale} sPrice={this.props.sPrice}></ChiTietSanPham> */}
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Modal;
