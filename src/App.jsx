import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

import './index.css'
function App() {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8081/")
      .then((result) => {
        // console.log(result.data)
        setData(result.data)
      })
      .catch((err) => { console.log(err) })
  }, [])


async function deleteData(index){
  let response = await axios.delete('http://localhost:8081/delete/'+index)
     console.log(response)
    window.location.reload()  
  
} 
 function editData(index){          

  navigate('/editdata/'+index)    
  // <Edit/>
  

}


  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {

            data.map((res, index) => {
              return (
                <tr key={index}>
                  <td>{res.id}</td>
                  <td className='table-name'>{res.name}</td>
                  <td>{res.age}</td>
                  <td>{res.phone}</td>
                  <td><button onClick={(e)=> {deleteData(index)}}>delete</button></td>

                  <td><button onClick={(e)=>{editData(index)}}>edit data</button></td>
                </tr>)
            })
          }
        </tbody>
      </table>

      <a href="/add">add data</a>
    </>
  )
}

export default App
