import  React from 'react';

export default class NavBar extends React.Component {
  render () {
    return (
      <div className='nav-bar'>
        <nav className="navbar navbar-dark navbar-fixed-top scrolling-navbar navbar-flat">
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx">
            <i className="fa fa-bars"></i>
          </button>
          <div className="wide">
            <div className="collapse navbar-toggleable-xs" id="collapseEx">
              <a className="navbar-brand" href="#" target="_blank">
                <img src="img/Logo.svg" style={{"width":"50px"}} />
              </a>
              <ul className="nav navbar-nav pull-right" style={{"marginTop":"3px"}}>
                <li className="nav-item">
                  <button className="btn-flat waves-effect waves-light btn-light">Create Event</button>
                </li>
                <li className="nav-item">
                  <button className="btn-flat waves-effect waves-light btn-light">Sign In</button>
                </li>
                <li className="nav-item">
                  <button className="btn-flat waves-effect waves-light btn-light">Sign Up</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}