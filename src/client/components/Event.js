import React from 'react';


export default class EventDetails extends React.Component {
  constructor() {
    super();

    }
  render (){
    return(
  <div>
  <div className="view hm-black-light">
    <img className="img-fluid" style={{"width":"100%"}} src="https://www.finevintageltd.com/assets/images/top-banner-miami.jpg" alt="" />
    <div className="mask flex-center">
      <h1 className="white-text h1-responsive">COACHELLA MUSIC FESTIVAL</h1>
    </div>
  </div>

  <div className="wide">
    <div className="row margin-top">
      <div className="col-md-7">
        <div className="card card-block">
          <h4 className="card-title">Start Promoting Now!</h4>
          <hr />
          <button className="btn btn-lg waves-effect waves-light" style={{"background-color":"#ff5a00"}}>Promote with <img src="img/BitlyLogo.png" className="img-responsive img-fluid" style={{"width":"60px;", "display":"inline"}} /></button>
        </div>
        <div className="card card-block">
          <h4 className="card-title">Decription</h4>
          <hr />
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="card card-block">
          <h4 className="card-title">Prizes</h4>
          <hr />
          <div className="row">
            <div className="col-xs-3 col-md-2">
              <img style={{"width":"50px"}} src="http://ssl.gstatic.com/onebox/sports/olympics/2016/medals2/ic_medal-large-gold_2x.png" alt="" />
            </div>
            <div className="col-md-4" style={{"margin-top":"20px"}}>
              <h2 className="h2-responsive">1000 Points</h2>
            </div>
            <div className="col-md-6" style={{"margin-top":"20px"}}>
              <h4 className="h4-responsive">2 Tickets Free with Premium Membership</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-2">
              <img style={{"width":"50px"}} src="http://ssl.gstatic.com/onebox/sports/olympics/2016/medals2/ic_medal-large-silver_2x.png" alt="" />
            </div>
            <div className="col-md-4" style={{"margin-top":"20px"}}>
              <h2 className="h2-responsive">500 Points</h2>
            </div>
            <div className="col-md-6" style={{"margin-top":"20px"}}>
              <h4 className="h4-responsive">2 Tickets Free</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-2">
              <img style={{"width":"50px"}} src="http://ssl.gstatic.com/onebox/sports/olympics/2016/medals2/ic_medal-large-bronze_2x.png" alt="" />
            </div>
            <div className="col-md-4" style={{"margin-top":"20px"}}>
              <h2 className="h2-responsive">200 Points</h2>
            </div>
            <div className="col-md-6" style={{"margin-top":"20px"}}>
              <h4 className="h4-responsive">1 Ticket Free</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="card card-block">
          <h4 className="card-title">Leaderboard</h4>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>780 Points</td>
                </tr>
                <tr>
                  <td>Jane Doe</td>
                  <td>500 Points</td>
                </tr>
                <tr>
                  <td>Bob Doe</td>
                  <td>330 Points</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="author-box">
          <div className="row">
            <h3 className="h3-responsive text-xs-center">About Event Organizer</h3>
            <hr />
            <div className="col-xs-12" style={{"text-align":"center"}}>
              <img src="http://2.gravatar.com/avatar/e9de252843e9ff541060127dac7126ed?s=150&d=mm&r=g" alt="" className=" img-circle z-depth-2" style={{"max-width":"200px"}} />
            </div>
            <div className="col-xs-12">
              <p className="text-xs-center margin-top"><strong>COACHELLA</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat itaque blanditiis natus, ratione.</p>
              <p className="hidden-md-down">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint esse nulla quia quam veniam commodi dicta, iusto inventore. Voluptatum pariatur eveniet ea, officiis vitae praesentium beatae quas libero, esse facere.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    )
  }
}


