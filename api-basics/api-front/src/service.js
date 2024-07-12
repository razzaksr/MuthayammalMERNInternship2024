import axios from 'axios'

const url="/ekart"

export const callPost=async(object)=>{
    const iGot = await axios.post(`${url}/deliver`,object)
    return iGot
}