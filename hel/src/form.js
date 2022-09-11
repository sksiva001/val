import React, { useState } from 'react'

export default function Form() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [num,setNum]=useState();
    const [pass,setPass]=useState('');
    const [er,setEr]=useState();
    const [fp, stFp]=useState('');


    const check=()=>{
        // alert('pressed')
        // console.log("pressed")
       
        const ma = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const j=90800;
        if(!name.trim()){
            stFp('First Name Cant be empty');
            return false;
        }
        if(!ma.test(email)){
            // setEr("enter correct email");
            alert("enter correct email");
            return false;
        }
        if(num!=j){
            alert("enter correct num");

            // setEr('enter correct phn');
            return false;
        }
        if(!pass.trim()){
            alert("enter 5 values only");
            // setEr('enter correct password');
            return false;
        }
        return true;

    }
  return (
    <div>
        
        <table>
        <tr>
            <td>Name</td>
        </tr>
        <tr><td><input type='text' onChange={(e)=>{setName(e.target.value)}}></input></td></tr>
        <div>{fp}</div>
        <tr>
            <td>EmailID</td>
        </tr>
        <tr><td><input type='text' onChange={(e)=>{setEmail(e.target.value)}}></input></td></tr>
        
        <tr>
            <td>Mobile</td>
        </tr>
        <tr><td><input type='number' onChange={(e)=>{setNum(e.target.value)}}></input></td></tr>
        
        <tr>
            <td>password</td>
        </tr>
        <tr><td><input type='password' onChange={(e)=>{setPass(e.target.value)}}></input></td></tr>
     
        </table>
        <button onClick={()=>{if(check()){setEr("succesfully verified")}}}>check</button>
        <text>{er}</text>
        
    
    </div>
  )
}
