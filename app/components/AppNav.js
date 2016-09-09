import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const AppNav = React.createClass({

  render: function() {
    return (
      <div className="appnav-container">
        <a href="#about" className={'nav-link'}>About</a>
        <a href="#projects" className={'nav-link'}>Projects</a>
        <a href="#join" className={'nav-link'}>Join</a>

        {/* 
        <Link to='/' className={'nav-link'}>Vision (Science as a coordination problem)</Link>
        

        <Link to='/' className={'nav-link'}>Projects</Link>
        <Link to='/' className={'nav-link'}>Types of Projects</Link>
        Can be implementing a thing, analyzing a thing, or researching implementation analysis
        <Link to='/' className={'nav-link'}>ASAPBio</Link>
        <Link to='/' className={'nav-link'}>PubPub</Link>
        <Link to='/' className={'nav-link'}>DbDb</Link>

        <Link to='/' className={'nav-link'}>What's we see</Link>

        <Link to='/' className={'nav-link'}>What's we've been doing</Link>

        <Link to='/' className={'nav-link'}>What's we're going to do (public events)</Link> 

        <Link to='/' className={'nav-link'}>Jump In (family/team/network something) (here's how you join)</Link> 
        */}

      </div>
    );
  }

});

export default AppNav;
