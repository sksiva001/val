// import logo from './logo.svg';
// import {Button, Text} from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [int,setInt]=useState(30);
  const [ext,setExt]=useState(70);

  const [iint,setIint]=useState();
  const [eext,setEext]=useState();

  const [res,setRes]=useState();

  function calc(){
    let x=iint/10*int/10;
    let y=eext/10*ext/10;
    setRes(x+y);
  }


  
  return (
    <div style={{paddingLeft:'200px',paddingTop:'50px'}}>
      <table borderColor='black'>
    <div style={{borderColor:'black'}}>
      <div style={{flex:'1'}}>
      <table border='2'width='100%'>
       <tr>
        <th>INTERNAL </th>
        <th>EXTERNAL </th>
       </tr>
       <tr>
        <td>{int}</td>
        <td>{ext}</td>
       </tr>
      </table>
      </div>
      <table>
        <tr>
          <td><text>fine adjustment of internals :</text></td>
          <td><button onClick={()=>{setInt(int+1);setExt(ext-1)}}>+1</button></td>
          <td><button onClick={()=>{setExt(ext+1);setInt(int-1)}}>-1</button></td>
        </tr>
        <tr>
          <td><text>quick setting of the weights :</text></td>
          <td><button onClick={()=>{setInt(30);setExt(70)}}>30/70</button></td>
          <td><button onClick={()=>{setInt(40);setExt(60)}}>40/60</button></td>
          <td><button onClick={()=>{setInt(20);setExt(80)}}>20/80</button></td>
        </tr>
      </table>
      <table>
        <tr>
          <td><text>enter your coursework mark</text></td>
          
          <td><input type='number'onChange={(e)=>{setIint(e.target.value)}}/></td>
        </tr>
        <tr>
          <td><text>enter the external mark</text></td>
          <td><input type='number'onChange={(e)=>{setEext(e.target.value)}}/></td>
        </tr>
        <tr>
          <td><text>your final mark is:</text></td>
          <td><text>{res}</text></td>
        </tr>
        <tr>
        <td><div styles={{paddingLeft:'450px'}}><button onClick={calc} > calc</button></div></td>
        </tr>

      </table>
    </div>
    </table>
    </div>
  );
}

export default App;
