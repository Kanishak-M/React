import React , {useState} from 'react'
export default function UserList() {
    const [users ,setUser] = useState([])
    return (
        <div>
            <button className="btn btn-primary">Hit me</button>
        </div>
    )
}
