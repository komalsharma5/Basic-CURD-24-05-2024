import React, { useState } from 'react'
import data from './Fake-data'

const App = () => {
  //fakedata state
  const [result ,setresult] = useState(data)
  //view state
  const [input,setinput] = useState({})
  //update btn state
  const [temp_id,setTemp_id] = useState(0)

  //submit
  const submit_handler = () => {
    setresult([...result,input])
  }
 //veiw handler :set first input handler
  const input_handler = (e) => {
      setinput({...input,[e.target.name] : e.target.value})
      //console.log(input)
  }
 
  //Delet handler
  const delet_handler = (id) => {
    result.splice(id,1)
    setresult([...result])
  }
  //View handler
  const view_handler = (val,id) => {
    setinput(val)
    setTemp_id(id)
  }

  //update button
  const update_hadler = (val) => {
    result.splice(val,1,input)
    setresult([...result])
  }
  return (
    <>

    <div className='mx-auto d-block w-50 mt-5'>
      <input type='text' name='title' placeholder='Book Title' className='mx-3' value={input.title} onChange={input_handler}></input>
      <input type='text' name='author' placeholder='Author name' value={input.author} onChange={input_handler}></input>
      <button className='btn btn-primary ms-4' onClick={submit_handler}>Submit</button>
      <button className='btn btn-warning ms-3' onClick={() => update_hadler(temp_id)}>Update</button>
    </div>

     {
      result?.map((komal,id)=>{
        return(
          <div className='border border-3 my-4 w-25 text-center mx-5 mx-auto d-block py-3' key={id}>
            <h5>{komal.id}</h5>
            <h4>{komal.title}</h4>
              <h4>{komal.author}</h4>
              <button className='btn btn-danger mx-3' onClick={() => delet_handler(id)}>Delete</button>
              <button className='btn btn-success' onClick={() => view_handler(komal,id)}>View</button>
            </div>
        )
      })
     } 
     
    </>
  )
}

export default App
