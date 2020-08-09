import React,{Component} from 'react'
import {
  Collapse, 
  Navbar, 
  NavbarToggler, 
  Nav, 
  NavItem,
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,NavLink,withRouter
} from 'react-router-dom';
import routes from './routes/routes';
import Books from './Pages/Books/Books';
import AddToCart from './Pages/AddToCart/AddToCart';
class App extends Component{
  state={
    isNavbarOpen:false,
  };
  toggleNavBar=(event)=>{
 
          this.setState(
          {isNavbarOpen:!this.state.isNavbarOpen});
  }
  render(){
    const {isNavbarOpen}=this.state;
    return(
      <div>
        <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggleNavBar}/>
          <a className="navbar-brand" href={"home"}>Blog</a>
          <Collapse isOpen={isNavbarOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to={routes.books}>Books</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to={routes.cart}>Cart</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to={routes.shelf}>Shelf</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>

      <Route path={routes.books} component={Books}/>
      <Route path={routes.cart} component={AddToCart}/>
      </div>
    );
  } 
}
export default App;