import React from 'react';

import Select from 'react-select';

const defaultOptions = [
    {value:"1",label:"1"},
    {value:"2",label:"2"},
];

const MultiSelect = () => (
  <Select
    isMulti
    options={defaultOptions}
  />
);

export default MultiSelect;