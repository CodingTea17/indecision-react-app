import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp options={["opt 1", "opt 2"]}/>, document.getElementById('app'))
