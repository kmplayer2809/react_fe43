import React from "react";


export default function Product(props) {
    // let item = props.item;
    // let data = props.data;
    let {item, handleSelectedPro,handleBuy} = props;
  return (
    <div className="card">
      <img className="card-img-top" src={item.hinhAnh} alt="asdsad" />
      <div className="card-body">
        <h4 className="card-title">{item.tenSP}</h4>
        <button className="btn btn-success" onClick={()=>{
            // console.log("Dĩ đẹp trai")
            handleSelectedPro(item)
        }}>Chi tiết</button>
        <button type="button" className="btn btn-danger" onClick={()=>{
            // console.log("Dĩ đẹp trai");
            handleBuy(item)
        }}>
          Mua
        </button>
      </div>
    </div>
  );
}
