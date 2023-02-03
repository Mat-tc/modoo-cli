import React from "react";
import { Introduce } from "./Introduce";
import "./mypage.css";
import { UserInfo } from "./UserInfo";
import { UsingPlace } from "./UsingPlace";

export const MyPage = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          backgroundColor: "black",
        }}
      >
        마이페이지
      </span>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          backgroundColor: "salmon",
        }}
      >
        <UserInfo />
        <Introduce />
        <UsingPlace />
      </div>
    </div>
  );
};
