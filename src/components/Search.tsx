import React, { useState } from "react";
import Fuse from "fuse.js";

interface Person {
  name: string;
  age: number;
  email: string;
}

const initialData: Person[] = [
  { name: "John Doe", age: 25, email: "johndoe@example.com" },
  { name: "Jane Doe", age: 30, email: "janedoe@example.com" },
  { name: "Bob Smith", age: 35, email: "bobsmith@example.com" },
  { name: "Alice Johnson", age: 40, email: "alicejohnson@example.com" },
];

const SearchComponent: React.FC = () => {
  const [searchResults, setSearchResults] = useState(initialData);

  const options = {
    includeScore: true,
    includeMatches: true,
    threshold: 0.2,
    keys: ["name", "age", "email"],
  };

  const fuse = new Fuse(initialData, options);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length === 0) {
      setSearchResults(initialData);
      return;
    }

    const results = fuse.search(value);
    const items = results.map((result) => result.item);
    setSearchResults(items);
  };

  return (
    <div>
      <h1>Real-Time Search with Fuse.js in React</h1>
      <input
        type="text"
        placeholder="Search by name or email"
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;
