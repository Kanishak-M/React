import React from 'react'
import axios from 'axios'

const userDetailsDeleteHandler = (val) => {
    axios.delete(`http://localhost:4200/users/${val.data}`)
    .then((res) => {
        console.log(val.onClick())
        console.log(res)
    })
}
export default function Delete(props) {
    return (
        <>

        <button className="btn btn-danger" onClick={() => {  userDetailsDeleteHandler(props)
          }}>Delete</button>
        </>
    )
}
