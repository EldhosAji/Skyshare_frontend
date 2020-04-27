import React, { Component } from 'react';
import '../App.css';
import MaterialIcon from 'material-icons-react';


class Registration extends Component {
  constructor(props){
  super(props);
    this.state={show:true,showRe:true,
        showIco:"visibility_off",
        username:"",
        email:"sfd",
        password:"",
        rpassword:""
  };
 };

 _reg=(e)=>{
       
    if(!(this.state.password===this.state.rpassword)){
        alert("Password is not matching")
         e.preventDefault();
        e.stopPropagation();
    }else{
        fetch('http://localhost:8080/api/user/register',{
            method:'POST',    
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:this.state.username,
                email:this.state.email,
                password:this.state.password
            })
        }).then(res=>{
           console.log(res.json())
        }).then(res=>console.log(res))
        .catch(error=>console.log(error))
    }
     
 }

 _passwordShow=()=>{
    this.setState({show:!this.state.show})
 }
 
 _RepasswordShow=()=>{
    this.setState({showRe:!this.state.showRe})
 }
 

    render(){
  return (
  <div>
      <div className="login" style={{width:this.props.width}}>
            <div>
                <div style={{marginTop:'-10%'}}>
                    <h2 id="secLog">SIGN IN</h2>
                </div>

                <form onSubmit={this._reg}>
                <div id="loginInput">
                    <input type="text" required minLength={4} onChange = {(event) => this.setState({username:event.target.value})} placeholder="User name"/>
                </div>
                <div id="loginInput">
                    <input type="email" required minLength={6} onChange = {(event) => this.setState({email:event.target.value})} placeholder="Email"/>
                </div>
                 <div id="loginInput">
                    <input  type={this.state.show?"password":"text"} minLength={4} required onChange = {(event) => this.setState({password:event.target.value})} placeholder="Password"/>
                    <i className='large material-icons' style={{color:"#555",position:'absolute',marginLeft:-15,marginTop:15}} onClick={this._passwordShow}>
                    { !this.state.show ? 'visibility' : 'visibility_off'}
                    </i>
                </div>
                <div id="loginInput">
                    <input  type={this.state.showRe?"password":"text"} minLength={4} required onChange = {(event) => this.setState({rpassword:event.target.value})} placeholder="Confirm Password"/>
                    <i className='large material-icons' style={{color:"#555",position:'absolute',marginLeft:-15,marginTop:15}} onClick={this._RepasswordShow}>
                    { !this.state.showRe ? 'visibility' : 'visibility_off'}
                    </i>
                </div>
                <div>
                        <MaterialIcon icon=""/>
                </div>
                <div>
                    <input type="submit" id="subBtn" value="SIGN UP"/>
                </div>
                </form>
                <div>
                    <span id="txt" >Already have an account <a href="#signin" onClick={this.props.signin}>SIGN IN</a></span>
                </div>
                <div style={{height:10}}></div>
            </div>
      </div>
  </div>);
}
}
export default Registration