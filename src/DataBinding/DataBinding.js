import React, { Component } from 'react'
import styleDatabinding from './DataBinding.module.css';

export default class DataBinding extends Component {

	//SanPham hiện tại là 1 thuộc tính.
	sanPham = {
		ma: 1,
		tenSP: "S20 Ultra",
		gia: 29990000,
		hinhAnh: 'https://picsum.photos/200/100'
	}

	//Phương thức
	renderThongTin = () => {
		return <div className="card w-25">
			<img className="card-img-top" src={this.sanPham.hinhAnh} alt />
			<div className="card-body">
				<h4 className="card-title">{this.sanPham.tenSP}</h4>
				<p className="card-text">{this.sanPham.gia}</p>
			</div>
		</div>
	}

	render() {
		let title = "CYBERSORF";
		let srcImg = `https://picsum.photos/200/300`
		let hocVien = {
			ma: 1,
			ten: 'Huỳnh Trọng Dĩ',
			tuoi: 21
		};

		const renderImg = () => {
			// return về component (jsx); Nội dung hàm phải trả về 1 số, chuỗi, hoặc thẻ html, hoặc component có duy nhất 1 thẻ bao phủ.
			return (<div>
				<img src="https://picsum.photos/300/200" />
			</div>
			)
		}
		let objectStyle ={backround:'#000'};

		return (
			<div>
				<h1 style={objectStyle} id="title" className="titleDemo">{title}</h1>
				<img src={srcImg} />
				<div className="card w-25">
					<img className="card-img-top" src={'https://picsum.photos/180/50'} alt />
					<div className="card-body">
						<h4 className="card-title">Họ tên: {hocVien.ten}</h4>
						<p className="card-text">Tuổi: {hocVien.tuoi}</p>
					</div>
				</div>
				<div className="container">

					{this.renderThongTin()}
					{renderImg()}
				</div>
			</div>

		)
	}
}
