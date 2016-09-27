var initialize = function(){
  var container = document.getElementById('map');
  var codeClan = { lat: 55.94716, lng: -3.20198};
  var codeClanInfo = '<h1>CodeClan</h1>' +
  '<p>CodeClan offers a range of software development courses</p>' +
  '<p>through immersive, full-time and part-time learning to help</p>'+
  '<p>kick start your career in tech or deepen your digital expertise.</p>';

  var map = new Map(container, codeClan, 18);
  map.addMarker(codeClan, codeClanInfo);

  var button = document.querySelector('button');
  var handleButtonClick = function(){
    map.centerAt(55.859969, -4.256624);
  }
  //button.onclick = console.log("hiya");//map.setCenter({lat:55.859969, lng:-4.256624});
  button.onclick = handleButtonClick;

  

}


window.onload = initialize;