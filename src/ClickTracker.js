import React from "react";

export class ClickTracker extends React.Component {
    state = {
        lastClicked : ""
    }

  clickTrackerHandler = (event) => {
    console.log(event)
    this.setState(() => {
        return {
            lastClicked : event.target.name
        }
    });
  };

  render() {
    return (
      <div>
        <h1>Last Clicked Button: {this.state.lastClicked}</h1>
        <button name="Button1" onClick={this.clickTrackerHandler}>
          Button1
        </button>
        <button name="Button2" onClick={this.clickTrackerHandler}>
          Button2
        </button>
        <button name="Button3" onClick={this.clickTrackerHandler}>
          Button3
        </button>
      </div>
    );
  }
}
