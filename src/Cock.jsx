import React from "react";

function Cock({ lap }) {
  console.log(lap);
  return (
    <div>
      <h1>lists</h1>
      {lap.map(item => {
        return (
          <div key={item.recipe.label}>
            <h1>{item.recipe.label}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Cock;
