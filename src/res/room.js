import React,{Component} from 'react';
import '../App.css';
import $ from "jquery";
import 'webrtc-adapter';
import io from 'socket.io-client';


class Room extends Component {
  render(){
  return (
    <div className="App" >
        <div className="vid">
        <iframe src="http://localhost:8082/" width="1000" height="1000"></iframe>
        </div>      
    </div>
  );}
}

export default Room;