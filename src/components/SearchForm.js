// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SearchCard from "./SearchCard";
// import { Link } from "react-router-dom";

// function SearchForm() {
//   const [searchTicket, setSearchTicket] = useState([]);
//   const [searchResults, setSearchResults] = useState("");

//   useEffect(() => {
//     axios.get(`https://devdeskback.herokuapp.com/api/tickets/${id}`).then(res => {
//       console.log("Fetched!", res.data);
//       const Ticket = res.data.results.filter(tickets =>
//         tickets.name.toLowerCase().includes(searchResults.toLowerCase())
//       );

//       setSearchTicket(ticket);
//     });
//   }, [searchResults]);

//   const handleChange = e => {
//     setSearchResults(e.target.value);
//   };

//   return (
//     <div>
//       <form>
//         <input
//           id="name"
//           type="text"
//           name="text"
//           placeholder="Search"
//           value={searchResults}
//           onChange={handleChange}
//         />
//         <Link to="/">
//           <button>Home</button>
//         </Link>
//       </form>

//       {searchTicket.map(item => {
//         return <SearchCard key={item.id} name={item.name} />;
//       })}
//     </div>
//   );
// }
// export default SearchForm;
// <div>
//   <Link to="/Search">
//     <Button>Tickets</Button>
//   </Link>
// </div>;
