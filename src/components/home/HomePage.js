import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
   render() {
      return (
         <div className="jumbotron">
            <h1>Tacopedia</h1>
            <p>Some text</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
         </div>
      );
   }
}

export default HomePage;
