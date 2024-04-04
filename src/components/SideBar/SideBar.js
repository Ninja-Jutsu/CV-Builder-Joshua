import React from 'react';
import PersonalDetailsInputs from '../PersonalDetailsInputs/PersonalDetailsInputs';
import EducationInputs from '../EducationInputs/EducationInputs';

function SideBar() {
  return (
    <aside>
      <PersonalDetailsInputs />
      <EducationInputs />
    </aside>
  );
}

export default SideBar;
