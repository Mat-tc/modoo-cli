import React from "react";
import "../mypage.css";

export const UserInfo = () => {
  return (
    <div>
      <section className="UserInfoBody">
        <div className="UserInfoCont">
          <div className="UserInfoProfile"></div>
          <a href="" className="UserInfoNickName">
            <div>닉네임</div>
            <span className="UserInfoManage">내정보 관리</span>
          </a>
          <div className="UserInfoArea">나의 지역</div>
        </div>
        <ul className="UserInfoList">
          <li className="ListSubCont">
            <div className="ListSubscribe">
              <div className="ListSubLeft">
                <span>구독권</span>
              </div>
              <div className="ListSubRight">
                <button className="ListChargeBtn">
                  <span>충전하기</span>
                </button>
              </div>
            </div>
          </li>
          <li className="ListRevCont">
            <a href="" className="ListReview">
              <div className="ListRevLeft">
                <span>나의 후기</span>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
