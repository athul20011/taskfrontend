import React, { useEffect, useState } from 'react'
import { 
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCardBody,
  MDBCardText,
  MDBCard,
  MDBBtn
  
 } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './css/Admin.css'
function Admin() {
  //API fetching - to get all the details
  const base_url='http://localhost:8000'
  const location=useNavigate()

  //state creation
  const [allEmployees,setAllEmployees]=useState([])//to hold all  details

  const fetchData=async()=>{
    const result = await axios.get(`${base_url}/get-all-employees`)//details from the server
    console.log(result.data.employees);//object -> array
    setAllEmployees(result.data.employees)
  }
console.log(allEmployees);

const deleteEmp=async(id)=>{
  const result1 = await axios.delete(`${base_url}/delete-an-employee/${id}`)
  console.log(result1);
  alert(result1.data.message)
  fetchData()
}
const viewEmp=async(id)=>{
  const result2=await axios.get(`${base_url}/view-an-employee/${id}`)
  console.log(result2);
  location(`view/${id}`)
}
  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div className='admin'>
    <h1 className='text-center text-danger m-4'>📌Task <span className='text-dark'>Management System
      </span></h1>
        <div style={{marginLeft:'45%'}}>
        <img src="https://robisearch.com/wp-content/uploads/2021/05/Task-Logo-fullcol-Copy-561x480.png"width={'20%'} alt="" />
        </div>
       <div className='m-5'>
       <MDBCard className='card1 text-center'>
      <MDBCardBody>
        <hr />
        <MDBCardText>
        <div className='container'>
        <Link to={'/add'}>
        <a className=''style={{float:'right',padding:'50px'}} href=""> <img src="https://icon-library.com/images/add-icon-png/add-icon-png-28.jpg" width={'40px'} alt="" /></a>
        </Link>
        <MDBTable align='middle'>
      <MDBTableHead>
        <h4>Task Board</h4>
        <tr className='p-3'>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Task</th>
          <th scop='col'>Technologies used</th>
          <th></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          allEmployees.map((item)=>(
            <tr>
          <td>
           {item.id}
          </td>
          <td>
            {item.name}
          </td>
          <td>
            {item.task}
          </td>
          <td>
          {item.technologies}
          </td>
          <td>
            <div className='d-flex justify-content-evenly'> 
               <Link to={`view/${item.id}`}><i onClick={()=>viewEmp(item.id)} class="fa-solid fa-eye text-success"></i></Link> 
               <Link to={`edit/${item.id}`}>
             <i className='fa-solid fa-pen text-primary'></i>
            </Link>
                <i onClick={()=>deleteEmp(item.id)} className='fa-solid fa-trash text-danger'></i>
            </div>
          </td>
        </tr>
          ))
        }
      </MDBTableBody>
    </MDBTable>
        </div>
        </MDBCardText>
        <MDBBtn className='btn-dark' href='/'>Back</MDBBtn>
        <hr />
      </MDBCardBody>
    </MDBCard>
       </div>
  
    </div>
  )
}

export default Admin