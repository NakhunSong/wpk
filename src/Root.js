import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/base.scss';
import App from './components/App';

const Root = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default Root;