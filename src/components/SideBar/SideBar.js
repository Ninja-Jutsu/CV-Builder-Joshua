import React from 'react';
import Input from '../Input/Input';
import { RefContext } from '../RefProvider/RefProvider';

function SideBar() {
  const { textRef, emailRef, phoneRef, birthRef } =
    React.useContext(RefContext);
  const ALL_INPUTS = [
    {
      type: 'text',
      id: 'fullName',
      label: 'Full Name',
      refPara: textRef,
    },
    {
      type: 'email',
      id: 'emailAddress',
      label: 'Email Address',
      refPara: emailRef,
    },
    {
      type: 'tel',
      id: 'phone',
      label: 'Phone Number',
      refPara: phoneRef,
    },
    {
      type: 'text',
      id: 'dateOfBirth',
      label: 'Date of birth',
      refPara: birthRef,
    },
  ];
  return (
    <aside>
      {ALL_INPUTS.map(({ type, id, label, refPara }) => {
        return (
          <Input
            type={type}
            id={id}
            label={label}
            key={id}
            refPara={refPara}
          />
        );
      })}
    </aside>
  );
}

export default SideBar;
