function getLocation() { //判斷可否適用於此瀏覽器，可以則抓經緯度
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else{
        alert("此瀏覽器不適用於這個服務.");
    }
}

function showPosition(position) { //取得經緯度
    xlatitude =  position.coords.latitude;
    xlongitude =  position.coords.longitude;
    url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text=%22"+"("+xlatitude+","+xlongitude+")"+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    url2="https://maps.googleapis.com/maps/api/geocode/json?latlng="+xlatitude+","+xlongitude+"&language=zh-TW&sensor=true&key=AIzaSyDHA4UDKuJ_hZafj8Xn6m3mMzOsQnbTZ_w&lafhdfhfdhfdhrh"
    getdata();
    getdata2();
    gasnofind = false;
}

function showError(error) { // 挑出錯誤訊息
  switch(error.code) {
      case error.PERMISSION_DENIED:
      alert("請開啟取得位置的權限.");
      break;
  case error.POSITION_UNAVAILABLE:
      alert("搜尋不到GPS信號.");
      break;
  case error.TIMEOUT:
      alert("GPS訊號搜尋超時.");
      break;
  case error.UNKNOWN_ERROR:
      alert("未知錯誤發生.");
      break;
    }
}
