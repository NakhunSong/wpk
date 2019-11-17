import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="header">
                <Link to="/about"><a>about</a></Link>
            </div>
            <div className="main">
                Main
            </div>
        </div>
    );
};

export default Home;