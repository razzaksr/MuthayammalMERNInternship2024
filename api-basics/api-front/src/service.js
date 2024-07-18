import axios from 'axios'

const url="/ekart"

export const callUpdate=async(object)=>{
    const t = await axios.put(`${url}`,object)
    return t
}

export const callFetchOne=async(id)=>{
    const t = await axios.get(`${url}/${id}`)
    return t
}

export const callDelete=async(id)=>{
    const t = await axios.delete(`${url}/erase/${id}`)
    return t.data
}

export const callGet=async()=>{
    const data = await axios.get(`${url}/`)
    //alert(JSON.stringify(data.data))
    return data
}

export const callPost=async(object)=>{
    const iGot = await axios.post(`${url}/deliver`,object)
    return iGot
}