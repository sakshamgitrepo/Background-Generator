var h1 = document.querySelector('h1')
var h4 = document.querySelector('h4')
var h5 =document.querySelector('h5')
var color1 = document.querySelector('#color1')
var color2 = document.querySelector('#color2')
var body = document.querySelector('body')

function colorvalue() {
    body.style.background = `linear-gradient(to right, ${color1.value},${color2.value})`;
    h5.innerText= 'Left : '+ color1.value + ' & ' + 'Right : ' +color2.value;
    }

color1.addEventListener('input',()=>{
	colorvalue()
})

color2.addEventListener('input',()=>{
    colorvalue()
})