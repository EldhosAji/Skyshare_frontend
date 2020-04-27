import React, {Component} from 'react';
import '../App.css';
import MaterialIcon from 'material-icons-react';
var uniqid = require('uniqid');

class CRoom extends Component {
  constructor(props){
  super(props);
    this.state={show:true,
        showIco:"visibility_off",
        r_id:uniqid.time(),
  };
 };

 _passwordShow=()=>{
    this.setState({show:!this.state.show})
 }
  render(){
  return (
      <div className="cover">
        <div className="coverCard">
          <div style={{marginTop:'-5%'}}>
            <h1 id="secLog">Room generate</h1>
          </div>
                <div id="loginInput">
                    <h3>Room id : {this.state.r_id}</h3>
                </div>
                <MaterialIcon icon=""/>
                <div>
                    <a id="subBtn" href={"http://localhost:8082/onAir?room="+this.state.r_id}><input type="button" id="subBtn" value="Create room"/></a>
                </div>
                <div>
                    <span id="txt">Back to <a href='/profile'>Profile</a></span>
                </div>
        </div>
      </div>);
}
}
export default CRoom;