import React from "react";

function Main({ textRef, emailRef, phoneRef, birthRef }) {
  return (
    <main>
      <p className='full-name' ref={textRef}></p>
      <p className='email' ref={emailRef}></p>
      <p className='phone' ref={phoneRef}></p>
      <p className='birth' ref={birthRef}></p>
    </main>
  );
}

export default Main;
