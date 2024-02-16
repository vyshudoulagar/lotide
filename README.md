# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vyshudoulagar/lotide`

**Require it:**

`const _ = require('@vyshudoulagar/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`   : takes array as an argument, returns first element of given array
* `tail(array)`   : takes array as an argument, returns all elements except first element of given array
* `middle(array)` : takes array as an argument, returns middle element/elements of given array
* `assertArraysEqual(actual, expected)`: takes 2 arrays as arguments, asserts if the given arrays are equal
* `assertEqual(actual, expected)`: takes 2 primitive values as arguments, asserts if the given values are equal
* `assertObjectsEqual(actual, expected)`: takes 2 objects as arguments, asserts if the given objects are equal
* `countLetters(sentence)`: takes sentence as an argument, returns an object which tells the number of occurences of each letter in a given sentence
* `countOnly(allItems, itemsToCount)`: takes array and object as arguments, returns an object which tells the number of occurences of elements given in the object(itemsToCount) in the given array(allItems)
* `eqArrays(actual, expected)`: takes 2 arrays as arguments, checks if the given arrays are equal
* `eqObjects(actual, expected)`: takes 2 objects as arguments, checks if the given two objects are equal
* `findKey(object, callback)`: takes object and function as arguments, returns the key of object for which the callback function is true
* `findKeyByValue(object, value)`: takes object and value as arguments, return the key of object if the value of that key is equal the given value
* `flatten(array)`: takes in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array
* `letterPositions(sentence)`: returns all the indices (zero-based positions) in the string where each character is found
* `map(array, callback)`: takes in two arguments:An array to map, A callback function, it returns a new array based on the results of the callback function.
* `takeUntil(array, callback)`: takes array to work with and a callback as arguments, returns a "slice of the array with elements taken from the beginning." It keeps going until the callback/predicate returns a truthy value.
* `without(array1, array2)`: takes in 2 arrays, main array and an array of unwanted elements, returns a subset of a given array, removing unwanted elements