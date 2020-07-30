import { getRandomInt } from "../../utils/randomInt";
import {TANG_GIAM} from "../constants/GameBauCuaConst";
const initialState = {
  tongTien: 100,
  danhSachCuoc: [
    {
      ma: "bau",
      hinhAnh: "./img/bau.png",
      giacuoc: 0,
    },
    {
      ma: " cua",
      hinhAnh: "./img/cua.png",
      giacuoc: 0,
    },
    {
      ma: "tom",
      hinhAnh: "./img/tom.png",
      giacuoc: 0,
    },
    {
      ma: "ca",
      hinhAnh: "./img/ca.png",
      giacuoc: 0,
    },
    {
      ma: "nai",
      hinhAnh: "./img/nai.png",
      giacuoc: 0,
    },
    {
      ma: "ga",
      hinhAnh: "./img/ga.png",
      giacuoc: 0,
    },
  ],
  xucXac: [
    {
      ma: "bau",
      hinhAnh: "./img/bau.png",
    },
    {
      ma: "cua",
      hinhAnh: "./img/cua.png",
    },
    {
      ma: "tom",
      hinhAnh: "./img/tom.png",
    },
  ],
};

const GameBauCuaReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TANG_GIAM:
      let { tongTien } = state;
      let danhSachCuoc = [...state.danhSachCuoc];
      let index = danhSachCuoc.findIndex((item) => item.ma === actions.ma);
      if (index != -1) {
        if (actions.tangGiam) {
          //cộng
          if (tongTien > 0) {
            danhSachCuoc[index].giacuoc += 10;
            tongTien -= 10;
          } else {
            alert("Hết tiền rồi sao đặt, ngu vậy.");
          }
        }
        //trừ
        else {
          if (danhSachCuoc[index].giacuoc > 0) {
            danhSachCuoc[index].giacuoc -= 10;
            tongTien += 10;
          } else {
            alert("Làm gì có chuyện đặt tiền âm, khôn như thế quê tôi đầy ^_^");
          }
        }
      }
      return { ...state, danhSachCuoc, tongTien }; //bị thay đổi địa chỉ dẫn đến render lại.
    case "CHOI_GAME": {
      let danhSachCuoc = [...state.danhSachCuoc];
      let { tongTien } = state;

      //tạo xúc xắc ngẫu nhiên
      let xucXac = [
        danhSachCuoc[getRandomInt(6)],
        danhSachCuoc[getRandomInt(6)],
        danhSachCuoc[getRandomInt(6)],
      ];
      //lấy những con cược ra
      danhSachCuoc = danhSachCuoc.filter((ele) => ele.giacuoc > 0);

      //trả lại tiền những con trúng
      for (let ele of danhSachCuoc) {
        let traLaiTien = xucXac.find((item) => item.ma === ele.ma);
        if (traLaiTien) {
          tongTien += ele.giacuoc;
        }
      }
      // trúng thưởng
      for (let ele of xucXac) {
        let trungThuong = danhSachCuoc.find((item) => item.ma === ele.ma);
        if (trungThuong) {
          tongTien += trungThuong.giacuoc;
        }
      }

      //reset danh sách cược. 
      danhSachCuoc = state.danhSachCuoc.map((item) => ({
        ...item,
        giacuoc: 0,
      }));

      return { ...state, xucXac, tongTien, danhSachCuoc };
    }
    default:
      break;
  }
  return { ...state };
};

export default GameBauCuaReducer;
