
var year = document.getElementById('year');
year.innerHTML =  new Date().getFullYear();

new Vue({
	el: '#about',
	data:{
		readMore: false
	}
});
