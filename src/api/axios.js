import axios from "axios"

export const api = axios.create({
    baseURL:'http://172.18.6.143:3000/api/v1' 
})

const getPosts = async () => {
    const response = await api.get('/items',{
        headers:{
            'Authorization': await localStorage.getItem('token')
        }
    })
    
    return response.data
}

const login= async()=>{
    const response=await api.post('/auth/login')
    return response.data
}

export default getPosts