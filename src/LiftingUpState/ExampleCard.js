import React, { Component } from "react";
import data from "./data.json";
import Card from "./Card";
import ProductList from "./ProductList";

export default class ExampleCard extends Component {
  state = {
    proList: data,
    proSelected: null,
    cardList: [],
  };
  // Xử lý 2 nút tăng giảm số lượng.
  tangGiamSoLuong = (maSP, tangGiam) => {
    //Tăng là true giảm là false
    // Tìm ra sản phẩm chứa mã SP = với maSP nút tăng giảm số lượng click

    console.log("Dĩ đẹp trai");
    let gioHangCapNhat = [...this.state.cardList];
    let index = gioHangCapNhat.findIndex(
      (spGioHang) => spGioHang.maSP === maSP
    );
    if (index !== -1) {
      if (tangGiam) {
        gioHangCapNhat[index].soLuong++;
      } else if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong--;
      } else {
        alert("Số lượng tối thiểu =1");
      }
    }

    // console.log(gioHangCapNhat);
    //setState lại
    this.setState({
      cardList: gioHangCapNhat,
    });
  };

  handleSelectedPro = (pro) => {
    this.setState({ proSelected: pro });
  };
  handleBuy = (card) => {
    //tạo cardList mới
    let cardListUpdate = [...this.state.cardList];
    //Tìm vị trí của phần tử trong mảng
    let index = cardListUpdate.findIndex((item) => item.maSP === card.maSP);
    if (index >= 0) {
      //tìm thấy
      cardListUpdate[index].soLuong++;
    } else {
      //không tìm thấy
      card.soLuong = 1;
      cardListUpdate = [...cardListUpdate, card];
    }
    //set State
    this.setState({
      cardList: cardListUpdate,
    });
  };
  handleDelete = (card) => {
    /**
     * 1. Tìm vị trí đang đứng.
     * 2. Cắt ra khỏi mảng
     * 3. Set state
     */
    let cardListUpdate = [...this.state.cardList];
    let index = cardListUpdate.findIndex((item) => item.maSP === card.maSP);
    cardListUpdate.splice(index, 1);
    this.setState({
      cardList: cardListUpdate,
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <Card
            tangGiamSoLuong={this.tangGiamSoLuong}
            cardList={this.state.cardList}
            handleDelete={this.handleDelete}
          />
          <ProductList
            proList={this.state.proList}
            handleSelectedPro={this.handleSelectedPro}
            handleBuy={this.handleBuy}
          />
          {this.state.proSelected ? (
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.proSelected.hinhAnh}
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.proSelected.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.proSelected.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.proSelected.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.proSelected.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.proSelected.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.proSelected.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
