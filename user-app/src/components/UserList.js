import React , {useState,useEffect} from 'react'
import axios from 'axios'
import Delete from './Delete'

export default function UserList() {
    const [users ,setUser] = useState([])
    useEffect(() => {
        console.log('hello world')
        const userData = axios.get('http://localhost:4200/users')
        userData.then((res) => {
                console.log(res)
                const datarr = res.data;
                setUser ( () => [...datarr] )
                users.map( (val) => {
                return setUser((prevState) => [...prevState , val ])
                })
        })
    },[]
    )
    const sort = () => {
      const myArr = [...users]
      console.log(myArr)
      myArr.sort((a, b) => {return Number(b.age) - Number(a.age)});

      setUser(myArr)
     }
    const clicked = () => {
      console.log('any value come')
    }
    return (
      <>
    <table className="table table-dark table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th onClick={sort}>Age</th>
        <th>Date</th>
        <th>Skills</th>
        <th></th>
      </tr>
    </thead>
    <tbody>                   
     {users.map((users) => {
            return <tr key ={users.id}>
                        <td>{users.name}</td>
                        <td>{users.age}</td>
                        <td>{users.todayDate}</td>
                        <td>{users.skills}</td>
                        <td> <Delete onClick = {clicked} data={users.id}/></td>
                    </tr>
                })}
    </tbody>
  </table>
            <button className="btn btn-primary">Hit</button>
      </>
    )
}
