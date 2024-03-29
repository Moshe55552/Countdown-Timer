import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import {
  BsFillPlayFill,
  BsPauseFill,
  BsStopFill,
  BsStopwatch,
} from "react-icons/bs";

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showEndScreen, setShowEndScreen] = useState({
    show: false,
    message: "Time is Up !",
  });

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((milliseconds) => milliseconds - 1);
        } else if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
          setMilliseconds(99);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
          setMilliseconds(99);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
          setMilliseconds(99);
        }
      }, 10);
    }

    if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 1) {
      setShowEndScreen({ ...showEndScreen, show: true });
      resetTimer();
    }
    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, hours, isRunning]);

  const changeSeconds = (e) => {
    setSeconds(e.target.value);
  };

  const changeMinutes = (e) => {
    setMinutes(e.target.value);
  };

  const changeHours = (e) => {
    setHours(e.target.value);
  };

  function startTimer() {
    if (hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
      setIsRunning(true);
    } else window.alert("Add Time !");
  }
  function stopTimer() {
    setIsRunning(false);
  }
  function resetTimer() {
    setIsRunning(false);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    window.alert("Time Resets");
  }

  return (
    <div>
      <h1>Countdown Timer</h1>
      {showEndScreen.show && <h2 Timer>{showEndScreen.message}</h2>}
      <Timer
        milliseconds={milliseconds}
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        changeSeconds={changeSeconds}
        changeMinutes={changeMinutes}
        changeHours={changeHours}
      />
      <br />
      <div className="btn">
        {!isRunning && (
          <button className="btn btn-accept btn-lg" onClick={startTimer}>
            <BsFillPlayFill />
          </button>
        )}
        {isRunning && (
          <button className="btn btn-warning btn-lg" onClick={stopTimer}>
            <BsPauseFill />
          </button>
        )}{" "}
        <button className="btn btn-danger btn-lg" onClick={resetTimer}>
          <BsStopFill />
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
