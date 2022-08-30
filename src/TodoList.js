import React from "react";

export class TodoList extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      items: ["bag", "table", "bottle", "console"],
      nextItem: "",
    }
  }

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

//per il clear dell'input ho utilizzato il nextItem all'interno dello state, esso è il responsabile di tracciare sia cosa andrà ad essere aggiunto alla lista
//sia successivamente al reset dell'input con una semplice assegnazione di nextItem: "", esso quindi rappresenta il contenuto dell'input