import React from 'react';
import './App.css';
import Home from './res/home';
import Fpassword from './res/forgetpassword'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './res/profile';
import CRoom from './res/cRoom';
import JRoom from './res/jroom';
import Room from './res/room';
import CodeIndex from './res/codeIndex';
import CodeBlock from './res/codeBlock';

function App() {
    return ( <
        div className = "App" >
            <BrowserRouter >
                < Switch >
                    <Route exact path = "/Profile" component = { Profile }/> 
                    <Route exact path = "/ForgetPassword" component = { Fpassword }/> 
                    <Route exact path = "/"component = { Home }/> 
                    <Route exact path = "/CreateRoom" component = { CRoom }/>
                    <Route exact path = "/JoinRoom" component = { JRoom }/>  
                    <Route path = "/VRoom" component = { Room } /> 
                    <Route path = "/CodeIndex" component={CodeIndex} />
                    <Route path = "/CodeBlock" component={CodeBlock} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;