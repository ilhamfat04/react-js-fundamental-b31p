import React from "react";

//Import Components
import List from "./components/list";

function Props() {
  return (
    // Code Inside div
    <div>
      <List listData="Mercedez Benz" action="Sell" />
      <List listData="BMW" action="Buy" />
    </div>
  );
}

export default Props;
