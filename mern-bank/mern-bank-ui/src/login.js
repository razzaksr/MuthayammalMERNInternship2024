import axios from "axios"
import { useState } from "react"

export const Login=()=>{
    const[users,setUsers]=useState({
        "username":"",
        "password":""
    })

    const collect = (eve) =>{
        const{name,value}=eve.target
        setUsers((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    return(
        <div>
            <input type="text" name="username" onChange={collect} value={users.username}/>
            <input type="password" name="password" onChange={collect} value={users.password}/>
            <input type="button" value="login" onClick={async()=>{
                const t = await axios.post('http://localhost:1234/login',users)
                if(t.data.user){
                    sessionStorage.setItem('logged',t.data.user.accountno)
                    window.location.assign("/")
                }
            }}/>
        </div>
    )
}