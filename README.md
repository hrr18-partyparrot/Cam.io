# CAM.IO by HRR18 PartyParrots

CAM.IO is an Event promotion tool. The aim of CAM.IO is to allow event organizers to post events, with incentives for promoters who get the highest number of clicks on their unique URL.

* **Organizers:** CAM.IO makes it easy to gamify the event promotion process. We are your connection to the social influencers, who will help make your event a success.
* **Promoters:** Discover events that your audience will care about, and win big rewards just by leveraging your network.

## Installation

The best way to get started developing on CAM.IO is to clone a copy of our repo and from the root of the directory run:

```sh
npm install
```

To run the code locally you need to run Mongod:
 ```sh
mongod
```

You will also need a localserver on port 8080. You can launch the local server with:

```sh
Grunt
```

#### Prerequisites

You will need to have API keys from [Eventbrite](http://developer.eventbrite.com/), [StormPath] (https://api.stormpath.com/login) and from [Bitly](https://dev.bitly.com/).

Evenbrite is our event host integration and the  will serve CRUD for events.
Stormpath is our user database and authentication.
Bitly is our integration for referral tracking and creating event related rewards and promotions.

## Features Backlog
- Bit.ly API authentication for individual users with unique event promotion link and click tracking (to be displayed on leaderboard)
- Social media share API integration (Facebook, Twitter, etc) to make it easy for users to promote unique event link seamlessly onto their social network
- Tracking event ticket purchases (currently only tracks clicks on link)
- Eventbrite API authentication for individual users and the ability to create events on CAM.IO that posts to Eventbrite
- Dynamic reward system (currently just limited to 3 tiers)
- Addition of user profile dashboard editing capabilities (i.e. bios, profile photo upload, user's created/promoted events etc)

### License

CAM.IO is ISC licensed.
