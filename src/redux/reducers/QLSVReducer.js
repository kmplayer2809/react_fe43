const initialState = {
  mangNguoiDung: [],
  nguoiDungEdit: {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    hoTen: "",
    maNhom: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "THEM_NGUOI_DUNG": {
      let mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];
      return { ...state, mangNguoiDung: mangNguoiDungUpdate };
    }
    case "CHINH_SUA": {
      //Lấy người dùng được click gắn vào nguoiDungEdit
      state.nguoiDungEdit = { ...action.nguoiDung };
      return { ...state };
    }
    case "CAP_NHAT": {
      let mangNguoiDungUpdate = [...state.mangNguoiDung];
      //Mối lần click cập nhật sẽ đưa giá trị người dùng nhập vào qua action.nguoiDung
      let index = mangNguoiDungUpdate.findIndex(nd => nd.taiKhoan===action.nguoiDung.taiKhoan);
      if (index !==-1){
        mangNguoiDungUpdate[index] = action.nguoiDung;

      }
      state.mangNguoiDung = mangNguoiDungUpdate;
      return {...state};
    }
    case "XOA_NGUOI_DUNG":{
      let mangNguoiDungUpdate = [...state.mangNguoiDung];
      let index = mangNguoiDungUpdate.findIndex(nd => nd.taiKhoan===action.taiKhoan);

      if (index!==-1){
        mangNguoiDungUpdate.splice(index,1);
      }
      state.mangNguoiDung = mangNguoiDungUpdate;
      return {...state}
    }
    default:
      return state;
  }
};
