import React, { Component } from 'react';
import Login from './login';
import Registration from './registration';
import CodeTag from './codeTag';
import { wait } from '@testing-library/react';

import { Redirect } from 'react-router-dom'
class CodeBlock extends Component {
    constructor(props){
    super(props);
        this.state={
            codeVal:'',
            debug:'',
            initLog:false,
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
        this.setState({
                    debug:"[*]Compiling..."
                })
        var x= this.state.codeVal;
        const y  =x.replace(/\n/g, ";")
        console.log(y)
        console.log("csd"+sessionStorage.getItem('ideVal'))
        console.log(this.state.codeVal);
            fetch('http://localhost:8080/api/compile',{
            method:'POST',    
             headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                code:y,
                id:sessionStorage.getItem('ideVal'),
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

    fetchFileCont=()=>{
    console.log("done")
    fetch('http://localhost:8080/api/user/code',{
            method:'POST',    
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:sessionStorage.getItem('ideVal')
            })
        }).then((response)=>response.json())
        .then((response)=>{
            console.log(response.code)
            this.setState({codeVal:response.code})
        })
        .catch(error=>console.log(error))
}
render(){
    if(!sessionStorage.getItem('authKey')) return <Redirect to='/'/>
    if(!this.state.initLog){this.fetchFileCont();this.setState({initLog:true})}
  return (
    <div >
        
      <div className='header'>
          <span id="logo" >SkyShare</span>
          <div id="tab-btns">
          <span id="tabs" onClick={<Redirect to='/profile'/>}><a style={{textDecoration:'none',color:'#fff'}} href='/profile'>Profile</a></span>
          <span id="tabs" onClick={()=>{this.setState({codeVal:'',debug:''})}}>Clear IDE</span>
          </div>
      </div>
      <button onClick={this._compile} style={{margin:10,borderWidth:0,position:'absolute',borderRadius:9,float:'left',marginLeft:'50%',backgroundColor:'#0001ff',color:'#fff',width:'80px',height:'40px',fontSize:'20px'}}>Run</button>
      <div className="code-block-body" >
        <textarea onLoad={()=>{this.fetchFileCont()}} placeholder="Enter your code" rows="30" cols="100" value={this.state.codeVal} onChange={(event) => this.setState({codeVal:event.target.value})}></textarea>
        <textarea placeholder=">Run your code" disabled rows="5" cols="100" value={this.state.debug}></textarea>
      </div>
    </div>
  );
}
}
export default CodeBlock;
