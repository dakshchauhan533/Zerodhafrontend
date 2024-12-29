import React from 'react';


function Team() {
    return (
        <div className='container '>
            <div className="row text-center mt-5  border-bottom">
                <div className='col mb-5'>
                    <h1>People</h1>
                </div>

                <div className='row mb-5'>
                    <div className='col-6'>
                        <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%", width:"60%" , marginTop:"50px"}}/>
                       <p className='mt-2 fs-4'>
                            Nikhil Kamath
                       </p>
                       <p className='fs-6 text-muted '>
                         Founder , CEO
                       </p>
                   
                                            </div>
                    <div className='col-6  mt-2 p-5 text-start text-muted' style={{lineHeight:'30px', fontSize:'1.1em' , }}>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>
                            Connect on 
                            <a href='#' style={{textDecoration:"none"}}> Homepage</a>&nbsp;
                            /
                            <a href='#'  style={{textDecoration:"none"}}>&nbsp;
                                Trading QnA
                            </a>&nbsp;
                            /
                            &nbsp;<a href='#'  style={{textDecoration:"none"}}>Twitter</a>
                        </p>
                    </div>
                </div>

                <div className='row'>
            <div className='col-4'></div>
            <div className='col-4'></div>
            <div className='col-4'></div>
                </div>
                <div className='row'>
            <div className='col-4'></div>
            <div className='col-4'></div>
            <div className='col-4'></div>
                </div>
                <div className='row'>
            <div className='col-4'></div>
            <div className='col-4'></div>
            <div className='col-4'></div>
                </div>
            </div>
        </div>



        
     );
}

export default Team;