export default `
core {
	active-bg-color: #fff;
	active-bg-opacity: 0.333;
}

edge {
	curve-style: straight;
	haystack-radius: 0;
	opacity: 0.333;
	width: 2;
	z-index: 0;
	overlay-opacity: 0;
  events: no;
}

node {
	font-size: 9;
	font-weight: bold;
	min-zoomed-font-size: 4;
	label: data(label);
	text-wrap: wrap;
	text-max-width: 50;
	text-valign: center;
	text-halign: center;
	text-events: yes;
	color: #000;
	text-outline-width: 1;
	text-outline-color: #fff;
	text-outline-opacity: 1;
	overlay-color: #fff;
}

node[econ = "A"] {
	background-color: #90be6d;
	text-outline-color: white;
}

node[econ = "B"] {
	background-color: #43aa8b;
	text-outline-color: white;
}

node[econ = "I"] {
	background-color: #f3722c;
	text-outline-color: white;
}

node[econ = "R"] {
	background-color: #f94144;
	text-outline-color: white;
}

node[econ = "T"] {
	background-color: #f8961e;
	text-outline-color: white;
}

node[econ = "L"] {
	background-color: #577590;
	text-outline-color: white;
}

node:parent {
	background-opacity: 0.333;
	border-color': #2B65EC;
}

.hidden {
	display: none;
}

`;