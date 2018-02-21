# js30

## CSS variables
* Should add variables on root of page.
```css
/*    root is the highest level/like html*/
/*  first define all the variables*/
    :root {
      --base: #ffc600; 
      --spacing: 10px;
      --blur: 10px;
    }
    
/*    use the variables*/
    img{
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));    
        }
```

* document.querySelectorAll doesn't returns an array but a nodeList.
* Nodelst vs Array -> Nodelist doesn't have methods that are defined on an array.(click on prototype and see the object)
* this.dataset in the function is the object which will return all the data attributes we put on the element.

```js

const inputs = document.querySelectorAll(`.controls input`); //gets a nodelist NOT an array inside inputs

function handleUpdate() {
  //console.log(this.value);
  //console.log(this.dataset); //dataset contains all the data attributes from that specific elemnt.
  
  const suffix = this.dataset.sizing || ''; //by default it wil be nothings instead of undefined.
  console.log(suffix);
  
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
  
}

inputs.forEach(input=> input.addEventListener('change',handleUpdate));
inputs.forEach(input=> input.addEventListener('mousemove',handleUpdate));
```

## Array Cardio 1

* use console.table to show object in the console in table form.
* Sort mechanism :-
    * If compareFunction is supplied, the array elements are sorted according to the return value of the compare function. If a and b are two elements being compared, then:
    *  If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
    *  If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
    *  If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
    *  compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.

* The following example is generic
```js
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```
* To compare numbers instead of strings, the compare function can simply subtract b from a. The following function will sort the array ascending (if it doesn't contain Infinity and NaN):
```js
function compareNumbers(a, b) {
  return a - b;
}
```
* The sort method can be conveniently used with function expressions (and closures):
```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```
* Objects can be sorted given the value of one of their properties.
```js
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
```
* **Sort will change the array itself that it is applied upon**

* **Reduce mechanism->**
* The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
* Parameters
    * callback -> Function to execute on each element in the array, taking four arguments:
    * accumulator -> The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied (see below).
    * currentValue -> The current element being processed in the array.
    * currentIndex -> The index of the current element being processed in the array. Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
    * array -> The array reduce was called upon.
    * initialValue -> Optional Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce on an empty array without an initial value is an error.
* Return value -> The value that results from the reduction.

* Description
* reduce executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments:
* accumulator
* currentValue
* currentIndex
* array
* The first time the callback is called, accumulator and currentValue can be one of two values. If initialValue is provided in the call to reduce, then accumulator will be equal to initialValue, and currentValue will be equal to the first value in the array. If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.

* **Note** : If initialValue isn't provided, reduce will execute the callback function starting at index 1, skipping the first index. If initialValue is provided, it will start at index 0.

* If the array is empty and no initialValue is provided, TypeError will be thrown. If the array has only one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, the solo value will be returned without calling callback.

* Counting instances of values in an object
```js
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

* Bonding arrays contained in an array of objects using the spread operator and initialValue
```js
// friends - an array of objects 
// where object field "books" - list of favorite books 
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
var allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

* De structuring assignment
```js
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

Syntax

var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 3 proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); //{c: 30, d: 40}
```

* Array cardio all sampleCode

```js

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const bornInFifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
    console.table(bornInFifteen);
    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    let fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log('here', fullNames);
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    inventors.sort((a, b) => a.year - b.year);
    // console.log('sorted', sortedInventors);
    console.log('inventors', inventors);
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const yearsLived = inventors.reduce((acc, curr) => {
        return acc += curr.passed - curr.year;
    }, 0);
    console.log('yearsLived: ', yearsLived);
    // 5. Sort the inventors by years lived
    const livedSorted = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
    console.log(livedSorted);
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    const category = document.querySelector('.mw-category'); // We could have avoided writing the next line and get the links here itself by ('.mw-category a')
    const links = [...category.querySelectorAll('a')]; // querySelectors can be applied tp any DOM elem, not just window and document.
    console.log(links);
    //convert this into an array
    const de = links.map(link => link.innerText).filter(boulevard => boulevard.includes('de'));
    console.log(de);
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort((prev, curr) => {
        const [aFirst, aLast] = prev.split(', ');
        const [bFirst, bLast] = curr.split(', ');
        return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);
    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const numberOfData = data.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1;
          } else {
            acc[curr] = 1;
          }
        return acc;
        }, {});
    console.log(numberOfData);
```
* To remove duplicates using filter
```js
function removeDuplicateUsingFilter(arr){
    let unique_array = arr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique_array
}

console.log(removeDuplicateUsingFilter(array_with_duplicates));
```


* To remove duplicates using set
```js
function removeDuplicateUsingSet(arr){
    let unique_array = Array.from(new Set(arr))
    return unique_array
}

console.log(removeDuplicateUsingSet(array_with_duplicates));
```
