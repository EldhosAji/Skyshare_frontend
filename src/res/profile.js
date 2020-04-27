import React, { Component } from 'react';
import '../App.css';
import Login from './login';
import Registration from './registration';
import { Redirect } from 'react-router-dom'

const videoPlayer = document.getElementById("video-player"); // this is a <video> element 



class Profile extends Component {
    constructor(props){
    super(props);
        this.state={
            home:true,
            c_room:false,
            j_room:false,
            code_index:false,
            login:true,
            reg:false,
            Stream:'',
    };
    };
    _showLogin=()=>{
        
    }
    _logOut=()=>{
      sessionStorage.removeItem('authKey')
      this.setState({login:false})
    }
render(){
  if(!this.state.login) return<Redirect to='/'/>
  if(this.state.c_room) return<Redirect to='/CreateRoom'/>
  if(this.state.j_room) return<Redirect to='/JoinRoom'/>
  if(this.state.code_index) return<Redirect to='/CodeIndex'/>
  return (
    <div className="App">
      <div className='header'>
          <span id="logo" >SkyShare</span>
          <div id="tab-btns">
          <span id="tabs" onClick={this._logOut}>LOGOUT</span>
          </div>
      </div>
      <div style={{color:'#fff',alignSelf:'center', position: 'absolute',marginTop:200,marginLeft:'50%',transform: 'translate(-50%, -50%)'}} >
            <table className="tabl">
              <th><div id="tabCon" style={{backgroundColor: "#020094", width:250,padding: 5,margin:20}} onClick={()=>{this.setState({c_room:true})}}> <h1 id="ch_op" style={{fontSize:24,fontWeight:'normal'}}>Video call-Create room</h1></div></th>
              <th><div id="tabCon" style={{backgroundColor: "#020094", width:250,padding: 5,margin:20}} onClick={()=>{this.setState({j_room:true})}}> <h1 id="ch_op" style={{fontSize:24,fontWeight:'normal'}}>Video call-Join room</h1></div></th>
              <th><div id="tabCon" style={{backgroundColor: "#020094", width:250,padding: 5,margin:20}} onClick={()=>{this.setState({code_index:true})}}> <h1 id="ch_op" style={{fontSize:24,fontWeight:'normal'}}>Code editor</h1></div></th>
            </table>
        </div>
      <div className="proBg">
      <div className="coverCardOpt">
      </div>
      </div>
    </div>
  );
}
}
export default Profile;
