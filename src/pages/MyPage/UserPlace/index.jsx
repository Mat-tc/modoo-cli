import React from "react";
import "../mypage.css";

export const UserPlace = () => {
  return (
    <div className="UserPlace">
      <h1 className="UserPlaceTop">이용 중인 시설</h1>
      <div>
        <div className="UserPlaceBox">
          <span className="UserPlaceName">더블케이짐</span>
          <div className="UserPlaceExpBody">
            <div className="UserPlaceBottom">
              <div className="UserPlaceImg"></div>
              <div className="UserPlaceExpBox">
                <div className="UserPlaceExp">
                  주소 : 경기도 용인시 기흥구 보라동 573-2
                </div>
                <div className="UserPlaceExp">
                  영업시간 : 오전 6:00 ~ 오전 12:00
                </div>
                <div className="UserPlaceExp">연락처 : 031-282-9688</div>
              </div>
            </div>
            <div className="UserPlaceNum">
              <span className="NumFont">13회 이용</span>
            </div>
          </div>
        </div>

        <div className="UserPlaceBox">
          <span className="UserPlaceName">더블케이짐</span>
          <div className="UserPlaceExpBody">
            <div className="UserPlaceBottom">
              <div className="UserPlaceImg"></div>
              <div className="UserPlaceExpBox">
                <div className="UserPlaceExp">
                  주소 : 경기도 용인시 기흥구 보라동 573-2
                </div>
                <div className="UserPlaceExp">
                  영업시간 : 오전 6:00 ~ 오전 12:00
                </div>
                <div className="UserPlaceExp">연락처 : 031-282-9688</div>
              </div>
            </div>
            <div className="UserPlaceNum">
              <span className="NumFont">13회 이용</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
