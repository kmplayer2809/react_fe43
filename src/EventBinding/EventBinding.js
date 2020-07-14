import React, { Component } from 'react'

export default class EventBinding extends Component {

    handelClick = () =>{
        alert('Hello Di dep trai');
    }

    showMessage = (mess) =>{
        alert("Hello " + mess);
    }

    render() {
        return (
            <div>
                {/*Cách 1: Truyền callback function xử lý sự kiện*/}
                <button onClick={this.handelClick}>Click me</button>

                <br />
                <hr />
                {/* Cách 2: Dùng arrowfunction  */}
                <h1 className="display-3">Cách 2: Dùng arrow function</h1>
                <button className="btn btn-danger" onClick={()=>{
                    this.handelClick();
                }}>Click me</button>

                <br />

                <button className="btn btn-dark" onClick={()=>{this.showMessage("Dĩ chứ ai")}} >Show Message</button>
                </div>
        )
    }
}
