import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {

  const location = useNavigate()

  const [id,setId]=useState("")
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [designation,setDesignation]=useState("")
  const [salary,setSalary]=useState("")

  const base_url='http://localhost:8000/add-an-employee'

const addEmployee=async(e)=>{
  //add employee - Api call
  console.log(id,name,age,designation,salary);

  //API call to add employee details to the mongodb
  const body={id,name,age,designation,salary}
  const result = await axios.post(base_url,body).then((result)=>{
    console.log(result);
    alert(result.data.message)
    location('/')//redirected to adminpage
  }).catch((error)=>{
    alert("Please enter a unique employee id")
  })

}
  return (
    <div>
      <div className="container text-center m-3">
        <h2 className='m-4 p-4'>Add Employee</h2>
        <MDBInput label='ID' onChange={(e)=>setId(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Name' onChange={(e)=>setName(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Age' onChange={(e)=>setAge(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Designation' onChange={(e)=>setDesignation(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Salary' onChange={(e)=>setSalary(e.target.value)} id='form1' type='text' />
        <br />
        <div>
          <button className='btn btn-success btn-dark m-3' onClick={(e)=>addEmployee(e)}>Add<i class="fa-solid fa-user-plus"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Add