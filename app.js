/* eslint-disable */

//window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
//};


  var pron = ["los", "nuestros"];
  var adj = ["geniales", "grandes"];
  var noun = ["telecom", "caracoles", "desafio"];
  var ext = [".es", ".com", ".net", ".us", ".io"];

  for(var item of pron){
      for(var item1 of adj){
          for (var item2 of noun){
                for (var item3 of ext){
                    if (item2.slice(item2.length-item3.length,item2.length).includes(item3.slice(1,item3.length))){
                        //console.log(item2.indexOf(item3.slice(1,item3.length)));
                        console.log(item + item1 + item2.slice(0,item2.length+1-item3.length) + item3);
                    }
                    else{
                    console.log(item + item1 + item2 + item3);
                }
                }

          }
      }
  } 




//console.log("Hello World");
//console.log(domainNameGenerator());