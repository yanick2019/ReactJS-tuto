
import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="#"><b>ReactJS App</b></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="Messageb">Message Board<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="todo">To-do<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="about">About <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="rt">Redux_totu <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="contact" >Contact <span className="sr-only">(current)</span></Link>
              </li>

            </ul>



          </div>
        </div>
      </nav>
      
    </div>
  );



}


export default HeaderComponent;
