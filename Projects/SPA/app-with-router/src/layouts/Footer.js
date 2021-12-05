import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <h2>Footer</h2>
            <Routes>
                <Route path="/" render={(props) => {
                    console.log(props);
                    return (
                        <p>Extra info</p>
                    )
                }}></Route>
            </Routes>
        </div>
    );
}

export default Footer;