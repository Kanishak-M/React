import React, {useEffect ,useState} from 'react'
import axios from 'axios'
export default function Skills() {
    const[option ,setOptions] = useState([])
    useEffect(()=>{
        const getOptionValue = axios.get('http://localhost:4200/skills')
        getOptionValue.then((res)=>{setOptions(res.data)})
        .catch((err)=>{console.log(err)})
    },[])
    return ( 
        <>
        {option.map((val,index) => {
            return <option value={val} key={index}>{val}</option>
        }
        )}
        </>
    )
}
