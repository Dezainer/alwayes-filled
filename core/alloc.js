//Basic

var memory = new Array(379);

for (var i = 0; i < memory.length; i++) {
	memory[i] = "||";	
}

var posit  = 0;
var sOrder = 1;
var all    = 0;

//

export function alloc(size) {
	let length = size;
	all       += size;

	if(all <= 379){
		for (var i = posit; i <= length + posit; i++) {
			if(memory[i] != "||"){
				getNextEmpety();
			}else{
				getNextEmpety();
				if(sOrder < 10){
					memory[i] = '0' + sOrder;
				}else{
					memory[i] = sOrder;
				}
				length--;
			}
		}
	}else{
		all -= size;
		sOrder++;
		return false;
	}
	

	getNextEmpety();
	sOrder++;

	return memory;
}

//

export function dealloc(id) {
	
	var thisOne = 0;

	for (var i = 0; i < memory.length; i++) {
		if(memory[i] == id){
			thisOne++;
		}
	}

	all -= thisOne;

	let first = true;

	for (var i = 0; i < memory.length - 1; i++) {
		if(memory[i] == id){

			if(first){
				posit = i;
				first = false;
			}

			memory[i] = "||";
		}
	}

	return memory;
}

//

export function getNextEmpety() {
	for (var j = 0; j < memory.length; j++) {
		if(memory[j] == "||"){
			posit = j;
			return;
		}
	}
}

//

//Actions

	//Operations
	var open = [50,15,25,18,60,4,19,33,119,17];

export function route() {
	alloc(10);
	alloc(10);
	alloc(10);
	alloc(10);
	alloc(10);
	alloc(29);

	return memory;
}

export function initiate() {
	for (var i = 7; i < open.length + 7; i++) {

		if(i == 11){
			dealloc(9);
			alert('Processo 9 desalocado');
		}else if (i == 15){
			dealloc(11);
			alert('Processo 11 desalocado');
		}

		var result = alloc(open[i - 7]);

		if(!result){
			alert('Processo muito grande para ser alocado, tamanho: '+open[i - 7]+'. Disponível: '+(memory.length - all));
		}else{
			alert('Processo '+i+' foi alocado, tamanho: '+open[i - 7]);
		}
	}

	alloc(25);
	alert('Processo 9 foi realocado como: '+(sOrder - 1));

	return memory;
}

//

//Tests
// alloc(1);
// console.log(memory);
// console.log('-------------------');

// alloc(2);
// console.log(memory);
// console.log('-------------------');

// alloc(1);
// console.log(memory);
// console.log('-------------------');

// dealloc(2);
// console.log(memory);
// console.log('-------------------');

// alloc(4);
// console.log(memory);
// console.log('-------------------');

// alloc(2);
// console.log(memory);
// console.log('-------------------');

// alloc(2);
// console.log(memory);
// console.log('-------------------');

// dealloc(5);
// console.log(memory);
// console.log('-------------------');

// alloc(4);
// console.log(memory);
// console.log('-------------------');

// alloc(2);
// console.log(memory);
// console.log('-------------------');

// alloc(1);
// console.log(memory);
// console.log('-------------------');

// dealloc(8);
// console.log(memory);
// console.log('-------------------');

// alloc(3);
// console.log(memory);
// console.log('-------------------');

// dealloc(4);
// console.log(memory);
// console.log('-------------------');

// alloc(3);
// console.log(memory);
// console.log('-------------------');

// alloc(2);
// console.log(memory);
// console.log('-------------------');