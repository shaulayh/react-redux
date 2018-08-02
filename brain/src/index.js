import React from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Provider} from 'react-redux'

import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import todoApp from './reducers';

const store = createStore(todoApp);
render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);

// ReactDOM.render(AppContainer, document.getElementById('root'));
registerServiceWorker();
