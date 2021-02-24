import React ,{Component} from 'react';
//import { withRouter } from 'react-router';
import './ToDo.css';
import AuthenticationService from './AuthenticationService.js'



class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'nitesh24',
            password:'Hello@123',
            // loginFailed:'',
            // loginSuccessful:'',
            loginFailed:false,
            loginSuccessful:false
        }

        this.handleChanges=this.handleChanges.bind(this)
        this.authenticateUser=this.authenticateUser.bind(this)


    }

    handleChanges(event){
        
        this.setState({
            [event.target.name]:event.target.value
        })
        
    }
    //MY WAY TO AUTHENTICATE USER 
    // authenticateUser(){
    //     if(this.state.username==='nitesh24' && this.state.password==='Hello@123'){
    //         this.setState({
    //             loginFailed:'',
    //             loginSuccessful:'Login Successfull'
    //         })
    //     }
    //     else{
    //         this.setState({
    //             loginSuccessful:'',
    //             loginFailed:'Login Failed'
    //         })
    //     }
    // }
    //-----------------------------------------------------------------------------------------------------------------------
    //ANOTHER WAY TO AUTHENTICATE USER 
    authenticateUser(){
        if(this.state.username==='nitesh24' && this.state.password==='Hello@123'){
            this.props.history.push(`/welcome/${this.state.username}`)
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password)
            this.setState({ 
                loginSuccessful:true,
                loginFailed:false
                
            })
        }
        else{
            this.setState({
                loginSuccessful:false,
                loginFailed:true
            })
        }
    }

    

    

    render(){
        return(
            <div>
                {/* <div background-color='red' color='red'>{this.state.loginFailed}</div>
                <div color='green'>{this.state.loginSuccessful}</div> */}

                {/* <FailedLoginCall hasLoginFailed={this.state.loginFailed}></FailedLoginCall>
                <SuccessfullLoginCall hasLoginSuccessfull={this.state.loginSuccessful}></SuccessfullLoginCall> */}
                
                {/* in jsx if you give false && "String" it will return  false but
                    if you provide true && "String"  it wiill print taht strig 
                    So , we can use it to print Authentic Message */}
                <h1>Login</h1>
                {this.state.loginFailed && <div className="alert alert-warning">Invalid Credentials</div>}  
                {this.state.loginSuccessful && <div>Login Successfull</div>}      
                UserName: <input type='text' name='username' value={this.state.username} onChange={this.handleChanges}></input>
                PassWord: <input type='password' name='password'  onChange={this.handleChanges}></input>
                <button className="btn btn" onClick={this.authenticateUser}>Login</button>
            </div>
        );
    }

    
}
export default LoginComponent;