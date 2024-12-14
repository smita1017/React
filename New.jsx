import React, { useState } from 'react'
import BasicTextFields from './BasicTextFields'
import Goal from './Goal'

const New = () => {
    let [input,setInput]= useState({
        name:"",
        address:""
    })

    let [arr,setArr] = useState([])

    let handleStudentAdd = () =>{
        setArr((pd)=>{
            return([...pd,input])
        })
    }


    let handleInput = (e) =>{
        setInput((pd)=>{
            return(
                {
                    ...pd,
                    [e.target.name]:e.target.value
                }
            )
        })
    }
  return (
    <div>
        <Goal isLoggedIn={false}/>
        <BasicTextFields data="hi" name="Name"/>
        <BasicTextFields name="Address"/>
        <input value={input.name} type="text" name="name" id="" onChange={handleInput} />
        <input value={input.address} type="text" name="address" id="" onChange={handleInput} />
        <button onClick={handleStudentAdd}>Add Student</button>
        <table>
            <thead>

            <tr>
                <th>Student Name</th>
                <th>Student Address</th>
            </tr>
            </thead>
            <tbody>

            {
                arr.map((e,index)=>{
                    
                    return(<tr key={index}>
                        <td>{e.name}</td>
                        <td>{e.address}</td>
                    </tr>)
                })
            }
</tbody>
        </table>
    </div>
  )
}

export default New