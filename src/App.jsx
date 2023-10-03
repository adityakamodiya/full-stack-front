import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './index.css'
function App() {
  const[id,setid] = useState(2)
  const [name, setname] = useState('')
  const [age, setage] = useState()
  const [number, setnumber] = useState()
  const [arr, setarr] = useState([])
  const navigate = useNavigate()

// let i=1
  function handleSubmit(e) {
    // i++
setid(id+1)
// console.log(id)
    e.preventDefault()
    axios.post('http://localhost:8081/new', {
      id:id,
      name: name,
      age: Number(age),
      number: Number(number)
    }).then((result) => {
      // console.log(result)
      if (result.status === 200 && result.statusText === 'OK') {
        // navigate('/')
        getdata()
      }
    })
    // setid(id+1)
    setname('')
    setage('')
    setnumber('')
  }


  useEffect(() => {

    getdata();

  }, [])

  function getdata() {
    axios.get('http://localhost:8081/')
      .then((response) => {
        // console.log(response)
        setarr(response.data)
      })
  }
     
   
  async function  deleteData(index){
    // console.log(index)  
    let response= await axios.get('http://localhost:8081/new/id/')
    // response
            
    return console.log(response)
    // .then((res)=>{
    //   console.log(res.data)
      

      // setarr (arr.filter((item, ind) => {
               
      //   //  console.log(index)
      //    return ind !== index
      //         // return item !== index
      //     }))  
    // })
    
    
  
  }
  return (
    <>

      <div id="wrapper">
        <form action="" onSubmit={handleSubmit} >
          <input required type="text" placeholder='name' value={name} onChange={(e) => setname(e.target.value)} />
          <input required type="number" placeholder='age' value={age} onChange={(e) => setage(e.target.value)} />
          <input required type="number" placeholder='number' value={number} onChange={(e) => setnumber(e.target.value)} />
          <input required type="submit" />
        </form>
      </div>


      <table className='table'>

        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>phone no.</th>
        </tr>
        {
          arr.map((res, index) => {
            return (
              <>
                <tr key={index}>
                  <td className='id'>{res.id}</td>
                  <td>{res.name}</td>
                  <td>{res.age}</td>
                  <td>{res.number}</td>
                  <td><button onClick={(e)=>{deleteData(index)}}>delete</button></td>
                </tr>
              </>
            )
          })
        }
      </table>
    </>
  )
}

export default App
