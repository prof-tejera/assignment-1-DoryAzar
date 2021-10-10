import { Component } from 'react';
import Timer from "../generic/Timer";

class Countdown extends Component {
  render() {
    const settings = [
      {label: "Start Time", value: "00:30:00", placeholder: "Start the timer at this time"},
      {label: "Stop Time", value:"00:00:00", placeholder: "Stop the timer at this time"},
      {label: "Another setting", placeholder: "TBD"}
    ]
    return <Timer startTime="00:30:00" settings={settings} />;
  }
}

export default Countdown;
