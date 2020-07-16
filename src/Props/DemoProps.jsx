import React, { Component } from 'react'
import ClassProps from './ClassProps';
import FunctionProps from './FunctionProps';

export default class DemoProps extends Component {
    render() {
        const violet = {
            srcImg: "https://1.bp.blogspot.com/-8gG1Wnlg5hg/XPR86EWnUJI/AAAAAAAA4NY/WWgAhEPLofI_p4mUDYjjb7VzHTqlUJOjwCLcBGAs/s1600/violet.jpg",
            name: "Sống nội tâm",
            age: 21
        }

        const pink = {
            srcImg:'https://www.theflowers.vn/wp-content/uploads/2017/09/hoa-lua-mau-hong.jpg',
            name:'Hồng mạnh mẽ',
            age:21
        }
        return (
            <div>
                {/* truyền props srcImg cho  component ClassProps */}
                <ClassProps image={violet}/>

                <FunctionProps pinkImg={pink}/>


            </div>
        )
    }
}
