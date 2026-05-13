function initGeolocation() {
  const el = document.getElementById('location-text');
  if (!el || !navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(function (pos) {
    fetch('https://nominatim.openstreetmap.org/reverse?format=json&lat=' + pos.coords.latitude + '&lon=' + pos.coords.longitude)
      .then(r => r.json())
      .then(function (d) {
        const city  = d.address.city || d.address.town || d.address.village || '';
        const state = d.address.state || '';
        el.textContent = city && state ? '📍 Browsing from ' + city + ', ' + state
          : state ? '📍 Browsing from ' + state : '';
      }).catch(() => {});
  }, function () {});
}
