import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}