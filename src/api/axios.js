import axios from "axios"

export const api = axios.create({
    baseURL:'http://172.18.6.143:3000/api/v1' 
})

export const apiGenerator = axios.create({
    baseURL:'http://172.18.0.164:3001' 
})

export const getGenerator1 = async () => {
    const response = await apiGenerator.get('/generador_1')
    return response.data
}

export const getGenerator2 = async () => {
    const response = await apiGenerator.get('/generador_2')
    return response.data
}

export const getDatosExtra = async () => {
    const response = await apiGenerator.get('/datos_extras')
    return response.data
}

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