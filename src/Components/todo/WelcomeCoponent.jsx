import React ,{Component} from 'react';
//import { withRouter } from 'react-router';
import './ToDo.css';
import { Link} from 'react-router-dom';

class WelcomeCoponent extends Component{
    render(){
        return(
            <>
                <h1>Welcome!</h1>
                <div className="container">
                Welcome {sessionStorage.getItem('authenticatedUser')} , You can manage your todo's <Link to="/todos">here</Link>
                </div>
            </>
        );
    }
}


export default WelcomeCoponent;