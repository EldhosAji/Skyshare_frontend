import React, {Component} from 'react';
import '../App.css';
import MaterialIcon from 'material-icons-react';

class Fpassword extends Component {
  constructor(props){
  super(props);
    this.state={show:true,
        showIco:"visibility_off"
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
                    <h2 id="secLog">SIGN IN</h2>
                </div>
                <div id="loginInput">
                    <input type="email" required placeholder="Email address"/>
                </div>
                <MaterialIcon icon=""/>
                <div>
                    <input type="submit" id="subBtn" value="SENT LINK"/>
                </div>
                <div>
                    <span id="txt">Back to <a href='/'>Home</a></span>
                </div>
        </div>
      </div>);
}
}
export default Fpassword