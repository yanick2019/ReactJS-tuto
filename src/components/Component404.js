
import React from 'react';

class Component404 extends React.Component {
 

render(){

  return (
     <div>
          <h1>This is 404 page </h1>
          <p>we do not have router named: {window.location.pathname }</p>
     </div>

  );


  }
}


export default Component404;
