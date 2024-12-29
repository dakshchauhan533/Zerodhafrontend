import React from 'react';

function Leftsection({productname,description,imagelink}) {
    return (
        <div className='container'>
            <div className='row mb-5 '>
                <div className='col-6  mt-5 '>
        <img src={imagelink} style={{ width:"87%"}}/>
                </div>
                <div className='col-1'>

                </div>
                <div className='col-5  mt-4'>
            <h1 className='mt-5 mb-5'>
                {productname}
            </h1>
            <p className='text-start text-muted  fs-5'>
                {description}
            </p>
            <div className='text-start mt-3'>
                <a href='#' style={{textDecoration:"none", fontWeight:"500"}}>Try demo→</a>
                <a href='#'  style={{marginLeft:"70px", textDecoration:"none",fontWeight:"500"}}>Learn more→</a>
            </div>
            <div className='text-start mt-4'>
                <img src="media/images/appstoreBadge.svg"/>
                <img src="media/images/googlePlayBadge.svg"  style={{marginLeft:"40px"}}/>
            </div>
                </div>
            </div>
          
        </div>
      );
}

export default Leftsection;