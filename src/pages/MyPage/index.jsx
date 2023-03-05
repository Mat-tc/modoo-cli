import React from "react";
import { Introduce } from "./Introduce";
import "./mypage.css";
import { UserHelp } from "./UserHelp/Index";
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
        <UserHelp />
      </div>
    </div>
  );
};
export default MyPage;
