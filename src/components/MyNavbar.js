import React from "react";
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import logo from '../images/MementoLogo.png';

export default class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div>
            <Navbar>
              <NavbarBrand href="/" >
              <img
                alt=""
                src={logo}
                height="50px"
                className="d-inline-block align-top"
              />
              </NavbarBrand>
                <Nav navbar className="justify-content-end MySticky" >
                  <NavItem className="myIcons">
                    <NavLink href="/profile">
                      <span className="icon-user"></span>
                    </NavLink>
                    <NavLink href="/settings">
                      <span className="icon-settings"></span>
                    </NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </div>
        );
      }
    }

