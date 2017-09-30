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
