import React from 'react';

function Signup() {
    return ( 
<div className='container' style={{height:"477px"}}>
    <div className='row'  >
        <div className='col text-center mt-5'>
<h1 className='mb-3'>
    Signup Now
</h1>
<p className='mb-5' >Or track your existing application.</p>

<input type='text' placeholder='Enter your Email' className='mb-5' style={{height:"4rem",width:"40%" , fontSize:"23px",borderRadius:"10px" }}/>
<p className='mb-5'>you will recieve an OTP.</p>
<butto className="btn btn-primary"> Signup now</butto>
        </div>
    </div>
</div>

     );
}

export default Signup; 