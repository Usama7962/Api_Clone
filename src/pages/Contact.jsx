import React from 'react'
import { useNavigate } from 'react-router-dom';


const Contact = () => {
  let amir=(e)=>{
    e.preventDefault();
  }
    
const navigate=useNavigate();
const goto=()=>{
  navigate('/home');
 
}
  return (
    <form className='ali'onSubmit={amir}>
      <h1>signup page</h1>
      <div className='nadeem'>
      <input type='text'name='usama'placeholder='enter your name'/>
      </div>
      <div className='item1'>
      <button className='nomi'onClick={goto}>submit</button>
      </div>
    </form>
  )
}

export default Contact