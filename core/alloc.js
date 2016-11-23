//Basic
var memory = new Array(379);
var posit  = 0;
var sOrder = 1;

for (var i = 0; i < memory.length; i++) {
	memory[i] = "-";
}

//

export function alloc(size) {

	var length = size;

	for (var i = posit; i < length + posit; i++) {
		if(memory[i] == "-"){
			memory[i] = sOrder;
		}else{
			getNextEmpety();
			length -= (i - 1);
		}
	}
	
	posit += length;
	sOrder++;
}

//

export function dealloc(id) {
	
	let first = true;

	for (var i = 0; i < memory.length - 1; i++) {
		if(memory[i] == id){

			if(first){
				posit = i;
				first = false;
			}

			memory[i] = "-";
		}
	}
}

//

export function getNextEmpety() {
	for (var j = 0; j < memory.length; j++) {
		if(memory[j] == "-"){
			posit = j;
			return;
		}
	}
}

//
console.log(posit);

alloc(1);
console.log(memory);
console.log('-------------------');
console.log(posit);

alloc(2);
console.log(memory);
console.log('-------------------');
console.log(posit);

alloc(1);
console.log(memory);
console.log('-------------------');
console.log(posit);

dealloc(2);
console.log(memory);
console.log('-------------------');
console.log(posit);

alloc(4);
console.log(memory);
console.log('-------------------');
console.log(posit);

alloc(2);
console.log(memory);
console.log('-------------------');
console.log(posit);

alloc(2);
console.log(memory);
console.log('-------------------');
console.log(posit);

dealloc(5);
console.log(memory);
console.log('-------------------');
console.log(posit);

alloc(4);
console.log(memory);
console.log('-------------------');
console.log(posit);