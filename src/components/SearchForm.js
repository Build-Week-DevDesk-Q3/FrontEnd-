import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState([]);
  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      const Tickets = response.data.results.filter(ticket =>
        ticket.name.toLowerCase().includes(searchResults.toLowerCase())
      );

      setSearchTerm(Tickets);
    });
  }, [searchResults]);

  const handleInputChange = event => {
    setSearchResults(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          id="name"
          type="text"
          name="text"
          placeholder="Search"
          value={searchResults}
          onChange={handleInputChange}
        />
      </form>

      {searchTerm.map(item => {
        return (
          <CharacterCard
            key={item.id}
            name={item.name}
            species={item.species}
            status={item.status}
            image={item.image}
          />
        );
      })}
    </div>
  );
}
export default SearchForm;

// import React, { useState } from "react";

// function SearchForm(props) {
//   const [results, setResults] = useState();
//   const handleChanges = e => {
//     setResults(e.target.value);
//   };
//   const submitHandler = e => {
//     e.preventDefault();
//     const filtered = props.characters.filter(char => {
//       return char.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
//     });
//     props.search(filtered);
//   };
//   return (
//     <section className="search-form">
//       <form onSubmit={submitHandler}>
//         <input
//           onChange={handleChanges}
//           type="text"
//           name="character"
//           id="character"
//           placeholder="Search For The One"
//         ></input>
//       </form>
//     </section>
//   );
// }
// export default SearchForm;
