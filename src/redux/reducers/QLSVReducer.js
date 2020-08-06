
const initialState = {
  mangNguoiDung: [
    {
      taiKhoan: "dideptrai",
      matKhau: "Dideptraihihi",
      email: "dideptrai@gmail.com",
      soDt: "1800 1061",
      hoTen: "Huỳnh Trọng Dĩ",
      maNhom: "GP01",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "THEM_NGUOI_DUNG": {
      // let mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];
      // return {...state, mangNguoiDung:mangNguoiDungUpdate};
      console.log(action);
      return {
        ...state,
        mangNguoiDung: [...state.mangNguoiDung, action.nguoiDung],
      };
    }

    default:
      return state;
  }
};
