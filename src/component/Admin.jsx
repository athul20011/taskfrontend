import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Admin() {
  //API fetching - to get all the employees details
  const base_url='http://localhost:8000'
  const location=useNavigate()

  //state creation
  const [allEmployees,setAllEmployees]=useState([])//to hold all employees details

  const fetchData=async()=>{
    const result = await axios.get(`${base_url}/get-all-employees`)//details from the server
    console.log(result.data.employees);//object -> array of employees
    setAllEmployees(result.data.employees)
  }
console.log(allEmployees);

// const deletedata=async(id)=>{
//   const result =await axios.delete(`${base_url}/delete-an-employee/${id}`)
//   console.log(result);
//   alert(result.data.message)
//   fetchData()
// }
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
    // <div>
    //   <h1 className='text-center text-primary m-4'>Employee Management System</h1>
    //   <div className="container">
    //     <p style={{textAlign:'justify'}}> An employee management system is a tool that companies use to organize their employee data and key functions within their HR department, including recruitment & onboarding, time and attendance tracking, performance management, training & development, payroll, and benefits administration. They are a type of workforce management tool that acts as a single source of truth for your HR professionals and employees alike.</p>
    //   </div>

    //  <Link to='/add'>
    //  <a className='btn btn-primary ' style={{float:'right',padding:'10px'}} href="">Add</a>

    //  </Link>
     
    //   <div className='container '>
    //   <MDBTable align='middle'>
    //   <MDBTableHead>
    //     <tr>
    //     <th scope='col'>Id</th>
    //       <th scope='col'>Name</th>
    //       <th scope='col'>Age</th>
    //       <th scope='col'>Designation</th>
    //       <th scope='col'>Salary</th>
    //       <th scope='col'>Actions</th>
    //     </tr>
    //   </MDBTableHead>
    //   <MDBTableBody>
    //    {
    //     allEmployees.map((item)=>(
    //       <tr>
    //       <td>
    //         {item.id}
    //       </td>
    //       <td>
    //         {item.name}
    //       </td>
    //       <td>
    //        {item.age}
    //       </td>
    //       <td>
    //         {item.designation}
    //       </td>
    //       <td>
    //         {item.salary}
    //       </td>
    //       <td>
    //         <div className='d-flex justify-content-evenly'>
    //         <i onclick={()=>viewEmp(item.id)} className='fa-solid fa-eye text-dark'></i>
    //           <i className='fa-solid fa-pen text-primary'></i>
    //         <i onclick={()=>deleteEmp(item.id)} className='fa-solid fa-trash text-danger'></i>
    //         </div>
    //       </td>
    //     </tr>
    //     ))
    //    }
 
    //   </MDBTableBody>
    // </MDBTable>
    //   </div>
    // </div>
    <div>
        <h1 className='text-center text-dark m-4'>Employee Management System</h1>
        <div className="container">
            <p style={{textAlign:'justify'}}>An employee management system is a tool that companies use to organize their employee data and key functions within their HR department, including recruitment & onboarding, time and attendance tracking, performance management, training & development, payroll, and benefits administration. They are a type of workforce management tool that acts as a single source of truth for your HR professionals and employees alike.

Employee management systems increase the efficiency and accuracy of your HR data and give you tools to manage your workforce more effectively, including time tracking, task management, and employee scheduling abilities. They're purpose-built to scale with your company as your workforce grows, with no limit to the number of employees you can manage. They'll get you out of your spreadsheets and filing cabinets and into the area of digital HR, allowing you to segment your workforce data into all your key sub-groups easily.

Featured Tools</p>
        </div>

       

        <Link to={'/add'}>
        <a className='btn btn-dark m-5' style={{float:'right',padding:'10px'}} href="">Add</a>
        </Link>

        <div className='container'>
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>

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
            {item.age}
          </td>
          <td>
            {item.designation}
          </td>
          <td>
            {item.salary}
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
    </div>
  )
}

export default Admin