import React, { useEffect } from 'react'
import axios  from 'axios'
 function Edit(props) {
  console.log(props)
  
useEffect(()=>{
  
  axios.get("http://localhost:8081/edit"+index)
  .then((result) => {
    console.log(result)
    
  })
  .catch((err) => { console.log(err) })
},[])

return (
    <>
      <h1>hello,this is edit page</h1>  
      <input type="text" placeholder='name' />
      <input type="number" placeholder='age'/>
      <input type="number" placeholder='phone'/> 
      <button type='submit'>submit</button>
    </>
  )
}

export default Edit
