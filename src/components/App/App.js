import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SideBar from "../SideBar/SideBar";

function App() {
  const textRef = React.useRef();
  const emailRef = React.useRef();
  const phoneRef = React.useRef();
  const birthRef = React.useRef();

  return (
    <>
      <Header />
      <Main
        textRef={textRef}
        emailRef={emailRef}
        phoneRef={phoneRef}
        birthRef={birthRef}
      />
      <SideBar
        textRef={textRef}
        emailRef={emailRef}
        phoneRef={phoneRef}
        birthRef={birthRef}
      />
    </>
  );
}

export default App;
