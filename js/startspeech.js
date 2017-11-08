function startspeech(){//執行第1個語音辨識
  //詢問是否要查詢所在地的天氣資訊
  speak('是否要查詢目前的天氣',["zh-TW",1,1,1]);
  setTimeout("speechRecognition()",2000);
}
function startspeech2(){ //執行第2個語音辨識
  //詢問要查詢哪一個縣市的天氣
  //console.log('say:您要查詢哪一個縣市的天氣');
  setTimeout("speechRecognition2()",4000);
}
