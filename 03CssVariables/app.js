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