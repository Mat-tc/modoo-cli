import React from "react";
import "../mypage.css";

export const UserInfo = () => {
  return (
    <div className="MainMypage">
      <div className="MyTop">
        <div className="MyImg"></div>
        <div className="MyNick">
          <span style={{ fontSize: "25px", textAlign: "center" }}>닉네임</span>
          <span style={{ fontSize: "15px", textAlign: "center" }}>지역</span>
        </div>
        <div className="MySubs">
          <div className="Subscribe">
            <span style={{ fontSize: "25px" }}>구독권</span>
            <span style={{ fontSize: "15px", padding: "10px" }}>0회</span>
          </div>
          <button>충전하기</button>
        </div>
        <div className="MySet">
          <button className="MyMod">프로필 수정</button>
          <button className="MySetting">설정</button>
        </div>
      </div>
    </div>
  );
};
