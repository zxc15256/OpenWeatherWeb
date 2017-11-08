//溫溼度&超音波
function get_ult_dht(){
ultrasonic.ping(function(cm){ //超音波偵測，每秒
  dht.read(function(evt){ //溫濕度偵測，每秒 evt包含溫度及濕度
  if(!dhtstate){
      console.log('超音波偵測距離: '+ultrasonic.distance);
      if(ultrasonic.distance > 15){ //如果超音波偵測距離超過15公分，則提示車外車內溫度及溫差
        var temp2 = Math.round(((temp-32)*5/9)-dht.temperature);
        //console.log('資料溫度: '+Math.round(((temp-32)*5/9))+'，偵測溫度: '+dht.temperature+"，溫差: "+temp2);
        //speak((['車內外溫度差距',temp2,'度','請注意溫差'].join('')),["zh-TW",1,1,1]);
        speak((['車內外溫差為',Math.abs(temp2),'度','請注意溫差'].join('')),["zh-TW",1,1,1]);
        alert('車外溫度: '+Math.round((temp-32)*5/9)+'，車內溫度: '+dht.temperature+',溫差: '+Math.abs(temp2));
        dhtstate=true;
        if(temp2>5){ //如果車內比車外高5度，則語音警示
          speak((['車內比車外高',Math.abs(temp2),'度','請注意溫差'].join('')),["zh-TW",1,1,1]);
          alert('車外溫度: '+Math.round((temp-32)*5/9)+'，車內溫度: '+dht.temperature+',溫差: '+Math.abs(temp2));
          dhtstate=true;
        }
        else if(temp2<-5){//如果車內比車外低5度，則語音警示
          speak((['車內比車外低',Math.abs(temp2),'度','請注意溫差'].join('')),["zh-TW",1,1,1]);
          alert('車外溫度: '+Math.round((temp-32)*5/9)+'，車內溫度: '+dht.temperature+',溫差: '+Math.abs(temp2));
          dhtstate=true;
        }
        }
      }
  if(dhtstate){ //如果超音波偵測距離小於等於15公分，則停止語音辨識，在重置超音波的狀態
    if(ultrasonic.distance <= 15){
      window._recognition.stop();
      dhtstate = false;
      }
    }
  }, 1000);
}, 1000);
}
