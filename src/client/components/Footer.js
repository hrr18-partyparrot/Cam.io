import React from 'react';

export default class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <footer className="page-footer center-on-small-only">
          <div className="container-fluid">
            <div className="row">
              <div className="offset-md-1">
                <h5 className="title">ABOUT CAM.IO</h5>
                <p>CAM.IO is an event marketing website which helps event organizers.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container-fluid">
              © 2016 Copyright: CAM.IO
            </div>
          </div>
        </footer>
      </div>
    )
  }
}