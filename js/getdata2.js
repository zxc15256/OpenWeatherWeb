function getdata2(){//取得縣市區里
     $.get(url2,function(e){
       var add_l = e.results[0].address_components.length;
       mCity2 = e.results[0].address_components[add_l-3].long_name;
       region = e.results[0].address_components[add_l-4].long_name;
       lining = e.results[0].address_components[add_l-5].long_name;
      var tdCity2 = document.getElementById("mCity");
      var tdRegion = document.getElementById("region");
      var tdLining = document.getElementById("lining");
       tdCity2.textContent = "縣市: "+mCity2;
       tdRegion.textContent = "市區: "+region;
       tdLining.textContent = "區里: "+lining;
     });
}
