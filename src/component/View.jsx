import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
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
    <div style={{borderRadius:'10px',padding:'10px'}}>
      <MDBCard className='shadow' style={{border:'10px',borderRadius:'20px'}}>
        <img src="https://th.bing.com/th/id/OIP.eCC-bDsCGbIRiKE6s3m14QHaHa?rs=1&pid=ImgDetMain" style={{width:"90px"}} alt="" />
      <MDBCardBody>
        <MDBCardTitle><h2>Employee details</h2></MDBCardTitle>
        <MDBCardText>
          <h5>ID :{viewEmp.id}</h5>
          <h5>Name :{viewEmp.name} </h5>
          <h5>Age :{viewEmp.age}</h5>
          <h5>Designation:{viewEmp.designation}</h5>
          <h5>Salary :{viewEmp.salary}</h5>
          <button className='btn btn-dark px-3'>Back</button>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default View