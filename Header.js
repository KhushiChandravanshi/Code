import React from 'react';
import './Header.css';
const Header =()=>{
    return(
        <header className="header">
            <div className="logo">
                <a href="#">AmaKart</a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search for products, brands and more" />
                <button type="button">Search</button>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><a href="#"><button type="button">Login</button></a></li>
                    <li><a href="#"><button type="button">Cart</button></a></li>
                    <li><a href="#"><button type="button">More</button></a></li>
                    <div class="container">
  

  <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal">
    Diwali Cupon
  </button>

  <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title">Modal Heading</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
    
        <div class="modal-body">
 
        </div>
      
        <div class="modal-footer">
            
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
                </ul>
            </nav>
        </header>
    )
}
export default Header;