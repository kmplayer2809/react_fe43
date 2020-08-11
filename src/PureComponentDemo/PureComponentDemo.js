import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import ChildComponent_Pure from './ChildComponent_Pure'

export default class PureComponentDemo extends Component {

    state = {
        number:1,
        user: {
            id:1,
            name:'Thầy Nhựt'
        }
    }
    render() {
        return (
            <div className="container">
                <h1 className="display-4">{this.state.number}</h1>
                <button className="btn btn-dark display-4" onClick={()=>{
                    this.setState({
                        number:this.state.number +1
                    })
                }}>+</button>
                <button className="btn btn-success display-4" onClick={()=>{
                    let newUser = this.state.user;
                    newUser.name = 'Dĩ';
                    this.setState({
                        user: newUser
                    })
                }}>Change Name</button>
                <h3>Pure:{this.state.user.name}</h3>
                {/* <ChildComponent_Pure user={this.state.user} /> */}
                <ChildComponent user={{...this.state.user}} />
            </div>
        )
    }
}
