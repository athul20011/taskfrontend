import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './css/Edit.css'

function Edit() {
  const [eid,setId]=useState("")
  const [empname,setName]=useState("")
  const [emptask,setTask]=useState("")
  const [emptechnologies,settechnologies]=useState("")

    const {id}=useParams()
    console.log(id);//4

  
  const viewEmp=async(id)=>{
    const result = await axios.get(`${base_url}/view-an-employee/${id}`)
    console.log(result.data.employees);//object
    setId(result.data.employees.id)
    setName(result.data.employees.name)
    setTask(result.data.employees.task)
    settechnologies(result.data.employees.technologies)

  }
  useEffect(()=>{
    viewEmp(id)
  },[])

  const location= useNavigate()

//update function
    const base_url='http://localhost:8000'
    const updateEmployee=async(e)=>{
      e.preventDefault()
      const body={
        id:eid,
        name:empname,
        task:emptask,
        technologies:emptechnologies
      }
        const result= await axios.post(`${base_url}/update-an-employee/${id}`,body)
        console.log(result);
        alert('Data updated successfully')
        location('/admin')//back to admin
    }


  return (
    <div className='edit'>
      <div className="container text-center m-5">
        <h2>Edit Details</h2>
        <div className='m-3'>
          <img src="https://webstockreview.net/images/how-to-edit-png-images-6.png" width={'100px'} alt="" />
        </div>
        <form className='p-5'>
        <MDBInput onChange={(e)=>setId(e.target.value)} value={eid} label='ID' id='formControlLg' type='text' size='lg' readOnly />
        <br />
        <MDBInput onChange={(e)=>setName(e.target.value)} value={empname} label='Name' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setTask(e.target.value)}  value={emptask}  label='task' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>settechnologies(e.target.value)}  value={emptechnologies} label='technologies' id='formControlLg' type='text' size='lg' />
      <br />
      <div>
        <button onClick={(e)=>updateEmployee(e)} className='btn btn-dark m-3'>Update <i className='fa-solid fa-pen'></i></button>
      </div>
        </form>
      </div> 
    </div>
  )
}

export default Edit