import './App.css';
import React from "react";
import Home from './components/Home'
import {Navigate, redirect, Route, Routes } from 'react-router-dom';
import Milacron from './components/Milacron';
import Arburg from './components/Arburg';
import Bmb from './components/Bmb';
import Login from './components/Login';
import Search from './components/Search';
import FormPage from './components/FormPage';
import ListPage from './components/ListPage';
import LoadFile from './components/LoadFile';
import Back from './components/Back';
import Footer from './components/Footer';
import Nav from './components/NavBar';
import Error from './components/404';
import Register from './components/register';
import { ProtectedRoute } from './components/protectedRoute';
import Welcome from './components/confirm'

function App() {
    
    const auth=localStorage.getItem('token')
    return (
        <div>
            <Nav />
            {/* <Back /> */}
                <Routes >
                {!auth ?  
                <Route path='/' element={<Navigate to='/app/v1/login/' replace />}/> 
                    :
                <Route path='/' element={<Navigate to='/app/v1/' replace />}/>}
                <Route path='app/v1/login/' element={<Login/>} />
               
                <Route path='app/v1/register/' element={<Register/>} />
                
                <Route path="app/v1/welcome/" element={<Welcome />} />
                <Route path='app/v1/' element={
                <ProtectedRoute>
                    <Home/>
                </ProtectedRoute>}/>
                <Route path='app/v1/milacron/' element={
                <ProtectedRoute>
                    <Milacron />
                </ProtectedRoute>} />
                <Route path='app/v1/arburg/' element={
                <ProtectedRoute>
                    <Arburg />
                </ProtectedRoute>} />
                <Route path='app/v1/bmb/' element={
                <ProtectedRoute>
                    <Bmb />
                </ProtectedRoute>} />
                <Route path='app/v1/search' element={
                <ProtectedRoute>
                    <Search />
                </ProtectedRoute>} />
                <Route path='app/v1/formpage' element={
                <ProtectedRoute>
                    <FormPage />
                </ProtectedRoute>} />
                <Route path='app/v1/loadfile' element={
                <ProtectedRoute>
                    <LoadFile />
                </ProtectedRoute>} />
                <Route path='app/v1/listpage' element={
                <ProtectedRoute>
                    <ListPage />
                </ProtectedRoute>} />
                <Route path='*' element={<Error/>}/>
         </Routes>
           
           
            <Footer />
        </div>
    );
}

export default App;


