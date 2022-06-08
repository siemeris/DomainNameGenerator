/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

var domainNameGenerator = () => {
  var pron = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var ext = [".com", ".net", ".us", ".io"];

  var pronIndex = Math.floor(Math.random() * pron.length);
  var adjIndex = Math.floor(Math.random() * adj.length);
  var nounIndex = Math.floor(Math.random() * noun.length);
  var extIndex = Math.floor(Math.random() * ext.length);

  var domain =
    pron[pronIndex] +
    " " +
    adj[adjIndex] +
    " " +
    noun[nounIndex] +
    " " +
    ext[extIndex];

  return domain;
};

console.log("Hello World");
