import React from "react";
import "../mypage.css";

export const UserHelp = () => {
  return (
    <div>
      <div className="UserHelpBody">
        <section className="UserHelpCont">
          <a href="" className="UserHelpCenter">
            <span className="UserHelpFont">고객센터</span>
            <span className="UserHelpLink">&gt;</span>
          </a>
          <a href="" className="UserHelpCenter">
            <span className="UserHelpFont">공지사항</span>
            <span className="UserHelpLink">&gt;</span>
          </a>
        </section>
      </div>
    </div>
  );
};
