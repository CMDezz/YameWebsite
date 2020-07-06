import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage';
import ChiTietSanPham from './Pages/ChiTietSanPham';
import Hot from './Pages/Hot'
import Giamgia from './Pages/Giamgia';
import Aokhoac from './Pages/Aokhoac';
import Xuhuong from './Pages/Xuhuong';



import './App.css';


import Data from '././Data/Data';
import AoData from '././Data/AoData';
import QuanData from '././Data/QuanData';
import PhukienData from '././Data/PhukienData';
import saleData from '././Data/SaleData';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      AoData: AoData,
      QuanData: QuanData,
      PhukienData: PhukienData,
      saleData: saleData,
      dulieuChitiet: [],
      thu: ''
    }
  }

  finally = (dulieu) => {
    let newAr = [];
    newAr.push(dulieu);
    let ar = [1, 2, 3]
    // this.setState({dulieuChitiet:this.state.dulieuChitiet.concat(ar)}); 
    this.setState({
      dulieuChitiet: [...this.state.dulieuChitiet, newAr]
    })
  }



  render() {
    let data = this.state.data
    let AoData = this.state.AoData
    let QuanData = this.state.QuanData
    let PhukienData = this.state.PhukienData
    let saleData = this.state.saleData;






    return (
      <Router>
        <div className="Yame container" >
          <Navbar ></Navbar>

          <Route path='/' exact={true} component={() => <HomePage getDulieu={this.finally} data={data} AoData={AoData} QuanData={QuanData} PhukienData={PhukienData} saleData={saleData} />} ></Route>

          <Route path='/chi-tiet-san-pham/:id' component={() => <ChiTietSanPham data={this.state.dulieuChitiet}></ChiTietSanPham>}></Route>

          <Route path='/san-pham-hot' component={() => <Hot PhukienData={PhukienData}
            AoData={AoData} QuanData={QuanData} ></Hot>}></Route>

          <Route path='/san-pham-giam-gia' component={() => <Giamgia PhukienData={PhukienData}
            AoData={AoData} QuanData={QuanData} ></Giamgia>}></Route>

          <Route path='/ao-khoac' component={() => <Aokhoac AoData={AoData} ></Aokhoac>}></Route>

          <Route path='/xu-huong' component={() => <Xuhuong PhukienData={PhukienData}
            AoData={AoData} QuanData={QuanData} ></Xuhuong>}></Route>


          <Footer />
        </div>
      </Router>



    );
  }
}

export default App;
