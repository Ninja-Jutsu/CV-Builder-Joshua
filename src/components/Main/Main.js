import React from 'react';
import { RefContext } from '../RefProvider/RefProvider';

function Main() {
  const { textRef, emailRef, phoneRef, birthRef } =
    React.useContext(RefContext);
  return (
    <main>
      <p
        className='full-name'
        ref={textRef}
      ></p>
      <p
        className='email'
        ref={emailRef}
      ></p>
      <p
        className='phone'
        ref={phoneRef}
      ></p>
      <p
        className='birth'
        ref={birthRef}
      ></p>
    </main>
  );
}

export default Main;
