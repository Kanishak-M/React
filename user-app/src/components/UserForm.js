import React , {useState} from 'react'
import axios from "axios"
import Skills from './Skills'
import Message from './Message'
export default function UserForm() {
    const [userName ,setUserName] = useState({name:""})
    const [addUser,setAddedUser] =useState(false);
    const [message ,setMessage] = useState(" ")
    const userEventHandler = (event) => {
        setUserName({...userName , name : event.target.value})
    }
    const userAgeEventHandler = (event) => {
        setUserName({...userName , age : event.target.value})
    }
    const userDateChangeHAndler = (e) => {
        setUserName({...userName , todayDate : e.target.value} )
        console.log(userName.todayDate)
    }
    const userskillChangeHandler = (e) => {
        setUserName({...userName , skills : e.target.value} )
        console.log('hi',e.target.value)
    }
    const save = (e) => {
        e.preventDefault();
        if(!addUser) {
            const promise = axios.post("http://localhost:4200/users",userName)
            promise.then((response) =>{console.log(response)
                setAddedUser(true) 
                setMessage("success")
                setTimeout(() => {
                    document.getElementsByTagName("h2")[0].style.display="none"
                }, 3000)
            }).catch( (err) => {
                setMessage("danger")
                console.log(err)
        })
    }
    }

    return (
        <div>
            {(addUser) ? <h2> New User Added </h2> : <> </> }
            {message === " "? <> </> : <Message val={message}/>}
            {userName.name}<br/>
            <input type="text" value={userName.name} placeholder="name" onChange ={userEventHandler}/> <br/>
            <input type="Number" value={userName.age} placeholder="age" onChange={userAgeEventHandler}/> <br/>
            <input type="date"  onChange={userDateChangeHAndler} /> <br/>
            <br/>
            <select id="skill" className="form-select" onChange={userskillChangeHandler}>
            <Skills />
            </select>
            <br/>
            <button type= "button" onClick={save}>Save</button>
        </div>
    )
}
