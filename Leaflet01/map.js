let mymap = L.map("map1").setView([41.387, 2.17], 15);
let mytile = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}";

const myIcon = L.icon({
  iconUrl: "marker1.png",
  iconSize: [40, 60],
  iconAnchor: [18, 60],
});
let mymarker = L.marker([41.3868561, 2.1661102], { icon: myIcon }).addTo(mymap);
L.tileLayer(mytile, {
  foo: "bar",
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(mymap);

mymarker
  .bindPopup(
    "<b>Restaurant Centfocs</b><br><br>Restaurante mediteraneo<br>Carrer Balmes, 16 08007 Barcelona"
  )
  .openPopup();
