function change_background(){ //隨機變換背景
    var systemTime = parseInt('<%=ViewData["a"] %>');
    var mImgDay= ["https://mokokai.tk/sky.jpg","https://mokokai.tk/day01.jpg","https://mokokai.tk/day02.jpg","https://mokokai.tk/day03.jpg","https://mokokai.tk/day04.jpg","https://mokokai.tk/day05.jpeg","https://mokokai.tk/day06.JPG"];
    var mImgAfternoon = ["https://mokokai.tk/afternoon01.jpg","https://mokokai.tk/afternoon02.jpg","https://mokokai.tk/afternoon03.jpg","https://mokokai.tk/afternoon04.jpg","https://mokokai.tk/afternoon05.jpg"];
    var mImgnight = ["https://mokokai.tk/night01.jpg","https://mokokai.tk/night02.jpg","https://mokokai.tk/night03.jpg","https://mokokai.tk/night04.png","https://mokokai.tk/night05.jpg","https://mokokai.tk/night06.jpg","https://mokokai.tk/night07.jpg"];
    var mImgMidnight = ["https://mokokai.tk/midnight01.jpg"];
    var today=new Date();
    var round = 0;
    var h = today.getHours();
    if(h>=7 && h<=16){
      round = Math.floor(Math.random()*(mImgDay.length));
      document.body.style.backgroundImage = "url("+mImgDay[round]+")";
    }
    else if(h>16&&h<=18){
      round = Math.floor(Math.random()*(mImgAfternoon.length));
      document.body.style.backgroundImage = "url("+mImgAfternoon[round]+")";
    }else if(h>18&&h<=23){
      round = Math.floor(Math.random()*(mImgnight.length));
      document.body.style.backgroundImage = "url("+mImgnight[round]+")";
    }
    else{
      round = Math.floor(Math.random()*(mImgMidnight.length));
      document.body.style.backgroundImage = "url("+mImgMidnight[round]+")";
    }
}
