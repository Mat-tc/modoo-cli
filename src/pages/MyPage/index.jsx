import React from "react";
import { Introduce } from "./Introduce";
import "./mypage.css";
import { UserInfo } from "./UserInfo";
import { UserPlace } from "./UserPlace";

export const MyPage = () => {
  return (
    //전체 layout
    <div className="MyPageBody">
      <div className=""></div>
      <div className="MyPageContainer">
        <UserInfo />
        <Introduce />
        <UserPlace />
      </div>
    </div>
  );
};
export default MyPage;
