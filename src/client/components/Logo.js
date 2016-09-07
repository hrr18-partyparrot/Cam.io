import React from 'react';

export default class Logo extends React.Component {
  render () {
    return (
      <div className='logo'>
        <div id="mainCarousel" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#mainCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#mainCarousel" data-slide-to="1"></li>
            <li data-target="#mainCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="flex-center animated fadeInDown">
                <ul>
                  <li>
                    <img src="img/Logo.svg" style={{"width":"150px"}} />
                  </li>
                  <li>
                    <h5 className="h5-responsive">Taking Event Marketing To A Whole New Level</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="carousel-item">
              <div className="flex-center animated fadeInDown">
                <ul>
                  <li>
                    <h1 className="h1-responsive">Lots of tools at your disposal</h1>
                  </li>
                  <li>
                    <h5 className="h5-responsive">Sign Up Right Now!</h5>
                  </li>
                  <li>
                    <a href="#" className="btn btn-primary btn-lg">Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="carousel-item">
              <div className="flex-center animated fadeInDown">
                <ul>
                  <li>
                    <h1 className="h1-responsive">Call us for support</h1></li>
                  <li>
                    <p>Our team can help you with any question</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#mainCarousel" role="button" data-slide="prev">
            <span className="icon-prev" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#mainCarousel" role="button" data-slide="next">
            <span className="icon-next" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}