var menuItem = document.querySelectorAll('.item-menu');
var lastClickedItem;

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    );

    this.classList.add('ativo');
    var icon = this.querySelector('.icon i');
    icon.classList.add('ativo');
    var dataIcon = this.getAttribute('data-icon');
    icon.className = 'bi ' + dataIcon + '-fill';
    if (lastClickedItem && lastClickedItem !== this) {
        var lastIcon = lastClickedItem.querySelector('.icon i');
        var lastIconData = lastClickedItem.getAttribute('data-icon');
        lastIcon.className = 'bi ' + lastIconData;
    }

    lastClickedItem = this;
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
);

var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');
btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir');
});

window.addEventListener('load', function () {
    var menuIcon = document.querySelector('.item-menu.ativo .icon i');
    var dataIcon = document.querySelector('.item-menu.ativo').getAttribute('data-icon');
    menuIcon.classList.add('ativo');
    menuIcon.className = 'bi ' + dataIcon + '-fill';
});

document.addEventListener('DOMContentLoaded', function() {
    const abas = document.querySelectorAll('.aba-nav');

    abas.forEach(aba => {
        aba.addEventListener('click', function() {
            // Remove a classe 'selected' de todas as abas
            abas.forEach(aba => {
                aba.classList.remove('selected');
            });

            // Adiciona a classe 'selected' na aba clicada
            aba.classList.add('selected');
        });
    });
});