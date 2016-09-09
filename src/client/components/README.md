# Components folder containing all React Components.

##App.js
This is the parent for the React Router, and renders the Navigation bar, and footer.

## Category.js
Code for Category Modals on homepage, this page also contains the logic for dynamically rendering the Events that correspond to each category that are within the DB.

##CatergoryList.js
List of Categories on homepage.

##CreateEvent.js
Create Event page, for the event organizer to find his event via the Eventbrite API, to set the points, and reward, and then submit all that data to the database. Logic also to render the Event.js page on submit with the corresponding organizer's event details.

##Event.js
The event page showing, all the event details, data rendered from the database this is the child of the CreateEvent.js component. Bitly API intergration happens here to generate the unique url for the event, and to track clicks.

##EventDetails.js
Event details that are generated via search or click all data is brought in via the database, same components, and frontend as Event.js

##EventList.js
A list of events corresponding to a user to be rendered on the User Details page.

##Footer.js
The site's footer.

##Index.js
Renders the logo, and the categories. This is the defacto child for the react router.

##Logo.js
The logo/ navigation bar text.

##NavBar.js
The site's navigation bar.

##UserDetails.js
The User Details page, that renders the user's events, and their event's logo.

##UserEvent.js
Get the Event logo from the database.
