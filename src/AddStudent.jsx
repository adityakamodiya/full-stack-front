import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function AddStudent() {
    const navigate = useNavigate()
    // const[id,setid]= useState(1)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [phone, setPhone] = useState("")

    function handleSubmit(e) {
        
        e.preventDefault()
        axios.post("http://localhost:8081/add", {
            
            name, age, phone
        })
            .then((result) => {
                if (result.status === 200 && result.statusText === "OK") console.log(result)
                console.log(result.data)
            })
        navigate('/')
            .catch((err) => console.log(err))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" required placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} autoFocus /><br />
                <input type="text" required placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} /><br />
                <input type="text" required placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddStudent
