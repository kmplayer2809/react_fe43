import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    productList = [
        { id: 1, name: 'iPhone Pro Max', price: 10000000 },
        { id: 2, name: 'iPhone Xs Max', price: 20000000 },
        { id: 3, name: 'Samsung S20 Ultra', price: 30000000 }
    ]
    renderProductList = () => {
        let arrProductJSX = [];
        // for (let i=0; i < this.productList.length;i++ ){
        //     //Duyệt qua mảng lấy sra từng phần tử
        //     let product = this.productList[i];

        //     //Từ product tạo ra thẻ tr 
        //     let trProduct = <tr key={i}>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><button className="btn btn-danger">Xóa</button></td>
        //     </tr>;
        //     //Push vào mảng kết quả
        //     arrProductJSX.push(trProduct); //[<tr></tr>, <tr>...</tr>,...,<tr>...</tr>]
        // }
        // return arrProductJSX;

        return this.productList.map((productItem, index) => {
            return <tr key={index}>
                <td>{productItem.id}</td>
                <td>{productItem.name}</td>
                <td>{productItem.price}</td>
                <td><button className="btn btn-danger">Xóa</button></td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <h3 className="display-4">
                    Product List
                </h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProductList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
