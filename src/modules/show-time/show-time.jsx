import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieShowTimeApi } from "../../services/cinema";

import moment from "moment";

export default function ShowTime() {
  useEffect(() => {
    fetchMovieShowTime();
  }, []);
  const params = useParams();
  const [showTime, setShowTime] = useState({});

  const fetchMovieShowTime = async () => {
    const result = await fetchMovieShowTimeApi(params.movieId);
    setShowTime(result.data.content);
  };

  const renderTab = () => {
    return showTime?.heThongRapChieu?.map((ele, index) => {
      return (
        <a
          key={ele.maHeThongRap}
          className={`nav-link text-capitalize ${index === 0 && "active"}`}
          data-toggle="pill"
          href={`#${ele.heThongRap}`}
          role="tab"
          aria-selected="true"
        >
          {ele.tenHeThongRap}
        </a>
      );
    });
  };

  const renderContent = () => {
    return showTime?.heThongRapChieu?.map((ele, index) => {
      return (
        <div
          key={ele.maHeThongRap}
          className={`tab-pane fade show ${index === 0 && "active"}`}
          id={ele.maHeThongRap}
          role="tabpanel"
        >
          {ele.cumRapChieu.map((ele) => {
            return (
              <div key={ele.maCumRap} className="row mb-5">
                <div className="col-1">
                  <img className="img-fluid rounded" src={ele.hinhAnh} />
                </div>
                <div className="col-11 pl-0">
                  <h5>{ele.tenCumRap}</h5>
                  <span className="text-muted">{ele.diaChi}</span>
                </div>
                <div className="col-12">
                  <div className="row">
                    {ele.lichChieuPhim.map((ele) => {
                      return (
                        <div key={ele.maLichChieu} className="col-3">
                          <Link to={`/booking/${ele.maLichChieu}`}>
                            {moment(ele.ngayChieuGioChieu).format("lll")}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="row">
      <div className="col-3">
        <div
          className="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {renderTab()}
        </div>
      </div>
      <div className="col-9">
        <div className="tab-content" id="v-pills-tabContent">
          {renderContent()}
          {/* <div className="tab-pane fade" id="bhd" role="tabpanel">
            ...
          </div> */}
        </div>
      </div>
    </div>
  );
}
