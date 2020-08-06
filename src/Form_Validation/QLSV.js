import React, { Component } from "react";
import Form_Validation from "./Form_Validation";
import { connect } from "react-redux";
class QLSV extends Component {
  renderTable = () => {
    return this.props.mangNguoiDung.map((nguoiDung, index) => {
      return (
        <tr key={index}>
          <td>{nguoiDung.taiKhoan}</td>
          <td>{nguoiDung.matKhau}</td>
          <td>{nguoiDung.hoTen}</td>
          <td>{nguoiDung.email}</td>
          <td>{nguoiDung.soDt}</td>
          <td>{nguoiDung.maNhom}</td>
          <td>
            <button className="btn btn-primary" onClick={()=>{
              this.props.dispatch({type:'CHINH_SUA',nguoiDung})
            }}>Chỉnh sửa</button>
            <button className="btn btn-danger" onClick={()=>{
              this.props.dispatch({type:'XOA_NGUOI_DUNG',taiKhoan:nguoiDung.taiKhoan})
            }}>Xóa</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <Form_Validation />
        <table className="table">
          <thead>
            <tr>
              <th>Tài khoản</th>
              <th>Mật khẩu</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Mã nhóm</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mangNguoiDung: state.QLSVReducer.mangNguoiDung,
    nguoiDungEdit: state.QLSVReducer.nguoiDungEdit,
  };
}

export default connect(mapStateToProps, null)(QLSV);
