import React from "react";
import {Navbar, Container, Nav, NavDropdown, Button} from "react-bootstrap"
// import "../images/logo.png"
import SidebarMenu from 'react-bootstrap-sidebar-menu';


function Header(props){
    return (
      <Navbar expand="lg" className="bg-body-tertiary navbar-custom p-0">
      <Container>
          <Navbar.Brand href="#home">
            <img src={require("../images/logo.png")} alt="logo" className="m-0 p-0"></img>
            Notes
            </Navbar.Brand>
            {/* <Button onClick={() => console.log("clicked")}>tst</Button> */}
          <Navbar.Toggle onClick={() => props.setSideBar(prevState => !prevState)} className="d-md-none"/>
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse> 
            <div className="navbar-inverse side-collapse in">
             <nav role="navigation" className="navbar-collapse">
               <ul className="nav navbar-nav">
                 <li><a href="#Home">Home</a></li>
                 <li><a href="#users">Users</a></li>
                 <li><a href="http://placesforlove.com">Places</a></li>
               </ul>
             </nav>
           </div>
              <div className="container side-collapse-container">
         <div className="row">
           <h1>Hello</h1>
           <p>This is a side opening nav demonstration</p>
           <p>Make your browser smaller and the top menu wil become into a lateral slider menu</p>
         </div>
       </div> */}
        </Container>
      </Navbar>

    )
}

export default Header