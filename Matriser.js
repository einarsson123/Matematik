function create_matris(ev){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	console.log(a);
	console.log(b);
	var linebreak = document.createElement("br");
	document.getElementById("body").appendChild(linebreak);
	for(x=0; x < a; x++){
		var linebreak = document.createElement("br");
		document.getElementById("body").appendChild(linebreak);
		for(y=0; y<b; y++){
		var input = document.createElement("input");
		input.type = "number";
		input.id = (y+x*b);
		document.getElementById("body").appendChild(input);
		}
	}
	var linebreak = document.createElement("br");
	document.getElementById("body").appendChild(linebreak);
	var linebreak = document.createElement("br");
	document.getElementById("body").appendChild(linebreak);
	//byta
	var input = document.createElement("input");
	input.type = "number";
	input.id = "a1";
	document.getElementById("body").appendChild(input);
	var input = document.createElement("input");
	input.type = "number";
	input.id = "a2";
	document.getElementById("body").appendChild(input);
	var clicka = document.createElement("input");
	clicka.type = "button";
	clicka.value = "Byt plats";
	clicka.id = "b1";
	document.getElementById("body").appendChild(clicka);
	document.getElementById("b1").addEventListener("click", byta);
	var linebreak = document.createElement("br");
	document.getElementById("body").appendChild(linebreak);
	var linebreak = document.createElement("br");
	document.getElementById("body").appendChild(linebreak);
	//addera
	var input = document.createElement("input");
	input.type = "number";
	input.id = "a3";
	input.placeholder = "givare";
	document.getElementById("body").appendChild(input);
	var input = document.createElement("input");
	input.type = "number";
	input.id = "a4";
	input.placeholder = "mottagare";
	document.getElementById("body").appendChild(input);
	var input = document.createElement("input");
	input.type = "text";
	input.id = "a5";
	input.placeholder = "multiplecerat";
	document.getElementById("body").appendChild(input);
	var clicka = document.createElement("input");
	clicka.type = "button";
	clicka.value = "addera";
	clicka.id = "b2";
	document.getElementById("body").appendChild(clicka);
	document.getElementById("b2").addEventListener("click", addera);
	//multiplicera
	var linebreak = document.createElement("br");
	document.getElementById("body").appendChild(linebreak);
	var linebreak = document.createElement("br");
	document.getElementById("body").appendChild(linebreak);
	var input = document.createElement("input");
	input.type = "number";
	input.id = "a6";
	document.getElementById("body").appendChild(input);
	var input = document.createElement("input");
	input.type = "text";
	input.id = "a7";
	document.getElementById("body").appendChild(input);
	var clicka = document.createElement("input");
	clicka.type = "button";
	clicka.value = "Multiplicera";
	clicka.id = "b3";
	document.getElementById("body").appendChild(clicka);
	document.getElementById("b3").addEventListener("click", multi);
	var linebreak = document.createElement("br");
	document.getElementById("body").appendChild(linebreak);
	var linebreak = document.createElement("br");
	document.getElementById("body").appendChild(linebreak);
	var input = document.createElement("input");
	input.type = "number";
	input.id = "a8";
	document.getElementById("body").appendChild(input);
	var input = document.createElement("input");
	input.type = "text";
	input.id = "a9";
	document.getElementById("body").appendChild(input);
	var clicka = document.createElement("input");
	clicka.type = "button";
	clicka.value = "Dividera";
	clicka.id = "b4";
	document.getElementById("body").appendChild(clicka);
	document.getElementById("b4").addEventListener("click", divi);
}
function byta(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var givare = document.getElementById("a1").value;
	var mottagare = document.getElementById("a2").value;
	var c = 0;
	for(x=0; x<b; x++){	
		c = document.getElementById((x+givare*b)).value;
		document.getElementById((x+givare*b)).value = document.getElementById((x+mottagare*b)).value;
		document.getElementById((x+mottagare*b)).value = c;
	}
}
function addera(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var givare = document.getElementById("a3").value;
	var mottagare = document.getElementById("a4").value;
	var mult = document.getElementById("a5").value;
	console.log(mult);
	var c = 0;
	var d = 0;
	var e = 0;
	var f = 0;
	for(x=0; x<b; x++){
		d = document.getElementById((x+mottagare*b)).value;
		console.log(d);
		e = document.getElementById((x+givare*b)).value;
		console.log(e);
		e = parseFloat(e) * parseFloat(mult);
		d = parseFloat(e) + parseFloat(d);
		console.log(d);
		document.getElementById((x+mottagare*b)).value = d.toPrecision(3);
	}
}
function multi(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var givare = document.getElementById("a6").value;
	var mult = document.getElementById("a7").value;
	var d = 0;
	for(x=0; x<b; x++){
		d = document.getElementById((x+givare*b)).value;
		document.getElementById((x+givare*b)).value = (parseFloat(d) * parseFloat(mult)).toPrecision(3);
	}
}
function divi(){
	var b = document.getElementById("b").value;
	var givare = document.getElementById("a8").value;
	var mult = document.getElementById("a9").value;
	var d = 0;
	for(x=0; x<b; x++){
		d = document.getElementById((x+givare*b)).value;
		document.getElementById((x+givare*b)).value = (parseFloat(d) / parseFloat(mult)).toPrecision(3);
	}
}
