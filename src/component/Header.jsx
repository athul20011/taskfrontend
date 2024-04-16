import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import './css/Header.css'

function Header() {
  return (
    <div>
       <MDBNavbar className='navbar bg-dark' light bgColor=''>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' style={{color:'whitesmoke'}}>
          <i class="fa fa-users m-2 fs-4" aria-hidden="true"></i>
            EMS
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header