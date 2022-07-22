import React from 'react';
import ReactDOM from 'react-dom';
import { register } from 'register-service-worker';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
register('', undefined);
