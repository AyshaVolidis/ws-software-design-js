/*
 * Exercise: Refactor the code!
 *
 * This file is a collection of functions you've been asked to refactor.
 *
 * The primary purpose of this exercise is to use your judgement to decide when
 * and where to introduce appropriate abstractions, and whether you can use
 * either abstractions provided by JavaScript, or write your own.
 *
 * The command
 *   npm run s1.functions
 * will run tests to ensure the functions do what they should. They should all
 * still pass when you've finished refactoring.
 *
 * Advice:
 * + Try to recognise common patterns in the code.
 * + When you have recognised a pattern, think about if you could make a
 *   function to encapsulate it, instead of repeating code in several places.
 */
'use strict';


const itareteObj=(input,callback)=>{
  const keys = Object.keys(input);
  const result = {};
  for(let key of keys){
    const[newKey,newValue]=callback(key,input[key])
    result[newKey]=newValue
  }
  return result
}

const captilize=(str)=>{
  return str.slice(0, 1).toUpperCase().concat(str.slice(1));
}

function capitaliseObjectKeys (input) {
  return itareteObj(input,(key,value)=>[captilize(key),value]);
}



function capitaliseObjectValues (input) {
  return itareteObj(input,(key,value)=>[key,captilize(value)]);
}


function incrementObjectValues (input) {
  return itareteObj(input,(key,value)=>[key,value+1])
}

function reverseObjectKeys (input) {
  return itareteObj(input,(key,value)=>[key.split('').reverse().join(''),value])
}

module.exports = {
  capitaliseObjectKeys,
  capitaliseObjectValues,
  incrementObjectValues,
  reverseObjectKeys,
};
