// STEP 1
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR-API-KEY",
    authDomain: "[...].firebaseapp.com",
    databaseURL: "https://[...].firebaseio.com",
    projectId: "[...]",
    storageBucket: "[...].appspot.com",
    messagingSenderId: "[...]",
    appId: "YOUR-APP-ID"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Connect with the database
var database = firebase.database();

// STEP 2
var reservationData = {};

// STEP 3
$('.reservation-day li').click(function() {
    reservationData.day = $(this).text();
});

// STEP 4 
$(".reservation-button").on("click", function(event) {
    event.preventDefault();

    reservationData.name = $(".reservation-name").val();
    $(".reservation-name").val("");

    // STEP 5
    var reservationDetails = database.ref("reservationDetails");
    reservationDetails.push(reservationData);
});

// STEP 6
function getReservations () {
    database.ref("reservationDetails").on("value", function(snapshot) {
        $(".reservation-list").empty();
        var reservationList = $(".reservation-list");
        //console.log("reservationList:", reservationList);

        var reservations = snapshot.val();
        //console.log("reservations:", reservations);

        for (var k in reservations) {
            var data = {
                name: reservations[k].name,
                day: reservations[k].day,
                id: k
            };
            //console.log("data:", data);
            var source= $ ("#reservation-template").html();

            var template = Handlebars.compile(source);

            var reservationTemplate = template(data);
            //console.log("reservationTemplate:", reservationTemplate);

            reservationList.append(reservationTemplate);
        };       
    });
};

getReservations ();


// STEP 7, 8, 9
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

// Cancel reservation
$(".reservation-list").on("click", ".delete", function(e) {
    e.preventDefault();
    var id = $(this).data("id");
    console.log("id: ", id);
  
    var reservationRef = firebase.database().ref('reservationDetails/' + id)
    console.log("reservationRef: ", reservationRef);
  
    reservationRef.remove()
});