//啟動光感 每1秒執行一次
function getphotocell(){
photocell.on(function(val){
  photocell.detectedVal = val;
  if(pcount!=0){
      abs = Math.abs((Math.round((det - photocell.detectedVal)*10000))/10000 * 1000); //設定abs(溫差)轉為更好判斷的數值
      console.log("det: "+det+" 光感指數: "+photocell.detectedVal+ " 光感差: "+abs); //測試用
      if(abs>50 && pstate && pcount > 2){ //如果光感變化大於50，則啟動語音辨識1
        startspeech();
        pstate = false;
      }
      else if(abs < 25 && !pstate && pcount >2){ //如果光感變化小於25，則重置狀態
        pcount = 0;
        pstate = true;
      }
  }
  pcount++;
  det = val;
});
}
