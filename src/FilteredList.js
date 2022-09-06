import { useMemo } from "react";

function filterPeopleList(peopleList) {
  return peopleList.filter((element) => element.age > 18);
}

export function FilteredList({ peopleList }) {
    const filteredList = useMemo(() => filterPeopleList(peopleList), [peopleList])
    return (
    <ul>
      {filteredList.map((element) => (
        <li key={element.id}>
          Name: {element.name}
          <br />
          ID: {element.id}
          <br />
          Age: {element.age}
          <br />
        </li>
      ))}
    </ul>
  );
}
