import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import './css/View.css'

import axios from 'axios';
import { useParams } from 'react-router-dom';

function View() {
  const [viewEmp,setviewEmp]=useState({})
  const {id}=useParams()
  console.log(id);
  const base_url='http://localhost:8000'
  const viewdata=async(id)=>{
    const result =await axios.get(`${base_url}/view-an-employee/${id}`)
    console.log(result.data.employees);
    setviewEmp(result.data.employees)
  }
  console.log(viewEmp);
  useEffect(()=>{
    viewdata(id)
  },[])
 
  return (
<div className='view'>
<MDBCard>
      <MDBCardHeader>ID: {viewEmp.id}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>👤Name: {viewEmp.name}</MDBCardTitle>
        <MDBCardText>📝Task Details: {viewEmp.task}</MDBCardText>
        <MDBCardText>Technologies used: {viewEmp.technologies}</MDBCardText>
        <MDBBtn className='btn-dark' href='/admin'>Go back</MDBBtn>
      </MDBCardBody>
    </MDBCard>
</div>
  )
}

export default View