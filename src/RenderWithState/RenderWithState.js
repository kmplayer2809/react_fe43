import React, { Component } from 'react'

export default class RenderWithState extends Component {


    //this.state:Thuộc tính chứa những giá trị thay đổi khi người dùng thao tác trên giao diện. Có sẵn của Component

    state = {
        isLogin:false
    }


    isLogin = false;
    userName = 'Dĩ';
    renderContent = ()=>{
        if(this.state.isLogin){
            return <p>hello {this.userName}</p>
        }
        else return <button onClick={()=>{this.login()}}>Đăng nhập</button>
    }

    login = ()=>{
        // this.state.isLogin = true;
        // console.log(this.state.isLogin);
        // this.render();
        let newState = {
            isLogin:true
        }
        //Phương thức this.setState là 1 phương thức có sẵn của component làm 2 nhiệm vụ, 1 là thay đổi giá trị state, 2 là gọi this.render lại giao diện.
        //this.setState là 1 phương thức bất đồng bộ
        this.setState(newState,()=>{
            console.log(this.state)
        })
        
    }


    render() {
        return (
            <div>
                {/* {this.isLogin ? <p>hello {this.userName}</p> : <button>Đăng nhập</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}
