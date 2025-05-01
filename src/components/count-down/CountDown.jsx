import "./CountDown.scss";
import React from "react";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  // if (completed) {
  //   return <span>Done</span>;
  // }

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="time_countdown">
      <div className="time_countdown_item">
        <span className="time_value">{pad(days)}</span> : <span className="time_value">{pad(hours)}</span> : <span className="time_value">{pad(minutes)}</span> : <span className="time_value">{pad(seconds)}</span>
      </div>

      <div className="time_countdown_name">
      <span className="time_name">Days </span>
        <span className="time_name">Hours </span>
        <span className="time_name">Minutes </span>
        <span className="time_name">Seconds </span>
      </div>

    </div>
  );
};

const CountDown = () => {
  return (
    <div className="countdown_main">
      <div className="countdown_main_opacity">
      <h2 className="countdown_title">Left for wedding day...</h2>
      <Countdown
        date={new Date("July 25, 2025 18:30:00").getTime()}
        renderer={renderer}
      />
      </div>
    </div>
  );
};

export default CountDown;
