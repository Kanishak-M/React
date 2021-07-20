import React , {useState,useEffect} from 'react'
import axios from 'axios'
export default function UserList() {
    const [users ,setUser] = useState([{name:"kani" ,age : "20" ,id : "0"}])
    useEffect(() => {
     
        console.log('hello world')
        const userData = axios.get('http://localhost:4200/users')
        userData.then((res) => {
                console.log(res)
                res.data.map( (val) => {
                return setUser((prevState) => [...prevState , val ])
                })
        })
    },[])
    
    return (
      <>
    <table className="table table-dark table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Age</th>
        <th>Date</th>
        <th>Skills</th>

      </tr>
    </thead>
    <tbody>                   
     {users.map( (users) => {
            return <tr key ={users.id}>
                        <td>{users.name}</td>
                        <td>{users.age}</td>
                        <td>{users.todayDate}</td>
                        <td>{users.skills}</td>
                    </tr>
                })}
    </tbody>
  </table>
            <button className="btn btn-primary">Hit</button>
      </>
    )
}
