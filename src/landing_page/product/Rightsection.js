import React from 'react';

function Rightsection({productname,description,imagelink , bottomlink}) {
    return ( <div className='container'>
        <div className='row mb-5 '>
        <div className='col-5  mt-4'>
        <h1 className='mt-5 mb-5'>
            {productname}
        </h1>
        <p className='text-start text-muted mb-4 fs-5'>
            {description}
        </p>
        <div className='text-start mt-3'>
           <a href='#'  style={{marginLeft:"70px", textDecoration:"none",fontWeight:"500", marginLeft:"-2px"}}>{bottomlink}</a>
        </div>
        
            </div>
            <div className='col-1'>

            </div>
            <div className='col-6  '>
    <img src={imagelink} style={{ width:"90%"}}/>
            </div>
        </div>
    </div> );
}

export default Rightsection;



