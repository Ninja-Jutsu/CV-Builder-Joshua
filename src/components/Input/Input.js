import React, { useState } from 'react';

function Input({ type, id, label, refPara, ...delegated }) {
  const [value, setValue] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // alter the referenced paragraph on Submit
    refPara.current.innerText = value;
    setIsSubmit(true);
  }

  return !isSubmit ? (
    <form>
      <label htmlFor='id'>
        {label}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            // alter the referenced paragraph on Change
            refPara.current.innerText = e.target.value;
          }}
        ></input>
      </label>
      <button onClick={handleSubmit}>Confirm</button>
    </form>
  ) : (
    <div className='submitted'>
      <p>{label}:</p>
      <button onClick={() => setIsSubmit(false)}>
        Edit
      </button>
    </div>
  );
}

export default Input;
