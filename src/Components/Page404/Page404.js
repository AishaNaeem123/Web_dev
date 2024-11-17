import React    from "react";
import { Link } from 'react-router-dom';
import "./Page404.css";

class Page404 extends React.Component {
  render() {
    return(
      <div className='ErrorMsg'>
      <h1>Error 404</h1>
          <div className='heading'>
            This site can't be reached
          </div>    
          <div className='content'>
              Server's IP Address could not be found
          </div>
      </div>
    )
  }
}

export default Page404;
