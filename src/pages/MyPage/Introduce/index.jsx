import React, { useState } from "react";
import "../mypage.css";

export const Introduce = () => {
  const [Introduce, setIntroduce] = useState([
    {
      id: "1",
      title: "헬스 경력 8년",
    },
    {
      id: "2",
      title: "운동 파트너 구함",
    },
  ]);

  const handleClick = (id) => {
    let newIntroduce = Introduce.filter((data) => data.id !== id);
    console.log("newIntroduce", newIntroduce);
    setIntroduce(newIntroduce);
  };

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newIntro = {
      id: Date.now(),
      title: value,
    };

    setIntroduce((prev) => [...prev, newIntro]);
    setValue("");
  };

  const handleChange = (e) => {
    console.log("e", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="Introduce">
      <h1 className="IntroTop">ME</h1>
      <div className="IntroBody">
        <div>
          {Introduce.map((data) => (
            <div key={data.id} className="IntroBox">
              <span className="IntroWord"> {data.title} </span>
              <div className="IntroBoxRight">
                <button
                  className="IntroDelBtn"
                  onClick={() => handleClick(data.id)}
                >
                  x
                </button>
              </div>
            </div>
          ))}
          <form onSubmit={handleSubmit} className="IntroInputBox">
            <input
              className="IntroInput"
              type="text"
              name="value"
              placeholder="자신을 소개하세요."
              autoComplete="off"
              value={value}
              onChange={handleChange}
            />
            <input className="IntroInputBtn" type="submit" value="입력" />
          </form>
        </div>
      </div>
    </div>
  );
};
