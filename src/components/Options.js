import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    <ol>
      {
        props.options.map((option) => (
          <li key={option}>
            <Option
              option={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          </li>
        ))
      }
    </ol>
  </div>
);

export default Options;
