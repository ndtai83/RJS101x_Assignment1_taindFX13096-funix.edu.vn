import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import StaffList from './components/StaffListComponent.js';
import StaffList from './components/StaffListComponent';
import { STAFFS } from './shared/staffs';
import { Component } from 'react/cjs/react.production.min';
// import {STAFFS} from './shared/staffs.js';

class App extends Component {
// function App(props) {
// function App() {
  constructor (props) {
    super(props);
    this.state = {
      // staffs : null,
      staffs : STAFFS
    };
  }
  render () {
  return (
    <div>
      <div>
        <h1>Ứng dụng quản lý nhân sự v1.0</h1>
        {/* <h1 style={{color: "white", backgroundColor: "blue"}}>Ứng dụng quản lý nhân sự v1.0</h1> */}
      </div>

      {/* Add Navbar with reactstrap */}
        {/* <Navbar>
          <div>
            <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar> */}
      {/* <StaffList staffs={this.state.staffs.name}/></StaffList> */}
      {/* <StaffList name="Quần jean" type="Skinny" color ="Đen" size = "L">Clothes 1</StaffList> */}

      <StaffList staffs={this.state.staffs}/>
    </div>
  );
  }
}
// }

export default App;
