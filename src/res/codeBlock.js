import React, { Component } from 'react';
import './code.css';
import Login from './login';
import Registration from './registration';
import CodeTag from './codeTag';
import { wait } from '@testing-library/react';
class CodeBlock extends Component {
    constructor(props){
    super(props);
        this.state={
            codeVal:'',
            debug:''
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
    _compile=()=>{
        const data=""
        console.log(this.state.codeVal);
            fetch('http://localhost:8080/api/compile',{
            method:'POST',    
             headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                code:this.state.codeVal,
            })
            }).then((response)=>response.json())
                .then((response)=>
                {
                this.setState({
                    debug:response.log
                })
                console.log(this.state.data)
                console.log(response.log)
        }).catch((error)=>console.log(error))

    }
    _handleChange(event) {
        this.setState({codeVal: event.target.value});
    }
render(){
    
  return (
    <div >
        
      <div className='header'>
          <span id="logo" >SkyShare</span>
          <div id="tab-btns">
          <span id="tabs" onClick={this._showHome}>Profile</span>
          <span id="tabs" onClick={this._showLogin}>Logout</span>
          </div>
      </div>
      <button onClick={this._compile} style={{margin:10,borderWidth:0,backgroundColor:'#002DF5',color:'#fff',width:'80px',height:'40px'}}>Run</button>
      <div className="code-block-body" >
        <textarea rows="30" cols="100" value={this.state.codeVal} onChange={(event) => this.setState({codeVal:event.target.value})}></textarea>
        <textarea disabled rows="5" cols="100" value={this.state.debug}></textarea>
      </div>
    </div>
  );
}
}
export default CodeBlock;
