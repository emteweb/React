import React from 'react';
import {Route, Routes} from 'react-router-dom';
import img1 from '../images/city1.jpg';
import img2 from '../images/city2.jpg';
import img3 from '../images/city3.jpg';
import '../styles/Header.css';

const CityImage = () => {
    const images = [img1,img2,img3];
    const index = Math.floor(Math.random()*3);
    const img = images[index];
    return ( 
        <img src={img} alt="" />
     );
}


const Header = () => {
    return (
        <>
        {/* <img src={img1} alt="" /> */}
        {/* <Routes>
            <Route path="/products" render={()=>(
                <img src={img2} alt="city" />
            )}/>
        </Routes> */}

        <Routes>
            <Route path="/" element={<CityImage />}/>
            <Route path="/products" element={<CityImage />}/>
            <Route path="/contact" element={<CityImage />}/>
            <Route path="/admin" element={<CityImage />}/>
            <Route path="/*" element={<CityImage />}/>
        </Routes>
        </>
    );
}

export default Header;