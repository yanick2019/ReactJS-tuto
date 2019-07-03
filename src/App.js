import React, { Component } from 'react';
import HeaderComponent from './components/Header';
import BodyComponent from './components/Body';

/* 两种写法 class HeaderComponent extends Component function App() */
function App() {
  return (
    <div  >
      <HeaderComponent />
      <BodyComponent />
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
