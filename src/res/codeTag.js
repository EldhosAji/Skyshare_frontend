import React, { Component } from 'react';
import '../App.css';

class CodeTag extends Component {
    constructor(props){
    super(props);
        this.state={
            home:true,
            about:false,
            login:false,
            reg:false,
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
  return (
    <div className="App">
        <div className="file_name">
            <div style={{width:400,backgroundColor:'#000', justifyContent:'space-between',flexDirection:'column'}}>
            <div style={{textAlign:'start',backgroundColor:'#f00',color:'#000'}}><h3 >filename</h3></div>
            <button id="createFile" >Edit</button>
            </div>
        </div>
      </div>
  );
}
}
export default CodeTag;