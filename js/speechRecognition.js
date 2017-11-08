function speechRecognition(){
  if (!("webkitSpeechRecognition" in window)) {
    alert("本瀏覽器不支援語音辨識，請更換瀏覽器！(Chrome 25 版以上才支援語音辨識)");
  }
  else{
    window._recognition = new webkitSpeechRecognition();
    window._recognition.continuous = false; //在辨識一段話完成之後就會結束辨識。
    window._recognition.interimResults = true;//在我們講話的當下就會即時辨識
    window._recognition.lang = "cmn-Hant-TW"; //語系

            window._recognition.onstart = function() {
              console.log("Start recognize...");
              alreadyspeech = true;
            };

            window._recognition.onend = function() {
              console.log("Stop recognize");
            };


    window._recognition.onresult = function(event,result) {
      result = {};
      result.resultLength = event.results.length-1;
      result.resultTranscript = event.results[result.resultLength][0].transcript;
      if(event.results[result.resultLength].isFinal===true){
          console.log(result.resultTranscript);
          var resultcontent = ['是','對','要','好','有'];
             for(var i in resultcontent){ // 如果辨識包含'是','對','要','好'，且不包含'不'，則回饋
               if(result.resultTranscript.indexOf(resultcontent[i]) !== -1 && result.resultTranscript.indexOf("不") === -1 && result.resultTranscript.indexOf("沒") === -1 && alreadyspeech){
                 getLocation();
                 getdata();
                 getdata2();
                 setTimeout(function(){speak("搜尋中，請稍後",["zh-TW",1,1,1]);},1500);
                 setTimeout(function(){speak((['您目前的位置是',mCity2,region,lining,'最高溫',Math.round((high-32)*5/9),'度'
                      ,'最低溫',Math.round((low-32)*5/9),'度','現在溫度',Math.round((temp-32)*5/9),'度','濕度為',"百分之",humidity].join('')),["zh-TW",1,1,1]);},5000);
                 setTimeout(function(){pstate = true;alreadyspeech = false;},18000);
                 break;
             }
            }
            if((result.resultTranscript.indexOf("不") !== -1 || result.resultTranscript.indexOf("沒") !== -1)&& alreadyspeech){ // 如果辨識包含'不'，則執行語音辨識2
              setTimeout(function(){speak("您要查詢哪一個縣市的天氣",["zh-TW",1,1,1]);},1000);
              startspeech2();
            }

       }
       else if(event.results[result.resultLength].isFinal===false){
         console.log("final");
      }
    };
    window._recognition.start();
  }
}

function speechRecognition2(){
  if (!("webkitSpeechRecognition" in window)) {
    alert("本瀏覽器不支援語音辨識，請更換瀏覽器！(Chrome 25 版以上才支援語音辨識)");
  }
  else{
    recognition = new webkitSpeechRecognition();
    window._recognition.continuous = false; //在辨識一段話完成之後就會結束辨識。
    window._recognition.interimResults = true;//在我們講話的當下就會即時辨識
    window._recognition.lang = "cmn-Hant-TW"; //語系

    window._recognition.onstart = function() {
      console.log("Start recognize...");
      alreadyspeech2 = true;
    };
    window._recognition.onend = function() {
      console.log("Stop recognize");
    };

    window._recognition.onresult = function(event,result) {
      result = {};
      result.resultLength = event.results.length-1;
      result.resultTranscript = event.results[result.resultLength][0].transcript;
      if(event.results[result.resultLength].isFinal===true){
        console.log(result.resultTranscript);
           for(var i in city){
             if(result.resultTranscript.indexOf(city[i])!== -1 && alreadyspeech2){ // 如果字串包含台灣'縣市'的話，回饋
               url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text=\"("+citygps[i]+")%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
               getdata();
               var tdCity = document.getElementById("mCity");
               tdCity.textContent = "城市:"+city[i];
               var tdRegion = document.getElementById("region");
               var tdLining = document.getElementById("lining");
               tdRegion.textContent = "";
               tdLining.textContent = "";
               speak('您搜尋的位置為',["zh-TW",1,1,1]);
               setTimeout(function(){speak(city[i],["zh-TW",1,1,1]);} , 3000);
               setTimeout(function(){speak(['最高溫',Math.round((high-32)*5/9),'度','最低溫',Math.round((low-32)*5/9),'度'
                  ,'現在溫度',Math.round((temp-32)*5/9),'度','濕度為','百分之',humidity],["zh-TW",1,1,1]);} , 5000);
               setTimeout(function(){pstate = true;alreadyspeech2 = false;;},18000);
               break;
             }
             else if(result.resultTranscript.indexOf(city[i]) === -1 && alreadyspeech2){
               window._recognition.stop();
               speak('請說台灣的縣市優',["zh-TW",1,1,1]);
                setTimeout(function(){window._recognition.start();} , 3000);
             }
           }
       }
       else if(event.results[result.resultLength].isFinal===false){
         console.log("final");
      }
    };
    window._recognition.start();
  }
}
