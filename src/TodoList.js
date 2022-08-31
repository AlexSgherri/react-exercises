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

  clearStateItems = () => {
    this.setState({ items: [], nextItem: "" });
  };

  removeItemFromState = (event) => {
    const newState = this.state.items.filter(
      (element, index) => index != event.target.value
    );
    this.setState({ items: newState });
  };

  render() {
    return (
      <ul>
        {this.state.items.map((element, index) => (
          <li key={index}>
            {element}
            <button onClick={this.removeItemFromState} value={index}>
              Remove
            </button>
          </li>
        ))}
        <input
          onChange={this.inputEventHandlers}
          name="insert"
          value={this.state.nextItem}
          id="insertToDo"
        />
        <button onClick={this.insertNewLiItem}>Insert</button>
        <button onClick={this.clearStateItems}>Reset List</button>
      </ul>
    );
  }
}
