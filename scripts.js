var darkLayer = document.querySelector(".overlay"); // Не работаеть !!!11!
	link = document.querySelector(".open-form");
	popup = document.querySelector(".modal-form");
	close = popup.querySelector(".modal-close");

  
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
	darkLayer.classList.add("overlay"); // Не работаеть !!!11!
  });
  
  
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

 var latlng = new google.maps.LatLng("48.772853", "44.566086");
 var myOptions = {
 zoom: 17,
 center: latlng,
 navigationControlOptions: {
 style: google.maps.NavigationControlStyle.SMALL
 },
 mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 var map = new google.maps.Map(document.getElementById("makemap_canvas"),myOptions);
 map.scrollwheel=true;
 map.setOptions({ mapTypeControl:true});
 
 var marker = new google.maps.Marker({
	position: {lat: 48.772853, lng: 44.566086}, 
	map: map,
	title: 'Nerds',
	icon: {
		url: "img/map-marker.png",
		scaledSize: new google.maps.Size(180, 140)
	}
});

window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
		}
		}
		});

document.onclick = function() {
  document.getElementById('modal-form').style.display = 'none'
}
