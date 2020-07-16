import React from 'react'

export default function FunctionProps(props) {
    
    return (
        <div>
           <h1 className="text-center">Stateless Component</h1>
            <div className="card w-25">
                <img className="card-img-top w-100" src={props.pinkImg.srcImg} alt s />
                <div className="card-body">
                    <h4 className="card-title">{props.pinkImg.name}</h4>
                     <p className="card-text">{props.pinkImg.age}</p>
                </div>
            </div>

        </div>
    )
}
