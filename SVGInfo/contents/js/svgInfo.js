
function createIframe() {
	let svgBox = document.createElement('div');
	let inner  = document.getElementById('input-svg-box');

	svgBox.id = 'svgbox';
	svgBox.innerHTML = inner.value;

	document.body.appendChild( svgBox );

	document.getElementById('output-svg-box').value = JSON.stringify( SvgInfo(), '', '\t' )
}

function SvgInfo(evt) {

	let svg = document.querySelector('svg');
	let result = [];

	let bBox = svg.getBBox();
	let svgChild = svg.children;
	let svgChildLength = svgChild.length;

	for (var i = 0; i < svgChildLength; i++ ) {

		if (svgChild[i].tagName === 'path') {

			let childInfo = svgChild[i].getBBox();
			let name = svgChild[i].id || false;
			let data = {
				x: childInfo.x,
				y: childInfo.y,
				width: childInfo.width,
				height: childInfo.height
			};

			if ( name )
				data.id = name

	console.log(childInfo)

			result.push( data )
		}
	}

	return result;
}