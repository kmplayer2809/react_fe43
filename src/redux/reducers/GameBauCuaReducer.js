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
    case "TANG_GIAM":
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
    default:
      break;
  }
  return { ...state };
};

export default GameBauCuaReducer;
