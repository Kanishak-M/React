import React , {useState} from 'react'

export default function UserForm() {
    const [userName ,setUserName] = useState({name :"kanishak" ,age : 22})
    
    const userEventHandler = (event) => {
        console.log(event)
        setUserName({...userName , name : event.target.value})
    }
    const userAgeEventHandler = (event) => {
        console.log(event)
        setUserName({...userName , age : event.target.value})
    }
    const save = (e) => {
        console.log(userName)
    }
    return (
        <div>
            {userName.name} <br/>
            <input value={userName.name}  onChange ={userEventHandler}/> <br/>
            <input value={userName.age} onChange={userAgeEventHandler}/> <br/>
            <button onClick={save}>Save</button>
        </div>
    )
}
