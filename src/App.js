import React, { Component } from 'react';
import HeaderComponent from './components/Header';
import FootComponent from './components/Foot';
import BodyComponent from './components/Body';
import ContactComponent from './components/Contact';
import Component404 from './components/Component404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./css/style.css";


/* 两种写法 class HeaderComponent extends Component function App() */


function App(props) {

  let pathroot = "/ReactJS-tuto/"

  return (








    <BrowserRouter basename="/ReactJS-tuto/">
      <Route
        render={({ location }) => (
          <div>{/* 一定要把全部东西包在 div 或其他一个标签里 */}
            <HeaderComponent />
            <div className="container" >
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  classNames="fade"
                  timeout={300}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={BodyComponent} />
                    <Route path="/contact/:msg(\d*)?" component={ContactComponent} />
                    <Route component={Component404} />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
            <FootComponent />

          </div>
        )}
      />
    </BrowserRouter>




  );
}


/*


      





class HeaderComponent extends Component {

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
