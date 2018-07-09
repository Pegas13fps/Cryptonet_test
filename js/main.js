window.onload = function() {
	scroll();
}
if(document.querySelector('.header')) {
	function scroll() {
		document.querySelector('.header').style.height=parseInt(document.querySelector('.header .menu').offsetHeight)+'px';
		scroll = document.body.scrollTop;
		window.addEventListener('scroll', function() {
			scroll = window.pageYOffset || document.documentElement.scroll;

			scr = scroll > 0 ? document.querySelector('.header .menu').classList.add('fixed') : document.querySelector('.header .menu').classList.remove('fixed');
		});
	}
}