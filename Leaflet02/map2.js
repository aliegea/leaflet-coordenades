let mymap = L.map("map1").setView([41.387, 2.17], 15);
let mytile = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}";
const myIcon = L.icon({
  iconUrl: "marker.png",
  iconSize: [40, 60],
  iconAnchor: [20, 60],
});
L.tileLayer(mytile, {
  foo: "bar",
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(mymap);

let marker;
mymap.on("click", markerZoom);

function markerZoom(e) {
  if (mymap.hasLayer(marker) === true) {
    mymap.removeLayer(marker);
  }
  console.log(e);
  marker = L.marker(e.latlng, { icon: myIcon }).addTo(mymap);
  marker
    .bindPopup(
      `Has fet clic aquí:<br>
        Latitud: ${e.latlng.lat}<br>
        Longitud: ${e.latlng.lng}`
    )
    .openPopup();
  mymap.flyTo(e.latlng, mymap.getMaxZoom());
}
