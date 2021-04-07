let mainNav = document.getElementById('main-nav-id');
let humbergerIcon = document.getElementById('hamburger-icon-id');

humbergerIcon.addEventListener('click', function(){
    mainNav.classList.toggle('active');
});

let aboutUsClick = document.getElementById('about-click');
let meetGuideClick = document.getElementById('meet-click');
let contactUsClick = document.getElementById('contact-click');

let aboutUsScroll = document.getElementById('about-us');

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("btn-order");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

aboutUsClick.addEventListener('click', function(){
    aboutUsScroll.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
});