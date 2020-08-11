import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
class Form_Validation extends Component {
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
    },
  };

  handleChange = (event) => {
    // let value = event.target.value; //event.target là thẻ (compnent) xảy ra sự kiện onChange
    // let name = event.target.name;
    let { value, name } = event.target;
    //Các thuộc tính nằm trên thẻ gọi là Attribute
    //Các thuộc tính của  đối tượng thẻ sau khi dom gọi là
    let label = event.target.getAttribute("label");
    let type = event.target.getAttribute("type");
    console.log("taikhoan:", value);
    //Tách giá trị  values và errors của state ra xử lý riêng.

    let newValues = { ...this.state.values, [name]: value };

    // Xử lý error
    //Kiểm tra rỗng
    let errorMess = "";
    if (value.trim() === "") {
      errorMess = label + " không được bỏ trống!";
    }
    //Kiểm tra nhập số
    if (type === "phone") {
      let regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value)) {
        errorMess = `${label} Chỉ được nhập số`;
      }
    }

    if (type === "email") {
      let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value)) {
        errorMess = `${label} không hợp lệ`;
      }
    }

    let newErrors = { ...this.state.errors, [name]: errorMess };

    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        console.log("state", this.state);
      }
    );
  };

  handleSubmit = (event) => {
    //ngăn sự kiện reload.
    event.preventDefault();

    let { values, errors } = this.state;

    //Duyệt các trường values của state.
    for (let key in values) {
      if (values[key].trim === "") {
        alert("Dữ liệu không hợp lệ!");
        return;
      }
    }

    //Duyệt các trường error cả state
    for (let key in errors) {
      if (errors[key].trim() != "") {
        alert("Dữ liệu không hợp lệ!");
        return;
      }
    }

    this.props.dispatch({
      type: "THEM_NGUOI_DUNG",
      nguoiDung: this.state.values,
    });
  };
  //   //Chạy sau khi nhận props mới và trước khi render =>trả về state mới.
  //   static getDerivedStateFromProps(newProps, currentState){
  //     //lấy props mới trả về state mới
  //     console.log('newprops:',newProps);
  //     //So sánh nếu nguoiDungEdit (được click) khác state hiện tại  thì lấy thằng newProps
  //     if (newProps.nguoiDungEdit.edit && newProps.nguoiDungEdit.taiKhoan!==currentState.values.taiKhoan){
  //       let newState = {...currentState, values:newProps.nguoiDungEdit}
  //       return {...newState};
  //     }
  //     return null;
  // }

  // componentWillReceiveProps(newsProps){
  //   this.setState({
  //     values:newsProps.nguoiDungEdit
  //   })
  // }

  render() {
    // let {taiKhoan, email, hoTen, matKhau, soDt, maNhom}  = this.props.nguoiDungEdit
    let { taiKhoan, email, hoTen, matKhau, soDt, maNhom } = this.state.values;
    return (
      <div className="card text-white bg-white text-dark text-center">
        <div classname="card-header bg-dark text-light">Form đăng ký</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit} className="container-fluid">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài khoản</p>
                  <input
                    defaultValue={taiKhoan}
                    value={taiKhoan}
                    label="Tài khoản"
                    type=""
                    className="form-control"
                    name="taiKhoan"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">
                    {this.state.errors.taiKhoan}
                  </p>
                </div>
                <div className="form-group">
                  <p>Mật khẩu</p>
                  <input
                    defaultValue={matKhau}
                    value={matKhau}
                    label="Mật khẩu"
                    type="password"
                    className="form-control"
                    name="matKhau"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">
                    {this.state.errors.matKhau}
                  </p>
                </div>
                <div className="form-group">
                  <p>Số điện thoại</p>
                  <input
                    defaultValue={soDt}
                    value={soDt}
                    label="Số điện thoại"
                    type="phone"
                    className="form-control"
                    name="soDt"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.soDt}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Họ tên</p>
                  <input
                    defaultValue={hoTen}
                    value={hoTen}
                    label="Họ tên"
                    type=""
                    className="form-control"
                    name="hoTen"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.hoTen}</p>
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    defaultValue={email}
                    value={email}
                    label="Email"
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group">
                  <p>Mã nhóm</p>
                  <input
                    defaultValue={maNhom}
                    value={maNhom}
                    label="Mã nhóm"
                    type=""
                    className="form-control"
                    name="maNhom"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.maNhom}</p>
                </div>
                <div className="form-group">
                  <button className="btn btn-success">Đăng ký</button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      //Sự kiện cập nhật
                      this.props.dispatch({
                        type: "CAP_NHAT",
                        nguoiDung: this.state.values,
                      });
                    }}
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
//prevProps: là props trước khi render. 
//prevState: là state trước khi render
  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.nguoiDungEdit, this.props.nguoiDungEdit)){
      //Chỉ setState khi người dùng bấm nút chỉnh sửa. 
      this.setState({
        values: this.props.nguoiDungEdit
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungEdit: state.QLSVReducer.nguoiDungEdit,
  };
};

export default connect(mapStateToProps, null)(Form_Validation);
