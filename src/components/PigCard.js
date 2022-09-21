import React from "react";
 function PigCard({data}) {
const {name,specialty,weight,image}=data
  return (
    <div className="ui eight wide column">
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
export default PigCard