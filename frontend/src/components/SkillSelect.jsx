import React from 'react';

import Select from 'react-select';

//add skills below
const defaultOptions = [
    {value:"python",label:"Python"},
    {value:"javaScript",label:"JavaScript"},
    {value:"mongoDB",label:"MongoDB"},
    {value:"express",label:"Express"},
    {value:"react",label:"React"},
    {value:"nodejs",label:"Node.js"}
];

const MultiSelect = () => (
  <Select
    isMulti
    options={defaultOptions}
  />
);

export default MultiSelect;