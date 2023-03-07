import React from "react";
import "../mypage.css";

export const UsingPlace = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        height: "100%",
        flexDirection: "column",
        margin: "3% auto",
      }}
    >
      <h1>이용 중인 시설</h1>
      <div>
        <div
          style={{
            marginTop: "2%",
            backgroundColor: "gainsboro",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
          }}
        >
          <div>
            <div
              style={{ marginTop: "2%", marginLeft: "2%", fontSize: "1.7rem" }}
            >
              더블케이짐
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
              width: "100%",
              flexDirection: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "10rem",
                alignItems: "center",
                justifyContent: "center",
                margin: "2% 2%",
                height: "10rem",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flex: 7,
                justifyContent: "center",
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              <div
                style={{
                  marginLeft: "2%",
                  fontSize: "1.3rem",
                }}
              >
                주소 : 경기도 용인시 기흥구 보라동 573-2
              </div>
              <div
                style={{
                  marginTop: "2%",
                  marginLeft: "2%",
                  fontSize: "1.3rem",
                }}
              >
                영업시간 : 오전 6:00 ~ 오전 12:00
              </div>
              <div
                style={{
                  marginTop: "2%",
                  marginLeft: "2%",
                  fontSize: "1.3rem",
                }}
              >
                연락처 : 031-282-9688
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                margin: "2% auto",
                flex: 3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                  fontSize: "1.2rem",
                  width: "8rem",
                  height: "4rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                13회 이용
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "2%",
            backgroundColor: "gainsboro",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
          }}
        >
          <div
            style={{ marginTop: "2%", marginLeft: "2%", fontSize: "1.7rem" }}
          >
            동양킥복싱GYM
          </div>
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
              width: "100%",
              flexDirection: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "10rem",
                alignItems: "center",
                justifyContent: "center",
                margin: "2% 2%",
                height: "10rem",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flex: 7,
                justifyContent: "center",
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              <div
                style={{
                  marginLeft: "2%",
                  fontSize: "1.3rem",
                }}
              >
                주소 : 경기 용인시 기흥구 신구로12번길 9 3층
              </div>
              <div
                style={{
                  marginTop: "2%",
                  marginLeft: "2%",
                  fontSize: "1.3rem",
                }}
              >
                영업시간 : 오전 6:00 ~ 오전 12:00
              </div>
              <div
                style={{
                  marginTop: "2%",
                  marginLeft: "2%",
                  fontSize: "1.3rem",
                }}
              >
                연락처 : 0507-1477-9456
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                margin: "2% auto",
                flex: 3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                  fontSize: "1.2rem",
                  width: "8rem",
                  height: "4rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                4회 이용
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
