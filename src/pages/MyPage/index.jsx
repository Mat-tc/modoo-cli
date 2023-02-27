import React from "react";
import { Introduce } from "./Introduce";
import "./mypage.css";
import { UserInfo } from "./UserInfo";
import { UsingPlace } from "./UserPlace";

export const MyPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        marginTop: "3%",
      }}
    >
      <span
        style={{
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        마이페이지
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <UserInfo />
        <Introduce />
        <UsingPlace />
      </div>
    </div>
  );
};
