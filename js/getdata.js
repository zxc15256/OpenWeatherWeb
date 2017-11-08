
function getdata(){
    $.get(url,function(e){//http require get data
      if(e.query.count ==1){ //如果有抓到count = 1
      mCountry = e.query.results.channel.location.country;
      mCity = e.query.results.channel.location.city;
      direction = e.query.results.channel.wind.direction;
      chill = e.query.results.channel.wind.chill;
      speed = e.query.results.channel.wind.speed;
      humidity = e.query.results.channel.atmosphere.humidity;
      pressure = e.query.results.channel.atmosphere.pressure;
      rising = e.query.results.channel.atmosphere.rising;
      visibility = e.query.results.channel.atmosphere.visibility;
      sunrise = e.query.results.channel.astronomy.sunrise;
      sunset = e.query.results.channel.astronomy.sunset;
      date = e.query.results.channel.item.forecast[0].date;
      day = e.query.results.channel.item.forecast[0].day;
      high = e.query.results.channel.item.forecast[0].high;
      low = e.query.results.channel.item.forecast[0].low;
      temp = e.query.results.channel.item.condition.temp;
      code = e.query.results.channel.item.forecast[0].code;
      pushTime = e.query.results.channel.item.pubDate;
      publish_time = e.query.results.channel.lastBuildDate;
      }
      else{ //沒抓到直到抓到為止
        getdata();
      }

      //direction
       if (direction == 0 || direction == 360){direction = "北"; }
        else if (direction >= 1 && direction <= 44){direction = "北北東"; }
        else if (direction == 45){direction = "東北";}
        else if (direction >= 46 && direction <= 89){direction = "東北東";}
        else if (direction == 90){direction = "東"; }
        else if (direction >= 91 && direction <= 134){direction = "東南東"; }
        else if (direction == 135){direction = "東南"; }
        else if (direction >= 136 && direction <= 179){direction = "南南東";}
        else if (direction == 180){direction = "南";}
        else if (direction >= 181 && direction <= 224){direction = "南南西"; }
        else if (direction == 225){direction = "西南"; }
        else if (direction >= 226 && direction <= 269){direction = "西南西"; }
        else if (direction == 270){direction = "西"; }
        else if (direction >= 271 && direction <= 314){direction = "西北西"; }
        else if (direction == 315){direction = "西北";}
        else if (direction >= 316 && direction <= 359){direction = "北北西"; }
        else{direction == "unknown";}

      //rising
       if (rising == 0){ rising = "穩定";}
        else if (rising == 1){ rising = "上升";}
        else if (rising == 2){ rising = "下降";}
        else{rising="未定義"}

      //code 把代號轉換成中文
      switch (code) {
        case "0":
          code = "龍捲風";
          document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-0\"></i>"+code;
          break;
        case "1":
            code = "熱帶風暴";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-1\"></i>"+code;
            break;
        case "2":
            code = "颶風";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-2\"></i>"+code;
            break;
        case "3":
            code = "劇烈雷雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-3\"></i>"+code;
            break;
        case "4":
            code = "雷雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-4\"></i>"+code;
            break;
        case "5":
            code = "混雪雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-5\"></i>"+code;
            break;
        case "6":
            code = "下雨和結霜";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-6\"></i>"+code;
            break;
        case "7":
            code = "下雪和結霜";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-7\"></i>"+code;
            break;
        case "8":
            code = "凍毛毛雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-8\"></i>"+code;
            break;
        case "9":
            code = "濛濛細雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-9\"></i>"+code;
            break;
        case "10":
            code = "凍雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-10\"></i>"+code;
            break;
        case "11":
            code = "陣雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-11\"></i>"+code;
            break;
        case "12":
            code = "陣雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-12\"></i>"+code;
            break;
        case "13":
            code = "飄雪花";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-13\"></i>"+code;
            break;
        case "14":
            code = "輕雪陣雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-14\"></i>"+code;
            break;
        case "15":
            code = "吹雪";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-15\"></i>"+code;
            break;
        case "16":
            code = "下雪";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-16\"></i>"+code;
            break;
        case "17":
            code = "冰雹";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-17\"></i>"+code;
            break;
        case "18":
            code = "結霜";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-18\"></i>"+code;
            break;
        case "19":
            code = "粉塵";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-19\"></i>"+code;
            break;
        case "20":
            code = "有霧";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-20\"></i>"+code;
            break;
        case "21":
            code = "陰霾";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-21\"></i>"+code;
            break;
        case "22":
            code = "煙霧";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-22\"></i>"+code;
            break;
        case "23":
            code = "颳大風";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-23\"></i>"+code;
            break;
        case "24":
            code = "颳風";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-24\"></i>"+code;
            break;
        case "25":
            code = "寒冷";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-25\"></i>"+code;
            break;
        case "26":
            code = "多雲";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-26\"></i>"+code;
            break;
        case "27":
            code = "多雲(夜)";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-27\"></i>"+code;
            break;
        case "28":
            code = "多雲(日)";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-28\"></i>"+code;
            break;
        case "29":
            code = "局部陰天(夜)";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-29\"></i>"+code;
            break;
        case "30":
            code = "局部陰天(日)";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-30\"></i>"+code;
            break;
        case "31":
            code = "晴天(夜)";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-31\"></i>"+code;
            break;
        case "32":
            code = "晴天";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-32\"></i>"+code;
            break;
        case "33":
            code = "晴天(夜)";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-33\"></i>"+code;
            break;
        case "34":
            code = "晴天(日)";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-34\"></i>"+code;
            break;
        case "35":
            code = "下雨和冰雹";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-35\"></i>"+code;
            break;
        case "36":
            code = "炎熱";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-36\"></i>"+code;
            break;
        case "37":
            code = "局部雷雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-37\"></i>"+code;
            break;
        case "38":
            code = "零星雷雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-38\"></i>"+code;
            break;
        case "39":
            code = "零星雷雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-39\"></i>"+code;
            break;
        case "40":
            code = "零星陣雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-40\"></i>"+code;
            break;
        case "41":
            code = "暴雪";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-41\"></i>"+code;
            break;
        case "42":
            code = "零星帶雪陣雨";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-42\"></i>"+code;
            break;
        case "43":
            code = "暴雪";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-43\"></i>"+code;
            break;
        case "44":
            code = "局部多雲";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-44\"></i>"+code;
            break;
        case "45":
            code = "雷暴";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-45\"></i>"+code;
            break;
        case "46":
            code = "陣雪";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-46\"></i>"+code;
            break;
        case "47":
            code = "單一雷暴";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-47\"></i>"+code;
            break;
        default:
            code = "未定義";
            document.getElementById("code").innerHTML = "天氣狀態: "+"<i class=\"wi wi-yahoo-3200\"></i>"+code;
            break;
      }

      var tdCountry = document.getElementById("mCountry");
      var tdchill = document.getElementById("chill");
      var tddirection = document.getElementById("direction");
      var tdspeed = document.getElementById("speed");
      var tdhumidity = document.getElementById("humidity");
      var tdpressure = document.getElementById("pressure");
      var tdrising = document.getElementById("rising")
      var tdvisibility = document.getElementById("visibility")
      var tdsunrise = document.getElementById("sunrise");
      var tdsunset = document.getElementById("sunset");
      var tddate = document.getElementById("date");
      var tdday = document.getElementById("day");
      var tdhigh = document.getElementById("high");
      var tdlow = document.getElementById("low");
      var tdtemp = document.getElementById("temp");
      var tdpushTime = document.getElementById("pushTime");
      var tdpublish_time = document.getElementById("publish_time");

      tdCountry.textContent = "國家: "+mCountry;
      tdchill.textContent = "體感溫度: "+Math.round((chill-32)*5/9)+"℃";
      tddirection.textContent = "風向: "+direction;
      tdspeed.textContent = "風速: "+speed+"mph";
      tdhumidity.textContent = "濕度: "+humidity+"%";
      tdpressure.textContent = "氣壓: "+Math.round(pressure)+" mb";
      tdrising.textContent = "氣壓趨勢: "+rising;
      tdvisibility.textContent = "可見度: "+visibility+" m";
      tdsunrise.textContent = "日升: "+sunrise;
      tdsunset.textContent = "日落: "+sunset;
      tddate.textContent = "日期: "+date;
      tdday.textContent = "星期: "+day;
      tdhigh.textContent = "今日最高溫: "+Math.round((high-32)*5/9)+"℃";
      tdlow.textContent = "今日最低溫: "+Math.round((low-32)*5/9)+"℃";
      tdtemp.textContent = "現在溫度: "+Math.round((temp-32)*5/9)+"℃";
      tdpushTime.textContent = "資料時間: "+pushTime;
      tdpublish_time.textContent = "更新時間: "+publish_time;
      });
    }
