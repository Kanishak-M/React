import React , {useState} from 'react'
import axios from "axios"
export default function UserForm() {
    const [userName ,setUserName] = useState({name :"kanishak" ,age : 22 ,todayDate : Date() })
    
    const userEventHandler = (event) => {
        console.log(event)
        setUserName({...userName , name : event.target.value})
    }
    const userAgeEventHandler = (event) => {
        console.log(event)
        setUserName({...userName , age : event.target.value, [event.target.name] : event.target.value})
    }
    const userDateChangeHAndler = (e) => {
        setUserName({...userName , todayDate : e.target.value} )
        console.log(userName.todayDate)
    }
    const save = (e) => {
        try {
            const promise = axios.post("http://localhost:4200/users",userName)
            promise.then((response) =>{console.log(response)})
        }catch(err){
            console.log(err)
        }
     
    }
    return (
        <div>
            {userName.name}  and <br/>
            <input value={userName.name}  onChange ={userEventHandler}/> <br/>
            <input value={userName.age} onChange={userAgeEventHandler}/> <br/>
            <input type="date"  onChange={userDateChangeHAndler} /> <br/>
            <button onClick={save}>Save</button>
        </div>
    )
}
