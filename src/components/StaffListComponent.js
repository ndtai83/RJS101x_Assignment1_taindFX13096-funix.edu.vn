import React, { Component } from "react";
import '../App.css';
// import './App.css';
// import { STAFFS } from './shared/staffs';

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs : null,
            // staffs : STAFFS
        };
    }

    onStaffClick(staff) {
        this.setState({
            staffs: staff,
        });
    }

    renderstaff(staff) {
        if(staff != null) {
            return (
                <div class="detail">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4>Họ và tên: {staff.name}</h4>
                    <p>Ngày sinh: {staff.doB}</p>
                    <p>Ngày vào công ty: {staff.startDate}</p>
                    <p>Phòng ban: {staff.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {staff.overTime}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>Bấm vào tên nhân viên để xem thông tin.</p>
                </div>
            );
        }
    }

    render() {
        
            //const StaffList = (props) => {
            // console.log(this.props) //Giá trị của props
            // console.log(this.props.staffs[0].name);
            const staffList = this.props.staffs.map((staff) => {
                return (
                    // <div style={{color: "red"}} onClick = {() => this.onStaffClick(staff)}>
                    <div className="col-md-4" onClick = {() => this.onStaffClick(staff)}>
                        {/* <li class="list">{staff.name}</li> */}
                        <p class="list">{staff.name}</p>
                    </div>
                );
            })
            return (
                <div className = "container">
                    <div class = "row">
                        {staffList}
                    </div>
                    <div>
                        {/* {this.onStaffClick(this.state.staffs)} */}
                        {this.renderstaff(this.state.staffs)}
                    </div>
                </div>
            );

    }

}

export default StaffList;