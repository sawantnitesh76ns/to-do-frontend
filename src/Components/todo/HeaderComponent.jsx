import React ,{Component} from 'react';
//import { withRouter } from 'react-router';
import './ToDo.css';
import AuthenticationService from './AuthenticationService.js'
import { Link} from 'react-router-dom';  //This elps to route from one path to another


class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn=AuthenticationService.isUserLogin();
        console.log(isUserLoggedIn)
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div >
                        <a href="https://www.javatpoint.com/hibernate-tutorial" className="navbar-brand">nitesh24</a>
                    </div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/welcome/nitesh24">Home</Link></li>}
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>   
            
        )
    }
}
export default HeaderComponent;