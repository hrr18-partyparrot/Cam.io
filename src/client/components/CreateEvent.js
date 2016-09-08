import React from 'react';

export default class CreateEvent extends React.Component {
  render () {
    return (
      <div className='create-event'>
        <div className="view hm-black-light">
          <img src="img/pattern.png" alt="" />
          <div className="mask flex-center">
            <h1 className="white-text h1-responsive">Creating Your Event</h1>
          </div>
        </div>

        <div className="wide text-md-center" style={{"marginTop":"70px"}}>
          <h2 className="h2-responsive">Search Your Event On Eventbrite</h2>
          <div className="row margin-top">
            <div className="col-md-6 margin-top">
              <h3 className="h3-responsive">By Id</h3>
              <hr />
              <input className="inputId" placeholder="Event Id..." />
              <button className="searchBtn"><i className="material-icons" style={{"marginTop":'3px', "color":"#666"}}>search</i></button>
            </div>
            <div className="col-md-6 margin-top">
              <h3 className="h3-responsive">By Name</h3>
              <hr />
              <input className="inputEventInfo" placeholder="Event Name..." />
              <input className="inputEventInfo" placeholder="Event City..." style={{ 'border-left':'none' }} />
              <button className="searchBtn"><i className="material-icons" style={{"marginTop":"3px", "color":"#666"}}>search</i></button>
            </div>
            <div className="col-xs-12">
              <hr />
              <h2 className="h2-responsive">Select Your Event</h2>
              <input className="inputId" placeholder="Selected Event..." readonly="true" />
              <div className="scrollBox margin-top">
                <ul>
                  <li style={{"marginTop":"20px"}}>HelloHELLOHELOOHELLOHELLOHELLOHELLO</li>
                  <li style={{"marginTop":"20px"}}>HelloHELLOHELOOHELLOHELLOHELLOHELLO</li>
                  <li style={{"marginTop":"20px"}}>HelloHELLOHELOOHELLOHELLOHELLOHELLO</li>
                  <li style={{"marginTop":"20px"}}>HelloHELLOHELOOHELLOHELLOHELLOHELLO</li>
                  <li style={{"marginTop":"20px"}}>HelloHELLOHELOOHELLOHELLOHELLOHELLO</li>
                  <li style={{"marginTop":"20px"}}>HelloHELLOHELOOHELLOHELLOHELLOHELLO</li>
                  <li style={{"marginTop":"20px"}}>HelloHELLOHELOOHELLOHELLOHELLOHELLO</li>
                  <li style={{"marginTop":"20px"}}>HelloHELLOHELOOHELLOHELLOHELLOHELLO</li>
                  <li style={{"marginTop":"20px"}}>HelloHELLOHELOOHELLOHELLOHELLOHELLO</li>
                  <li style={{"marginTop":"20px"}}>HelloHELLOHELOOHELLOHELLOHELLOHELLO</li>
                  <li style={{"marginTop":"20px"}}>HelloHELLOHELOOHELLOHELLOHELLOHELLO</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}