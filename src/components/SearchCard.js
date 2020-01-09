import React from "react";

const TicketCard = prop => {
  return (
    <div className="grid-view" key={prop.item}>
      <p>{prop.id}</p>
      <p>{prop.name}</p>
    </div>
  );
};

export default TicketCard;
