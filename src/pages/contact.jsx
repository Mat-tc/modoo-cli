import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="Customer">
      <div className="CustomerContent">
        {/* 검색부분 */}
        <div className="HelpBox">
          <p className="HelpExplain">키워드로 빠르게 물어보세요</p>
          {/* 검색창 */}
          <div className="HelpSearch">
            <input
              type="text"
              className="HelpSearchBox"
              placeholder="키워드로 질문하기 (충전, 환불 등)"
            />
          </div>
        </div>
        {/* 카테고리부분 */}
        <div className="HelpCategory">
          <h2>카테고리</h2>
          <ul>
            <li>
              <a href="">
                <div>충전</div>
              </a>
            </li>
            <li>
              <a href="">
                <div>서비스</div>
              </a>
            </li>
            <li>
              <a href="">
                <div>시설</div>
              </a>
            </li>
            <li>
              <a href="">
                <div>환불</div>
              </a>
            </li>
            <li>
              <a href="">
                <div>공지사항</div>
              </a>
            </li>
          </ul>
        </div>
        {/* 자주묻는질문 */}
        <div className="QuickHelp">
          <h2>자주 묻는 질문</h2>
          <ul>
            <li>
              <Link to={""} className="QuickGo">
                충전한 캐시를 환불받고 싶어요.
              </Link>
            </li>
            <li>
              <a className="QuickGo" href="">
                입금했는데 충전이 안돼요.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Contact;
