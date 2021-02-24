import React ,{Component} from 'react';
//import { withRouter } from 'react-router';
import './ToDo.css';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';  //This helps to route from one path to another
import AuthenticatedRoute from "./AuthenticatedRoute.jsx"
import LoginComponent from "./LoginComponent.jsx"
import HeaderComponent from "./HeaderComponent.jsx"
import FooterComponent from "./FooterComponent.jsx"
import LogoutComponent from "./LogoutComponent.jsx"
import ListToDosComponent from "./ListToDosComponent.jsx"
import WelcomeCoponent from "./WelcomeCoponent.jsx"



class ToDoApp extends Component{
    render(){
        return(
            <Router>
                <>
                    <HeaderComponent/>
                    <Switch>       {/*  This switch work exactly same as switch case in java      */}
                        <Route path="/" exact component={LoginComponent}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeCoponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/todos" component={ListToDosComponent}></AuthenticatedRoute>
                        <Route path="/logout" component={LogoutComponent}></Route>
                        <Route component={ErrorComponent}></Route>     {/* If any case doesent match it will executr this case */}
                    </Switch>
                    <FooterComponent/>
                </>
            </Router>

            // <div className>
            //     <LoginComponent></LoginComponent>
            //     <WelcomeCoponent></WelcomeCoponent>
            // </div>
        );
    }
}







// function FailedLoginCall(props){
//     if(props.hasLoginFailed){
//         return <div>Login Failed</div>
//     }
//     return null
// }

// function SuccessfullLoginCall(props){
//     if(props.hasLoginSuccessfull){
//         return <div>Login Successfull</div>
//     }
//     return null
// }


function ErrorComponent(){
    return <div>An Error occured ,if you dont know what to do <strong>Contact Support</strong></div>
}


export default ToDoApp;