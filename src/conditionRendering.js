import React, { useState } from "react";

//Create Component PrivatePage
function PrivatePage(props) {
  const { logout } = props

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={logout} >Logout</button>
    </div>
  )
}

//Create Component GuestPage
function GuestPage(props) {
  const { login } = props

  return (
    <div>
      <h1>Please Sign In</h1>
      <button onClick={login} >login</button>
    </div>
  )
}

function ConditionRendering() {
  //init State
  const [isLogin, setIsLogin] = useState(false)

  return (
    // Code Inside div
    <div>
      {isLogin ? (
        <PrivatePage logout={() => setIsLogin(!isLogin)} />
      ) : (
        <GuestPage login={() => setIsLogin(!isLogin)} />
      )}
    </div>
  );
}

export default ConditionRendering;
