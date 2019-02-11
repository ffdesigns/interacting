// Interacting


// Zoom in and out of the keyhole
var trigger = document.querySelector('.trigger')
var body = document.querySelector('body')

trigger.addEventListener('click', zoom)

function zoom() {
	console.log('it works')

	if (body.id != 'zoom') {
		body.id = 'zoom'
	} else {
		body.id = ''
	}

}


// Partial eclipse on hover
var keyhole = document.querySelector('.keyhole')

keyhole.addEventListener('mouseenter', showShadow)
keyhole.addEventListener('mouseleave', hideShadow)

function showShadow() {
	keyhole.classList.add('eclipse')
}

function hideShadow() {
	keyhole.classList.remove('eclipse')
}













