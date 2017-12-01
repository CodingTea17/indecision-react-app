import React from 'react';

const Option = (props) => (
  <div>
    {props.option} &nbsp;
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.option)
      }}
    >
      Remove
    </button>
  </div>
);


export default Option;
