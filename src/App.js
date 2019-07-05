import React, { Component } from 'react';
import HeaderComponent from './components/Header';
import FootComponent from './components/Foot';
import BodyComponent from './components/Body';
import ContactComponent from './components/Contact';
import Component404 from './components/Component404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* 两种写法 class HeaderComponent extends Component function App() */
function App() {
  let pathroot = "/ReactJS-tuto/"
  return (
    <div className=" " >
      <BrowserRouter>
        <HeaderComponent pathroot={pathroot} />
        <div className="container" >
          <Switch>
            <Route exact path={pathroot} component={BodyComponent} />
            <Route path={pathroot +"contact/:msg(\d*)?" } component={ContactComponent} />
            <Route component={Component404} />
          </Switch>
        </div>
        <FootComponent/>
      </BrowserRouter>
    </div>
  );
}


/* class HeaderComponent extends Component {

  render() {
    return (
      <div>   
        <h1>this is a hdeader </h1>
        <hr />
      </div>

    );


  }
} */



export default App;
