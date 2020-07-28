import React, { Component } from "react";
import SanPham from "./SanPham";
import {connect} from 'react-redux'

class DanhSachSanPham extends Component {
  renderSanPham = () => {
    //Lấy props từ component cha là mangSanPham render ra các Component card

    return this.props.mangSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham sanPham={sanPham} />
        </div>
      );
    });
  };
  render() {
      console.log(this.props.spChiTiet);
    return (
      <div>
        <h3>Danh sách sản phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>
        <h3 className="mt-5">Chi tiết sản phẩm</h3>
        <hr />
        <div className="row">
          <div className="col-4">
            <img height={350} src={this.props.spChiTiet.hinhAnh} alt="abc" />
          </div>
          <div className="col-8">
            <table className="table">
              <thead>
                <tr>
                  <td>Tên SP</td>
                    <td>{this.props.spChiTiet.tenSP}</td>
                </tr>
                <tr>
                  <td>Màn hình</td>
                  <td>{this.props.spChiTiet.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{this.props.spChiTiet.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{this.props.spChiTiet.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{this.props.spChiTiet.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{this.props.spChiTiet.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{this.props.spChiTiet.rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

//Đây là hàm lấy state từ redux chuyển thành props của component

const mapStateToProps = state =>{//state là rootReducer
    return {spChiTiet:state.stateBaiTapGioHang.spChiTiet}
}

export default connect(mapStateToProps)(DanhSachSanPham)
