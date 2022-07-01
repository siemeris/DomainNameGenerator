/* eslint-disable */

//window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
//};


  const pron = ["los", "nuestros"];
  const adj = ["geniales", "grandes"];
  const noun = ["telecom", "caracoles", "desafio", "internet", "repelus"];
  const ext = [".es", ".com", ".net", ".us", ".io"];

  for(var pronom of pron){
      for(var adjetivo of adj){
          for (var nombre of noun){
                for (var extension of ext){
                    if (nombre.substring(nombre.length-extension.length).includes(extension.substring(1))){
                        //console.log(item2.indexOf(item3.slice(1,item3.length)));
                        console.log(pronom + adjetivo + nombre.slice(0,nombre.length+1-extension.length) + extension);
                    }
                    else{
                    console.log(pronom + adjetivo + nombre + extension);
                }
                }
          }
      }
  } 




//console.log("Hello World");
//console.log(domainNameGenerator());