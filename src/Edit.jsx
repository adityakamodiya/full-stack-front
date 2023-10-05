import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import axios  from 'axios'
 function Edit() {
  const  obj = useParams();
  // console.log(obj)
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [phone, setPhone] = useState("")
  const [id,setId]= useState('')


  function handleEdit(){
    axios.put('http://localhost:8081/put/'+obj.index,{
      // id:Number(obj.index)+1,
     id, name, age, phone
    })
    .then((res)=>{
      console.log(res)
    })
  }
  

useEffect(()=>{
  
  axios.get("http://localhost:8081/edit/"+obj.index)
  .then((result) => {
    console.log(result.data.id)
    // setId(result.id)
    setId(result.data.id)
    // console.log(result.id)
    setName(result.data.name)
    setAge(result.data.age)
    setPhone(result.data.phone)
  })
  .catch((err) => { console.log(err) })
},[])





return (
    <>
      <h1>hello,this is edit page</h1>  
      <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="number" placeholder='age'value={age}onChange={(e)=>setAge(e.target.value)}/>
      <input type="number" placeholder='phone'value={phone}onChange={(e)=>setPhone(e.target.value)}/> 
      <button type='submit'  onClick={handleEdit}>submit</button>
    </>
  )
}

export default Edit
