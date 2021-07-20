import React , {useState} from 'react'
import axios from "axios"
import Skills from './Skills'
export default function UserForm() {
    const [userName ,setUserName] = useState({})
    const [addUser,setAddedUser] =useState(false);
    const [hideInfo,setHideInfo] =useState();
    const userEventHandler = (event) => {
        console.log(event)
        setUserName({...userName , name : event.target.value})
    }
    const userAgeEventHandler = (event) => {
        console.log(event)
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
        if(!addUser) {setAddedUser(true) 
            setTimeout(() => {
                document.getElementsByTagName("h2")[0].style.display="none"
            }, 3000)
            const promise = axios.post("http://localhost:4200/users",userName)
            promise.then((response) =>{console.log(response)}).catch( (err) => {
            console.log(err)
        })
    }
     
    }
    return (
        <div>
            {(addUser) ? <h2> New User Added </h2> : <> </> }
            {userName.name}<br/>
            <input value={userName.name} placeholder="name" onChange ={userEventHandler}/> <br/>
            <input value={userName.age} placeholder="age" onChange={userAgeEventHandler}/> <br/>
            <input type="date"  onChange={userDateChangeHAndler} /> <br/>
            <br/>
            <select id="skill" className="form-select" onChange={userskillChangeHandler}>
            <Skills />
            </select>
            <br/>
            <button type="submit" onClick={save}>Save</button>
        </div>
    )
}
