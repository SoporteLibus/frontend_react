import './App.css';
import React from "react";
import Home from './components/Home'
import {Navigate, Route, Routes } from 'react-router-dom';
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


function App() {
    
    const auth=localStorage.getItem('token')
    return (
        <div>
            <Nav />
            <Back />
            {!auth ?  
            <Routes>
                <Route path='/' element={<Navigate to='/app/v1/login' replace />}/>
                <Route path='app/v1/' element={<Home  />} />
                <Route path='app/v1/milacron' element={<Milacron />} />
                <Route path='app/v1/arburg' element={<Arburg />} />
                <Route path='app/v1/bmb' element={<Bmb />} />
                <Route path='app/v1/login' element={<Login />} />
                <Route path='app/v1/search' element={<Search />} />
                <Route path='app/v1/formpage' element={<FormPage />} />
                <Route path='app/v1/loadfile' element={<LoadFile />} />
                <Route path='app/v1/listpage' element={<ListPage />} />
                <Route path='app/v1/register' element={<Register/>} />
                <Route path='*' element={<Error />} />
            </Routes>
            :
            <Routes>
                <Route path='*' element={<Error />} />
            </Routes>
            }
           
            <Footer />
        </div>
    );
}

export default App;


