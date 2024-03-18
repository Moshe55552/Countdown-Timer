import React from "react";
import { BsStopwatch } from "react-icons/bs";
import styled from "styled-components";
import "./Timer.css";

const TimerWrapper = styled.div`
  margin-top: 30vh;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  background: black;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.4);
  padding: 1rem 0;
  padding-left: 2rem;
  color: red;
`;

export default function Timer({
  milliseconds,
  seconds,
  minutes,
  hours,
  changeSeconds,
  changeMinutes, // Corrected typo
  changeHours,
}) {
  return (
    <div>
      <TimerWrapper className="stop-watch">
        <BsStopwatch className="watchIcon"> </BsStopwatch>
        <div className="d-flex flex-column">
          <label>hh </label>
          <input type="text" value={hours} onChange={changeHours} />
        </div>
        <div className="d-flex flex-column">
          <label>mm </label>
          <input type="text" value={minutes} onChange={changeMinutes} />
        </div>
        <div className="d-flex flex-column">
          <label>ss </label>
          <input type="text" value={seconds} onChange={changeSeconds} />
        </div>
        <div className="d-flex flex-column">
          <label>ms </label>
          <input type="text" value={milliseconds} />
        </div>
      </TimerWrapper>
    </div>
  );
}
