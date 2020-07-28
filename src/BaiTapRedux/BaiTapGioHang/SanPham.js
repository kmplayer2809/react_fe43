import React, { Component } from 'react'
import {connect} from 'react-redux'

class SanPham extends Component {
    render() {
        let {sanPham} = this.props;
        return (
            <div className="card text-left">
                <img style={{height:350}} src={sanPham.hinhAnh} alt="123" className="card-img-top"/>
                <div className="card-body">
                    <h4 className="card-title">
                        {sanPham.tenSP}
                    </h4>
                    <p className="card-text">
                        {sanPham.gia}
                    </p>
                    <button className="btn btn-success" onClick={()=>{
                        this.props.xemChiTiet(sanPham)
                    }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}

//Hàm lấy giá trị callback từ store về để đưa dữ liệu lên redux

const mapDispatchToProps = (dispatch) =>{
    return {
        xemChiTiet:(sanPham)=>{//Định  nghĩa 1 props cho componnent này là 1 hàm. 
            //Dùng hàm dispatch của redux đưa sản phẩm lên tất cả reducer
            console.log('Sản phẩm được click: ',sanPham);
            //Dùng hàm dispatch từ redux trả ra để đưa dữ liệu lên reducer xử lý. 
            const action = {
                type:"XEM_CHI_TIET", //giá trị bắt buộc phải có
                sanPham
            }
            dispatch(action);// Gửi lên reducer
        }
    }
}
export default connect(null, mapDispatchToProps)(SanPham)