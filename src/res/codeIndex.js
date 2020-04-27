import React, { Component } from 'react';
import './code.css';
import Login from './login';
import Registration from './registration';
import CodeTag from './codeTag';
class CodeIndex extends Component {
    constructor(props){
    super(props);
        this.state={
            home:true,
            about:false,
            login:false,
            reg:false,
    };
    };
s
    
    _showHome=()=>{
        
        this.setState({home:true})
        this.setState({about:false})
        this.setState({login:false})
        this.setState({reg:false})
    }
    _showLogin=()=>{
        this.setState({home:false})
        this.setState({about:false})
        this.setState({login:true})
        this.setState({reg:false})
    }
    _showReg=()=>{
        this.setState({home:false})
        this.setState({about:false})
        this.setState({login:false})
        this.setState({reg:true})
    }
    _showAbout=()=>{
        this.setState({home:false})
        this.setState({about:true})
        this.setState({login:false})
        this.setState({reg:false})
    }
render(){
  return (
    <div >
        
      <div className='header'>
          <span id="logo" >SkyShare</span>
          <div id="tab-btns">
          <span id="tabs" onClick={this._showHome}><a style={{textDecoration:'none',color:'#fff'}} href='/profile'>Profile</a></span>
          </div>
      </div>
      <div className="mid-body">
        <div className="file_name">
            <input id="fileName" type="text" placeholder="File name"></input>
            <button id="createFile" >Create file</button>  
        </div>
        
        <div className="file_name_data">
            <input disabled id="fileName" type="text" value="code 1"></input>
            <button id="editFile" >Edit</button>
            <button id="publicFile" >public</button>
            
        </div>
        <div className="file_name_data">
            <input disabled id="fileName" type="text" value="code 1"></input>
            <button id="editFile" >Edit</button>
            <button id="publicFile" >public</button>
            
        </div>

      </div>
    </div>
  );
}
}
export default CodeIndex;
