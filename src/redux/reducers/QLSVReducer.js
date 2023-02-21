const initialState = {
  mangSinhVien: [
    {
      maSV: "sv001",
      hoTen: "Hoàng Thanh Hải",
      sdt: "02139012",
      email: "hai@gmail.com"
    },
    {
      maSV: "sv002",
      hoTen: "Nguyễn Văn Nam",
      sdt: "02139012",
      email: "nam@gmail.com"
    },
    {
      maSV: "sv003",
      hoTen: "Trần Mạnh Cường",
      sdt: "02139012",
      email: "cuong@gmail.com"
    },
    {
      maSV: "sv004",
      hoTen: "Nguyễn Quốc Huy",
      sdt: "02139012",
      email: "huy@gmail.com"
    }
  ],
  sinhVienChiTiet: {
    maSV: "",
    hoTen: "",
    sdt: "",
    email: ""
  }
}

export const QLSVReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEM_SV":
      state.mangSinhVien = [...state.mangSinhVien, action.sv]
      return { ...state }

    case "XOA_SV":
      state.mangSinhVien = state.mangSinhVien.filter((sv) => {
        return sv.maSV !== action.svXoa
      })
      return { ...state };

    case "XEM_SV":
      state.sinhVienChiTiet = action.svXem
      console.log(state.sinhVienChiTiet);

      return { ...state }

    default:
      return state
  }
}
