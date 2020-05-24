import React, { Component } from 'react';
import Login from './login';
import Registration from './registration';
import CodeTag from './codeTag';
import { Redirect } from 'react-router-dom'
var uniqid = require('uniqid');
class CodeIndex extends Component {
    constructor(props){
    super(props);
        this.state={
            fileName:'',
            key:uniqid.time(),
            codeList:[],
            profile:false,
            token:sessionStorage.getItem('authKey')
    };
    };


_createFile=()=>{
    console.log(localStorage.getItem('authKey'))
    console.log(this.state.fileName)
    console.log(this.state.key)
fetch('http://localhost:8080/api/user/codeX',{
            method:'POST',    
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                code:this.state.fileName,
                token:this.state.token,
                id:this.state.key
            })
        }).then((response)=>{
                console.log(response)
        })
        .catch(error=>console.log(error))
}

 fetchFileName=()=>{
    console.log("done")
    fetch('http://localhost:8080/api/user/codeGet',{
            method:'POST',    
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                token:this.state.token
            })
        }).then((response)=>response.json())
        .then((response)=>{
            console.log(response)
            this.setState({codeList:response})
        })
        .catch(error=>console.log(error))
}
render(){
    this.fetchFileName()
if(this.state.profile) return <Redirect to='/profile'/>
  return (
    <div>
        
      <div className='header'>
          <span id="logo" >SkyShare</span>
          <div id="tab-btns">
          <span id="tabs" onClick={<Redirect to='/profile'/>}><a style={{textDecoration:'none',color:'#fff'}} href='/profile'>Profile</a></span>
          </div>
      </div>
      <div className="mid-body">
        <div className="file_name">
            <input id="fileName" type="text" placeholder="File name" value={this.state.fileName} onChange={(event) => this.setState({fileName:event.target.value})}></input>
            <button id="createFile" onClick={this._createFile}>Create file</button>  
        </div>
        {
         this.state.codeList.map((items)=>
        <div className="file_name_data">
            <input disabled id="fileName" type="text" value={items.name}></input>
            <button id="editFile" onClick={()=>{sessionStorage.setItem('ideVal',items._id);window.location.href='/codeBlock'}}>Edit</button>
            <button id="publicFile" >public</button>
        </div>)}

      </div>
    </div>
  );
}
}
export default CodeIndex;
