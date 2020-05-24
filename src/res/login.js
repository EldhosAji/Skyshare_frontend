import React, { Component } from 'react';
import '../App.css';
import MaterialIcon from 'material-icons-react';
import { parse } from 'qs';
import { Redirect } from 'react-router-dom'
import  Fpassword from './forgetpassword'



class Login extends Component {
  constructor(props){
  super(props);
    this.state={show:true,
        showIco:"visibility_off",
        email:"",
        password:"",
        data:[],
        redirct:false,
  };
 };
 _loginVerification=(e)=>{
     const datas={}
     fetch('http://localhost:8080/api/user/login',{
            method:'POST',    
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        }).then((response)=>{
            response.json().then(response=>{
                console.log("Auth : "+response.authToken)
                sessionStorage.setItem('authKey',response.authToken);
                if(response.authToken==="nullVal"){
                    console.log("invalid")
                    this.setState({email:'',password:''})
            alert('Invalid email or password')
                    this.setState({redirct:false});
                }
                if((response.authToken).length>12){
                    console.log("valid")
                    this.setState({redirct:true});
                }
                
            })
        })
        .catch(error=>console.log(error))

        if(!this.state.redirct){
            
            e.preventDefault();
            e.stopPropagation();
        }else{
            console.log("res")
            
        }
 }
 _passwordShow=()=>{
    this.setState({show:!this.state.show})
 }

  render(){
    if(this.state.redirct) return <Redirect to='/profile'/>
  return (
  <div>
      <div className="login" style={{width:this.props.width}}>
            <div>
               <div style={{marginTop:'-10%'}}>
                    <h2 id="secLog">SIGN IN</h2>
                </div>
                <form onSubmit={this._loginVerification}>
                <div id="loginInput">
                    <input type="email" required onChange = {(event) => this.setState({email:event.target.value})} value={this.state.email} placeholder="Email ID"/>
                    
                </div>
                 <div id="loginInput">
                    <input  type={this.state.show?"password":"text"} required onChange = {(event) => this.setState({password:event.target.value})} value={this.state.password} placeholder="Password"/>
                    <i className='large material-icons' style={{color:"#555",position:'absolute',marginLeft:-15,marginTop:15}} onClick={this._passwordShow}>
                    { !this.state.show ? 'visibility' : 'visibility_off'}
                    </i>
                </div>
                <div>
                        <MaterialIcon icon=""/>
                </div>
                <div>
                    <input type="submit" id="subBtn" value="LOG IN" />
                    
                </div>
                </form>
                <div>
                    <span id="txt">Forget password <a href='/ForgetPassword'>Click here</a></span>
                </div>
                <div>
                    <span id="txt">Don't have an account? <a href='/' onClick={this.props.signup}>Create now</a></span>
                </div>
            </div>
      </div>
  </div>);
}
}
export default Login
