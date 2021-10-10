import { Component } from 'react';
import Timer from "../generic/Timer";

class StopWatch extends Component {
  render() {
    const settings = [
      {label: "Start Time", value: "00:00:00", placeholder: "Start the timer at this time"},
      {label: "Stop Time", value: "00:30:00", placeholder: "Stop the timer at this time"}
    ]
    return <Timer settings={settings} />;
  }
}

export default StopWatch;
