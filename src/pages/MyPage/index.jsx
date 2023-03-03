import React from "react";
import { Introduce } from "./Introduce";
import "./mypage.css";
import { UserInfo } from "./UserInfo";
import { UsingPlace } from "./UserPlace";

export const MyPage = () => {
  return (
    //전체 layout
    <div className="MyPageBody">
      <div className=""></div>
      <div className="MyPageContainer">
        <UserInfo />
        <Introduce />
        <UsingPlace />
      </div>
    </div>
  );
};
export default MyPage;
