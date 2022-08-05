import axios from "axios";
import { request } from "../configs/axios";
import { TOKEN_CYBERSOFT, BASE_URL } from "../constants/common";

const fetchMovieListApi = () => {
  return request({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    method: "GET",
  });
};

const fetchMovieDetailApi = (movieId) => {
  return request({
    url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
    method: "GET",
  });
};

export { fetchMovieListApi, fetchMovieDetailApi };
