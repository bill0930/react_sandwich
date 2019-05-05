import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav,NavItem
    
 } from 'reactstrap';
 import { NavLink } from 'react-router-dom'


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            // 
        }

    }

    render(){
        return (
    <div className= "header ">
        <div className="container">
          <div className="row">
            <div className="col-12">
        <Navbar color="light" light expand="sm" className="col-auto">
          <NavbarBrand className="nav-link col-12 col-sm-6 " href ="/v1">
          <img src="../assets/images/logo.png" width = "50" height = "60" />
          BLOB SANDWICH
          </NavbarBrand>
            <Nav  className = "col-12 col-sm-5 d-flex justify-content-around " navbar>
              <NavItem >
                <NavLink className="nav-link  " to ="/order">ORDER</NavLink>
              </NavItem>
              <NavItem > 
                <NavLink className="nav-link disabled" to ="/sandwich">SANDWICH</NavLink>
              </NavItem>
              <NavItem >
                <NavLink className="nav-link disabled " to ="/user">USER</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        </div>
        </div> 
      </div>
    </div>
        )
    }
}

export default Header ;