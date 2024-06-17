import React from 'react'
import { Link } from 'react-router-dom'
import './css/Dashboard.css'

function Dashboard() {
  return (
    <div className='img'>
     <h1 className='text-center text-light m-4'>Task Management Application</h1>
     <div style={{marginLeft:'45%'}}>
        <img src="https://th.bing.com/th/id/R.9113cb7d7d530faf98f6851c0abfe762?rik=t2dZBtGyoVZ7IA&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fcomplexity-icon-65.png&ehk=ANup4GPT2L%2bWQt2Z99W1omwJIMFEytrU%2bLLtEpAim8M%3d&risl=&pid=ImgRaw&r=0"width={'20%'} alt="" />
        </div>
        <div className="container text-light">
            <p style={{textAlign:'justify'}}>Task Manager, previously known as Windows Task Manager, is a task manager,br system monitor, and startup manager included with Microsoft Windows systems. It provides  information about computer performance and running software,  including name of running processes, CPU and GPU load, commit charge,  I/O details, logged-in users, and Windows services. Task Manager can also be  used to set process priorities, processor affinity, start and stop services, and forcibly terminate processes.

Featured Tools</p>
<Link to={'/admin'}>
<div style={{marginLeft:"45%"}}>
<button className='btn btn-light'>Admin</button>
</div>
</Link>
        </div>
    </div>
  )
}

export default Dashboard