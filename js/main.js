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

if(document.querySelector('#mail-form-1')) {
	document.querySelector('#mail-form-1').addEventListener('submit', function(evt){
		var http = new XMLHttpRequest(), f = this;
		evt.preventDefault();
		http.open("POST", "js/mail-form.php", true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.send("&email=" + f.email.value + "&subject=" + f.submit.value);
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				alert(http.responseText + 'Инструкция отправлена Вам на почту.\nБлагодарим за интерес к нашему продукту!');    
			}
		}
		http.onerror = function() {
			alert('Извините, данные не были переданы. Попробуйте другой способ связи.');
		}
		window.location = 'feedback.html';
	}, false);
}

if(document.querySelector('#mail-form-2')) {
	document.querySelector('#mail-form-2').addEventListener('submit', function(evt){
		var http = new XMLHttpRequest(), f = this;
		evt.preventDefault();
		http.open("POST", "js/mail-form-2.php", true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.send("&email=" + f.email.value + "&subject=" + f.submit.value);
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				alert(http.responseText + 'Инструкция отправлена Вам на почту.\nБлагодарим за интерес к нашему продукту!');    
			}
		}
		http.onerror = function() {
			alert('Извините, данные не были переданы. Попробуйте другой способ связи.');
		}
		window.location = 'feedback.html';
	}, false);
}

if(document.querySelector('#mail-form-3')) {
	document.querySelector('#mail-form-3').addEventListener('submit', function(evt){
		var http = new XMLHttpRequest(), f = this;
		evt.preventDefault();
		http.open("POST", "js/mail-form-3.php", true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.send("&email=" + f.email.value + "&subject=" + f.submit.value);
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				alert(http.responseText + 'Инструкция отправлена Вам на почту.\nБлагодарим за интерес к нашему продукту!');    
			}
		}
		http.onerror = function() {
			alert('Извините, данные не были переданы. Попробуйте другой способ связи.');
		}
		window.location = 'index.html';
	}, false);
}