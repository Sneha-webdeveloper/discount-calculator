import { Col, Row } from 'react-bootstrap';
import './App.css';
import { TextField ,Button} from '@mui/material';

import {useState} from 'react';



function App() {
  
const [markprice,setMarkprice] = useState(0)
const [discount,setDiscount] = useState(0)
const [discountprice,setDiscountprice] = useState(0)

console.log(markprice,discount,discountprice);

const calculate=(e)=>{
  const  output =Math.floor (markprice-(markprice*(discount/100)));
  console.log(output);
  setDiscountprice(output);
}

const reset=(e)=>{
setMarkprice(0);
setDiscount(0);
setDiscountprice(0);
}

  return (
    <>
      
<div className='body d-flex align-items-center justify-content-center bg-light' style={{height:'740px'}}>
    <Row className='d-flex align-items-center justify-content-center  flex-lg-row  mx-auto  g-2 '>
    
    <Col  lg={6} xl={5} sm={4} md={4}  >
    <img src="https://img.freepik.com/free-vector/money-saving-concept_52683-8912.jpg?w=740&t=st=1704375779~exp=1704376379~hmac=d9a91727b4db73ba16b05a439da71f305d7bb614087b15b07a63be4306cb58de" alt="" className='me-3 rounded img-fluid ' style={{height:"540px"}}/>
    
    </Col>


    <Col sm={8} md={8} lg={6} xl={5}> 
   <div className='box border border-2 black my-5  rounded shadow mx-auto me-5' style={{height:"540px"}}>
     <div className='heading d-flex  flex-column  justify-content-center align-items-center'>
        <h1 className='mt-5'><u>Discount Calculator</u></h1>
        <p> 💰Counting savings made simple✨</p>
     </div>

     <div className="res d-flex flex-column justify-content-center align-items-center  mx-5 p-3 rounded">
      <h2 > {discountprice}</h2>
<h4>Discounted Price <img src="https://orig00.deviantart.net/712c/f/2010/236/2/e/spinning_coin___animation_by_mantastic001.gif" alt="" style={{width:"30px"}} /></h4>

     </div>

  <form>
       <div className="inpt d-flex flex-column justify-content-center align-items-center  my-3">
       <TextField id="standard-basic" label="Marked Price" variant="standard"  className='my-3 w-75 fs-1'  onChange={(e)=>setMarkprice(e.target.value)} value={markprice||""}/>
  <TextField id="standard-basic" label="Discount percentage" variant="standard" className='my-3 w-75 fs-1' onChange={(e)=>setDiscount(e.target.value)} value={discount||""}/>
  
       </div>
  </form>

     <div className="btn d-flex justify-content-around">
     <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
<Button variant="outlined" onClick={e=>reset(e)} >Reset</Button>
     </div>

   </div>
    </Col>

    
    
        </Row>
    
  
</div>
    </>
  );
}

export default App;
