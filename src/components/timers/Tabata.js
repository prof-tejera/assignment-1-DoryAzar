import { Component } from 'react';
import Timer from "../generic/Timer";

class Tabata extends Component {
  render() {
    const settings = [
      {label: "Start Time", value: "00:45:00", placeholder: "Start the timer at this time"},
      {label: "Stop Time", value:"00:00:00", placeholder: "Stop the timer at this time"},
      {label: "Rest Time", value:"00:10:00", placeholder: "Timer will rest for that duration"},
      {label: "Rounds", value:"2", placeholder: "Stops after that many rounds"}
    ]
    return <Timer statusMessage="Round 1 of 2" startTime="00:45:00" settings={settings} />;
  }
}

export default Tabata;