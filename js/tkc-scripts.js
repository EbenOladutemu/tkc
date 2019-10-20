
var year = document.getElementById('year');
year.innerHTML =  new Date().getFullYear();

new Vue({
	el: '#app',
	data:{
		readMore: false
	}
});
