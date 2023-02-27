import React from "react";
import "../mypage.css";

export const UserInfo = () => {
  return (
    <div className="UserInfo">
      <div className="MyTop">
        <div className="MyImg"></div>
        <div className="MyNick">
          <span
            style={{
              fontSize: "1.6rem",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            닉네임
          </span>
          <span style={{ fontSize: "1.2rem", textAlign: "center" }}>지역</span>
        </div>
        <div className="MySubs">
          <div className="Subscribe">
            <span style={{ fontSize: "1.6rem" }}>구독권</span>
            <span style={{ fontSize: "1.2rem", padding: "8px" }}>0회</span>
          </div>
          <button style={{ marginRight: "4%", width: "50%" }}>충전하기</button>
        </div>
        <div className="MySet">
          <button className="MyMod">프로필 수정</button>
          <button className="MySetting">설정</button>
        </div>
      </div>
    </div>
  );
};
