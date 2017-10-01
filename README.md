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
