import '../App.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Sparkles from 'react-sparkle';

function Nav() {
    const navStyle = {
        color: '#220811'
    };

  return (
    <nav>
          <Sparkles
              color="red"
              count={30}
              minSize={7}
              maxSize={12}
              overflowPx={0}
              fadeOutSpeed={30}
              flicker={false}>
          </Sparkles>

        <h1 id="logo">Giriraj</h1>
        <ul className="nav-links">
            <Link style={navStyle} to="/" ><li>Home</li></Link>
            <Link style={navStyle} to="/menu"><li>Menu</li></Link>
            <Link style={navStyle} to="/reservation"> <li>Reservation</li></Link>
            <Link style={navStyle} to="/about"><li>About</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;
