function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("Your live in", lat, lng);
}
function onGeoError() {
  alert("Can't find you. No wheater for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
