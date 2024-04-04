import React, { useState } from 'react';

function Input({
  type = 'text',
  id,
  label,
  refPara,
  ...delegated
}) {
  const [value, setValue] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // alter the referenced paragraph on Submit
    refPara.innerText = value;
    setIsSubmit(true);
  }

  return !isSubmit ? (
    <form>
      <label htmlFor={id}>
        {label}
        <input
          {...delegated}
          id={id}
          type={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            console.log(refPara)
            // alter the referenced paragraph on Change
            refPara.innerText = e.target.value;
          }}
        />
      </label>
      <button
        type='submit'
        // Check if the input is not empty?
        onClick={handleSubmit}
      >
        Confirm
      </button>
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
