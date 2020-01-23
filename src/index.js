import React from 'react';
import ReactDOM from 'react-dom';

// Global styles - in a CMS you would import the compiled CSS in a .cshtml master layout
import './styles/styles.scss';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
