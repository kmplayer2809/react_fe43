import React, { Component } from 'react'
import BTProduct from './BTProduct'

export default class BTProductList extends Component {
    render() {
        return (

                <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <BTProduct />
                        <BTProduct />
                        <BTProduct />
                        <BTProduct />
                    </div>
                </section>
        )
    }
}
