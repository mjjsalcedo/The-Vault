/*jshint esversion: 6 */
'use strict';
module.exports = function(){

var vault = {};

  function setValue(key, value){
     vault[key] = value;
  }

  function getValue(key){
    if (key === undefined) {
      return null;
    } else if (vault[key] === undefined){
      return null;
    } else {
      return vault[key];
    }
  }

  function secretKey(){


  }


  return {
    setValue: setValue,
    getValue: getValue

  };
};



