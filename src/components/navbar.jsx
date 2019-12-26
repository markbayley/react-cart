import React from 'react';


// Stateless Functional Component
const NavBar = ({ totalCounters}) => {
    console.log('NavBar - Rendered');
      
        return (
            <nav className="navbar navbar-dark bg-dark">
             <a className="navbar-brand" href="index.html">
             <i class="fas fa-shopping-cart"></i>{" "}
              <span className="badge badge-pill badge-secondary">
              {totalCounters}
              </span></a>
             
              <a className="navbar-brand" href="https://inblockdesign.com">
              <button className="btn btn-sm"><i class="fas fa-home"></i></button>
              </a>
            </nav>  
        );
    
};
 
export default NavBar;