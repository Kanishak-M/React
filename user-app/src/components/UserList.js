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
        <div>
              <table className="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Age</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>                   
     {users.map( (users, index) => {
            return <tr key ={users.id}>
                        <td>{users.name}</td>
                        <td>{users.age}</td>
                    </tr>
                })}
    </tbody>
  </table>
            <button className="btn btn-primary">Hit</button>
        </div>
    )
}
