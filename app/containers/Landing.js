import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import {getLoginData} from '../actions/app';

export const Landing = React.createClass({

  render() {
    return (
      <div>
        <div className={'landing-header'}>EPSX</div>

        <div id="about-wrapper" className={'landing-section-wrapper'}>
          
          <div id="about-background-image" className="landing-background"></div>
          <div id="about-background-color" className="landing-background"></div>
          <div id="about" className={'landing-section'}>
            <div className={'section-header'}>About</div>
            <p>The goal of EPSX is to provide tools, resources, and collaboration that improve that enable efficient scientific research practices.</p>
            <p>Let's write some more vision stuff here.</p>

          </div>
        </div>

        <div id="projects-wrapper" className={'landing-section-wrapper'}>
          <div id="projects-background-image" className="landing-background"></div>
          <div id="projects-background-color" className="landing-background"></div>

          <div id="projects" className={'landing-section'}>
            <div className={'section-header'}>Projects</div>
            <div className={'project'}>
              <h3><a href="http://asapbio.org/">ASAPBio</a></h3>
              <p>ASAPbio was created as a focal point for engaging the biology community in a discussion about the role that preprints (see video below) could play in communicating results in the life sciences.</p>
            </div>

            <div className={'project'}>
              <h3><a href="https://www.pubpub.org">PubPub</a></h3>
              <p>PubPub is a free and open tool for collaborative editing, instant publishing, continuous review, and grassroots journals.</p>
            </div>

            <div className={'project'}>
              <h3><a href="https://www.pubpub.org/pub/dbdb">DbDb</a></h3>
              <p>DbDb is a tool for forkable, traceable, and reproducible data analysis.</p>
            </div>

            <div className={'project'}>
              <h3><a href="">CiteHub</a></h3>
              <p>CiteHub is under developement</p>
            </div>

            <div className={'project'}>
              <h3><a href="">TYWB</a></h3>
              <p>TYWB = Take Your Work Back (tywb.io and tywb.us are available)</p>
              <p>takeyourworkback.com and takebackyourwork.com are also available...</p>
            </div>
          </div>
        </div>

        <div id="join-wrapper" className={'landing-section-wrapper'}>
          <div id="join-background-image" className="landing-background"></div>
          <div id="join-background-color" className="landing-background"></div>
          <div id="join" className={'landing-section'}>
            <div className={'section-header'}>Join</div>
            <p>Events and such listed here? This section is a 'how to join in' one.</p>
          </div>
        </div>
        
      </div>
    );
  }

});

function mapStateToProps(state) {
  return {
    appData: state.app
  };
}

export default connect(mapStateToProps)(Landing);
