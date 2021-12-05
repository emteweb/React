import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const permission = false;

const AdminPage = () => {

    return (

        <Routes>
            <Route render={() => (
                permission ? (<h3> SSS </h3>) : (
                    <Navigate to="/login" />
                )
            )} />
        </Routes>

    );
}

export default AdminPage;