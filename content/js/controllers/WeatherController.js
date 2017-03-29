function WeatherController (WeatherServices){
  ctrl= this;
  unit = 'F';
  this.unit='F';
  var x = true;
  
  this.type = function type(){
    if(this.unit ==='F'){
      this.unit ='C';
      unit ='C';
      getWeather(city,unit);
    }else{
      this.unit='F' ;
      unit ='F';
      getWeather(city,unit);
    }
  };

getWeather = function(unit){
  WeatherServices
  .getLoc(unit)
  };

getWeather();
};

angular
.module('app')
.controller('WeatherController',WeatherController);
