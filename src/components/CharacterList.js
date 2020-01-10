import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

function CharacterList() {
  // defining usestate array and empty quotes to reset
  const [searchTerm, setSearchTerm] = useState([]);
  const [searchResults, setSearchResults] = useState("");

  // fetching data
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      const characters = response.data.results.filter(char =>
        char.name.toLowerCase().includes(searchResults.toLowerCase())
      );

      setSearchTerm(characters);
    });
  }, [searchResults]);

  const handleInputChange = event => {
    setSearchResults(event.target.value);
  };

  // time to return form
  return (
    <div>
      {/* Mapping crap */}
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
export default CharacterList;

// import React, { useState, useEffect } from "react";
// import GuestViewCard from "./CharacterCard";
// import axios from "axios";
// function GuestSearchForm() {
//   const [query, setQuery] = useState("");
//   const [queryResults, setQueryResults] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://rickandmortyapi.com/api/character/")
//       .then(res => {
//         console.log(res);
//         const data = res.data;
//         const transform = data.filter(e =>
//           e.name.toLowerCase().includes(query)
//         );
//         setQueryResults(transform);
//       })
//       .catch(error => {
//         console.log("No API data Fetched - see GuestSearchForm.js", error);
//       });
//   }, [query]);
//   const handleChange = e => {
//     setQuery(e.target.value);
//     if (e.target.value === "") {
//       setQuery("");
//     }
//   };
//   return (
//     <div className="portfolio-search">
//       <form>
//         <input
//           type="text"
//           value={query}
//           name="search"
//           id="search"
//           placeholder="Search Location"
//           onChange={handleChange}
//         />
//       </form>
//       <div className="card-container">
//         {queryResults.map(e => (
//           <GuestViewCard {...e} />
//         ))}
//       </div>
//     </div>
//   );
// }
// export default GuestSearchForm;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import CharacterCard from "./CharacterCard";
// import { Link } from "react-router-dom";
// import SearchForm from "./SearchForm";
// export default function CharacterList() {
//   // TODO: Add useState to track data from useEffect
//   const [characters, setCharacters] = useState([]);
//   const [newData, setNewData] = useState([]);
//   const search = charArr => {
//     setNewData(charArr);
//   };
//   useEffect(() => {
//     axios
//       .get(`https://rickandmortyapi.com/api/character/`)
//       .then(response => {
//         const characterInfo = response.data.results;
//         console.log("Character Info", characterInfo);
//         setCharacters(characterInfo);
//         setNewData(characterInfo);
//       })
//       .catch(error => {
//         console.log("The data was not returned", error);
//       });
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//   }, []);
//   return (
//     <section className="character-list">
//       <h2>The Crazy Characters</h2>
//       <Link to={"/"}>
//         <button>Home</button>
//       </Link>
//       <SearchForm search={search} characters={characters} />
//       <div>
//         <div>
//           <div>
//             {newData.map(character => {
//               return (
//                 <div>
//                   <CharacterCard
//                     key={character.id}
//                     name={character.name}
//                     status={character.status}
//                     species={character.species}
//                     type={character.type}
//                     image={character.image}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
