import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ProductListPage from '../pages/ProductListPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';


const Page = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/products" element={<ProductListPage />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/admin" element={<AdminPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
    );
}

export default Page;