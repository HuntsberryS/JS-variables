
// selects all inputs with the class controls 
const inputs = document.querySelectorAll('.controls input');


function Update() {
    //make a variable called suffix to hold the px' data piece for blur and spacing. also allows no input to accomodate no suffix with hexcode value for color
    const suffix = this.dataset.sizing || '';
    //select a specific element, change the value to the one being selected PLUS px for it to be updated. 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
//runs function whenever the slider is clicked or moved 
inputs.forEach(input => input.addEventListener('change', Update));
inputs.forEach(input => input.addEventListener('mousemove', Update));
