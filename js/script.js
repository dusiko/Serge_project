function openMenuList() {
	const btn = document.querySelector('.header__info-burger')
	const bg = document.querySelector('.background-menu')
	const nav = document.querySelector('.header__nav')
	if (!btn.classList.contains('active')) {
		btn.classList.add('active')
		const line = document.getElementById('btn-menu-line').style.display = "none";
		nav.style.top = "100px";
		bg.style.display = "block"
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	} else {
		btn.classList.remove('active')
		const line = document.getElementById('btn-menu-line').style.display = "block";
		nav.style.top = "-200px";
		bg.style.display = "none"
		document.getElementsByTagName('body')[0].style.overflow = 'auto';
	}
}

// .header__nav {
// }
// .nav__list {
// }
// .list-item {
// }
// .list-item__link {
// }