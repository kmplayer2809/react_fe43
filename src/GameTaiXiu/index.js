import React, { Component } from "react";
import DieuKhien from "./DieuKhien";
import Choi from "./Choi";
import { connect } from "react-redux";
import KetQua from "./KetQua";
export default class GameTaiXiu extends Component {
  render() {
    return (
      <section
        className="xi-ngau"
        style={{
          background: "url(./img/bg.jpg)",
          height: "100vh",
          overflowX: "hidden",
        }}
      >
        <h1
          className="text-center"
          style={{ color: "white", fontWeight: "bold", fontSize: 50 }}
        >
          Game Tài Xỉu
        </h1>
        <DieuKhien />
        <KetQua />
        <Choi />
      </section>
    );
  }
}
