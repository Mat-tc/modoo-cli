import React from "react";
import "../mypage.css";

export const UserInfo = () => {
  return (
    <div className="UserInfo">
      <section className="UserInfoBody">
        <div className="UserInfoCont">
          <div className="UserInfoProfile"></div>
          <a href="" className="UserInfoNickName">
            <div>닉네임</div>
            <span className="UserInfoManage">내정보 관리 &gt;</span>
          </a>
          <div className="UserInfoArea">나의 지역</div>
        </div>
        <ul className="UserInfoList">
          <li className="ListSubCont">
            <div className="ListSubscribe">
              <div className="ListSubLeft">
                <span className="ListFont">구독권</span>
              </div>
              <div className="ListSubRight">
                <button className="ListChargeBtn">
                  <span className="ListFont">충전하기</span>
                </button>
              </div>
            </div>
          </li>
          <li className="ListRevCont">
            <a href="" className="ListReview">
              <span className="ListFont">나의 후기</span>
              <span className="ListRevLink">&gt;</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
