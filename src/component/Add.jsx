import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/Add.css'

function Add() {

  const location = useNavigate()

  const [id,setId]=useState("")
  const [name,setName]=useState("")
  const [task,settask]=useState("")
  const[technologies,settechnologies]=useState("")
 
  const base_url='http://localhost:8000/add-an-employee'

const addEmployee=async(e)=>{
  //add  - Api call
  console.log(id,name,task,technologies);
  alert('add successfully')
  location('/admin')

  //API call to add  details to the mongodb
  const body={id,name,task,technologies}
  const result = await axios.post(base_url,body)
  .then((result)=>{
    console.log(result);
    alert(result.data.message)
    location('/admin')//redirected to adminpage
  }).catch((error)=>{
    alert("Please enter a unique employee id")
  })

}
  return (
    <div className='add'>
      <div className="container text-center m-3">
        <h2 className='m-4 p-4'>Add Details</h2>
        <div className='p-3'>
        <img src="https://cdn2.iconfinder.com/data/icons/rounded-white-basic-ui-set-3/139/Document_AddInfo-RoundedWhite-512.png" width={'100px'} alt="" />
        </div>
        <MDBInput label='ID' onChange={(e)=>setId(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Name' onChange={(e)=>setName(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Task' onChange={(e)=>settask(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Technologies' onChange={(e)=>settechnologies(e.target.value)} id='form1' type='text' />

        <div>
          <button className='btn btn-success btn-dark m-3' onClick={(e)=>addEmployee(e)}>Add<i class="fa-solid fa-user-plus"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Add