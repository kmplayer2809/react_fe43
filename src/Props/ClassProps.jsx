import React, { Component } from 'react'


export default class ClassProps extends Component {
    render() {
        //stateful component: là class
        //stateless componnt: là function
        const {srcImg, name, age} = this.props.image;
        return (
            <div>
                <h1 className="text-center">Stateful Component</h1>
                <div className="card">
                    <img className="card-img-top" src={srcImg} alt="abc" style={{width:"300px"}}/>
                    <div className="card-body">
                        <h4 className="card-title">{age}</h4>
                        <p className="card-text">{name}</p>
                    </div>
                </div>
            </div>

        )
    }
}
