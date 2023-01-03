import '../styles/login.css'
import { FcGoogle } from 'react-icons/fc'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const resp=await axios.post('http://172.18.6.143:3000/api/v1/auth/login', {
                email: email,
                password: password
            });
            

            const result =resp.data.tokenSession
            const data=resp.data
            if(result){
                localStorage.setItem('token',result)
                localStorage.setItem('data',JSON.stringify(data))
                navigate("/app/v1/")
                
            }else{
                alert('ingrese un usuario valido')
            }
          
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='div-global'>
            <div className="login-box">
                <img src="/images/logo2.png" className="avatar" alt="Avatar" />
                <h1>Login</h1>
                <form onSubmit={Auth}>
                    <div>
                        <label>Usuario</label>
                        <input type="text" placeholder="Ingresar Usuario" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
                    </div>
                    <label>Contraseña</label>
                
                    <input type="password" placeholder="Ingresar Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <div className="login-google">
                        <button type="submit"><label>Ingresar con</label><FcGoogle /></button>
                    </div>
                    <input type="submit" value="Entrar" />
                </form>
            </div>
        </div>
    )
}