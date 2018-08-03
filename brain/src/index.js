import React from 'react';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import todoApp from './reducers';

const store = createStore(todoApp);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);

registerServiceWorker();
