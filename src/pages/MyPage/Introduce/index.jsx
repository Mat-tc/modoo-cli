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
      <h1 style={{ padding: "5px" }}>ME</h1>
      {Introduce.map((data) => (
        <div key={data.id} style={{ marginTop: "2%" }}>
          <span style={{ fontSize: "20px" }}> {data.title} </span>
          <button className="DelBtn" onClick={() => handleClick(data.id)}>
            x
          </button>
        </div>
      ))}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", paddingTop: "0.5rem", marginTop: "2%" }}
      >
        <input
          className="MyIntro"
          type="text"
          name="value"
          style={{ flex: "10", padding: "5px" }}
          placeholder="자신을 소개하세요."
          autoComplete="off"
          value={value}
          onChange={handleChange}
        />
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.25rem",
            borderWidth: "1px",
            border: "black solid 1px",
          }}
          type="submit"
          value="입력"
        />
      </form>
    </div>
  );
};
