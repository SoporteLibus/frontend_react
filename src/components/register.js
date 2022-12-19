import React, {useState} from 'react'
import axios from 'axios'
import '../styles/register.css'
import { useNavigate } from 'react-router-dom';


const Register=()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate=useNavigate()

    const Register = async (e) => {
        e.preventDefault();
        try {
            const resp=await axios.post('http://172.18.6.143:3000/api/v1/auth/register', {
                name: name,
                email: email,
                age:age,
                password: password,
                password2: confPassword
            });
            console.log(resp)
            if (resp){
                navigate("/app/v1/login",alert('confirmar registro por mail'))
            }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

return (
        
    <div className='register-box' >
        <form onSubmit={Register}>
            <p >{msg}</p>
            <div >
                <img src="/images/logo2.png" className="avatar" alt="Avatar" />
                <h1>Registrarse</h1>
                <label >Name</label>
                <div >
                    <input type="text"  placeholder="Name"
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <div >
                <label >Email</label>
                <div >
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div >
                <label >Age</label>
                <div >
                    <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
            </div>
            <div >
                <label >Password</label>
                <div >
                    <input type="password"  placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div >
                <label >Confirm Password</label>
                <div >
                    <input type="password"  placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                </div>
            </div>
            <div >
            <input type="submit" value="Registrarse" />
            </div>
        </form>
    </div>
                
 
)
}

export default Register