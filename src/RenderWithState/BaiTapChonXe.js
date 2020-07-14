import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state ={
        srcImg: './img/black-car.jpg'
    }

    changeColor = (color) =>{
        let imgColor = `./img/${color}-car.jpg`;
        //setState cho src tấm hình thay đổi để giao diện render lại. 
        this.setState({
            srcImg:imgColor
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-6">
                        <img className="w-100" src={this.state.srcImg} alt="123"/>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <button className="btn text-white px-3" style={{backgroundColor:'red'}} onClick={()=>{
                                    this.changeColor('red')
                                    //Cách thông minh
                                }}>Red Color</button>
                            </div>
                            <div className="col-3">
                                <button className="btn text-white px-3" style={{backgroundColor:'black'}} onClick={()=>{
                                    //Cách gọi ngu ngốc
                                    this.setState({
                                        srcImg:'./img/black-car.jpg'
                                    })
                                }}>Black Color</button>
                            </div>
                            <div className="col-3">
                                <button className="btn text-white px-3" style={{backgroundColor:'silver'}} onClick={()=>{
                                    this.changeColor('silver')
                                }}>Silver Color</button>
                            </div>
                            <div className="col-3">
                                <button className="btn text-white px-3" style={{backgroundColor:'gray'}} onClick={()=>{
                                    this.changeColor('steel')
                                }}>Steel Color</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
