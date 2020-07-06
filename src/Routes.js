import React, { Component } from 'react';

import ChiTietSanPham from './Pages/ChiTietSanPham';
import HomePage from './Pages/HomePage';


const Routes = [
    {path:'/',exact:true,main:()=><HomePage/>},
    {path:'/chi-tiet-san-pham/:id',exact:true,main:()=><ChiTietSanPham data="asd"></ChiTietSanPham>}
]


export default Routes;
