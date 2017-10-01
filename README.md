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

