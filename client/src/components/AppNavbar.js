import React, { Component } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

  class AppNavbar extends Component {

      state = { 
        isOpen:false
       };

      toggle = () => {
      this.setState({
        isOpen:!this.state.isOpen
      })
    };

      render() { 
          return ( 
           <div>
             <Navbar color="info" dark expand ='md' className="mb-5" >
                <Container>
                    <NavbarBrand href="/" className="ml-auto">My Daily Schedule</NavbarBrand>
                       <NavbarToggler onClick={this.toggle} />
                           <Collapse isOpen={this.state.isOpen} navbar>
                               <Nav className="ml-auto" navbar>
                                  <NavItem>
                                    <NavLink href="/">Tasks</NavLink>
                                  </NavItem>
                                </Nav>
                          </Collapse>
                </Container>
            </Navbar>
          </div>
         );
      }
  }
   
  export default AppNavbar;