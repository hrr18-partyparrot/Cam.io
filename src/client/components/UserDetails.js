import React from 'react';


export default class UserDetails extends React.Component {
  constructor() {
    super();
    }
  render () {
    return (
        <div className="wide">
    <div className="row margin-top">
      <div className="col-md-5">
        <div className="author-box">
          <div className="row">
            <h3 className="h3-responsive text-xs-center">About Event Organizer</h3>
            <hr />
            <div className="col-xs-12" style={{"text-align":"center"}}>
              <img src="http://2.gravatar.com/avatar/e9de252843e9ff541060127dac7126ed?s=150&d=mm&r=g" alt="" className=" img-circle z-depth-2" style={{"max-width":"200px"}} />
            </div>
            <div className="col-xs-12">
              <p className="text-xs-center margin-top"><strong>COACHELLA</strong></p>
              <p>Stare at the wall, play with food and get confused by dust. Lounge in doorway cats secretly make all the worlds muffins but hide from vacuum cleaner so intently sniff hand bathe private parts with tongue then lick owner's face jump off balcony, onto stranger's head. If it smells like fish eat as much as you wish where is my slave? I'm getting hungry walk on car leaving trail of paw prints on hood and windshield so leave hair everywhere, but curl into a furry donut so lick butt. </p>
              <p className="hidden-md-down">Jump off balcony, onto stranger's head knock over christmas tree or lick plastic bags. Get video posted to internet for chasing red dot drink water out of the faucet. Sleep nap play time has closed eyes but still sees you chase dog then run away. Caticus cuteicus has closed eyes but still sees you and human give me attention meow, slap owner's face at 5am until human fills food dish yet sun bathe pee in the shoe. Burrow under covers slap owner's face at 5am until human fills food dish, immediately regret falling into bathtub and unwrap toilet paper so dream about hunting birds and leave fur on owners clothes so scratch the furniture. </p>
            </div>
          </div>
        </div>
      </div>
       <div className="col-md-7">
        <div className="card card-block">
          <h4 className="card-title">Events</h4>
          <hr />
          <div className="row">
            <div className="col-xs-3 col-md-2">
              <img src="http://lorempixel.com/400/400/nightlife" alt="" />
            </div>
            <div className="col-md-7" style={{"margin-top":"20px"}}>
              <h2 className="h2-responsive">Cat ipsum dolor sit amet, run outside as soon as door open so destroy the blinds or chirp at birds use lap as chair. Eat and than sleep on your face kitty loves pigs. Throwup on your pillow. Ignore the squirrels, you'll never catch them anyway kitty scratches couch bad kitty mark territory cats secretly make all the worlds muffins, kitty scratches couch bad kitty. Who's the baby. Have secret plans. Poop in the plant pot chase after silly colored fish toys around the house dream about hunting birds cat snacks stick butt in face.</h2>
            </div>
            <div className="col-md-1" style={{"margin-top":"20px"}}>
              <h4 className="h4-responsive">20 points</h4>
            </div>
          </div>
          <hr />
          <div className="row">
              <div className="col-xs-3 col-md-2">
              <img src="http://lorempixel.com/400/400/nightlife" alt="" />
            </div>
            <div className="col-md-6" style={{"margin-top":"20px"}}>
              <h2 className="h2-responsive">All of a sudden cat goes crazy need to chase tail, for sit on the laptop stare at wall turn and meow stare at wall some more meow again continue staring , scratch leg; meow for can opener to feed me. Claw drapes. Poop in litter box, scratch the walls you call this cat food? or get video posted to internet for chasing red dot but curl up and sleep on the freshly laundered towels climb a tree, wait for a fireman jump to fireman then scratch his face for soft kitty warm kitty little ball of furr make muffins. R</h2>
            </div>
            <div className="col-md-2" style={{"margin-top":"20px"}}>
              <h4 className="h4-responsive">50 points</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-3 col-md-2">
              <img src="http://lorempixel.com/400/400/nightlife" alt="" />
            </div>
            <div className="col-md-7" style={{"margin-top":"20px"}}>
              <h2 className="h2-responsive">event description</h2>
            </div>
            <div className="col-md-1" style={{"margin-top":"20px"}}>
              <h4 className="h4-responsive">1 Ticket Free</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}