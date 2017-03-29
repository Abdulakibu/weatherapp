function WeatherServices ($http){
 var API ='http://api.openweathermap.org/data/2.5/weather?q=';
 var appid= '&appid=fc0e17078c28b112d34b07beea81a5ac';

 this.getLoc = function(unit) {
    return $http
    .jsonp("http://ipinfo.io/json",{jsonCallbackParam:'callback'})
    .then(function(response){
      city = response.data.city + "," + response.data.country+appid;
      ctrl.place=response.data.city + " , " + response.data.country;
      type=this.type;

      getWeather = function (city,type){
          return $http
          .get(API + city)
          .then(function(response){
            ctrl.des =response.data.weather[0].main;
            temp=response.data.main.temp;
              if(type==='F'){
                ctrl.locWeather=Math.round( ((temp* 9)/5) -459.67 );
              }else{
                 ctrl.locWeather=Math.round( temp -273.15);
              }
          },function(reason){
               //error
            })
      }

      getWeather(city,type)
    })
  }
};


angular
.module('app')
.service('WeatherServices',WeatherServices);
