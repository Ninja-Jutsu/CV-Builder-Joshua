import React from 'react';
import { RefContext } from '../RefProvider/RefProvider';

function Main() {
  const { textRef, emailRef, phoneRef, birthRef, myRefs } =
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
      {[1, 2, 3].map((option, index) => (
        <p
          ref={(el) => (myRefs.current[index] = el)}
          id={index}
          key={index}
        ></p>
      ))}
    </main>
  );
}

export default Main;
