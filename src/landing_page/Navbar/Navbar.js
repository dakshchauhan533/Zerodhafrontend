// filepath: /c:/Users/chauh/Desktop/projects/Zerodha/frontend/src/landing_page/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import AuthContext from "../context/AuthContext.js";

function Navbar() {
  // const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className='container border-bottom'>
      <nav style={{ height: '68px', backgroundColor: 'white' }} className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <Link to='/'>
              <img className='icons' style={{ width: '20%' }} src='media/images/logo.svg' alt="logo" />
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
              {/* {isAuthenticated ? ( */}
                <>
                  <li className="nav-item">
                    <Link className='nav-link' to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to='/about'>About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to='/products'>Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to='/pricing'>Pricing</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to='/support'>Support</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className='nav-link' to='/dashboard'>Dashboard</Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <button className='nav-link btn' onClick={logout}>Sign Out</button>
                  </li> */}
                </>
              {/* ) :
              //  (
              //   <>
              //     <li className="nav-item">
              //       <Link className='nav-link' to='/signup'>Sign Up</Link>
              //     </li>
              //     <li className="nav-item">
              //       <Link className='nav-link' to='/login'>Login</Link>
              //     </li>
              //   </>
              // )
              } */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;