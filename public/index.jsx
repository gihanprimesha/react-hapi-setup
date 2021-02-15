import React from 'react';
import reactDom from 'react-dom';
import './styles/style.scss';
import App from './App';
import { configureStore, history } from './src/_store';

const store = configureStore();

reactDom.render(
    <App store={store} history={history} />,
    document.getElementById('app')
);
