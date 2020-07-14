import React, { Component } from 'react'
import BTBanner2 from './BTBanner2'
import BTItem2 from './BTItem2'

export default class BTBody2 extends Component {
    render() {
        return (
            <div className="container">
                <BTBanner2 />
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTItem2 />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTItem2 />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTItem2 />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTItem2 />
                    </div>
                </div>

            </div>

        )
    }
}
