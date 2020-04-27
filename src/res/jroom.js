import React, {Component} from 'react';
import '../App.css';
import MaterialIcon from 'material-icons-react';
var uniqid = require('uniqid');

class JRoom extends Component {
  constructor(props){
  super(props);
    this.state={show:true,
        showIco:"visibility_off",
        r_id:uniqid.time(),
        codeVal:'',
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
                    <input type="text" value={this.state.codeVal} onChange={(event) => this.setState({codeVal:event.target.value})} placeholder="Room ID"/>
                </div>
                <MaterialIcon icon=""/>
                <div>
                    <a id="subBtn" href={"http://localhost:8082/onAir?room="+this.state.codeVal}><input type="button" id="subBtn" value="Join room"/></a>
                </div>
                <div>
                    <span id="txt">Back to <a href='/profile'>Profile</a></span>
                </div>
        </div>
      </div>);
}
}
export default JRoom;