import React from 'react';
import ReactDom from 'react-dom'
import Layout from './components/Layout'
import {Provider} from 'react-redux'
import store from './store'
/**
 * Renders application
 * @type {Element}
 */
const app = document.getElementById('app');
ReactDom.render(<Provider store={store}>
    <Layout/>
    </Provider>, app);