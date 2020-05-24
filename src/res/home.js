import React, { Component } from 'react';
import '../App.css';
import Login from './login';
import Registration from './registration';

import { Redirect } from 'react-router-dom'
class Home extends Component {
    constructor(props){
    super(props);
        this.state={
            home:true,
            about:false,
            login:false,
            reg:false,
            token:sessionStorage.getItem('authKey')
    };
    };

    
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
    if(this.state.token!==null )
        if(this.state.token!=='nullVal')
            return <Redirect to='/profile'/>
  return (
    <div className="App">
        
      <div className='header'>
          <span id="logo" >SkyShare</span>
          <div id="tab-btns">
          <span id="tabs" onClick={this._showHome}>HOME</span>
          <span id="tabs" onClick={this._showAbout}>ABOUT</span>
          <span id="tabs" onClick={this._showLogin}>LOGIN</span>
          <span id="tabs" onClick={this._showReg}>REGISTRATION</span>
          </div>
      </div>
      <div className="mid-body">
         
        <div>
            <div id="sectionO" style={{display:!this.state.home?'none':''}}>
            <span style={{color:'#fff'}}><span style={{fontSize:26,fontWeight:'bold'}}>SkyShare</span> is an online discussion platform for remote developers.Which provides exquisite features like video calling, team meeting, live technical interviews, real-time edit and exchange of codes, etc.</span>
        </div>
            <div id="sectionT" style={{display:!this.state.home?'none':''}}>
                <Login width='60%' signup={this._showReg}/>
            </div>
        </div>
        <div style={{display:!this.state.login?'none':''}}>
            <div style={{alignItem:'center',marginLeft:'-40%',marginRight:'20%',marginTop:-60}}>
                <Login width='30%' signup={this._showReg}/>
            </div>
        </div>
        
        <div style={{display:!this.state.reg?'none':''}}>
            <div style={{alignItem:'center',marginLeft:'-40%',marginRight:'20%',marginTop:-60}}>
                <Registration width='30%' signin={this._showLogin}/>
            </div>
        </div>
        <div>
            <div>

            </div>
        </div>
      </div>
    </div>
  );
}
}
export default Home;
