const button_mobile_menu = document.querySelector('.menu-btn');
const mobile_menu = document.querySelector('.menu-window');
const body = document.querySelector('body');

button_mobile_menu.addEventListener('click',function(e){
	e.preventDefault();
	button_mobile_menu.classList.toggle('menu-btn_active');
	mobile_menu.classList.toggle('menu-window_active');
	body.classList.toggle('no-scroll');
});

const form_items_multi = document.querySelectorAll('.form_item_multi');



const checkbox_cutting = document.querySelector('.good-info_2_6 input');
const cutting__item = document.querySelector('.cutting__item');

checkbox_cutting.addEventListener('change',function(){
	cutting__item.classList.toggle('hidden');
});