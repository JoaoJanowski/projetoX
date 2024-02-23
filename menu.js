var btnExp = document.querySelector('#btn-exp')
var barSide = document.querySelector('.side-bar')

btnExp.addEventListener('click', function(){
	barSide.classList.toggle('expansão')
})