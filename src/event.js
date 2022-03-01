import React from "react";

function Event() {
  //Create function here
  function Greeting() {
    return alert('Hallo everyone have nice day')
  }

  // const Greeting = (params) => (event) =>{

  // }

  return (
    // Code Inside div
    <div>
      <p>If you are press
        <b>Click Here</b> then alert will be open
      </p>
      {/* <button onClick={Greeting()} >Click Here</button> */}
      <button onClick={Greeting} >Click Here</button>

      <p>If you are press
        <b>Click Me</b> then alert will be open
      </p>
      {/* <button onClick={Greeting()} >Click Here</button> */}
      {/* <button onClick={alert("Hallo batch 29")} >Click Me</button> */}
      <button onClick={() => alert("Hallo batch 29")} >Click Me</button>

    </div>
  );
}

export default Event;
