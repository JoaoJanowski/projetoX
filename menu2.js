var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
	menuItem.forEach((item)=>	
		item.classList.remove('ativo')
	)	
	this.classList.add('ativo')
}

menuItem.forEach((item)=>
	item.addEventListener('click', selectLink)
)

let currentImageIndex = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Adicione mais imagens conforme necessário

const carouselImg = document.getElementById('carouselImg');

function showImage(index) {
    carouselImg.src = images[index];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

showImage(currentImageIndex);
