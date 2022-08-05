import React, { useEffect, useState } from "react";
import { fetchMovieDetailApi } from "../../services/movie";
import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const fetchMovieDetail = async () => {
    const result = await fetchMovieDetailApi(params.movieId);
    setDetail(result.data.content);
  };

  const renderDetail = () => {
    return (
      <div className="row">
        <div className="col-3">
          <img className="w-100" src={detail.hinhAnh} />
        </div>
        ;
        <div className="col-9">
          <h4>{detail.tenPhim}</h4>
          <p>{detail.moTa}</p>
          <p>{detail.ngayKhoiChieu}</p>
          <div>
            <button className="btn btn-info mr-2">TRAILER</button>
          </div>
        </div>
      </div>
    );
  };

  return renderDetail();
}
