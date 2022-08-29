import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["bag", "table", "bottle", "console"],
    nextItem: "",
  };

  insertNewLiItem = (event) => {
    event.preventDefault();

    if (this.state.nextItem !== "")
      this.setState((prev) => {
        return { items: [...prev.items, prev.nextItem], nextItem: "" };
      });
  };

  inputEventHandlers = (event) => {
    const newItem = event.target.value;

    this.setState({ nextItem: newItem });
  };

  render() {
    return (
      <ul>
        {this.state.items.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
        <input
          onChange={this.inputEventHandlers}
          name="insert"
          value={this.state.nextItem}
          id="insertToDo"
        />
        <button onClick={this.insertNewLiItem}>Insert</button>
      </ul>
    );
  }
}
