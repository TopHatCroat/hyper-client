import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store, {history} from './store'
import App from './app'
const target = document.querySelector('#root');

document.body.style.margin = 0;

render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    target
);
// registerServiceWorker();
