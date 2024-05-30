function menuicon() {

	let l = document.querySelector('.leftnav');
	let m = document.querySelector('.menuu');
	let i = document.querySelector('.img1');

	let style = window.getComputedStyle(l);
	if (style.display === 'none') {
		l.style.display = "block";
		m.style.display = 'block';
		i.style.display = 'none';
		m.style.margin = "6px 0px";
	}
	else {
		l.style.display = "none";
		i.style.display = 'block';
	}
}