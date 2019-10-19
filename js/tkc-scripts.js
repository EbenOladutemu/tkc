new Vue({
	el: '#app',
	data:{
		readMore: false
	}
});

var year = document.getElementById('#year');
year.innerHTML = new Date('Y')