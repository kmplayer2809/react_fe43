import React, { Component } from 'react'

export default class ReactLifeCycle extends Component {
    constructor(props){
        
        super(props);
        console.log('constructor');
        this.state = {
            number: 1
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        return null; //Trả về state mới. 

    }

    render() {
        console.log('render');
        return (
            <div>
                {this.state.number}
                <button className="btn btn-danger" onClick={()=>{
                    this.setState({number:this.state.number+1})
                }}>+</button>
            </div>
        )
    }



//Chạy sau khi render và chỉ chạy 1 lần duy nhất. 

componentDidMount(){
    console.log('componentDidMount');
}
componentDidUpdate(prevProps, prevState){
    //prevProps: là props mới, prevState là state mới. 
    // Chạy sau khi render và chạy khi state hoặc props thay đổi. 
    //Lưu ý: Không setState trong lifecycle này sẽ đi vào lặp vô tận.
    console.log('componentDidUpdate');
}


componentWillUnmount(){
    //Chạy khi component bị xóa khỏi giao diện. 
    console.log('componentWillUnmount');

}
};