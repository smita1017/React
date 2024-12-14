import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [data, setdata] = useState(
    {studentname:"",studentadd:""});

  let [alldata, setalldata] = useState([])

  function handleInput(e){
    setdata((pd)=>{
      console.log(  e.target.name,":",e.target.value);
      return ({
        ...pd,
          [e.target.name]:e.target.value
          })
        })

        
  }
  const maindata=()=>{
    console.log(alldata);
    
    setalldata((p)=>{
     return( [...p,
      data])
    })
    // setdata({studentname:"",
    //   studentadd:"",
    // });
  }


  return (
    <>
      <h2>StudentName:</h2>
      <input value={data.studentname} name='name' type="text" onChange={handleInput}/>
      <h2>Student Address</h2>
      <input value={data.studentadd} name='add' type="text" onChange={handleInput} />
      <button onClick={maindata}>Add Data</button>
      <ul>
        {
          // alldata.map((student,index)=>{

          //   return( <li>
          //     {student.studentname}:{student.studentadd}
          //   </li>)
          // })
        }
      </ul>
    </>
  )
}

export default App
