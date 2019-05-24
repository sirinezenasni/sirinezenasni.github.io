# Project 1 - Reservation App
For this project option, you will build a reservation app that allows a user to book and view reservations for a restaurant. You will also utilize the Google Maps API to display a map with a marker for the restaurant’s location.

For this project, you can work with your code from the Unit 9 Project or you can work with the starter code here(https://github.com/jsc-mentor/Unit-10-Option-1-Starter-Code).

## Step 1:
In order for your application to access your database, you'll need to create a new Firebase database and instance. In order to configure your Firebase database, you'll need to complete the following steps:

Create a Firebase account.
Create a new project named “reservation-site.”
Navigate to the project dashboard, click the "Add Firebase to Your Web App" icon, and copy the provided code.
Paste the config object you copied along with the firebase.initializeApp(config) into the main.js file.
Connect with the database using the following code: var database = firebase.database();
Navigate to the database and update its rules so you can read and write to the database.
For a detailed guide on this process, refer to this PDF.

## Step 2
Next, create an empty object using object literal notation named ‘reservationData’ that will eventually be populated with user input.

## Step 3:
There are two types of reservation data you'll be saving for your users: name and day information. In this step, you'll only be concerned with getting ‘day’ data.

Go ahead and add a click event to each of your reservation options, ‘.reservation-day li’. Then, in its corresponding event handler, define a property ‘day’ on your ‘reservationData’ object, which will have the value of the clicked element's text.

## Step 4:
Next up, we'll also want to update the ‘name’ property of the ‘reservationData’ object when the user submits the form.

Take the following steps:

Add an event listener for when the user submits the form.
Prevent the default action for a form submit so that the page won't refresh.
Add the name the user entered to the ‘reservationData’ object.

## Step 5:
Next, we'll want to post, or send, this reservation information in our Firebase database.

Within the form-submit event handler:

Create a section for reservations data in your database.
POST your ‘reservationData’ object to your Firebase database using Firebase's push() method.
Navigate to your database on the Firebase app, and make sure that reservations are added to the database each time you submit the form.

## Step 6:
With the initial load of application and with the addition of each reservation, update the view using Handlebars.

Create a function ‘getReservations’ after the form-submit event. Within this ‘getReservations’ function, listen for any changes to the Firebase database using either the ‘value’ or ‘child_added’ event. You can find more information about these events in the Firebase documentation here.

You'll want to use a Handlebars template to display each reservation.

## Step 7:
Define the callback used by the Google Maps API to initialize the app's map.

function initMap() {
}

## Step 8:
Use the Google Maps’ Map constructor to create a map.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 10,
    scrollwheel: false
  });
}

### Bonus for this step: Style the map

## Step 9:
Use the Marker constructor to add a marker to map.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 10,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: {lat: 40.8054491, lng: -73.9654415},
    map: map,
    title: 'Monks Café'
  });
}

## Bonus Challenges:
Add form validation to make sure the user has selected a date and entered their name before submitting. Add error styles if the user is missing information in the form.
Add the ability to cancel a reservation.
Add an “Hours” section to list the restaurant’s hours as well as tell the user whether or not it is opened or closed.
Consume a third-party social media API, and put relevant data into the view. These APIs can be, but are not limited to, Facebook, Instagram, or Twitter.
←→
