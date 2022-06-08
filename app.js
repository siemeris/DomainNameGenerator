/* eslint-disable */

//window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
//};


  var pron = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var ext = [".com", ".net", ".us", ".io"];

  for(var item of pron){
      for(var item1 of adj){
          for (var item2 of noun){
            for (var item3 of ext){
                console.log(item + item1 + item2 + item3);
            }
          }
      }
  } 


//console.log("Hello World");
//console.log(domainNameGenerator());